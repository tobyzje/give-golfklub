import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret')

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')

    if (!token) {
      return NextResponse.json({ error: 'Ikke autoriseret' }, { status: 401 })
    }

    const verified = await jwtVerify(token.value, JWT_SECRET)
    return NextResponse.json({ user: verified.payload })
  } catch (error) {
    return NextResponse.json({ error: 'Ikke autoriseret' }, { status: 401 })
  }
} 