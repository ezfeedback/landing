'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/app/logo.webp'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const renderLink = (hash: string, label: string) => {
    if (isHome) {
      return (
        <a href={hash} className="hover:text-[#2563EB] transition-colors">
          {label}
        </a>
      )
    }
    return (
      <Link href={`/${hash}`} className="hover:text-[#2563EB] transition-colors">
        {label}
      </Link>
    )
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="EzFeedback Logo"
            width={161}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#5F6368]">
          {renderLink('#how-it-works', 'How it works')}
          {renderLink('#features', 'Features')}
          {renderLink('#pricing', 'Pricing')}
          {renderLink('#faq', 'FAQ')}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="http://localhost:3001/login"
            className="text-sm text-[#5F6368] hover:text-[#202124] font-medium transition-colors hidden sm:block"
          >
            Sign in
          </Link>
          <Link
            href="http://localhost:3001/register"
            className="text-sm bg-[#2563EB] text-white font-medium px-4 py-2 rounded-xl hover:bg-[#1d4ed8] transition-colors"
          >
            Get started free
          </Link>
        </div>
      </div>
    </nav>
  )
}

