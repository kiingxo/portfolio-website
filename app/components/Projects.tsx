'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Brain, Heart, Bot, MessageCircle, Tag, Activity } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Enterprise ERP Mobile Platform",
      company: "FPG Technologies",
      description: "Led comprehensive Flutter development for large-scale ERP system with complex business logic and multi-tenant architecture.",
      features: [
        "Implemented advanced features including push notifications, platform channels, runtime theming",
        "Architected modular design patterns ensuring code reusability across multiple client implementations",
        "Offline data synchronization and complex state management"
      ],
      technologies: ["Flutter", "Riverpod", "Dio", "Firebase", "Docker", "GitLab CI/CD"],
      icon: Smartphone,
      color: "text-blue-400"
    },
    {
      title: "AI-Powered Medical Diagnostic System",
      company: "FPG Technologies",
      description: "Developed and deployed AI agents for medical consultation assistance and diagnostic image analysis (X-rays, CT scans, MRIs).",
      features: [
        "Integrated machine learning models for automated diagnostic suggestions",
        "Human-in-the-loop validation workflows for medical accuracy",
        "Built secure API interfaces for medical data processing ensuring HIPAA compliance"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI APIs", "Vector Databases (Pinecone)", "Medical Imaging APIs"],
      icon: Brain,
      color: "text-green-400"
    },
    {
      title: "Multi-Platform Mental Health Application",
      company: "Tranquil Life",
      description: "Architected dual-platform solution serving both therapists and patients with real-time communication capabilities.",
      features: [
        "Implemented WebRTC-based voice/video calling system with session recording",
        "Built comprehensive appointment booking system with calendar integration",
        "Automated reminders and billing management with secure data transmission"
      ],
      technologies: ["Flutter", "Firebase", "WebRTC", "Payment Gateway APIs", "Calendar Sync APIs"],
      icon: Heart,
      color: "text-purple-400"
    }
  ]

  // BlueprintLabs Projects
  const blueprintProjects = [
    {
      title: "Slash",
      description: "A full Flutter AI-powered developer assistant with a chat interface. Understands natural language requests and can answer dev questions or modify code. Lets users preview, accept, or reject pull requests directly from the chat. Uses OpenAI and Gemini AI. Think of it as GitHub Copilot + ChatGPT + Cursor in one, but lighter and open source.",
      features: [
        "AI chat interface for code and dev questions",
        "Code modification and PR preview/accept/reject from chat",
        "Open source, lightweight alternative to Copilot/ChatGPT/Cursor",
        "Built fully in Flutter",
        "Integrates OpenAI and Gemini AI"
      ],
      technologies: ["Flutter", "Dart", "OpenAI API", "Gemini AI", "GitHub API"],
      icon: Bot,
      color: "text-cyan-400"
    },
    {
      title: "Chat AI SDK",
      description: "A frontend-only SDK (built with JavaScript) to embed a customizable AI chat assistant in any app or website. Use via CDN or install on React, Angular, and Vue. No backend required — just plug in your OpenAI or Gemini key and configure behavior/context. Comes with a clean, pre-built UI that works out of the box.",
      features: [
        "Frontend-only, no backend required",
        "Built with JavaScript",
        "Use via CDN or install on React, Angular, Vue",
        "Plug-and-play with OpenAI or Gemini keys",
        "Customizable context and behavior",
        "Pre-built, modern UI"
      ],
      technologies: ["JavaScript", "CDN", "React", "Angular", "Vue", "OpenAI API", "Gemini API"],
      icon: MessageCircle,
      color: "text-pink-400"
    },
    {
      title: "TagPilot",
      description: "A crowdsourced data labeling platform for AI teams in Africa and the EU. Includes dashboards for clients and admins (Next.js/Flutter), and a mobile app for labelers. Uses the Dawid-Skene model to improve label accuracy with noisy workers. Still in development.",
      features: [
        "Crowdsourced data labeling for AI teams",
        "Client/admin dashboards (Next.js/Flutter)",
        "Mobile app for labelers",
        "Dawid-Skene model for label accuracy",
        "Still in development"
      ],
      technologies: ["Next.js", "Flutter", "Python", "Dawid-Skene", "PostgreSQL"],
      icon: Tag,
      color: "text-yellow-400"
    },
    {
      title: "Pulse",
      description: "An AI-powered GitHub digest and code intelligence tool. Automatically summarizes activity across repos every 2 days. Great for staying updated on open source or team projects without checking GitHub constantly.",
      features: [
        "AI-powered GitHub repo digest",
        "Summarizes activity every 2 days",
        "Code intelligence and insights",
        "Stay updated without checking GitHub"
      ],
      technologies: ["TypeScript", "Next.js", "OpenAI API", "GitHub API"],
      icon: Activity,
      color: "text-red-400"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-terminal-error"></div>
          <div className="terminal-dot bg-terminal-warning"></div>
          <div className="terminal-dot bg-terminal-accent"></div>
          <span className="text-terminal-text text-xs sm:text-sm ml-2">soyombo@portfolio:~$ ls projects/</span>
        </div>
        
        <div className="terminal-content p-4 sm:p-6">
          <div className="command-line mb-4 sm:mb-6">
            <span className="text-terminal-accent">$</span> ./showcase_projects.sh
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="project-card group"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Icon className={`${project.color} w-5 h-5 sm:w-6 sm:h-6`} />
                      <h3 className="text-lg sm:text-xl font-semibold text-terminal-accent">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                      <button className="p-1 text-terminal-secondary hover:text-terminal-accent transition-colors">
                        <Github size={14} className="sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1 text-terminal-secondary hover:text-terminal-accent transition-colors">
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <p className="text-terminal-secondary text-xs sm:text-sm mb-2">
                      <span className="text-terminal-accent">Company:</span> {project.company}
                    </p>
                    <p className="text-terminal-text text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="command-line mb-2 sm:mb-3">
                      <span className="text-terminal-accent">$</span> cat features_{index + 1}.txt
                    </div>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-terminal-text text-xs sm:text-sm flex items-start">
                          <span className="text-terminal-accent mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="command-line mb-2 sm:mb-3">
                      <span className="text-terminal-accent">$</span> ls tech_stack_{index + 1}/
                    </div>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          {/* BlueprintLabs Projects Section */}
          <div className="mt-10">
            <div className="command-line mb-4 sm:mb-6">
              <span className="text-terminal-accent">$</span> ./what_im_building_now.sh
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-terminal-accent mb-6">BlueprintLabs Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {blueprintProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="project-card group"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Icon className={`${project.color} w-5 h-5 sm:w-6 sm:h-6`} />
                        <h3 className="text-lg sm:text-xl font-semibold text-terminal-accent">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <p className="text-terminal-text text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="mb-3 sm:mb-4">
                      <div className="command-line mb-2 sm:mb-3">
                        <span className="text-terminal-accent">$</span> cat features_{index + 1}_blueprint.txt
                      </div>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-terminal-text text-xs sm:text-sm flex items-start">
                            <span className="text-terminal-accent mr-2 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="command-line mb-2 sm:mb-3">
                        <span className="text-terminal-accent">$</span> ls tech_stack_{index + 1}_blueprint/
                      </div>
                      <div className="flex flex-wrap">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-8 p-3 sm:p-4 bg-terminal-bg border border-terminal-border rounded"
          >
            <div className="command-line mb-3">
              <span className="text-terminal-accent">$</span> ./project_stats.sh
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">3</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Major Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">10K+</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Users Impacted</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">99.9%</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">40%</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Performance Gain</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 