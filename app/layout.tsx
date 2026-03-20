import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from "@/components/providers"
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'CosmoCenter | Исследуй Вселенную',
  description: 'Информационная и образовательная платформа о космосе. Исследуйте историю освоения космоса, технологии будущего, планеты Солнечной системы и текущие космические миссии.',
  generator: 'v0.app',
  keywords: ['космос', 'NASA', 'SpaceX', 'планеты', 'космические миссии', 'астрономия', 'вселенная'],
  authors: [{ name: 'CosmoCenter' }],
  openGraph: {
    title: 'CosmoCenter | Исследуй Вселенную',
    description: 'Информационная и образовательная платформа о космосе',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
