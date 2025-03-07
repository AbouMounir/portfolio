// pages/api/send-email.js
import nodemailer from 'nodemailer';

export async function POST(request)  {
  console.log('post method');
  
  
  const body = await request.json();
  const { lastName, firstName, tel, mail, subject, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service (e.g., Gmail, SendGrid, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS, // Use environment variable for password
      },
    });

    // Mail options
    const mailOptions = {
      from: mail, // Sender's email
      to: 'harounaibncoulibaly@gmail.com', // Recipient's email
      subject: subject,
      text: `Name: ${firstName} ${lastName}\nEmail: ${mail}\nTel: ${tel}\nSubject: ${subject}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
    }
}
