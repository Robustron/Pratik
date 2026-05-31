import type { Metadata, Viewport } from 'next'
import { Kanit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: 'Pratik Jadhav | AI Engineer & Full-Stack Developer',
  description: 'Portfolio of Pratik Jadhav - AI engineer specializing in Generative AI, RAG, and scalable backend systems.',
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
      <body className="font-sans antialiased bg-slate-950 text-slate-100 overflow-hidden" style={{
        fontFamily: `${kanit.style.fontFamily}, ${jetbrainsMono.style.fontFamily}`,
      }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
