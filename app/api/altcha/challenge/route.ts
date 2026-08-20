import { NextResponse } from 'next/server'
import { createAltchaChallengeResponse } from '@/lib/altcha'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(request: Request) {
  try {
    return await createAltchaChallengeResponse(request)
  } catch (error) {
    console.error('ALTCHA-Challenge konnte nicht erzeugt werden:', error)
    return NextResponse.json(
      { error: 'Sicherheitsprüfung konnte nicht geladen werden.' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    )
  }
}
