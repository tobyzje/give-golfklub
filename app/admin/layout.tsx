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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const userData = await getUser()
      if (!userData || (userData.role !== 'ADMIN' && userData.role !== 'MASTER')) {
        router.push('/login')
        return
      }
      setUser(userData)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Indlæser...</div>
  }

  return (
    <div className="min-h-screen">
      {user && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-[#1F4D1F]">Give Golfklub Admin</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {user.first_name} {user.last_name}
                </span>
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
