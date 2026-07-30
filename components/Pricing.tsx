'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter Plan',
      price: billingPeriod === 'monthly' ? '₹299' : '₹2,999',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      billed:
        billingPeriod === 'monthly'
          ? 'Per shop, billed monthly'
          : 'Per shop, billed annually',
      sub:
        billingPeriod === 'monthly'
          ? '≈ ₹10/day per shop'
          : '₹250/month (Save 16%)',
      cta: 'Get started',
      highlight: false,
      popular: false,
      planKey: 'starter' as const,
    },
    {
      name: 'Pro Plan',
      price: billingPeriod === 'monthly' ? '₹599' : '₹6,499',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      billed:
        billingPeriod === 'monthly'
          ? 'Per shop, billed monthly'
          : 'Per shop, billed annually',
      sub:
        billingPeriod === 'monthly'
          ? '≈ ₹20/day per shop'
          : '₹542/month (Save 10%)',
      cta: 'Get started',
      highlight: true,
      popular: true,
      planKey: 'pro' as const,
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
      planKey: 'lifetime' as const,
    },
  ]

  const allFeatures = [
    { name: 'Feedback reviews', starter: '100 total', pro: 'Unlimited', lifetime: 'Unlimited' },
    { name: 'QR code prints', starter: 'Unlimited', pro: 'Unlimited', lifetime: 'Unlimited' },
    { name: 'Custom review form builder', starter: true, pro: true, lifetime: true },
    { name: 'Google Review redirect', starter: true, pro: true, lifetime: true },
    { name: 'AI review generation', starter: true, pro: true, lifetime: true },
    { name: 'Full analytics dashboard', starter: false, pro: true, lifetime: true },
    { name: 'Priority support', starter: false, pro: true, lifetime: true },
  ]

  return (
    <section id="pricing" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-medium text-[#2563EB] mb-3 uppercase tracking-wide">Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124] mb-4">
          Simple, honest pricing
        </h2>
        <p className="text-[#5F6368] mb-12 max-w-xl mx-auto">
          Choose the plan that fits your business. No hidden fees. Billed per shop.
        </p>

        {/* Billing toggle switch */}
        <div className="flex items-center justify-center gap-3 mb-12 select-none">
          <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-[#202124]' : 'text-[#5F6368]'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="w-12 h-6 rounded-full bg-[#E8F0FE] border border-[#2563EB]/20 relative flex items-center p-0.5 transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle billing period"
          >
            <div
              className={`w-4.5 h-4.5 rounded-full bg-[#2563EB] shadow-sm transform transition-transform duration-200 ${billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'text-[#202124]' : 'text-[#5F6368]'}`}>
            Yearly
            <span className="bg-[#E6F4EA] text-[#137333] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Save 10%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col relative transition-all duration-200 border ${plan.highlight
                ? 'bg-[#0A1128] text-white border-[#2563EB] shadow-xl md:-translate-y-2'
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
                {allFeatures.map((feat) => {
                  const val = feat[plan.planKey]
                  const isIncluded = val !== false

                  return (
                    <li key={feat.name} className="flex items-start gap-2.5">
                      {isIncluded ? (
                        <>
                          <span className="text-[#34A853] font-bold flex-shrink-0">✓</span>
                          <span className={plan.highlight ? 'text-white/80' : 'text-[#374151]'}>
                            {feat.name}{' '}
                            {typeof val === 'string' && (
                              <span className="font-semibold text-xs opacity-85">({val})</span>
                            )}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-gray-400/60 font-bold flex-shrink-0">✕</span>
                          <span className="text-gray-400">
                            {feat.name}
                          </span>
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>

              <Link
                href="http://localhost:3001/register"
                className="block w-full text-center font-semibold py-3.5 rounded-xl transition-colors shadow-sm bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#5F6368] mt-8">All prices in INR · One-time 30-day access</p>
      </div>
    </section>
  )
}
