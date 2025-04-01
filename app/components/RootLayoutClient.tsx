'use client'

import Navbar from "@/app/components/Navbar"
import Topbar from "@/app/components/Topbar"
import { usePathname } from 'next/navigation'

export default function RootLayoutClient({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && (
        <>
          <Topbar />
          <Navbar />
        </>
      )}
      {children}
    </>
  )
} 