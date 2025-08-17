const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMailToUser = (req, res, next) => {

  const { target, mail } = req.body

  const mailAdress = (target === "admin") ? process.env.USER : mail

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOption = {
    from: `"Hasan" ${process.env.USER} `,
    to: mailAdress, // Birden fazla alıcı virgülle ayrılabilir
    subject: 'New Request!',
    text: `New Request `,
  }

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "error occured"
      })
    }
    if (target === "admin") {
      return res.status(200).json({
        success: true,
        message: "Request saved and mail sent"
      })
    }else{
      next();
    }

  });
}

module.exports = { sendMailToUser }