const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Café Owner, Mumbai',
    text: 'EzFeedback doubled our Google reviews in the first month. Customers love how quick and easy it is!',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Salon Owner, Bangalore',
    text: 'We went from 12 reviews to 89 in 6 weeks. The QR code system is genius — guests scan it while waiting.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    role: 'Restaurant Owner, Pune',
    text: 'Setup took less than 5 minutes. My staff loves it because they don\'t have to awkwardly ask for reviews anymore.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1f36] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4285F4] mb-3 uppercase tracking-wide">Real results</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display">What owners say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#FBBC05] text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4285F4] flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
