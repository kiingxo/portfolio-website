'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Globe, Bot, MessageCircle } from 'lucide-react'

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
        
        <div className="terminal-content p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="surface-panel p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-terminal-secondary">
                  <span className="rounded-full border border-terminal-accent/30 bg-terminal-accent/10 px-3 py-1 text-terminal-accent">Software Engineer</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Manchester, United Kingdom</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">MSc in AI in progress</span>
                  <span className="rounded-full border border-white/10 px-3 py-1">Flutter, Go, distributed systems</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-terminal-text tracking-tight leading-none">
                    SOYOMBO ISRAEL OLUWASEUN
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-terminal-secondary">
                    I build from Flutter up through Go services, distributed systems, and agentic AI workflows. I'm also doing an MSc in Artificial Intelligence, so the work stays practical, technical, and sharp.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-terminal-secondary">
                  <div className="contact-item">
                    <Mail size={14} className="sm:w-4 sm:h-4" />
                    <span className="break-all">israelsoyombo@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={14} className="sm:w-4 sm:h-4" />
                    <span>+447827822553</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={14} className="sm:w-4 sm:h-4" />
                    <span>Manchester, United Kingdom</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="contact-item">
                      <Globe size={14} className="sm:w-4 sm:h-4" />
                      <span>Portfolio</span>
                    </a>
                    <a href="#" className="contact-item">
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
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
            <div className="surface-panel p-4 sm:p-5">
              <p className="text-terminal-text leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Software Engineer with 4+ years of experience building scalable enterprise systems, production AI, and Flutter products.
              </p>
              <p className="text-terminal-text leading-relaxed text-sm sm:text-base">
                Strong in Flutter, Go, distributed backend services, multi-tenant architectures, real-time systems, and agentic workflows.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="surface-panel p-4 sm:p-5">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">Enterprise Architecture</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Designed multi-tenant backend systems supporting concurrent enterprise deployments.
                </p>
              </div>
              <div className="surface-panel p-4 sm:p-5">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">AI Delivery</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Shipped production AI services and agentic workflows for internal automation and decision support.
                </p>
              </div>
              <div className="surface-panel p-4 sm:p-5">
                <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">System Reliability</h3>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Maintained 99.9% uptime and handled on-call incident response for production services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* BlueprintLabs Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-8"
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> ls blueprintlabs/
            </div>
            <div className="surface-panel p-4 sm:p-5 mb-4">
              <h3 className="text-terminal-accent font-semibold mb-2 text-sm sm:text-base">
                BlueprintLabs - Applied LLM Systems
              </h3>
              <p className="text-terminal-text text-xs sm:text-sm">
                Founder-led applied AI engineering lab focused on production-ready LLM systems and developer tooling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="surface-panel p-4 sm:p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <Bot className="text-cyan-400 w-4 h-4" />
                  <h4 className="text-terminal-accent font-semibold text-xs sm:text-sm">Slash</h4>
                </div>
                <p className="text-terminal-text text-xs sm:text-sm">
                  Mobile-first GitHub AI agent for repository insights and developer support.
                </p>
              </div>

              <div className="surface-panel p-4 sm:p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="text-pink-400 w-4 h-4" />
                  <h4 className="text-terminal-accent font-semibold text-xs sm:text-sm">Pulse</h4>
                </div>
                <p className="text-terminal-text text-xs sm:text-sm">
                  AI-driven GitHub activity digest system that summarizes repo changes and trends.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 