import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#4285F4] flex items-center justify-center text-white text-xs font-bold">★</div>
              <span className="font-bold font-display">EzFeedback</span>
            </div>
            <p className="text-sm text-white/40 max-w-xs">
              Turn happy customers into Google Reviews. The simplest review tool for local businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-white/60">
            <div>
              <p className="font-medium text-white mb-3">Product</p>
              <ul className="space-y-2">
                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-3">Account</p>
              <ul className="space-y-2">
                <li><Link href="http://localhost:3001/login" className="hover:text-white transition-colors">Sign in</Link></li>
                <li><Link href="http://localhost:3001/register" className="hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white mb-3">Legal</p>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-xs text-white/30 text-center">
          © {new Date().getFullYear()} EzFeedback. All rights reserved. · Made with ❤️ in India
        </div>
      </div>
    </footer>
  )
}

