import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Kings County Farm Bureau Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{ backgroundColor: "#e8f5ea", color: "#1E5C2B" }}
          >
            Legal
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#1E5C2B" }}>
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the Kings County Farm Bureau website (kcfb.org),
              you accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              2. Use of Website
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You agree to use this website only for lawful purposes and in a manner
              that does not infringe upon the rights of others. You may not:
            </p>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Use the site to transmit harmful, fraudulent or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Copy or reproduce our content without written permission</li>
              <li>Use automated tools to scrape or harvest information from the site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              3. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, images, logos and graphics,
              is the property of Kings County Farm Bureau or its content providers and
              is protected by copyright law. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              4. Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The information on this website is provided for general informational
              purposes only. Kings County Farm Bureau makes no warranties about the
              accuracy, completeness or suitability of the information provided.
              Nothing on this site constitutes legal, financial or professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              5. External Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to external websites. Kings County Farm
              Bureau is not responsible for the content or privacy practices of
              third-party websites. We encourage you to review the privacy policies
              of any external sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kings County Farm Bureau shall not be liable for any direct, indirect,
              incidental or consequential damages arising from your use of this website
              or reliance on information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              7. Membership Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Agricultural membership in Kings County Farm Bureau is $500 per year.
              Membership dues are non-refundable. KCFB reserves the right to modify
              membership fees with reasonable notice to members. Membership benefits
              are available only to current, paid members.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              8. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kings County Farm Bureau reserves the right to modify these Terms of
              Service at any time. Changes will be posted on this page with an updated
              date. Continued use of the website after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              9. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service are governed by the laws of the State of California.
              Any disputes shall be resolved in Kings County, California.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1E5C2B" }}>
              10. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, contact us at:
            </p>
            <div className="mt-3 text-gray-600">
              <p>Kings County Farm Bureau</p>
              <p>870 Greenfield Avenue</p>
              <p>Hanford, CA 93230</p>
              <p>Phone: 559-584-3557</p>
              <p>Email: kcfb@kcfb.org</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
