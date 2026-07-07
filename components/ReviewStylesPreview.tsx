const reviews = [
  { style: '✍️ Regular', color: '#4285F4', text: 'Best coffee in Ahmedabad! The cappuccino was perfect — rich flavour and smooth texture. Staff was super friendly and quick. Will definitely be coming back with friends!' },
  { style: '🗣️ Hinglish', color: '#F59E0B', text: 'Yaar ekdum mast coffee thi! Cappuccino ka taste aur texture dono zabardast. Staff bhi bahut friendly tha, service quick. Zaroor ek baar aao, pachtaoge nahi!' },
  { style: '📝 Detailed', color: '#34A853', text: 'I recently visited Coffee Corner in Navrangpura and was thoroughly impressed. The cappuccino had a rich, well-balanced flavour with perfectly frothed milk. The staff was attentive and courteous, ensuring a pleasant experience from start to finish.' },
  { style: '⚡ Quick Take', color: '#EA4335', text: 'Great coffee, friendly staff. Quick service. Highly recommend!' },
]

export default function ReviewStylesPreview() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#F59E0B] mb-3 uppercase tracking-wide">Multiple styles</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124]">4 review styles. One tap.</h2>
          <p className="text-[#5F6368] mt-4 max-w-xl mx-auto">Our AI generates distinct review styles so every customer finds one that sounds like them — including Hinglish for Indian audiences.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map(r => (
            <div key={r.style} className="bg-white rounded-2xl p-6 border border-[#DADCE0] hover:shadow-md hover:border-[#4285F4]/20 transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${r.color}15`, color: r.color }}>{r.style}</span>
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">{r.text}</p>
              <div className="flex gap-1 mt-3">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="text-xs text-[#FBBC05]">★</span>))}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
