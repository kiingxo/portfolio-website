import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soyombo Israel Oluwaseun - Software Engineer',
  description: 'Senior Software Engineer specializing in Flutter, AI, and DevOps. Mobile & AI Specialist with expertise in cross-platform development and machine learning solutions.',
  keywords: 'Software Engineer, Flutter, AI, DevOps, Mobile Development, Machine Learning',
  authors: [{ name: 'Soyombo Israel Oluwaseun' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        <div className="min-h-screen bg-terminal-bg">
          {children}
        </div>
      </body>
    </html>
  )
} 