const passport = require("passport");
const { User } = require("../models");

const localStrategy = require("passport-local").Strategy;

// Guarda el usuario para la sesion
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Busca el usuario guardado
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});


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