# Soyombo Israel Oluwaseun - Portfolio Website

A modern, terminal-inspired portfolio website built with Next.js, featuring an AI-powered chat assistant and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-black?style=for-the-badge&logo=framer)

## 🚀 Features

### ✨ **Terminal-Inspired Design**
- **Dark Theme**: Professional terminal aesthetic with green accent colors
- **Monospace Fonts**: JetBrains Mono for authentic terminal feel
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Layout**: Works perfectly on all devices

### 🤖 **AI Chat Assistant**
- **Powered by Google Gemini**: Intelligent responses about experience and skills
- **Real-time Chat**: Interactive conversation interface
- **Professional Responses**: Maintains professional tone and expertise
- **24/7 Availability**: Always ready to answer questions

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Collapsible Sidebar**: Hidden on mobile with hamburger menu
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Cross-Platform**: Works on desktop, tablet, and mobile

### 🎯 **Professional Sections**
- **Home**: Introduction and key achievements
- **Experience**: Detailed work history and accomplishments
- **Projects**: Showcase of notable technical projects
- **Skills**: Comprehensive technical expertise breakdown
- **Contact**: Multiple ways to get in touch

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful icon library

### **Backend & AI**
- **Google Generative AI**: Gemini API for AI chat functionality
- **Next.js API Routes**: Serverless API endpoints
- **Environment Variables**: Secure API key management

### **Development Tools**
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/soyombo-portfolio.git
   cd soyombo-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo 'GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-here"' > .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### **Environment Variables**
Create a `.env.local` file in the root directory:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_api_key_here
```

### **AI Chat Configuration**
The AI assistant is configured with comprehensive information about Soyombo's:
- Professional experience
- Technical skills
- Notable projects
- Contact information
- Work style and availability

## 📁 Project Structure

```
soyombo-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   │   ├── components/
│   │   │   ├── AIChat.tsx           # AI chat interface
│   │   │   ├── Contact.tsx          # Contact section
│   │   │   ├── Experience.tsx       # Experience section
│   │   │   ├── Home.tsx             # Home section
│   │   │   ├── Projects.tsx         # Projects section
│   │   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   │   └── Skills.tsx           # Skills section
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Main page
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Customization

### **Colors & Theme**
The terminal theme uses custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  terminal: {
    bg: '#0a0a0a',           // Background
    surface: '#1a1a1a',      // Surface elements
    border: '#333333',       // Borders
    text: '#e5e5e5',         // Text
    accent: '#00ff41',       // Accent (green)
    secondary: '#666666',    // Secondary text
    error: '#ff4444',        // Error states
    warning: '#ffaa00',      // Warning states
  }
}
```

### **Content Updates**
- **Personal Information**: Update content in respective component files
- **AI Knowledge**: Modify the `soyomboInfo` object in `app/api/chat/route.ts`
- **Styling**: Customize colors and fonts in `tailwind.config.js`

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Soyombo Israel Oluwaseun** is a Senior Software Engineer with 4+ years of experience specializing in:
- **Mobile Development**: Flutter, Dart, iOS/Android
- **AI/Machine Learning**: Python, TensorFlow, OpenAI APIs
- **Backend Development**: FastAPI, NestJS, Node.js
- **DevOps**: Docker, CI/CD, Linux Server Management

### **Contact Information**
- **Email**: israelsoyombo@gmail.com
- **LinkedIn**: [Soyombo Israel Oluwaseun]

- **GitHub**: [@kiingxo](https://github.com/kiingxo)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **Framer Motion** for smooth animations
- **Google AI** for the Gemini API
- **Lucide** for beautiful icons

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Portfolio Website]() 