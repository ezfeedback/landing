"use client"

import { useState } from 'react'

const faqs = [
  {
    q: 'Does EzFeedback submit reviews automatically?',
    a: 'Never. EzFeedback only generates review text and redirects the customer to Google. The customer always makes the final decision to post. This keeps everything authentic and within Google\'s guidelines.',
  },
  {
    q: 'Do customers need to download an app?',
    a: 'No app needed. Customers just scan the QR code with their phone camera. The review form opens instantly in their browser.',
  },
  {
    q: 'How many QR codes can I create?',
    a: 'You get 1 dynamic QR code per shop, which you can print unlimited times to place at every table, counter, or location inside your shop.',
  },
  {
    q: 'What languages are supported?',
    a: 'Currently English and Hindi, with more Indian languages coming soon.',
  },
  {
    q: 'Can I customise the review questions?',
    a: 'Yes. The review form builder lets you create any questions — text, ratings, dropdowns, checkboxes — tailored to your business.',
  },
  {
    q: 'What if a customer gives a low rating?',
    a: 'You control the flow. You can set a threshold: only customers who give 4★ or 5★ are directed to Google. Others can share feedback privately with you.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-white border-t border-[#DADCE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
            <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              FAQS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#202124] leading-tight">
              All Questions <br />
              <span className="text-[#2563EB]">Answered</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div 
                  key={i} 
                  className="bg-white border border-[#DADCE0] rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center justify-between text-left p-6 font-semibold text-[#202124] hover:text-[#2563EB] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className={`text-[#2563EB] transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] pb-6 px-6 pt-0' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#5F6368] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
