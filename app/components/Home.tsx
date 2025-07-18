'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Terminal Window */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-terminal-error"></div>
          <div className="terminal-dot bg-terminal-warning"></div>
          <div className="terminal-dot bg-terminal-accent"></div>
          <span className="text-terminal-text text-xs sm:text-sm ml-2">soyombo@portfolio:~$ whoami</span>
        </div>
        
        <div className="terminal-content p-4 sm:p-6">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-terminal-accent mb-2 leading-tight">
              SOYOMBO ISRAEL OLUWASEUN
            </h1>
            <h2 className="text-lg sm:text-xl text-terminal-text mb-4">
              Software Engineer
            </h2>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-terminal-secondary text-xs sm:text-sm">
              <div className="contact-item">
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="break-all">israelsoyombo@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span>+234 811 784 9256</span>
              </div>
              <div className="contact-item">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <a href="https://github.com/kiingxo" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Github size={14} className="sm:w-4 sm:h-4" />
                  <span>GitHub</span>
                </a>
                <a href="https://twitter.com/kiingxo" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Twitter size={14} className="sm:w-4 sm:h-4" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> cat professional_summary.txt
            </div>
            <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
              <p className="text-terminal-text leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Accomplished Software Engineer with 4+ years of experience specializing in Flutter development, 
                AI integration, and scalable system architecture. Proven track record of leading mobile development 
                teams, implementing CI/CD pipelines, and deploying ML solutions that impact thousands of users.
              </p>
              <p className="text-terminal-text leading-relaxed text-sm sm:text-base">
                Expert in building cross-platform applications for fintech, healthcare, and enterprise sectors 
                with focus on performance optimization and maintainable code architecture.
              </p>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> ls achievements/
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">Production Scale Impact</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Deployed AI solutions affecting 10,000+ medical cases with diagnostic accuracy improvements
                </p>
              </div>
              <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">Performance Optimization</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Achieved 40% reduction in deployment times through CI/CD pipeline improvements
                </p>
              </div>
              <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">System Reliability</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Maintained 99.9% uptime across production systems serving enterprise clients
                </p>
              </div>
              <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">Team Leadership</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Successfully mentored junior developers and led cross-functional teams
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 