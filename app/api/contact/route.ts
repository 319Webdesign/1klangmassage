import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = (formData.get('name') as string) || ''
    const email = (formData.get('email') as string) || ''
    const message = (formData.get('message') as string) || ''

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Felder aus.' },
        { status: 400 }
      )
    }

    const mailOptions = {
      from: `"1klang massage Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <h3>Nachricht:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('E-Mail-Fehler:', error)
    return NextResponse.json(
      { error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
