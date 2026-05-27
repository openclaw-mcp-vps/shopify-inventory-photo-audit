export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Store Audit
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-detect missing product photos{" "}
          <span className="text-[#58a6ff]">killing your conversions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly scan your entire Shopify catalog. Find products with missing, low-quality, or non-compliant images before they cost you sales.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Auditing — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for first scan. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "Products scanned"],
            ["AI", "Vision analysis"],
            ["Real-time", "Audit reports"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-extrabold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6 text-sm">Everything you need to keep your catalog photo-perfect</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product scans",
              "AI-powered image quality analysis",
              "Missing photo detection",
              "Prioritized fix recommendations",
              "Webhook-based scanning for large stores",
              "Exportable audit reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the photo audit work?",
              "We connect to your Shopify store via the API, fetch all product listings, and run each image through an AI vision model to check for missing photos, low resolution, poor lighting, and compliance issues."
            ],
            [
              "Is it safe to connect my Shopify store?",
              "Yes. We request read-only access to your product catalog. We never modify your store data and your credentials are encrypted at rest."
            ],
            [
              "What if I have thousands of products?",
              "No problem. We use webhook-based scanning to process large inventories in the background and notify you when your full audit report is ready."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Shopify Photo Audit. All rights reserved.
      </footer>
    </main>
  );
}
