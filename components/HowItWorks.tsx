export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4285F4] mb-3 uppercase tracking-wide">Three steps · Under a minute</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124]">
            How EzFeedback works
          </h2>
        </div>

        <div className="space-y-24 md:space-y-0">
           {/* Step 1 — Rating */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="premium-phone animate-float">
                <div className="premium-phone-screen bg-white">
                  {/* Status Bar */}
                  <div className="status-bar">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Dynamic Island */}
                  <div className="dynamic-island"></div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-5 py-6">
                    {/* Circle Cup */}
                    <div className="w-14 h-14 rounded-full bg-[#FFFDF0] flex items-center justify-center text-2xl mb-4 border border-[#FEF3C7]">
                      ☕
                    </div>
                    <p className="font-bold text-sm text-[#202124] mb-0.5">Coffee Corner</p>
                    <p className="text-[9px] text-[#9CA3AF] mb-5">Navrangpura, Ahmedabad</p>

                    <p className="text-[11px] font-bold text-[#374151] mb-3">How was your experience?</p>

                    {/* Stars */}
                    <div className="flex gap-1.5 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-xl text-[#FBBC05]">★</span>
                      ))}
                    </div>

                    {/* Button */}
                    <button className="w-full bg-[#8E8E93] text-white text-xs font-bold py-2.5 rounded-2xl hover:bg-[#71717A] transition-colors mb-2 shadow-sm">
                      Continue →
                    </button>
                    <p className="text-[8px] text-[#A1A1A1]">Takes less than a minute</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 text-[#4285F4] text-xs font-bold px-3 py-1 rounded-full mb-4">Step 1</div>
              <h3 className="text-2xl font-bold font-display text-[#202124] mb-3">Customer scans &amp; rates</h3>
              <p className="text-[#5F6368] leading-relaxed">No app, no login. Customer scans your QR code, sees your business details, and rates their experience with a simple star tap.</p>
            </div>
          </div>

          {/* Step 2 — Questions */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="premium-phone dark-border animate-float delay-200">
                <div className="premium-phone-screen bg-white">
                  {/* Status Bar */}
                  <div className="status-bar">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Dynamic Island */}
                  <div className="dynamic-island"></div>

                  {/* Step Indicators */}
                  <div className="px-5 pt-4 flex gap-1.5 justify-center">
                    <div className="h-0.5 flex-1 bg-[#1E1B4B] rounded-full"></div>
                    <div className="h-0.5 flex-1 bg-[#E5E7EB] rounded-full"></div>
                    <div className="h-0.5 flex-1 bg-[#E5E7EB] rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center px-5 py-6">
                    <p className="text-[9px] font-bold text-[#9CA3AF] tracking-widest uppercase mb-1">COFFEE QUALITY</p>
                    <p className="text-[12px] font-bold text-[#111827] leading-snug mb-5">
                      How was the taste and freshness of your coffee?
                    </p>

                    {/* MCQ Options */}
                    <div className="space-y-2">
                      <div className="mcq-pill selected">
                        <span>😋</span>
                        <span>Fresh and delicious</span>
                      </div>
                      <div className="mcq-pill">
                        <span>👍</span>
                        <span>Good overall</span>
                      </div>
                      <div className="mcq-pill">
                        <span>😐</span>
                        <span>Could be better</span>
                      </div>
                      <div className="mcq-pill">
                        <span>😟</span>
                        <span>Quite disappointing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#34A853]/10 text-[#34A853] text-xs font-bold px-3 py-1 rounded-full mb-4">Step 2</div>
              <h3 className="text-2xl font-bold font-display text-[#202124] mb-3">Quick AI-tailored questions</h3>
              <p className="text-[#5F6368] leading-relaxed">Customers answer 3–5 multiple-choice questions tailored to your business. No typing needed — just tap and go. The whole thing takes 30 seconds.</p>
            </div>
          </div>

          {/* Step 3 — AI Reviews */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="premium-phone animate-float delay-400">
                <div className="premium-phone-screen bg-white">
                  {/* Status Bar */}
                  <div className="status-bar">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Dynamic Island */}
                  <div className="dynamic-island"></div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between px-5 py-6">
                    <div className="mt-4">
                      <p className="text-[12px] font-bold text-[#374151] mb-4">Pick your style</p>

                      {/* Selected Card */}
                      <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white shadow-sm relative">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-base">😊</span>
                          <span className="text-[10px] font-bold text-[#374151] bg-[#F3F4F6] px-2.5 py-0.5 rounded-full">Regular</span>
                        </div>
                        <p className="text-[9px] text-[#4B5563] leading-relaxed mb-4">
                          Best coffee in Ahmedabad! The cappuccino was perfect and staff super friendly. Definitely coming back!
                        </p>

                        <button className="w-full bg-[#8E8E93] text-white text-[9px] font-bold py-2 rounded-xl">
                          ✓ Selected
                        </button>
                      </div>
                    </div>

                    <button className="w-full bg-[#8E8E93] text-white text-xs font-bold py-2.5 rounded-2xl shadow-sm hover:bg-[#71717A] transition-colors">
                      Copy &amp; Post on Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FBBC05]/10 text-[#B45309] text-xs font-bold px-3 py-1 rounded-full mb-4">Step 3</div>
              <h3 className="text-2xl font-bold font-display text-[#202124] mb-3">AI writes, they pick &amp; post</h3>
              <p className="text-[#5F6368] leading-relaxed mb-4">Our AI generates multiple review styles — Regular, Hinglish, Detailed — so customers find one that sounds like them. One tap copies it to Google.</p>
              <div className="flex flex-wrap gap-2">
                {['Regular', 'Hinglish 🇮🇳', 'Detailed', 'Quick Take'].map(s => (
                  <span key={s} className="text-xs bg-[#F3F4F6] text-[#374151] px-3 py-1.5 rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
