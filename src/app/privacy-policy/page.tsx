import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RBANMS FIRST GRADE COLLEGE',
  description: 'Privacy Policy for RBANMS First Grade College website, outlining our data collection, usage, cookies, and Google AdSense compliance policies.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-950 mb-6 border-b pb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: August 13, 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">1. Introduction</h2>
            <p>
              RBANMS First Grade College (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of visitors to our website (https://www.rbanmsfgc.edu.in/). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Information such as your name, email address, phone number, and academic background provided voluntarily when filling out admission forms, contact inquiries, or alumni forms.</li>
              <li><strong>Log and Derivative Data:</strong> Standard server logs, IP addresses, browser types, operating systems, access times, and pages viewed before and after accessing our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">3. Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the site and improve your experience.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Google AdSense &amp; Third-Party Advertising Cookies</h3>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the Internet.</li>
              <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AboutAds.info</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">4. Use of Your Information</h2>
            <p className="mb-2">Information collected is used for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing student admission inquiries and academic services.</li>
              <li>Improving website performance, navigation, and user experience.</li>
              <li>Communicating college announcements, events, and circulars.</li>
              <li>Ensuring network security and preventing fraudulent activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">5. Data Protection &amp; Security</h2>
            <p>
              We implement appropriate administrative, technical, and physical security measures to safeguard personal information. However, please be aware that no electronic transmission over the Internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-3">6. Contact Us</h2>
            <p className="mb-2">If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <address className="not-italic bg-blue-50 p-4 rounded-md border border-blue-100 text-sm space-y-1">
              <p className="font-semibold text-blue-950">RBANMS First Grade College</p>
              <p>#12, Annaswamy Mudaliar Road, Bengaluru, Karnataka - 560042</p>
              <p>Email: <a href="mailto:info@rbanmsfgc.edu.in" className="text-blue-600 underline">info@rbanmsfgc.edu.in</a></p>
              <p>Phone: 080-25512976 / 080-48533572</p>
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
