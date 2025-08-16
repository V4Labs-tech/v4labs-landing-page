export const runtime = "edge";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        These Terms and Conditions (&quot;Terms&quot;) govern the use of services provided by{" "}
        <strong>V4Labs</strong>, a comprehensive software development business
        operated by four Indian college students, specializing in full-scale
        application development, ongoing technical support, and subscription-based
        maintenance services.
      </p>

      {/* INTRODUCTION */}
      <h2 className="text-xl font-semibold mt-8 mb-2">1. INTRODUCTION AND DEFINITIONS</h2>
      <p className="mb-2">
        <strong>V4Labs</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) refers to the V4Labs business
        and its operators. &quot;Client,&quot; &quot;you,&quot; &quot;your&quot; refers to the individual or
        entity engaging our services.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>MVP:</strong> Minimum Viable Product - an initial version of your application or website for market validation</li>
        <li><strong>Services:</strong> Development, support, maintenance, updates, and consultation</li>
        <li><strong>Deliverables:</strong> Completed software and documentation</li>
        <li><strong>Subscription Services:</strong> Ongoing support, updates, and development partnership</li>
      </ul>

      {/* SERVICES OFFERED */}
      <h2 className="text-xl font-semibold mt-8 mb-2">2. SERVICES OFFERED</h2>
      <h3 className="font-semibold mt-4">2.1 Development Services</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Custom web & mobile application development</li>
        <li>SaaS solutions & advanced websites</li>
        <li>Enterprise-level platforms</li>
        <li>API development & integrations</li>
        <li>Database design & optimization</li>
        <li>Technical consultation & system planning</li>
      </ul>

      <h3 className="font-semibold mt-4">2.2 Subscription Services</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Continuous support & maintenance</li>
        <li>Feature updates & scaling</li>
        <li>Security monitoring & bug fixes</li>
        <li>System monitoring & backups</li>
      </ul>

      <h3 className="font-semibold mt-4">2.3 Post-Launch Partnership</h3>
      <p className="mb-4">
        We ensure your software evolves with your business through our
        subscription-based support model.
      </p>

      {/* PROJECT ENGAGEMENT */}
      <h2 className="text-xl font-semibold mt-8 mb-2">3. PROJECT ENGAGEMENT PROCESS</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Proposal:</strong> Scope, timeline, deliverables, and costs</li>
        <li><strong>Client Requirements:</strong> Provide specifications, assets, feedback, and access</li>
        <li><strong>Timeline:</strong> Dependent on client cooperation</li>
        <li><strong>Change Requests:</strong> May adjust cost & timeline</li>
      </ul>

      {/* PAYMENT TERMS */}
      <h2 className="text-xl font-semibold mt-8 mb-2">4. PAYMENT TERMS</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>40% deposit before project start, 60% on delivery</li>
        <li>Subscription billed monthly in advance</li>
        <li>Late payments incur 2% monthly charge</li>
        <li>Deposits are non-refundable once development begins</li>
      </ul>

      {/* INTELLECTUAL PROPERTY */}
      <h2 className="text-xl font-semibold mt-8 mb-2">5. INTELLECTUAL PROPERTY RIGHTS</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Clients own final software after full payment</li>
        <li>V4Labs retains pre-existing tools & frameworks</li>
        <li>Third-party components remain under original licenses</li>
      </ul>

      {/* CLIENT RESPONSIBILITIES */}
      <h2 className="text-xl font-semibold mt-8 mb-2">6. CLIENT RESPONSIBILITIES</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide all content & materials on time</li>
        <li>Test deliverables & provide feedback</li>
        <li>Ensure compliance with applicable laws</li>
      </ul>

      {/* WARRANTIES */}
      <h2 className="text-xl font-semibold mt-8 mb-2">7. WARRANTIES AND DISCLAIMERS</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Services delivered with skill & care</li>
        <li>We correct defects reported within 30 days</li>
        <li>Beyond this, services are &quot;as is&quot;</li>
      </ul>

      {/* LIMITATION OF LIABILITY */}
      <h2 className="text-xl font-semibold mt-8 mb-2">8. LIMITATION OF LIABILITY</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Liability limited to fees paid</li>
        <li>No liability for indirect or incidental damages</li>
        <li>Not responsible for force majeure events</li>
      </ul>

      {/* CONFIDENTIALITY */}
      <h2 className="text-xl font-semibold mt-8 mb-2">9. CONFIDENTIALITY AND DATA PROTECTION</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Mutual confidentiality</li>
        <li>Data protected per Indian law</li>
      </ul>

      {/* SUBSCRIPTION */}
      <h2 className="text-xl font-semibold mt-8 mb-2">10. SUBSCRIPTION SERVICES</h2>
      <p>Includes service levels, modifications with notice, and termination with 30 days notice.</p>

      {/* TERMINATION */}
      <h2 className="text-xl font-semibold mt-8 mb-2">11. TERMINATION</h2>
      <p>
        Either party may terminate for breach with notice. Upon termination, client
        pays for completed work and data is returned or deleted securely.
      </p>

      {/* GOVERNING LAW */}
      <h2 className="text-xl font-semibold mt-8 mb-2">12. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
      <p>
        These Terms are governed by Indian law. Disputes resolved via negotiation,
        mediation, or arbitration in India.
      </p>
    </div>
  );
}
