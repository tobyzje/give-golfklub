import { db } from '@/lib/db'
import { compare } from 'bcryptjs'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  password: string
  role: string
}

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret')

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    const users = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    ) as User[]

    const user = users[0]
    if (!user) {
      throw new Error('Bruger ikke fundet')
    }

    const isValid = await compare(password, user.password)
    if (!isValid) {
      throw new Error('Forkert password')
    }

    const token = await new SignJWT({ 
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(JWT_SECRET)

    const cookieStore = await cookies()
    cookieStore.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24
    })

    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role
      }
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    )
  }
} 