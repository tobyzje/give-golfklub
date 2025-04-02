export async function POST(req: Request) {
    const body = await req.json()
  
    const res = await fetch(`${process.env.BACKEND_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    })
  
    const data = await res.json()
  
    if (!res.ok) {
      return new Response(JSON.stringify(data), { status: res.status })
    }
  
    // Send session-cookie videre
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Set-Cookie': res.headers.get('set-cookie') || '',
      },
    })
  }
  