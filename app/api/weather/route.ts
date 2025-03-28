import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://vejr.eu/api.php?location=Give&degree=C', {
      headers: {
        'Accept': 'application/json',
      },
    })
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Fejl ved hentning af vejrdata:', error)
    return NextResponse.json(
      { error: 'Kunne ikke hente vejrdata' },
      { status: 500 }
    )
  }
} 