'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check om brugeren allerede har taget stilling til cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed bottom-4 left-4 z-50 w-[400px] sm:w-[450px]"
        >
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Cookie className="text-[#B69D74] w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-base font-semibold mb-2">Vi bruger cookies</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. 
                    Disse cookies hjælper os med at huske dine præferencer og forstå hvordan du bruger vores hjemmeside.
                  </p>
                  <Link 
                    href="/cookie-politik"
                    className="text-sm text-[#B69D74] hover:underline"
                  >
                    Læs mere om vores brug af cookies →
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 pb-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReject}
                className="text-sm"
              >
                Afvis alle
              </Button>
              <Button 
                size="sm"
                onClick={handleAccept}
                className="bg-[#B69D74] hover:bg-[#a08a64] text-sm"
              >
                Acceptér alle
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 