'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react'

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
      value: "+234 811 784 9256",
      link: "tel:+2348117849256",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      link: "#",
      color: "text-red-400"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "#",
      color: "text-blue-500"
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
                    className="bg-terminal-bg p-4 sm:p-6 rounded border border-terminal-border hover:border-terminal-accent transition-colors duration-200 group"
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
            <div className="bg-terminal-bg p-4 sm:p-6 rounded border border-terminal-border">
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
          
          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> nano contact_form.txt
            </div>
            <div className="bg-terminal-bg p-4 sm:p-6 rounded border border-terminal-border">
              <h3 className="text-terminal-accent font-semibold mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send a Message
              </h3>
              
              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-terminal-text text-xs sm:text-sm mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-terminal-surface border border-terminal-border rounded px-2 sm:px-3 py-2 text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-terminal-text text-xs sm:text-sm mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-terminal-surface border border-terminal-border rounded px-2 sm:px-3 py-2 text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-terminal-text text-xs sm:text-sm mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-terminal-surface border border-terminal-border rounded px-2 sm:px-3 py-2 text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors text-sm"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-terminal-text text-xs sm:text-sm mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-terminal-surface border border-terminal-border rounded px-2 sm:px-3 py-2 text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-terminal-accent text-terminal-bg px-4 sm:px-6 py-2 rounded font-semibold hover:bg-opacity-80 transition-colors duration-200 flex items-center space-x-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={14} className="sm:w-4 sm:h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Availability Status */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-8 p-3 sm:p-4 bg-terminal-bg border border-terminal-border rounded"
          >
            <div className="command-line mb-2 sm:mb-3">
              <span className="text-terminal-accent">$</span> ./availability_status.sh
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-terminal-accent rounded-full animate-pulse"></div>
                <span className="text-terminal-text text-xs sm:text-sm">Status: Available for new opportunities</span>
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