import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#4285F4] to-[#1a73e8] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
          Start collecting reviews today
        </h2>
        <p className="text-white/70 mb-8 text-lg">
          Join 500+ local businesses. Setup takes less than 5 minutes.
        </p>
        <Link
          href="http://localhost:3001/register"
          className="inline-flex items-center gap-2 bg-white text-[#4285F4] font-bold px-10 py-4 rounded-2xl hover:bg-[#F8F9FA] transition-colors shadow-lg text-base"
        >
          Get started for free →
        </Link>
        <p className="text-white/40 text-sm mt-4">₹499/shop/month · No credit card required</p>
      </div>
    </section>
  )
}
