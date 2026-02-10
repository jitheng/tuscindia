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

    // Use configurable from address - falls back to Resend's onboarding address
    // for unverified domains. Set RESEND_FROM_EMAIL in .env.local once the domain
    // tuscindia.com is verified in the Resend dashboard.
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const toEmail = process.env.RESEND_TO_EMAIL || 'hello@tuscindia.com'

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
    const { data: tuscrEmailData, error: tuscrEmailError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `New Message from ${name}`,
      html: tuscrMailContent,
    })

    if (tuscrEmailError) {
      console.error('Error sending email to TUSC:', tuscrEmailError)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email us directly at hello@tuscindia.com.' },
        { status: 500 }
      )
    }

    console.log('Email sent to TUSC, id:', tuscrEmailData?.id)

    // Send auto-reply to sender (only when using a verified domain, not onboarding@resend.dev)
    if (fromEmail !== 'onboarding@resend.dev') {
      const { error: senderEmailError } = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'We received your message - TUSC',
        html: senderMailContent,
      })

      if (senderEmailError) {
        // Don't fail the request if auto-reply fails, but log the error
        console.error('Error sending auto-reply to sender:', senderEmailError)
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error in send-message route:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
