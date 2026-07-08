import Link from 'next/link'
import Image from 'next/image'

export default function TryItYourself() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* Left Side: QR Code container */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="bg-white p-5 rounded-3xl border border-[#E5E7EB] shadow-sm w-44 h-44 flex items-center justify-center">
              <Image
                src="/qr_code.png"
                alt="Demo QR Code"
                width={140}
                height={140}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[11px] text-[#9CA3AF] mt-3.5 font-medium tracking-wide">
              No app · No login · 60 seconds
            </p>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[10px] font-bold text-[#9CA3AF] tracking-widest uppercase mb-3">
              TRY IT YOURSELF
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111827] leading-tight mb-4">
              Scan and experience exactly what your customers see.
            </h2>
            <p className="text-sm text-[#5F6368] leading-relaxed mb-8 max-w-xl">
              Live demo of Coffee Corner — rate your experience, answer the survey, watch 4 AI reviews appear. This is the exact flow your customers will go through.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="http://localhost:3001/register"
                className="inline-flex items-center justify-center bg-[#1A1F36] hover:bg-[#2A2F46] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-sm"
              >
                Create free account →
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center bg-white hover:bg-[#F9FAF8] text-[#374151] border border-[#D1D5DB] font-medium px-6 py-3 rounded-full text-sm transition-colors shadow-sm"
              >
                View pricing
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
