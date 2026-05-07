import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: 'Sentient OS | Full-Stack Developer',
  description: 'A cyber-minimalist portfolio of advanced digital consciousness',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-950 scroll-smooth">
      <body className="font-sans antialiased bg-slate-950 text-slate-100 overflow-x-hidden" style={{
        fontFamily: `${spaceGrotesk.style.fontFamily}, ${jetbrainsMono.style.fontFamily}`,
      }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
