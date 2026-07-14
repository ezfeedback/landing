import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1128] text-white">
      {/* Dynamic background glow spots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A853]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Content & Copy ─────────────────── */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#2563EB]/20 animate-fade-in-up">
              <span>★</span>
              <span className="text-white/80">Trusted by 500+ local businesses in India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 tracking-tight text-white">
              Turn Happy Customers <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#34A853] bg-clip-text text-transparent">
                into Google Reviews
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
              Simple QR codes on tables or counters. Customers scan, select responses, and post a professional AI-written review on Google. Setup in <strong>5 minutes</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Link
                href="http://localhost:3001/register"
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/30 hover:-translate-y-0.5 text-base text-center"
              >
                Start Now →
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-2xl transition-all border border-white/10 hover:border-white/20 text-base text-center"
              >
                See how it works
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 w-full">
              {[
                { value: '500+', label: 'Shops' },
                { value: '50K+', label: 'Reviews' },
                { value: '<60s', label: 'Customer Flow' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold font-display text-white">{s.value}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Interactive Mockups ───────────── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center">
              
              {/* Decorative backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/15 to-[#34A853]/15 rounded-full blur-3xl opacity-60 z-0" />

              {/* Stand Mockup (Background placement) */}
              <div className="absolute top-4 left-4 w-60 aspect-[3/4] bg-white rounded-2xl shadow-2xl p-4 border border-[#DADCE0] flex flex-col items-center justify-between -rotate-6 z-10 hidden sm:flex">
                <div className="w-full flex justify-between items-center border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-[#2563EB] text-xs font-bold font-display">★ EzFeedback</span>
                  </div>
                  <span className="text-[8px] text-gray-400 font-medium">Coffee Corner</span>
                </div>
                
                <div className="my-auto flex flex-col items-center gap-2">
                  <div className="w-24 h-24 bg-gray-50 border-2 border-[#2563EB] rounded-lg p-2 flex items-center justify-center relative">
                    {/* Simulated QR Code using grid */}
                    <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full opacity-80">
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                      
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                      <div></div>
                      <div className="bg-black rounded-sm"></div>
                      <div className="bg-black rounded-sm"></div>
                    </div>
                    {/* Center Star Logo */}
                    <div className="absolute inset-0 m-auto w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#2563EB] text-[10px]">★</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-700 text-center">Scan to write review</p>
                </div>

                <div className="w-full text-center border-t border-gray-100 pt-2 text-[8px] text-gray-400 font-medium">
                  Free & Instant
                </div>
              </div>

              {/* Smartphone Mockup (Foreground placement) */}
              <div className="relative w-[250px] h-[460px] bg-slate-950 rounded-[36px] p-2.5 shadow-2xl border border-white/10 z-20 sm:translate-x-12 sm:translate-y-8 animate-float">
                {/* Screen inner */}
                <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col justify-between p-4 relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-2" />
                  </div>
                  
                  {/* Fake Status Bar */}
                  <div className="flex justify-between items-center text-[8px] text-gray-800 font-bold px-2 pt-0.5 mb-2">
                    <span>9:41</span>
                    <span>📶🔋</span>
                  </div>

                  {/* Business Name */}
                  <div className="text-center mt-2">
                    <div className="w-9 h-9 rounded-full bg-[#FFFDF0] border border-[#FEF3C7] flex items-center justify-center text-lg mx-auto mb-1">
                      ☕
                    </div>
                    <h4 className="text-[11px] font-bold text-gray-900 leading-tight">Coffee Corner</h4>
                    <p className="text-[7px] text-gray-400">Navrangpura, Ahmedabad</p>
                  </div>

                  {/* Rating Selector */}
                  <div className="my-auto py-2 text-center">
                    <p className="text-[9px] font-bold text-gray-800 mb-1">How was your service?</p>
                    <div className="flex justify-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-base text-[#FBBC05]">★</span>
                      ))}
                    </div>

                    {/* AI Draft Box */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 text-left relative overflow-hidden">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-[6px] font-bold text-white bg-[#2563EB] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                          AI review draft
                        </span>
                      </div>
                      <p className="text-[8.5px] text-gray-700 leading-normal italic">
                        "Amazing cappuccino! The froth and texture were perfect, and the staff was extremely friendly."
                      </p>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-auto space-y-1">
                    <div className="w-full bg-[#2563EB] text-white text-[9px] font-bold py-2.5 rounded-xl text-center shadow-md shadow-[#2563EB]/25 flex items-center justify-center gap-1">
                      <span>★</span> Copy &amp; Post on Google
                    </div>
                    <p className="text-[6.5px] text-gray-400 text-center">Redirects to Google Review page</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
