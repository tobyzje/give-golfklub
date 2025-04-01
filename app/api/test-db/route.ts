import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [rows] = await db.execute('SELECT * FROM users')
    return NextResponse.json({ success: true, users: rows })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
} 