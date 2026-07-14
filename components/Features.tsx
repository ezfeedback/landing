const features = [
  {
    icon: '⚡',
    title: 'Setup in 5 minutes',
    desc: 'No technical knowledge needed. Register, add your shop, generate QR. That is it.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Reviews',
    desc: 'Google Gemini AI generates natural, authentic reviews from customer answers.',
  },
  {
    icon: '📱',
    title: 'Works on any device',
    desc: 'Customers use their own phone. No app download required. Just scan and go.',
  },
  {
    icon: '🔒',
    title: 'Always authentic',
    desc: 'We never auto-submit reviews. Customers post voluntarily — keeping you compliant.',
  },
  {
    icon: '📊',
    title: 'Track everything',
    desc: 'See QR scans, reviews generated, Google redirects and conversion rates in one dashboard.',
  },
  {
    icon: '🏪',
    title: 'Multiple shops',
    desc: 'Manage all your locations from a single account. Each shop gets its own QR codes and analytics.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#34A853] mb-3 uppercase tracking-wide">Everything you need</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124]">
            Built for local businesses
          </h2>
          <p className="text-[#5F6368] mt-4 max-w-xl mx-auto">
            No complicated setup. No training required. Works for any type of local business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#F8F9FA] rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-[#2563EB]/20 border border-transparent transition-all duration-200"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-[#202124] mb-2">{f.title}</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
