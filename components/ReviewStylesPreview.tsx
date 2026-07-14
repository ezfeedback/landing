const reviews = [
  {
    style: '✍️ Regular',
    color: '#2563EB',
    name: 'Amit Sharma',
    avatar: 'AS',
    avatarBg: 'from-[#2563EB] to-[#60a5fa]',
    role: 'Verified Customer',
    time: '2 hours ago',
    text: 'Best coffee in Ahmedabad! The cappuccino was perfect — rich flavour and smooth texture. Staff was super friendly and quick. Will definitely be coming back with friends!',
  },
  {
    style: '🗣️ Hinglish',
    color: '#EA4335',
    name: 'Priya Patel',
    avatar: 'PP',
    avatarBg: 'from-[#EA4335] to-[#F28B82]',
    role: 'Local Guide',
    time: '1 day ago',
    text: 'Yaar ekdum mast coffee thi! Cappuccino ka taste aur texture dono zabardast. Staff bhi bahut friendly tha, service quick. Zaroor ek baar aao, pachtaoge nahi!',
  },
  {
    style: '📝 Detailed',
    color: '#34A853',
    name: 'Rohan Mehta',
    avatar: 'RM',
    avatarBg: 'from-[#34A853] to-[#81C995]',
    role: 'Verified Customer',
    time: '3 days ago',
    text: 'I recently visited Coffee Corner and was thoroughly impressed. The cappuccino had a rich, well-balanced flavour with perfectly frothed milk. The staff was attentive and courteous, ensuring a pleasant experience from start to finish.',
  },
  {
    style: '⚡ Quick Take',
    color: '#FBBC05',
    name: 'Sarah Jones',
    avatar: 'SJ',
    avatarBg: 'from-[#FBBC05] to-[#FDD663]',
    role: 'Local Guide',
    time: '4 days ago',
    text: 'Great coffee, friendly staff. Quick service. Highly recommend!',
  },
]

export default function ReviewStylesPreview() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Soft background glow spots */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#2563EB] mb-3 uppercase tracking-wide">
            Smart AI Engine
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124] tracking-tight">
            4 review styles. One tap.
          </h2>
          <p className="text-[#5F6368] mt-4 max-w-xl mx-auto text-base">
            Our AI generates distinct review styles so every customer finds one that sounds like them — including Hinglish for Indian audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.style}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DADCE0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              style={{
                borderColor: '#DADCE0',
              }}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-inner`}
                    >
                      {r.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#202124]">{r.name}</h4>
                      <p className="text-[11px] text-[#5F6368] flex items-center gap-1">
                        <span>{r.role}</span>
                        <span>•</span>
                        <span>{r.time}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Google Icon SVG */}
                  <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.67-.35-1.37-.35-2.09z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[#FBBC05]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#374151] leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
              </div>

              {/* Bottom Tag / Badge */}
              <div className="pt-4 border-t border-[#F1F3F4] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#5F6368]">AI Voice Match</span>
                <span
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  style={{
                    background: `${r.color}12`,
                    color: r.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: r.color }}
                  />
                  {r.style.split(' ')[1]} style
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
