import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

// Soyombo's information for the AI to reference
const soyomboInfo = `
Soyombo Israel Oluwaseun is a Senior Software Engineer with 4+ years of experience specializing in Flutter development, AI integration, and scalable system architecture.

PROFESSIONAL BACKGROUND:
- Software Engineer at FPG Technologies (Jan 2023 - Present)
- Flutter Consultant & Lead Engineer at Tranquil Life (Jan 2024 - Mar 2024)
- Software Engineer at Ghost Tech (Nov 2022 - Nov 2023)
- Mobile Developer Intern at Evacity (Sep 2021 - Nov 2021)
- Mobile Developer Intern at Lagos State House of Assembly (Sep 2020 - Dec 2020)

TECHNICAL EXPERTISE:
Primary Skills:
- Mobile Development: Flutter (iOS/Android/Web), Dart, Swift, Firebase Suite, State Management (Riverpod, Bloc, Provider)
- AI/Machine Learning: Python (Pandas, NumPy, Scikit-learn), TensorFlow, PyTorch, OpenAI APIs, LangChain, Vector Databases
- Backend Development: FastAPI, NestJS, Node.js, REST APIs, WebSockets, PostgreSQL, PocketBase, NoSQL
- DevOps & Infrastructure: Docker, CI/CD Pipelines, GitLab, Linux Server Management, Infrastructure-as-Code

Supporting Technologies:
- Frontend: TypeScript, JavaScript, HTML5, CSS3, Angular, React
- Tools & Platforms: Git, VS Code, Postman, Docker Compose, AWS, Firebase, Vercel

KEY ACHIEVEMENTS:
- Deployed AI solutions affecting 10,000+ medical cases with diagnostic accuracy improvements
- Achieved 40% reduction in deployment times through CI/CD pipeline improvements
- Maintained 99.9% uptime across production systems serving enterprise clients
- Successfully mentored junior developers and led cross-functional teams
- Contributed to secure API integrations for major institutions including UBA and Zenith Bank

NOTABLE PROJECTS:
1. Enterprise ERP Mobile Platform (FPG Technologies) - Led comprehensive Flutter development for large-scale ERP system
2. AI-Powered Medical Diagnostic System (FPG Technologies) - Developed AI agents for medical consultation assistance
3. Multi-Platform Mental Health Application (Tranquil Life) - Architected dual-platform solution for therapists and patients

EDUCATION:
- Bachelor of Science in Computer Science from Bowen University (Sep 2018 - Nov 2022)
- Vice President, Mobile Software Engineering Club

CONTACT INFORMATION:
- Email: israelsoyombo@gmail.com
- Phone: +234 811 784 9256
- Location: Lagos, Nigeria

PERSONALITY & WORK STYLE:
- Results-driven with focus on performance optimization and maintainable code architecture
- Expert in building cross-platform applications for fintech, healthcare, and enterprise sectors
- Strong leadership skills with experience mentoring junior developers
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

However, I can tell you that Soyombo Israel Oluwaseun is a Senior Software Engineer with 4+ years of experience specializing in Flutter development, AI integration, and scalable system architecture.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +234 811 784 9256. He's available for new opportunities and usually responds within 24 hours.

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

However, I can tell you that Soyombo Israel Oluwaseun is a Senior Software Engineer with 4+ years of experience specializing in Flutter development, AI integration, and scalable system architecture.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +234 811 784 9256. He's available for new opportunities and usually responds within 24 hours.`
            }, 
            { status: 500 }
          );
        }
      }
    }

    // Create the prompt with Soyombo's information
    const prompt = `
You are an AI assistant representing Soyombo Israel Oluwaseun, a Senior Software Engineer. 
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

However, I can tell you that Soyombo Israel Oluwaseun is a Senior Software Engineer with 4+ years of experience specializing in Flutter development, AI integration, and scalable system architecture.

For the most up-to-date information, please contact Soyombo directly at israelsoyombo@gmail.com or call +234 811 784 9256. He's available for new opportunities and usually responds within 24 hours.`;

    return NextResponse.json({ 
      message: fallbackResponse,
      timestamp: new Date().toISOString()
    });
  }
} 