const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            html: html,
        });

        console.log('email sent sucessfully');
    } catch (error) {
        console.log('email not sent', error);
    }
};

module.exports = sendEmail;