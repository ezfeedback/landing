import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/app/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-[#5F6368] border-t border-[#DADCE0] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center mb-3">
              <Image
                src={logoImg}
                alt="EzFeedback Logo"
                width={141}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-[#5F6368] max-w-xs">
              Turn happy customers into Google Reviews. The simplest review tool for local businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-[#5F6368]">
            <div>
              <p className="font-medium text-[#202124] mb-3">Product</p>
              <ul className="space-y-2">
                <li><Link href="/#how-it-works" className="hover:text-[#2563EB] transition-colors">How it works</Link></li>
                <li><Link href="/#features" className="hover:text-[#2563EB] transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-[#2563EB] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#202124] mb-3">Account</p>
              <ul className="space-y-2">
                <li><Link href="http://localhost:3001/login" className="hover:text-[#2563EB] transition-colors">Sign in</Link></li>
                <li><Link href="http://localhost:3001/register" className="hover:text-[#2563EB] transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#202124] mb-3">Legal</p>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#2563EB] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DADCE0] mt-8 pt-8 text-xs text-[#5F6368]/70 text-center">
          © {new Date().getFullYear()} EzFeedback. All rights reserved. · Made with ❤️ in India
        </div>
      </div>
    </footer>
  )
}

