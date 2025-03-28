'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { FaGolfBall } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="relative"
        >
          <div className="text-9xl font-bold text-gray-200">404</div>
          <motion.div
            animate={{
              x: [0, 100, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <FaGolfBall size={48} className="text-[#B69D74]" />
          </motion.div>
        </motion.div>

        <h2 className="mt-8 text-2xl font-bold text-gray-800">
          Ups! Bolden røg ud af banen
        </h2>
        
        <p className="mt-4 text-gray-600">
          Siden du leder efter findes desværre ikke. Den kan være flyttet eller slettet.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 px-6 py-2 bg-[#B69D74] text-white rounded-md hover:bg-[#a08a64] transition-colors"
          >
            <Home size={20} />
            Gå til forsiden
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Gå tilbage
          </button>
        </div>
      </div>
    </div>
  )
} 