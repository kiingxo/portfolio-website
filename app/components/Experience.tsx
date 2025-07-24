'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "FPG Technologies",
      location: "Lagos, Nigeria",
      period: "Jan 2023 - Present",
      description: "Cross-functional team",
      achievements: [
        "Led Flutter development for large-scale ERP system, ensuring seamless cross-platform performance",
        "Designed and maintained CI/CD pipelines using GitLab and Docker, achieving 40% reduction in deployment times",
        "Spearheaded development of AI agents for medical consultation assistance and diagnostic image analysis",
        "Lead a cross-functional mobile development team; mentor junior developers and conduct code reviews",
        "Contributed to secure API integrations for major institutions including UBA and Zenith Bank",
        "Maintain 99.9% uptime reliability as on-call developer, ensuring infrastructure stability"
      ]
    },
    {
      title: "Flutter Consultant & Lead Engineer",
      company: "Tranquil Life",
      location: "Delaware, OH (Remote)",
      period: "Jan 2024 - Mar 2024",
      description: "Remote Consulting Project",
      achievements: [
        "Served as lead Flutter consultant while maintaining primary role at FPG Technologies",
        "Led Flutter development for dual mental health applications (therapist and user platforms)",
        "Architected core features including appointment booking, voice/video calls, billing management",
        "Reduced cold start time and improved app responsiveness under low network conditions",
        "Provided strategic direction on Flutter best practices, modular architecture, and third-party integrations"
      ]
    },
    {
      title: "Software Engineer",
      company: "Ghost Tech",
      location: "Remote",
      period: "Nov 2022 - Nov 2023",
      description: "Full-Stack Development",
      achievements: [
        "Developed high-quality cross-platform mobile applications for diverse clients across health, fintech, and e-commerce",
        "Contributed to responsive websites and web applications using modern frameworks",
        "Consulted on architectural decisions, API integration strategies, and critical problem-solving",
        "Built Flutter applications with seamless iOS and Android compatibility",
        "Worked directly with stakeholders to translate business requirements into technical specifications",
        "Implemented clean, maintainable code structures following industry best practices"
      ]
    },
    {
      title: "Mobile Developer Intern",
      company: "Evacity",
      location: "Lagos, Nigeria",
      period: "Sep 2021 - Nov 2021",
      description: "Flutter Development Team",
      achievements: [
        "Collaborated with Flutter development team on bug identification and platform-specific UI development",
        "Conducted source code analysis to identify and resolve functionality issues"
      ]
    },
    {
      title: "Mobile Developer Intern",
      company: "Lagos State House of Assembly",
      location: "Lagos, Nigeria",
      period: "Sep 2020 - Dec 2020",
      description: "Governmental Projects",
      achievements: [
        "Developed clean code for various governmental projects",
        "Collaborated with engineering team on code testing processes and bug resolution"
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
                
                <div className="bg-terminal-bg p-3 sm:p-4 rounded border border-terminal-border">
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
          </div>
        </div>
      </div>
    </motion.div>
  )
} 