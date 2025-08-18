import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log(name);
    const data = await resend.emails.send({
      from: "User <services@v4labs.tech>", // must match verified domain in Resend
      to: ['services@v4labs.tech'], // where you want to receive form submissions
      subject: "New Contact Form Message",
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
