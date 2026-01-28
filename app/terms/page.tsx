import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms and Conditions | Stable Collective",
  description: "Terms and Conditions for Stable Collective trading education platform",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen trading-bg">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <Image
            src="/stable-collective-logo.png"
            alt="Stable Collective"
            width={192}
            height={192}
            className="mb-6 rounded-full object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: January 27, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the Stable Collective website, services, programs, tools, and content (collectively, the &quot;Services&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Educational Purpose and No Financial Advice</h2>
              <p className="leading-relaxed mb-4">
                All content, materials, courses, scanners, tools, and communications provided by Stable Collective are for <strong>educational and informational purposes only</strong>. Nothing on this site or in our Services constitutes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Financial, investment, trading, or tax advice</li>
                <li>Recommendations to buy, sell, or hold any security or financial instrument</li>
                <li>Legal or regulatory advice</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You are solely responsible for your trading and investment decisions. You should consult qualified professionals before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Trading and Investment Risk</h2>
              <p className="leading-relaxed">
                Trading in financial markets (including forex, futures, cryptocurrencies, and securities) involves substantial risk of loss and is not suitable for every investor. Past performance of any strategy, tool, or educational content is not indicative of future results. You may lose some or all of your invested capital. Only trade with money you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Use of Services</h2>
              <p className="leading-relaxed mb-4">You agree to use our Services only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the intellectual property or rights of others</li>
                <li>Transmit harmful, offensive, or unauthorized content</li>
                <li>Attempt to gain unauthorized access to our systems or third-party platforms</li>
                <li>Resell, redistribute, or commercially exploit our content without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this site—including text, graphics, logos, software, and methodologies—is the property of Stable Collective or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links and Services</h2>
              <p className="leading-relaxed">
                Our Services may include links to third-party sites (e.g., trading platforms, payment processors such as iBuildLegacies.com, social platforms). We are not responsible for the content, privacy practices, or terms of those sites. Your use of third-party services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Stable Collective and its affiliates, officers, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of our Services or any trading or investment decisions you make. Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                Our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We do not warrant that our Services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Refunds and Cancellations</h2>
              <p className="leading-relaxed">
                Refund and cancellation terms for paid programs, tools, and subscriptions are governed by the specific product or platform through which you purchased (e.g., iBuildLegacies.com). Please review those policies at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms and Conditions from time to time. The &quot;Last updated&quot; date at the top of this page will reflect any changes. Continued use of our Services after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
              <p className="leading-relaxed">
                For questions about these Terms and Conditions, contact us through the contact information provided on this website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
