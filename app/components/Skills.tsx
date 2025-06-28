'use client'

import { motion } from 'framer-motion'
import { Smartphone, Brain, Server, Code, Database, Cloud } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Primary Expertise",
      icon: Smartphone,
      color: "text-blue-400",
      skills: [
        {
          category: "Mobile Development",
          items: ["Flutter (iOS/Android/Web)", "Dart", "Swift", "Firebase Suite", "State Management (Riverpod, Bloc, Provider)"]
        },
        {
          category: "AI/Machine Learning",
          items: ["Python (Pandas, NumPy, Scikit-learn)", "TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Vector Databases"]
        },
        {
          category: "Backend Development",
          items: ["FastAPI", "NestJS", "Node.js", "REST APIs", "WebSockets", "PostgreSQL", "PocketBase", "NoSQL"]
        },
        {
          category: "DevOps & Infrastructure",
          items: ["Docker", "CI/CD Pipelines", "GitLab", "Linux Server Management", "Infrastructure-as-Code"]
        }
      ]
    },
    {
      title: "Supporting Technologies",
      icon: Code,
      color: "text-green-400",
      skills: [
        {
          category: "Frontend",
          items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Angular", "React"]
        },
        {
          category: "Tools & Platforms",
          items: ["Git", "VS Code", "Postman", "Docker Compose", "AWS", "Firebase", "Vercel"]
        }
      ]
    }
  ]

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Bowen University",
    location: "Iwo, Osun State, Nigeria",
    period: "Sep 2018 - Nov 2022",
    leadership: "Vice President, Mobile Software Engineering Club - Led initiatives to foster practical skills and collaborative projects among students"
  }

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
          <span className="text-terminal-text text-xs sm:text-sm ml-2">soyombo@portfolio:~$ cat skills.txt</span>
        </div>
        
        <div className="terminal-content p-4 sm:p-6">
          <div className="command-line mb-4 sm:mb-6">
            <span className="text-terminal-accent">$</span> ./skills_analyzer.sh
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-terminal-bg p-4 sm:p-6 rounded border border-terminal-border"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <Icon className={`${category.color} w-5 h-5 sm:w-6 sm:h-6`} />
                    <h2 className="text-xl sm:text-2xl font-semibold text-terminal-accent">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {category.skills.map((skillGroup, idx) => (
                      <div key={idx} className="space-y-2 sm:space-y-3">
                        <div className="command-line">
                          <span className="text-terminal-accent">$</span> ls {skillGroup.category.toLowerCase().replace(/\s+/g, '_')}/
                        </div>
                        <div className="bg-terminal-surface p-3 sm:p-4 rounded border border-terminal-border">
                          <h3 className="text-terminal-accent font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                            {skillGroup.category}
                          </h3>
                          <div className="flex flex-wrap">
                            {skillGroup.items.map((skill, skillIdx) => (
                              <span key={skillIdx} className="skill-tag text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Education Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 bg-terminal-bg p-4 sm:p-6 rounded border border-terminal-border"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Database className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-xl sm:text-2xl font-semibold text-terminal-accent">
                Education
              </h2>
            </div>
            
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> cat education.json
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-terminal-accent mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-terminal-text mb-2 text-sm sm:text-base">
                    {education.institution} • {education.location}
                  </p>
                  <p className="text-terminal-secondary text-xs sm:text-sm mb-3">
                    {education.period}
                  </p>
                </div>
              </div>
              
              <div className="bg-terminal-surface p-3 sm:p-4 rounded border border-terminal-border">
                <div className="command-line mb-2 sm:mb-3">
                  <span className="text-terminal-accent">$</span> cat leadership.txt
                </div>
                <p className="text-terminal-text text-xs sm:text-sm">
                  {education.leadership}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Skills Summary */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-terminal-bg border border-terminal-border rounded"
          >
            <div className="command-line mb-3 sm:mb-4">
              <span className="text-terminal-accent">$</span> ./skills_summary.sh
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-accent mb-1 sm:mb-2">4+</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-accent mb-1 sm:mb-2">20+</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-accent mb-1 sm:mb-2">4</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Platforms</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-terminal-accent mb-1 sm:mb-2">5+</div>
                <div className="text-terminal-secondary text-xs sm:text-sm">Industries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 