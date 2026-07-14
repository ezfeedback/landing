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
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2563EB] mb-3 uppercase tracking-wide">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#202124]">
            Common questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#DADCE0]/50">
              <h3 className="font-semibold text-[#202124] mb-3 flex items-start gap-2">
                <span className="text-[#2563EB] mt-0.5 text-sm font-bold">Q</span>
                {faq.q}
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
