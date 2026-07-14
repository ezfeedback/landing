import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ezfeedback.in'),
  title: 'EzFeedback — Turn Happy Customers into Google Reviews',
  description:
    'Help your local business collect more authentic Google Reviews. Customers scan your QR code, AI generates a review, they post it on Google. Setup in 5 minutes.',
  keywords: 'google reviews, qr code, review management, local business, AI reviews',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    title: 'EzFeedback',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace this with your actual Google Search Console code
  },
  openGraph: {
    title: 'EzFeedback — Turn Happy Customers into Google Reviews',
    description: 'The easiest way to collect more Google Reviews for your local business.',
    type: 'website',
    url: 'https://ezfeedback.in',
    siteName: 'EzFeedback',
    locale: 'en_US',
    images: [
      {
        url: '/qr_code.png',
        width: 1200,
        height: 630,
        alt: 'EzFeedback QR Code Stand Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzFeedback — Turn Happy Customers into Google Reviews',
    description: 'The easiest way to collect more Google Reviews for your local business.',
    images: ['/qr_code.png'],
  },
  alternates: {
    canonical: 'https://ezfeedback.in',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EzFeedback',
    operatingSystem: 'All',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Help your local business collect more authentic Google Reviews. Customers scan your QR code, AI generates a review, they post it on Google. Setup in 5 minutes.',
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
