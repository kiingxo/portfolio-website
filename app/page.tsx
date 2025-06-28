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
    <div className="flex h-screen bg-terminal-bg overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto lg:ml-0 relative">
        <div className="p-4 sm:p-6 pt-20 lg:pt-6 min-h-full">
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