import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Stable Collective",
  description: "Privacy Policy for Stable Collective trading education platform",
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: January 27, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Stable Collective (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, join our community, enroll in programs, or use our tools and services (collectively, the &quot;Services&quot;). Please read this policy carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal information:</strong> Name, email address, phone number, and similar contact details you provide when joining our community, subscribing, or contacting us.</li>
                <li><strong>Account and usage data:</strong> Preferences, course progress, and how you interact with our site and Services.</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies or similar technologies (see Section 6).</li>
                <li><strong>Payment information:</strong> Processed by third-party payment and enrollment platforms (e.g., iBuildLegacies.com). We do not store full payment card details on our systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process enrollments and manage your access to programs, communities (e.g., Facebook, Discord), and tools</li>
                <li>Send administrative, educational, or promotional communications (where you have consented or where permitted by law)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage and trends to improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing and Disclosure</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information with: (a) service providers who assist in operating our Services (e.g., hosting, email, analytics); (b) third-party platforms used for community access (e.g., Facebook, Discord) where you have requested to join; (c) payment and enrollment partners (e.g., iBuildLegacies.com) to complete transactions; and (d) law enforcement or regulators when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We and our partners may use cookies, pixels, and similar technologies to remember preferences, analyze traffic, and improve the Services. You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
              <p className="leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us using the contact details on this website. We will respond in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Websites and Services</h2>
              <p className="leading-relaxed">
                Our Services may contain links to third-party websites (e.g., payment or community platforms). We are not responsible for their privacy practices. We encourage you to read the privacy policies of those sites before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Our Services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top reflects the latest version. We encourage you to review this page periodically. Continued use of our Services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related questions or requests, please contact us through the contact information provided on this website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
