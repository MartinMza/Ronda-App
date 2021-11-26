const passport = require("passport");
const { User } = require("../models");

const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// Guarda el usuario para la sesion
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Busca el usuario guardado
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});


passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOne({
        where: {
          googleId: profile.id,
        }
      })
      .then(user => {
        if (user) {
          return done(null, user);
        }
        else{
          User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
          })
          .then(user => done(null, user))
          .catch(err => done(err));
        }
      })
    }
  )
);


passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            done(null, user);
          });
        })
        .catch(done);
    }
  )
);