import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // SMTPS port (SSL/TLS on connect)
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

export async function POST(request: Request) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: "Missing SMTP config" }, { status: 500 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = payload;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Inquiry" <${process.env.SMTP_USER}>`,
      to: "rohitthakurrt365@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    });
  } catch (err) {
    console.error("❌ Admin notification failed:", err);
    return NextResponse.json(
      { error: "Could not notify admin." },
      { status: 500 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"Rohit" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for contacting me. I will soon respond!",
      text: `Hi ${name},\n\nThank you for reaching out. We’ll be in touch soon!\n— Rohit`,
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out. We’ll be in touch soon!</p>
             <p>— <strong>Rohit</strong></p>`,
      replyTo: process.env.SMTP_USER,
    });
  } catch (err) {
    console.error("❌ Auto-response failed:", err);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
