import nodemailer from 'nodemailer'

const email = process.env.MAILADDRESS
const emailPass = process.env.MAILPASS

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  auth: {
    user: email,
    pass: emailPass,
  },
})

const mailer = ({ senderMail, nome, text }) => {
  const message = {
    from: `${email}`,
    to: `${email}`,
    subject: `Message from ${nome}`,
    html: `<p>From: ${senderMail}</p>
    <p>A new client want to contact you: </br>
    Message: ${text}</p>`,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      err ? reject(err) : resolve(info)
    })
  })
}

export default async (req, res) => {
  const { senderMail, nome, content } = req.body

  if (senderMail === '' || nome === '' || content === '' || email === '') {
    res.status(400).json({ message: 'All fields are required' })
    return
  }

  const mailerRes = await mailer({ senderMail, nome, text: content })
  res.send(mailerRes)
}
