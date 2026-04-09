'use client'

import { motion } from 'framer-motion'
import { Server, Brain, Bot, Activity } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Multi-Tenant ERP Platform",
      company: "FPG Technologies",
      description: "Engineered modular backend services integrated with Flutter-based clients across multiple deployments.",
      features: [
        "Designed reusable architectural patterns to support scalability and future expansion",
        "Built backend services for concurrent enterprise deployments",
        "Coordinated Flutter client integration across multiple implementations"
      ],
      technologies: ["Flutter", "FastAPI", "PostgreSQL", "Docker", "GitLab CI/CD"],
      icon: Server,
      color: "text-blue-400"
    },
    {
      title: "Agentic AI & Workflow Systems",
      company: "FPG Technologies",
      description: "Developed AI agents for internal automation, retrieval, and workflow orchestration.",
      features: [
        "Built secure APIs for structured automation and tool orchestration",
        "Integrated AI agents for retrieval, task routing, and workflow support",
        "Supported internal product and operations workflows"
      ],
      technologies: ["Python", "FastAPI", "LangChain", "Hugging Face", "OpenAI APIs"],
      icon: Brain,
      color: "text-green-400"
    },
    {
      title: "BlueprintLabs - Slash",
      company: "BlueprintLabs",
      description: "Mobile-first GitHub AI agent for repository insights and developer support.",
      features: [
        "Built as a Flutter-based mobile-first product",
        "Focuses on repository intelligence and developer assistance",
        "Designed for production use with AI workflows"
      ],
      technologies: ["Flutter", "Dart", "OpenAI API", "Gemini AI", "GitHub API"],
      icon: Bot,
      color: "text-cyan-400"
    },
    {
      title: "BlueprintLabs - Pulse",
      company: "BlueprintLabs",
      description: "AI-driven GitHub activity digest system that summarizes repo changes and trends.",
      features: [
        "Summarizes repository activity for faster team visibility",
        "Surfaces meaningful changes and trends from GitHub",
        "Supports applied LLM workflows for developer productivity"
      ],
      technologies: ["TypeScript", "Next.js", "OpenAI API", "GitHub API"],
      icon: Activity,
      color: "text-red-400"
    },
    {
      title: "Tranquil Life Platform",
      company: "Tranquil Life",
      description: "Designed secure client-server architecture for a mental health platform requiring real-time communication and transactional integrity.",
      features: [
        "Implemented appointment scheduling and billing workflows",
        "Coordinated voice/video integrations with backend APIs",
        "Improved performance under concurrent usage conditions"
      ],
      technologies: ["Flutter", "APIs", "WebRTC", "Billing", "Scheduling"],
      icon: Brain,
      color: "text-purple-400"
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
                    <div className="surface-panel p-4 sm:p-5">
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-terminal-text text-xs sm:text-sm flex items-start">
                          <span className="text-terminal-accent mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
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
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-8 surface-panel p-4 sm:p-5"
          >
            <div className="command-line mb-3">
              <span className="text-terminal-accent">$</span> ./project_stats.sh
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">3</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Core Focus Areas</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">Multi-Tenant</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Architecture</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">AI</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Production Systems</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-terminal-accent">Flutter</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Cross-Platform Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 