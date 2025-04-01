import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const res = await fetch('http://localhost:5000/api/me', {
        credentials: 'include',
      });

      if (!res.ok) {
        router.push('/login');
      } else {
        const data = await res.json();
        if (!data.isAdmin) router.push('/login');
        else setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <h1>Welcome Admin 👑</h1>;
};

export default AdminPage;
