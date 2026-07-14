import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/app/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-[#5F6368] border-t border-[#DADCE0] pt-16 pb-70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center">
              <Image
                src={logoImg}
                alt="EzFeedback Logo"
                width={141}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-[#5F6368] max-w-xs leading-relaxed">
              Turn happy customers into Google Reviews. The simplest review tool for local businesses.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#DADCE0] flex items-center justify-center text-[#5F6368] hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#DADCE0] flex items-center justify-center text-[#5F6368] hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white border border-[#DADCE0] flex items-center justify-center text-[#5F6368] hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.012 2C6.485 2 2 6.485 2 12.012c0 1.767.46 3.427 1.262 4.893L2 22l5.247-1.378a9.96 9.96 0 004.766 1.21c5.527 0 10.012-4.485 10.012-10.012C22.025 6.486 17.54 2 12.012 2zm6.657 14.305c-.274.773-1.378 1.408-2.22 1.492-.577.058-1.332.09-3.882-.962-3.259-1.344-5.35-4.66-5.513-4.877-.162-.217-1.31-1.745-1.31-3.327 0-1.583.824-2.36 1.117-2.673.294-.313.642-.39.856-.39.213 0 .426.002.61.01.189.008.443-.072.693.535.255.617.873 2.128.948 2.278.076.15.127.324.027.525-.1.2-.15.324-.298.5-.148.175-.313.39-.446.523-.15.15-.306.313-.131.614.175.3 1.776 2.91 3.811 4.726 2.624 2.34 4.832 3.072 5.514 3.355.682.284 1.082.234 1.488-.234.406-.467 1.758-2.046 2.22-2.748.462-.702.923-.585 1.56-.35 1.348.497 2.15 1.077 2.52 1.26.37.184.618.275.706.426.088.15.088.874-.186 1.647z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[#DADCE0] flex items-center justify-center text-[#5F6368] hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
              </a>
            </div>

            <div className="text-xs text-[#5F6368] mt-1 select-none">
              © {new Date().getFullYear()} EzFeedback. All rights reserved.
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-8 text-sm text-[#5F6368]">
            <div>
              <p className="font-semibold text-[#202124] mb-4">Product</p>
              <ul className="space-y-2.5">
                <li><Link href="/#how-it-works" className="hover:text-[#2563EB] transition-colors">How it works</Link></li>
                <li><Link href="/#features" className="hover:text-[#2563EB] transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-[#2563EB] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#202124] mb-4">Account</p>
              <ul className="space-y-2.5">
                <li><Link href="http://localhost:3001/login" className="hover:text-[#2563EB] transition-colors">Sign in</Link></li>
                <li><Link href="http://localhost:3001/register" className="hover:text-[#2563EB] transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#202124] mb-4">Legal</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#2563EB] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[1400px] pointer-events-none select-none px-4 z-0">
        <Image
          src={logoImg}
          alt="EzFeedback Watermark"
          width={1141}
          height={222}
          className="w-full h-auto opacity-[0.135] [mask-image:linear-gradient(to_top,transparent,black)]"
          priority
        />
      </div>
    </footer>
  )
}
