export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';

export default async function DashboardPage() {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/me`, {
    credentials: 'include',
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return <p>Adgang nægtet. Du er ikke logget ind.</p>;
  }

  const { admin } = await res.json();

  return <p>Velkommen {admin.first_name}!</p>;
}
