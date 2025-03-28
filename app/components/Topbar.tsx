'use client'

import React, { useState } from 'react'
import Weahter from './Weahter'
import { buttonVariants } from '@/components/ui/button'
import { FaGolfBallTee } from 'react-icons/fa6'
import GolfboxLoginModal from './GolfboxLoginModal'

function Topbar() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

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
        <div>
            <div className='flex items-center justify-center px-8 py-4 bg-white text-gray-800 shadow-sm'>
                <div className='flex items-center justify-center space-x-8 w-full'>
                    <button 
                        onClick={() => setIsLoginModalOpen(true)}
                        className={buttonVariants({variant: 'ghost', className: 'bg-blue-500 text-white font-bold'})}
                    >
                        <FaGolfBallTee className='mr-2' />
                        Golfbox
                    </button>
                    <div className='flex items-center space-x-4'>
                        <Weahter />
                    </div>
                </div>
            </div>

            <GolfboxLoginModal 
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLogin}
            />
        </div>
    )
}

export default Topbar
