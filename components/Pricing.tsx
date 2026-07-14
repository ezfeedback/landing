import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly Plan',
      price: '₹549',
      period: '/month',
      billed: 'Per shop, billed monthly',
      sub: '≈ ₹18/day per shop',
      cta: 'Start free trial',
      highlight: false,
      popular: false,
    },
    {
      name: 'Yearly Plan',
      price: '₹5,999',
      period: '/year',
      billed: 'Per shop, billed annually',
      sub: '≈ ₹500/month (Save 10%)',
      cta: 'Start free trial',
      highlight: true,
      popular: true,
    },
    {
      name: 'Lifetime Plan',
      price: '₹24,999',
      period: '',
      billed: 'Per shop, one-time payment',
      sub: 'Pay once, own forever',
      cta: 'Get lifetime access',
      highlight: false,
      popular: false,
    },
  ]

  const features = [
    'Unlimited feedback reviews',
    'Unlimited QR codes per shop',
    'AI review generation',
    'Custom review form builder',
    'Full analytics dashboard',
    'Google Review redirect',
    'Priority support',
  ]

  return (
    <section id="pricing" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-medium text-[#2563EB] mb-3 uppercase tracking-wide">Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124] mb-4">
          Simple, honest pricing
        </h2>
        <p className="text-[#5F6368] mb-16 max-w-xl mx-auto">
          Choose the plan that fits your business. No hidden fees. Billed per shop.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col relative transition-all duration-200 border ${plan.highlight
                ? 'bg-[#1a1f36] text-white border-[#2563EB] shadow-xl md:-translate-y-2'
                : 'bg-white text-[#202124] border-[#DADCE0] hover:shadow-md'
                }`}
            >
              {plan.popular && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Best Value
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold ${plan.highlight ? 'text-white' : 'text-[#202124]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 ${plan.highlight ? 'text-white/60' : 'text-[#5F6368]'}`}>
                  {plan.billed}
                </p>
                <div className="flex items-baseline justify-center gap-1 mt-4 mb-1">
                  <span className="text-4xl sm:text-5xl font-bold font-display tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-[#5F6368]'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-xs ${plan.highlight ? 'text-white/40' : 'text-[#5F6368]/70'}`}>
                  {plan.sub}
                </p>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-left flex-grow">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#34A853] font-bold flex-shrink-0">✓</span>
                    <span className={plan.highlight ? 'text-white/80' : 'text-[#374151]'}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="http://localhost:3001/register"
                className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-colors shadow-sm ${plan.highlight
                  ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white'
                  : 'bg-[#1a1f36] hover:bg-[#2c334e] text-white'
                  }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#5F6368] mt-8">No credit card required to start free trial</p>
      </div>
    </section>
  )
}
