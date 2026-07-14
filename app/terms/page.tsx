import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="bg-[#1a1f36] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: July 7, 2026</p>
        </div>
      </header>

      {/* ── Content ────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-blue max-w-none text-[#5F6368] space-y-8">
          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using our services at ezfeedback.in, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">2. Description of Service</h2>
            <p className="leading-relaxed">
              EzFeedback provides an AI-powered feedback collection and review writing tool for local businesses. Our platform allows business owners to create custom review flows, generate QR codes, collect customer feedback, and utilize AI to assist customers in writing Google reviews.
            </p>
            <p className="leading-relaxed mt-2 font-semibold">
              Note: EzFeedback is not affiliated with Google LLC. We do not automatically post reviews to Google; all reviews are posted voluntarily by users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">3. Account Registration &amp; Security</h2>
            <p className="leading-relaxed">
              To use certain features of the service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information. You are responsible for safeguarding your password and account details and are fully liable for any activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">4. Fees, Billing, and Subscriptions</h2>
            <p className="leading-relaxed">
              Our service is billed on a subscription basis (per shop per month). You agree to pay the fees specified for your selected plan.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly.</li>
              <li><strong>Cancellation:</strong> You can cancel your subscription at any time. Cancellation will take effect at the end of the current billing cycle.</li>
              <li><strong>Refunds:</strong> Payments are non-refundable except as required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">5. Acceptable Use and Restrictions</h2>
            <p className="leading-relaxed">
              You agree not to use the service for any illegal purposes or to violate Google's guidelines regarding review acquisition. Specifically, you agree not to offer incentives, payments, or discounts to customers in exchange for positive Google reviews using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">6. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your access to the service at our sole discretion, without notice, if we believe you have breached these Terms or Google's Guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, EzFeedback shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or other intangible losses, resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">8. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at: <a href="mailto:support@ezfeedback.in" className="text-[#2563EB] hover:underline">support@ezfeedback.in</a>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
