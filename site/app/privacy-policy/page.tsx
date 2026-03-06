import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kings County Farm Bureau Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gray-100 text-gray-800">
            Legal
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: March 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kings County Farm Bureau (&ldquo;KCFB,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo; or &ldquo;us&rdquo;)
              respects your privacy and is committed to protecting the personal information
              you share with us. This Privacy Policy explains how we collect, use and
              protect your information when you visit kcfb.org or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may collect the following types of information:
            </p>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Contact information:</strong> Name, email address, phone number
                and mailing address when you contact us, join our mailing list or
                become a member.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you use our website,
                including pages visited, time spent and browser type.
              </li>
              <li>
                <strong>Communications:</strong> Messages you send through our contact
                form or email.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Respond to your inquiries and provide information about KCFB</li>
              <li>Send the Farm Life newspaper, eNewsletter and event announcements to subscribers</li>
              <li>Process membership applications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              4. Information Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kings County Farm Bureau does not sell, rent or share your personal
              information with third parties except as required by law or with your
              explicit consent. We may share information with service providers who
              assist us in operating our website and communications, subject to
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              5. Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to improve
              your browsing experience and analyze website traffic. You can control
              cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              6. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable security measures to protect your personal
              information from unauthorized access, use or disclosure. However, no
              internet transmission is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              7. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, correct or delete your personal information.
              To unsubscribe from our eNewsletter or request removal of your information,
              contact us at kcfb@kcfb.org or call 559-584-3557.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              8. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:
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
