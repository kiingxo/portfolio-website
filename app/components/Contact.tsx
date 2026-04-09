'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Globe } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "israelsoyombo@gmail.com",
      link: "mailto:israelsoyombo@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+447827822553",
      link: "tel:+447827822553",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Manchester, United Kingdom",
      link: "#",
      color: "text-red-400"
    }
  ]

  const socialLinks = [
    {
      icon: Globe,
      label: "Portfolio",
      url: "#",
      color: "text-cyan-400"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "#",
      color: "text-gray-400"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6"
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-terminal-error"></div>
          <div className="terminal-dot bg-terminal-warning"></div>
          <div className="terminal-dot bg-terminal-accent"></div>
          <span className="text-terminal-text text-xs sm:text-sm ml-2">soyombo@portfolio:~$ ./contact.sh</span>
        </div>
        
        <div className="terminal-content p-4 sm:p-6">
          <div className="command-line mb-4 sm:mb-6">
            <span className="text-terminal-accent">$</span> cat contact_info.txt
          </div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.link}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="surface-panel p-4 sm:p-6 hover:border-terminal-accent/40 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                      <Icon className={`${contact.color} w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform`} />
                      <h3 className="text-terminal-accent font-semibold text-sm sm:text-base">
                        {contact.label}
                      </h3>
                    </div>
                    <p className="text-terminal-text text-xs sm:text-sm break-all">
                      {contact.value}
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> ls social_links/
            </div>
            <div className="surface-panel p-4 sm:p-6">
              <h3 className="text-terminal-accent font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Connect with me
              </h3>
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`${social.color} hover:text-terminal-accent transition-colors duration-200 group`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-terminal-text group-hover:text-terminal-accent text-sm">
                          {social.label}
                        </span>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Availability Status */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 surface-panel p-4 sm:p-5"
          >
            <div className="command-line mb-2 sm:mb-3">
              <span className="text-terminal-accent">$</span> ./availability_status.sh
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-terminal-accent rounded-full animate-pulse"></div>
                <span className="text-terminal-text text-xs sm:text-sm">Status: Open to roles, consulting, and collaborations</span>
              </div>
              <span className="text-terminal-secondary text-xs sm:text-sm">
                Response time: Usually within 24 hours
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 