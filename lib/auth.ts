export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  
  // Tjek om der er en gyldig session cookie
  return document.cookie.includes('session=');
};

export const getUser = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/me', {
      credentials: 'include'
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
};
