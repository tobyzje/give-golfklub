'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUser } from '@/lib/auth'

interface User {
  first_name: string
  last_name: string
  role: string
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const userData = await getUser()
      if (!userData || userData.role !== 'ADMIN') {
        router.push('/admin/login')
        return
      }
      setUser(userData)
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen">
      {user && ( // Vis kun header hvis bruger er logget ind
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold">Give Golfklub Admin</h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {user.first_name} {user.last_name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Log ud
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
} 