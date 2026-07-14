import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/app/logo.webp'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="EzFeedback Logo"
            width={161}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#5F6368]">
          <Link href="/#how-it-works" className="hover:text-[#2563EB] transition-colors">How it works</Link>
          <Link href="/#features" className="hover:text-[#2563EB] transition-colors">Features</Link>
          <Link href="/#pricing" className="hover:text-[#2563EB] transition-colors">Pricing</Link>
          <Link href="/#faq" className="hover:text-[#2563EB] transition-colors">FAQ</Link>
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

