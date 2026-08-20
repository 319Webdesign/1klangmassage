import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  ALTCHA_ERROR_MESSAGE,
  ALTCHA_FIELD_NAME,
  verifyAltchaPayload,
} from '@/lib/altcha'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = (formData.get('name') as string) || ''
    const email = (formData.get('email') as string) || ''
    const message = (formData.get('message') as string) || ''
    const altchaPayload = formData.get(ALTCHA_FIELD_NAME)

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Felder aus.' },
        { status: 400 }
      )
    }

    const altchaResult = await verifyAltchaPayload(altchaPayload)
    if (!altchaResult.ok) {
      return NextResponse.json(
        { error: ALTCHA_ERROR_MESSAGE },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'ha01s013.org-dns.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        servername: 'ha01s013.org-dns.com',
        rejectUnauthorized: false,
        ciphers: 'SSLv3',
      },
    })

    await transporter.verify()

    const mailOptions = {
      from: '"1klang massage" <stefan@1klang-massage.de>',
      to: 'stefan@1klang-massage.de',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name} - 1klang massage`,
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
    const message = error instanceof Error ? error.message : String(error)
    console.error('E-Mail-Fehler detailliert:', message)
    return NextResponse.json(
      { error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.', details: message },
      { status: 500 }
    )
  }
}
