import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer & Advertising Policy | RBANMS FIRST GRADE COLLEGE',
  description: 'Website Disclaimer and Advertising Transparency Policy for RBANMS First Grade College, Bengaluru.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-950 mb-6 border-b pb-4">Disclaimer &amp; Advertising Disclosure</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 13, 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">1. General Information Disclaimer</h2>
            <p>
              The information provided on the official website of RBANMS First Grade College (https://www.rbanmsfgc.edu.in/) is for general educational and informational purposes only. While we endeavor to keep the information up to date and accurate, we make no representations or warranties of any kind about the completeness or accuracy of the website content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">2. Advertising &amp; Third-Party Services</h2>
            <p>
              Our website may display advertisements served by third-party advertising networks, such as Google AdSense. These ads are generated automatically based on user interests, cookies, or general content context. RBANMS First Grade College does not explicitly endorse, control, or guarantee third-party products, services, or websites advertised through Google AdSense.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">3. External Links Disclaimer</h2>
            <p>
              This website may contain links to external websites that are not provided or maintained by RBANMS First Grade College. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">4. Contact Information</h2>
            <address className="not-italic bg-blue-50 p-4 rounded-md border border-blue-100 text-sm space-y-1">
              <p className="font-semibold text-blue-950">RBANMS First Grade College</p>
              <p>#12, Annaswamy Mudaliar Road, Bengaluru, Karnataka - 560042</p>
              <p>Email: <a href="mailto:info@rbanmsfgc.edu.in" className="text-blue-600 underline">info@rbanmsfgc.edu.in</a></p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
