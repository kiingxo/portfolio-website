'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, X, MessageCircle } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Soyombo's AI assistant. Ask me anything about his experience, skills, projects, or availability for collaboration!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact Soyombo directly at israelsoyombo@gmail.com",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-terminal-accent text-terminal-bg p-3 sm:p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[70] flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-terminal-surface border border-terminal-border rounded-lg w-full max-w-sm sm:max-w-md h-[80vh] sm:h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="terminal-header rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="terminal-dot bg-terminal-error"></div>
                    <div className="terminal-dot bg-terminal-warning"></div>
                    <div className="terminal-dot bg-terminal-accent"></div>
                    <span className="text-terminal-text text-xs sm:text-sm ml-1 sm:ml-2 truncate">ai-assistant@soyombo:~</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-terminal-secondary hover:text-terminal-accent transition-colors p-1"
                  >
                    <X size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-1 sm:space-x-2 max-w-[85%] sm:max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`p-1.5 sm:p-2 rounded-full flex-shrink-0 ${message.isUser ? 'bg-terminal-accent text-terminal-bg' : 'bg-terminal-bg text-terminal-accent'}`}>
                        {message.isUser ? <User size={10} className="sm:w-3 sm:h-3" /> : <Bot size={10} className="sm:w-3 sm:h-3" />}
                      </div>
                      <div className={`p-2 sm:p-3 rounded-lg ${
                        message.isUser 
                          ? 'bg-terminal-accent text-terminal-bg' 
                          : 'bg-terminal-bg border border-terminal-border text-terminal-text'
                      }`}>
                        <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-1 sm:space-x-2">
                      <div className="p-1.5 sm:p-2 rounded-full bg-terminal-bg text-terminal-accent flex-shrink-0">
                        <Bot size={10} className="sm:w-3 sm:h-3" />
                      </div>
                      <div className="bg-terminal-bg border border-terminal-border p-2 sm:p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-terminal-accent rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-terminal-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-terminal-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-2 sm:p-4 border-t border-terminal-border">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Soyombo..."
                    className="flex-1 bg-terminal-bg border border-terminal-border rounded px-2 sm:px-3 py-1.5 sm:py-2 text-terminal-text text-xs sm:text-sm focus:border-terminal-accent focus:outline-none"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-terminal-accent text-terminal-bg p-1.5 sm:p-2 rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
                <p className="text-xs text-terminal-secondary mt-1 sm:mt-2 text-center sm:text-left">
                  Press Enter to send • Ask about experience, skills, projects, or availability
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 