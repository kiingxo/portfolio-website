'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Section {
  id: string
  label: string
  icon: any
}

interface SidebarProps {
  sections: Section[]
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const handleSectionChange = (section: string) => {
    onSectionChange(section)
    // Close mobile menu immediately when a section is selected
    setIsMobileMenuOpen(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-terminal-surface border border-terminal-border rounded p-2 text-terminal-text hover:text-terminal-accent transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[50]"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed lg:relative w-64 bg-terminal-surface border-r border-terminal-border p-4 h-full z-[55] ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Terminal Header */}
        <div className="terminal-header mb-6">
          <div className="terminal-dot bg-terminal-error"></div>
          <div className="terminal-dot bg-terminal-warning"></div>
          <div className="terminal-dot bg-terminal-accent"></div>
          <span className="text-terminal-text text-xs sm:text-sm ml-2">portfolio@soyombo:~</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <motion.button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`sidebar-link w-full flex items-center justify-between ${
                  activeSection === section.id ? 'active' : ''
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={16} />
                  <span className="text-sm">{section.label}</span>
                </div>
                {activeSection === section.id && (
                  <ChevronRight size={16} />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* Status Bar */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-terminal-secondary text-xs">
            <div className="flex justify-between">
              <span>Status: Online</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
} 