// API route handler created to handle email contact using nodemailer

import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json(); // request the data

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: 'Your Email',
      pass: 'Your App Password from Google', // e.g ddsd skfk dman rrrr
    },
  });

  const mailOptions: Mail.Options = {
    from: 'Your Email',
    to: 'Your Email',
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Contact from ${email}`,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Message Sent Successfully');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Message Sent Successfully' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}