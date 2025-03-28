'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, LogIn, User, Lock } from 'lucide-react'

interface GolfboxLoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (username: string, password: string) => void
}

export default function GolfboxLoginModal({ isOpen, onClose, onLogin }: GolfboxLoginModalProps) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-xs bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl z-60 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Golfbox Login</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="member-id" className="block text-sm font-medium text-gray-700">
                    Medlems Nummer
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      id="member-id"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B69D74] focus:border-transparent"
                      placeholder="Indtast dit medlemsnummer (f.eks. 45-1720)"
                      pattern="\d+-\d+"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Adgangskode
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B69D74] focus:border-transparent"
                      placeholder="Indtast din adgangskode"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#B69D74] text-white py-2 px-4 rounded-md hover:bg-[#a08a64] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B69D74] focus:ring-offset-2"
                >
                  <LogIn size={18} />
                  Log ind
                </button>
              </form>

              <div className="mt-4 text-center">
                <a
                  href="https://www.golfbox.dk/portal/golf/requestpassword.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#B69D74] hover:text-[#a08a64]"
                >
                  Glemt adgangskode?
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 