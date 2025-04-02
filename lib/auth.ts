export async function getUser() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/me`, {
      method: 'GET',
      credentials: 'include', // vigtigt for at sende cookies
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.admin;
  } catch (err) {
    console.error('Fejl i getUser:', err);
    return null;
  }
}
