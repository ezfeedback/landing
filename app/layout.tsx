import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'EzFeedback — Turn Happy Customers into Google Reviews',
  description:
    'Help your local business collect more authentic Google Reviews. Customers scan your QR code, AI generates a review, they post it on Google. Setup in 5 minutes.',
  keywords: 'google reviews, qr code, review management, local business, AI reviews',
  openGraph: {
    title: 'EzFeedback — Turn Happy Customers into Google Reviews',
    description: 'The easiest way to collect more Google Reviews for your local business.',
    type: 'website',
    url: 'https://ezfeedback.in',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
