import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Chickatarian - Your Daily Chicken Hub',
    template: '%s | Chickatarian'
  },
  description: 'Your daily source for chicken prices, fast food news, memes, and everything chicken-related. Join the cluck!',
  keywords: ['chicken', 'fast food', 'prices', 'news', 'memes', 'polls', 'chickatarian'],
  authors: [{ name: 'Chickatarian Team' }],
  creator: 'Chickatarian',
  publisher: 'Chickatarian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chickatarian.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chickatarian.com',
    title: 'Chickatarian - Your Daily Chicken Hub',
    description: 'Your daily source for chicken prices, fast food news, memes, and everything chicken-related.',
    siteName: 'Chickatarian',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chickatarian - Your Daily Chicken Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chickatarian - Your Daily Chicken Hub',
    description: 'Your daily source for chicken prices, fast food news, memes, and everything chicken-related.',
    creator: '@chickatarian',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}