'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer (Mobile & AI Lead)",
      company: "FPG Technologies",
      location: "Lagos, Nigeria",
      period: "Jan 2023 - Present",
      description: "Built and ran enterprise software, AI services, and Flutter apps in production",
      achievements: [
        "Designed and deployed secure production AI services",
        "Architected and maintained a multi-tenant ERP system supporting concurrent enterprise deployments",
        "Maintained 99.9% uptime for production systems while serving as on-call engineer for incident resolution",
        "Led cross-platform delivery across mobile and web applications",
        "Implemented real-time communication flows to support operational workflows",
        "Improved deployment reliability and release velocity through automation"
      ]
    },
    {
      title: "Founder, Independent AI Lab",
      company: "BlueprintLabs",
      location: "Manchester, United Kingdom",
      period: "Current",
      description: "Independent AI lab focused on applied LLM systems",
      achievements: [
        "Built and lead BlueprintLabs as an independent AI engineering lab",
        "Developed Slash, a mobile-first GitHub AI agent for repository insights",
        "Built Pulse, an AI-driven GitHub activity digest system"
      ]
    },
    {
      title: "Flutter Consultant & Lead Engineer",
      company: "Tranquil Life",
      location: "Remote (Delaware, US)",
      period: "Jan 2024 - Mar 2024",
      description: "Led architecture and delivery for a secure real-time product",
      achievements: [
        "Designed secure client-server architecture for real-time communication and transactional integrity",
        "Implemented appointment scheduling, billing workflows, and voice/video integration with backend coordination",
        "Defined API contracts and improved performance under concurrent usage conditions"
      ]
    },
  ]

  const voluntaryRoles = [
    {
      title: "Technical Director",
      organization: "SalcoreAI",
      location: "University of Salford",
      period: "Current",
      description: "AI engineering club leadership",
      contributions: [
        "Serve as Technical Director for SalcoreAI, an AI engineering club at the University of Salford",
        "Lead technical direction for practical AI engineering projects and build sessions"
      ]
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
          <span className="text-terminal-text text-xs sm:text-sm ml-2">soyombo@portfolio:~$ cat experience.json</span>
        </div>
        
        <div className="terminal-content p-4 sm:p-6">
          <div className="command-line mb-4 sm:mb-6">
            <span className="text-terminal-accent">$</span> ./experience_timeline.sh
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="experience-item"
              >
                <div className="flex flex-col mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-terminal-accent mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-terminal-secondary text-xs sm:text-sm mb-2 space-y-1 sm:space-y-0">
                      <div className="flex items-center space-x-1">
                        <Building size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-terminal-text text-xs sm:text-sm italic mb-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                <div className="surface-panel p-4 sm:p-5">
                  <div className="command-line mb-3">
                    <span className="text-terminal-accent">$</span> ls achievements_{index + 1}/
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-terminal-text text-xs sm:text-sm flex items-start">
                        <span className="text-terminal-accent mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="pt-2"
            >
              <div className="command-line mb-3 sm:mb-4">
                <span className="text-terminal-accent">$</span> ls voluntary_roles/
              </div>

              <div className="space-y-5">
                {voluntaryRoles.map((role, index) => (
                  <div key={index} className="experience-item">
                    <div className="flex flex-col mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-terminal-accent mb-1">
                          {role.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-terminal-secondary text-xs sm:text-sm mb-2 space-y-1 sm:space-y-0">
                          <div className="flex items-center space-x-1">
                            <Building size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{role.organization}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{role.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span>{role.period}</span>
                          </div>
                        </div>
                        <p className="text-terminal-text text-xs sm:text-sm italic mb-3">
                          {role.description}
                        </p>
                      </div>
                    </div>

                    <div className="surface-panel p-4 sm:p-5">
                      <div className="command-line mb-3">
                        <span className="text-terminal-accent">$</span> ls contributions_{index + 1}/
                      </div>
                      <ul className="space-y-2">
                        {role.contributions.map((contribution, idx) => (
                          <li key={idx} className="text-terminal-text text-xs sm:text-sm flex items-start">
                            <span className="text-terminal-accent mr-2 mt-1">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 