export async function getUser() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/me`, {
      method: 'GET',
      credentials: 'include',
    })

    if (!res.ok) return null

    const data = await res.json()
    return data.admin
  } catch (err) {
    return null
  }
}
