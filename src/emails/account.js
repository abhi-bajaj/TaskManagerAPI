const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'icykiller98@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the App, ${name}. Let me know how you get along with the app!`,
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'icykiller98@gmail.com',
    subject: 'Your account has been deleted!',
    text: `We are very sad to see you go ${name}. Please provide us with feedback regarding how can improve`,
  })
}
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
}
