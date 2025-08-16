// app/privacy-policy/page.tsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
          Privacy Policy
        </h1>

        <div className="space-y-8 leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. INTRODUCTION
            </h2>
            <p>
              V4Labs (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is
              committed to protecting your privacy and personal data. This
              Privacy Policy explains how we collect, use, store, and protect
              your information in compliance with the Digital Personal Data
              Protection Act, 2023 (&quot;DPDP Act&quot;) and other applicable
              Indian data protection laws.
            </p>

            <p className="mt-2">
              <strong>Contact Information:</strong> services@v4labs.tech
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="mb-2">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Personal Information (e.g., name, email, phone, billing info)
              </li>
              <li>
                Technical Information (e.g., IP, device/browser details, usage
                data)
              </li>
              <li>
                Information from Third Parties (e.g., payment processors,
                integrations)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Delivering our services and technical support</li>
              <li>Processing payments and managing accounts</li>
              <li>Communicating about projects and updates</li>
              <li>Compliance with legal and regulatory obligations</li>
              <li>Improving services and client experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. INFORMATION SHARING AND DISCLOSURE
            </h2>
            <p>
              We only share data with trusted service providers, legal
              authorities when required, and in case of business transfers.
              Strict safeguards are applied to all disclosures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. DATA SECURITY AND PROTECTION
            </h2>
            <p>
              We implement encryption, multi-factor authentication, secure
              development practices, and periodic security reviews. Data is
              retained only as long as necessary and securely deleted
              afterwards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. YOUR RIGHTS UNDER DPDP ACT
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Right to Information</li>
              <li>Right to Correction</li>
              <li>Right to Erasure</li>
              <li>Right to Data Portability</li>
              <li>Right to Grievance Redressal</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, email us at{" "}
              <span className="text-white font-medium">
                services@v4labs.tech
              </span>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. DATA TRANSFERS
            </h2>
            <p>
              Any international data transfers will follow strict safeguards and
              comply fully with DPDP Act requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. COMPLIANCE AND LEGAL BASIS
            </h2>
            <p>
              Data is processed based on consent, contract performance, legal
              obligations, or legitimate business interests. We comply with DPDP
              Act, IT Act 2000, and global best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. COOKIES AND TRACKING
            </h2>
            <p>
              Our website uses cookies for functionality, analytics, and
              security. You can control cookie preferences via browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              10. CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy to reflect legal, technical, or
              business changes. Updates will be communicated via email or our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              11. GRIEVANCE REDRESSAL
            </h2>
            <p>
              For complaints, contact our Grievance Officer at{" "}
              <span className="text-white font-medium">
                services@v4labs.tech
              </span>
              . We will respond within 7 business days and resolve issues within
              30 days.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-10">
            <strong>Effective Date:</strong> August 14, 2025 <br />
            <strong>Last Updated:</strong> August 14, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
