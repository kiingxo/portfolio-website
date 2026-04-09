import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Israel Soyombo - Software Engineer',
  description: 'Software Engineer building scalable enterprise systems, production AI solutions, and Flutter-based cross-platform applications.',
  keywords: 'Software Engineer, Flutter, AI, Enterprise Systems, Multi-tenant, Mobile Development, Machine Learning',
  authors: [{ name: 'Israel Soyombo' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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