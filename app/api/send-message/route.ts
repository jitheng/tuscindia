import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Email to TUSC
    const tuscrMailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B4513; margin-bottom: 20px;">New Message from ${name}</h2>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
      </div>
    `

    // Auto-reply email to sender
    const senderMailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B4513; margin-bottom: 20px;">Thank you for reaching out to TUSC</h2>
        <p style="color: #333; margin-bottom: 15px;">Hi ${name},</p>
        <p style="color: #333; line-height: 1.6; margin-bottom: 15px;">We have received your message and appreciate your interest in TUSC. Our team will review your inquiry and get back to you shortly.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #666; font-size: 14px; margin-bottom: 10px;"><strong>Your message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="color: #333; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #666; font-size: 14px;">Best regards,<br/><strong>TUSC Team</strong></p>
      </div>
    `

    // Send email to TUSC
    const tuscrEmail = await resend.emails.send({
      from: 'noreply@tuscindia.com',
      to: 'hello@tuscindia.com',
      subject: `New Message from ${name}`,
      html: tuscrMailContent,
    })

    if (tuscrEmail.error) {
      console.error('Error sending email to TUSC:', tuscrEmail.error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    // Send auto-reply to sender
    const senderEmail = await resend.emails.send({
      from: 'noreply@tuscindia.com',
      to: email,
      subject: 'We received your message - TUSC',
      html: senderMailContent,
    })

    if (senderEmail.error) {
      console.error('Error sending reply email:', senderEmail.error)
      // Don't fail the request if auto-reply fails, but log it
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
