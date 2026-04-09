'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin,
  ChevronRight,
  Terminal
} from 'lucide-react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import AIChat from './components/AIChat'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="relative flex h-screen overflow-hidden bg-terminal-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-terminal-accent/10 blur-3xl" />
        <div className="absolute top-24 right-[-6rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>
      {/* Sidebar */}
      <Sidebar 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-auto lg:ml-0">
        <div className="min-h-full px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 pt-20 lg:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* AI Chat Assistant */}
      <AIChat />
    </div>
  )
} 