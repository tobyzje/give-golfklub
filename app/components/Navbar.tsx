'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { FaBars } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home,
  Users,
  Flag,
  Building2,
  ShoppingBag,
  Coffee,
  Handshake,
  X,
  Trophy,
  LandPlot,
  User
} from 'lucide-react'
import GolfboxLoginModal from './GolfboxLoginModal'
import { buttonVariants } from '@/components/ui/button'
import { FaGolfBallTee } from 'react-icons/fa6'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'FORSIDE', icon: Home },
    { href: '/gaester', label: 'GÆSTER', icon: Users },
    { href: '/bane', label: 'VORES BANE', icon: Flag },
    { href: '/klub', label: 'VORES KLUB', icon: Building2 },
    { href: '/start-til-golf', label: 'START TIL GOLF', icon: LandPlot },
    { href: '/tuneringer', label: 'TUNERINGER', icon: Trophy },
    { href: '/shop', label: 'SHOP', icon: ShoppingBag },
    { href: '/cafe', label: 'CAFÉ', icon: Coffee },
    { href: '/sponsor', label: 'VORES SPONSORER', icon: Handshake },
  ]

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      // Her implementerer vi login logikken
      console.log('Login attempt:', { username, password })
      // Hvis login er successfuldt:
      setIsLoginModalOpen(false)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <>
      <nav className='flex justify-between items-center sticky top-0 z-50 px-8 py-4 bg-white text-gray-800 shadow-sm'>
        <div className='flex items-center space-x-12'>
          <Link href='/' className='flex items-center space-x-2 hover:scale-115 transition-all duration-300'>
            <Image src={Logo.src} alt='logo' width={75} height={75} className='object-contain' />
          </Link>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className='text-sm font-medium hover:bg-gray-100 p-2 rounded-md hover:text-[#B69D74] flex items-center gap-2'
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </div>

        <div className='hidden md:flex items-center space-x-6'>
        <Link href='/medlem' className={buttonVariants({variant: 'ghost', className: 'bg-[#B69D74] cursor-pointer text-white' })}>
            <User size={18} />
            TIL MEDLEMMER
        </Link>
        </div>

        <div className='md:hidden flex items-center'>
          <Link href='/medlem' className={buttonVariants({variant: 'ghost', className: 'mr-4 bg-[#B69D74] cursor-pointer text-white' })}>
            <FaGolfBallTee size={18} />
            BOOK TID
          </Link>
          <button onClick={toggleSidebar} className='text-gray-800'>
            <FaBars size={24} />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='fixed inset-0 backdrop-blur-sm bg-opacity-50 z-50'
                onClick={toggleSidebar}
              />
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className='fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-50'
              >
                <div className='flex flex-col p-6'>
                  <div className='flex items-center justify-between mb-8'>
                    <Link href='/' className='flex items-center'>
                      <Image src={Logo.src} alt='logo' width={50} height={50} className='object-contain' />
                    </Link>
                    <button onClick={toggleSidebar} className='text-gray-600 hover:text-gray-800'>
                      <X size={24} />
                    </button>
                  </div>

                  <div className='space-y-4'>
                    {menuItems.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href} 
                        className='text-sm font-medium hover:text-[#B69D74] py-2 border-b border-gray-100 flex items-center gap-3'
                      >
                        <item.icon size={18} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                    <Link href='/medlem' className={buttonVariants({variant: 'ghost', className: 'bg-[#B69D74] cursor-pointer text-white mt-4 w-full' })}>
                        <User size={18} />
                        TIL MEDLEMMER
                    </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <GolfboxLoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  )
}

export default Navbar