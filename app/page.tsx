'use client'

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollToTop from '@/app/components/ScrollToTop'
import CookieConsent from '@/app/components/CookieConsent'

// Animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const quickLinkVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

// Dummy data - dette kan senere erstattes med rigtig data fra en database eller CMS
const upcomingEvents = [
  {
    id: 1,
    title: "Klubmesterskab 2024",
    date: "15. Juni 2024",
    type: "Turnering"
  },
  {
    id: 2,
    title: "Åbent Hus",
    date: "1. Maj 2024",
    type: "Event"
  },
  {
    id: 3,
    title: "Begynder Turnering",
    date: "20. April 2024",
    type: "Turnering"
  }
];

export default function Home() {
  return (
    <main>
      <ScrollToTop />
      <CookieConsent />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-golf.jpg"
          alt="Give Golfklub"
          fill
          className="object-cover brightness-75"
          priority
        />
        <motion.div 
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Velkommen til Give Golfklub
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            En af Danmarks smukkeste golfbaner
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="/start-til-golf"
              className="bg-[#B69D74] text-white px-8 py-3 rounded-md hover:bg-[#a08a64] transition-colors"
            >
              Start dit golfeventyr
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { href: "/bane", icon: MapPin, title: "Vores Bane", desc: "Udforsk vores 18-hullers bane" },
            { href: "/tuneringer", icon: Trophy, title: "Turneringer", desc: "Se kommende turneringer" },
            { href: "/medlemskab", icon: Users, title: "Medlemskab", desc: "Bliv en del af klubben" },
            { href: "/booking", icon: Calendar, title: "Book Tid", desc: "Book din næste spilletid" }
          ].map((item) => (
            <motion.div
              key={item.href}
              variants={quickLinkVariant}
              whileHover="hover"
            >
              <Link href={item.href} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <item.icon size={32} className="text-[#B69D74] mb-4" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Kommende Begivenheder
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {upcomingEvents.map(event => (
              <motion.div
                key={event.id}
                variants={quickLinkVariant}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-[#B69D74] font-semibold mb-2">{event.type}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={{
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">En Klub Med Tradition og Udvikling</h2>
              <p className="text-gray-600 mb-4">
                Give Golfklub er mere end bare en golfbane - det er et fællesskab af passionerede golfspillere. 
                Vores klub tilbyder fantastiske faciliteter, professionel træning og et varmt fællesskab.
              </p>
              <p className="text-gray-600 mb-6">
                Med vores smukke 18-hullers bane, moderne træningsfaciliteter og hyggelige klubhus 
                skaber vi de perfekte rammer for både nye og erfarne golfspillere.
              </p>
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/klub"
                  className="inline-flex items-center text-[#B69D74] hover:text-[#a08a64]"
                >
                  Læs mere om klubben
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[400px]"
              variants={{
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/klubhus.jpg"
                alt="Give Golfklub Klubhus"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
