const { User, Organization } = require("../models");
const sendEmail = require("../config/nodemailer");
const jwt = require("jsonwebtoken");
const { localhost } = require("../../localHostIP.json");
const otp = require("otp-generator");

class Auth {
  static async login(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res) {
    try {
      if (req.body.role === "admin") {
        //you cant create an admin account
        return res.status(403).send({
          status: 403,
          error: "You are not allowed to create an admin account",
        });
      }
      if (req.body.role === "superAdmin") {
        const foundSuperAdmin = await User.findOne({
          where: { role: "superAdmin" },
        });
        if (foundSuperAdmin) {
          return res.status(403).send({
            status: 403,
            error: "Only one super admin account is allowed",
          });
        }
      }

      const found = await User.findOne({
        where: { email: req.body.email },
      });
      found && res.status(409).send("Email already exists");

      //---------------------Email verification-------------------
      const otpGenerator = otp.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        digits: true,
        lowerCaseAlphabets: false,
      });
      const email = req.body.email;
      const subject = "Correo de verificación";

      const html = `
        <div style="background-image: linear-gradient(45deg, #EB76FF, #8144CF, #44CFC7);
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        color: white;
        ">
  <h1>Utilice este código para verificar su correo electrónico en la app de Ronda:</h1><br>
  <h3>COPIA ESTE CÓDIGO</h3>
  <div>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    color: black;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; ">${otpGenerator[0]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    color: black;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; ">${otpGenerator[1]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    color: black;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; ">${otpGenerator[2]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    color: black;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; ">${otpGenerator[3]}</span>
    
</div>`;

      await sendEmail(email, subject, html);

      //----------------------------------------------------------
      req.body.otp = otpGenerator;
      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
    }
  }

  static async resendEmail(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.params.email },
      });
      if (user) {
        const otpGenerator = otp.generate(4, {
          upperCaseAlphabets: false,
          specialChars: false,
          digits: true,
          lowerCaseAlphabets: false,
        });
        const email = req.body.email;
        const subject = "Correo de verificación";
        //put all into a gray div and put the code in a h2
        const html = `
        <div style="background-image: linear-gradient(45deg, #EB76FF, #8144CF, #44CFC7);
        padding: 40px;
        border-radius: 10px;
        text-align: center;">
        <h1>Utilice este código para verificar su correo electrónico en la app de Ronda:</h1><br>
        <h3>COPIA ESTE CÓDIGO</h3>>
  <div>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; ">${otpGenerator[0]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; " >${otpGenerator[1]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; " >${otpGenerator[2]}</span>
    <span style="font: italic small-caps bold 25px/30px Georgia, serif;
    background-color: white;
    margin: 5px;
    padding: 6px;
    border-radius: 5px; " >${otpGenerator[3]}</span>
  </div>
</div>`;

        await sendEmail(email, subject, html);

        await User.update(
          { otp: otpGenerator },
          {
            where: { email: req.params.email },
          }
        );
        return res.send("Email sent");
      }
      res.send("Email not found");
    } catch (error) {
      console.log(error);
    }
  }

  static async verify(req, res) {
    try {
      const user = await User.findOne({
        where: { otp: req.params.otp },
      });
      if (user) {
        await User.update(
          {
            otp: null,
            confirmed: true,
          },
          {
            where: { otp: req.params.otp },
          }
        );
        return res.send("Email verified");
      }
      res.send("Email not found");
    } catch (error) {
      console.log(error);
    }
  }
  static async logout(req, res) {
    try {
      req.logout();
      res.send("done");
    } catch (error) {
      console.log(error);
    }
  }
  static async me(req, res) {
    req.user ? res.send(req.user) : res.sendStatus(401);
  }
}
module.exports = Auth;
