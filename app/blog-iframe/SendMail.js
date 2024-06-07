'use server';

const postData = ({
  name, email, phone, address, msg,
}) => ({
  sender: {
    name: 'Roldrive blog',
    email: 'subhasish.nextcraft@gmail.com',
  },
  to: [
    {
      email: 'booking@roldrive.com',
      name: 'Lead from blog',
    },
  ],
  subject: 'Lead submitted from blog form',
  htmlContent: `<html><body style="font-size:1rem"><p style="margin:0">Customer submitted the following details from the blog site form!</p>
    <p style="margin:0">Name: ${name}</p>
    <p style="margin:0">Email: ${email}</p>
    <p style="margin:0">phone: ${phone}</p>
    <p style="margin:0">Address: ${address}</p>
    <p style="margin:0">Message: ${msg}</p>
    <p style'="color:#fff">${Date.now()}</'></body></html>`,
});

async function sendEmail({
  name, email, phone, address, msg,
}) {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        postData({
          name,
          email,
          phone,
          address,
          msg,
        }),
      ),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default sendEmail;
