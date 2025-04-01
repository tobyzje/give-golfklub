'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/lib/auth';

const AdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getUser();
      if (!user || user.role !== 'ADMIN') {
        router.push('/admin/login');
        return;
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <h1>Welcome Admin 👑</h1>;
};

export default AdminPage;
