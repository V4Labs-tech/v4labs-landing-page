import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }
      
      console.log(name , process.env.MAIL_USER)

    // Configure transporter for Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger SMTP host
      port: 465, // SSL port
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USER, // your business email
        pass: process.env.MAIL_PASS, // your email password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
