import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RBANMS FIRST GRADE COLLEGE',
  description: 'Terms of Service and Website Terms of Use for RBANMS First Grade College, Bengaluru.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-950 mb-6 border-b pb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 13, 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the official website of RBANMS First Grade College (https://www.rbanmsfgc.edu.in/), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">2. Intellectual Property Rights</h2>
            <p>
              All content, logos, course descriptions, academic materials, photographs, and graphics displayed on this website are the intellectual property of RBANMS First Grade College unless otherwise credited. Unauthorized reproduction or redistribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">3. User Conduct</h2>
            <p className="mb-2">When utilizing our online admission portal, contact forms, or student services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit false, misleading, or fraudulent personal or academic information.</li>
              <li>Attempt to gain unauthorized access to our administrative servers or database systems.</li>
              <li>Transmit any malicious software, viruses, or harmful electronic code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">4. Limitation of Liability</h2>
            <p>
              While RBANMS First Grade College makes every effort to ensure the accuracy of notifications, timetables, and academic guidelines published on this site, official updates issued by Bengaluru City University or college notice boards supersede online content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India and the jurisdiction of courts in Bengaluru, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">6. Contact Information</h2>
            <address className="not-italic bg-blue-50 p-4 rounded-md border border-blue-100 text-sm space-y-1">
              <p className="font-semibold text-blue-950">Principal, RBANMS First Grade College</p>
              <p>#12, Annaswamy Mudaliar Road, Bengaluru, Karnataka - 560042</p>
              <p>Email: <a href="mailto:info@rbanmsfgc.edu.in" className="text-blue-600 underline">info@rbanmsfgc.edu.in</a></p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
