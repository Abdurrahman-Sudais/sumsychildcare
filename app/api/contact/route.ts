import { NextResponse } from 'next/server'

const FORM_ENDPOINT = process.env.FORM_SUBMISSION_ENDPOINT

export async function POST(req: Request) {
  if (!FORM_ENDPOINT) {
    return NextResponse.json(
      { error: 'Form submission endpoint is not configured.' },
      { status: 500 },
    )
  }

  try {
    const formData = await req.json()
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: result.error || 'Failed to send form submission.' },
        { status: response.status },
      )
    }

    return NextResponse.json({ success: true, data: result }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to submit form. Please try again later.' },
      { status: 500 },
    )
  }
}
