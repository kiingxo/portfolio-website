import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

// Soyombo's information for the AI to reference
const soyomboInfo = `
Soyombo Israel Oluwaseun is a Software Engineer with 4+ years of experience building scalable enterprise systems and production AI solutions across fintech and healthcare domains.

PROFESSIONAL BACKGROUND:
- Software Engineer (Mobile & AI Lead) at FPG Technologies (Jan 2023 - Present)
- Flutter Consultant & Lead Engineer at Tranquil Life (Jan 2024 - Mar 2024)

TECHNICAL EXPERTISE:
Primary Skills:
- Programming: Python, Dart, TypeScript, Go
- AI/ML: LLM fine-tuning, FastAPI, LangChain, Hugging Face, OpenAI APIs, agent-based systems
- Backend & Systems: REST APIs, WebSockets, PostgreSQL, microservices, multi-tenant architectures
- Infrastructure: Docker, CI/CD (GitLab), Linux server management, Infrastructure-as-Code
- Mobile Engineering: Flutter (iOS, Android, Web), cross-platform architecture

Supporting Technologies:
- Frontend: TypeScript, JavaScript, HTML5, CSS3, React, Next.js
- Tools & Platforms: Git, VS Code, Postman, Docker Compose, Firebase, Vercel

KEY ACHIEVEMENTS:
- Designed and deployed production AI services for clinical decision support via secure FastAPI microservices
- Architected and maintained a multi-tenant ERP system supporting concurrent enterprise deployments
- Maintained 99.9% uptime for production systems and handled on-call incident response
- Led cross-platform engineering using Flutter for mobile and web applications
- Implemented real-time communication workflows with WebSockets and push notifications
- Containerized services with Docker and automated CI/CD pipelines to improve release reliability

NOTABLE PROJECTS:
1. Enterprise Multi-Tenant ERP Platform - Modular backend services integrated with Flutter-based clients
2. AI-Powered Diagnostic & Workflow Automation Systems - AI agents for consultation and diagnostic image interpretation
3. BlueprintLabs - Slash - Mobile-first GitHub AI agent for repository insights
4. BlueprintLabs - Pulse - AI-driven GitHub activity digest system

EDUCATION:
- Master of Science in Artificial Intelligence, University of Salford (Expected 2027)
- Bachelor of Science in Computer Science, Bowen University (2022)
- Vice President, Mobile Software Engineering Club

CONTACT INFORMATION:
- Email: israelsoyombo@gmail.com
- Phone: +447827822553
- Location: Manchester, United Kingdom

PERSONALITY & WORK STYLE:
- Results-driven with focus on reliability, architecture, and production AI delivery
- Strong experience in enterprise systems, healthcare workflows, and cross-platform delivery
- Available for new opportunities and collaborations
- Response time: Usually within 24 hours
`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Check if API key is available
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('Google Generative AI API key is not configured');
      return NextResponse.json(
        { 
          error: 'AI service is not configured',
          message: `I apologize, but my AI service isn't properly configured on this deployment. 

However, I can tell you that Soyombo Israel Oluwaseun is a Software Engineer with 4+ years of experience building scalable enterprise systems and production AI solutions across fintech and healthcare domains.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +447827822553. He's available for new opportunities and usually responds within 24 hours.

(Technical note: The GOOGLE_GENERATIVE_AI_API_KEY environment variable needs to be set in the deployment platform.)`
        }, 
        { status: 500 }
      );
    }

    // Create a model instance - try different model names
    let model;
    try {
      model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    } catch (error) {
      try {
        model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      } catch (error2) {
        try {
          model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        } catch (error3) {
          console.error('Failed to initialize any Gemini model:', error3);
          return NextResponse.json(
            { 
              error: 'AI model not available',
              message: `I apologize, but I'm having trouble connecting to my AI service right now. 

However, I can tell you that Soyombo Israel Oluwaseun is a Software Engineer with 4+ years of experience building scalable enterprise systems and production AI solutions across fintech and healthcare domains.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +447827822553. He's available for new opportunities and usually responds within 24 hours.`
            }, 
            { status: 500 }
          );
        }
      }
    }

    // Create the prompt with Soyombo's information
    const prompt = `
You are an AI assistant representing Soyombo Israel Oluwaseun, a Software Engineer. 
Use the following information to answer questions about Soyombo professionally and accurately:

${soyomboInfo}

IMPORTANT GUIDELINES:
- Be professional, friendly, and helpful
- Provide accurate information based on the data above
- If asked about something not covered, politely redirect to contact information
- Keep responses concise but informative
- Maintain a professional tone that reflects Soyombo's expertise
- If asked about availability or collaboration, mention he's available for new opportunities

User Question: ${message}

Please provide a helpful response about Soyombo based on the information provided.
`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      message: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    
    // Provide a fallback response if AI fails
    const fallbackResponse = `I apologize, but I'm having trouble connecting to my AI service right now. 

However, I can tell you that Soyombo Israel Oluwaseun is a Software Engineer with 4+ years of experience building scalable enterprise systems and production AI solutions across fintech and healthcare domains.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +447827822553. He's available for new opportunities and usually responds within 24 hours.`;

    return NextResponse.json({ 
      message: fallbackResponse,
      timestamp: new Date().toISOString()
    });
  }
} 