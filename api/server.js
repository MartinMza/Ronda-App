const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const db = require('./config/db');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cors = require('cors');
const {User} = require('./models');
const router = require('./routes/index');

require("./config/passport");

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({
    secret: 'ronda',
    resave: false,
    saveUninitialized: false
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router)

app.get("/", (req, res) => {
    res.send("its working");
});

db.sync({force: false})
.then(() => 
    app.listen(process.env.PORT, () => {
        console.log(`server on ${process.env.PORT}`);
    }
))