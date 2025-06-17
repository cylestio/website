import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  email: string;
  'h-captcha-response': string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();
    const { email, 'h-captcha-response': verificationToken } = formData;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Simple verification check (honeypot verified)
    if (!verificationToken || verificationToken !== 'honeypot-verified') {
      return NextResponse.json(
        { error: 'Verification failed' },
        { status: 400 }
      );
    }

    // Send email using Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: 'Early Access <noreply@registration.cylestio.com>',
      to: ['info@cylestio.com'],
      subject: 'New Early Access Request',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Early Access Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin: 0;">
            This request was submitted through the Cylestio website early access form and has been verified against bots.
          </p>
        </div>
      `,
      text: `
New Early Access Request

Email: ${email}

This request was submitted through the Cylestio website early access form and has been verified against bots.
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 