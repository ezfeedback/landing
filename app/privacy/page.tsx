import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="bg-[#1a1f36] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: July 7, 2026</p>
        </div>
      </header>

      {/* ── Content ────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-blue max-w-none text-[#5F6368] space-y-8">
          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              At EzFeedback ("we", "our", or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website (ezfeedback.in) and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information to provide better services to our users. The types of information we collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, business name, and password.</li>
              <li><strong>Shop and QR Data:</strong> We collect details about the shops you add to our platform, including shop names, addresses, and Google Review links.</li>
              <li><strong>Customer Feedback Data:</strong> When customers scan your QR codes and fill out feedback forms, we collect their ratings, survey selections, and the AI-generated review drafts. We do not automatically publish reviews; this is done voluntarily by the customer on Google's platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve our services, including the AI review generation flow.</li>
              <li>Process transactions and send invoices for your subscriptions.</li>
              <li>Send technical alerts, updates, security notifications, and support messages.</li>
              <li>Analyze trends and usage data to optimize the customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">4. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted partners who assist us in operating our website, conducting our business, or serving our users, provided those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your details. We use secure servers, encryption protocols, and standard firewalls to safeguard all collected data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You can choose to disable cookies through your browser settings, though some features of our service may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-[#202124] mb-3">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions regarding this Privacy Policy, you may contact us at: <a href="mailto:support@ezfeedback.in" className="text-[#2563EB] hover:underline">support@ezfeedback.in</a>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
