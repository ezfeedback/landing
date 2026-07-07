import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a1f36] text-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4285F4]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A853]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#4285F4]/20 text-[#4285F4] text-xs font-medium px-4 py-2 rounded-full mb-8 border border-[#4285F4]/30">
          <span>★</span>
          <span>Trusted by 500+ local businesses across India</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
          Turn Happy Customers<br />
          <span className="text-gradient">into Google Reviews</span>
        </h1>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Simple QR code → customer answers questions → AI writes the review → customer posts on Google.
          The complete flow takes under <strong className="text-white">60 seconds</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="http://localhost:3001/register"
            className="inline-flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-[#1a73e8] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[#4285F4]/25 hover:shadow-xl hover:shadow-[#4285F4]/30 hover:-translate-y-0.5 text-base"
          >
            Start free trial →
          </Link>
          <Link
            href="/#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-2xl transition-colors text-base border border-white/20"
          >
            See how it works
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
          {[
            { value: '500+', label: 'Businesses' },
            { value: '50K+', label: 'Reviews collected' },
            { value: '&lt;60s', label: 'Customer flow' },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p
                className="text-2xl font-bold font-display text-white"
                dangerouslySetInnerHTML={{ __html: s.value }}
              />
              <p className="text-xs text-white/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: '📱', text: 'No app needed' },
            { icon: '⚡', text: 'Setup in 5 min' },
            { icon: '🇮🇳', text: 'Hinglish support' },
            { icon: '🔒', text: 'No auto-submit' },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white/70">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
