import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "College Information | RBANMS First Grade College, Bengaluru",
  description: "Complete information about RBANMS First Grade College, Bengaluru — courses offered (B.A., B.Com., BBA, BCA), admission process, campus facilities, faculty, scholarships, and student life. Affiliated to Bengaluru City University, NAAC Accredited.",
  keywords: "RBANMS college info, BCA college Bangalore, BCom college Bangalore, BBA Bangalore, BA Bengaluru, NAAC accredited college, Bengaluru City University college, college admission Bangalore 2026",
};

export default function CollegeInfoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-blue-950 text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">RBANMS First Grade College</h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Established 1983 &middot; Affiliated to Bengaluru City University &middot; NAAC Accredited &middot; Ulsoor, Bengaluru
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/admission" className="bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">Apply for Admission 2026</Link>
          <Link href="/contact" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-950 transition-colors">Contact Us</Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        <section id="about">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">About RBANMS First Grade College</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>RBANMS First Grade College</strong> is one of the most reputed degree colleges in Bengaluru, Karnataka. Established in <strong>1983</strong> by the RBANMS Educational Charities Trust, the college has served over four decades providing affordable, high-quality undergraduate education to students from all socioeconomic backgrounds.
            </p>
            <p>
              The college is <strong>affiliated to Dr. Manmohan Singh Bengaluru City University</strong> and is recognised under Sections 2(f) and 12(B) of the UGC Act, 1956. It has been <strong>accredited by NAAC (National Assessment and Accreditation Council)</strong>, which validates the quality of teaching, infrastructure, governance, and student support systems.
            </p>
            <p>
              Located at <strong>12, Annaswamy Mudaliar Road, opposite Ulsoor Lake, Bengaluru – 560042</strong>, the college is easily accessible by public transport. With over 2,000+ students enrolled annually across multiple degree programmes, RBANMS is among the most sought-after undergraduate colleges in the city.
            </p>
            <p>
              RBANMS First Grade College is a co-educational institution committed to the overall development of every student — academic, cultural, physical, and ethical. Its focus on merit, inclusivity, and community service makes it a preferred choice for students from across Karnataka.
            </p>
          </div>
        </section>

        <section id="courses">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Courses &amp; Programmes Offered</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-6">
            <p>The college offers <strong>3-year undergraduate degree programmes</strong> (6 semesters) across the following streams:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-blue-100 rounded-lg p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Bachelor of Arts – B.A.</h3>
                <p className="text-sm text-gray-500 mb-2">3 Years | Dr. Manmohan Singh Bengaluru City University</p>
                <p>Subjects include History, Political Science, Economics, Sociology, and Literature. Ideal for students pursuing civil services, law, education, and journalism.</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Bachelor of Commerce – B.Com.</h3>
                <p className="text-sm text-gray-500 mb-2">3 Years | Dr. Manmohan Singh Bengaluru City University</p>
                <p>Covers Accounting, Taxation, Finance, Business Law, and Auditing. Perfect foundation for CA, CMA, MBA, and corporate finance careers.</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Bachelor of Business Administration – B.B.A.</h3>
                <p className="text-sm text-gray-500 mb-2">3 Years | Dr. Manmohan Singh Bengaluru City University</p>
                <p>Marketing, HR, Operations, Entrepreneurship, and Organizational Behaviour. Excellent base for MBA aspirants and future business owners.</p>
              </div>
              <div className="border border-blue-100 rounded-lg p-5 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Bachelor of Computer Applications – B.C.A.</h3>
                <p className="text-sm text-gray-500 mb-2">3 Years | Dr. Manmohan Singh Bengaluru City University</p>
                <p>Programming, Data Structures, DBMS, Web Development, Software Engineering, and Networking. Gateway to the IT industry and MCA postgraduation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="admission">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Admission Process 2026-27</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-4">
            <p>Admissions commence in <strong>June–July</strong> each year, following Dr. Manmohan Singh Bengaluru City University and Government of Karnataka guidelines.</p>
            <h3 className="font-bold text-blue-900 text-lg">Eligibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>B.A. / B.Com. / B.B.A.:</strong> Passed 10+2 or equivalent with minimum 35% aggregate marks.</li>
              <li><strong>B.C.A.:</strong> Passed 10+2 with Mathematics/Computer Science recommended; minimum 35% aggregate.</li>
            </ul>
            <h3 className="font-bold text-blue-900 text-lg">How to Apply</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fill the online application form at <Link href="/admission" className="text-blue-700 underline">rbanmsfgc.edu.in/admission</Link>.</li>
              <li>Upload 10+2 marksheet, TC, Aadhaar, photos, and category certificate.</li>
              <li>Pay the application fee online.</li>
              <li>Attend document verification at the college campus.</li>
              <li>Pay tuition fee to confirm your seat.</li>
            </ol>
          </div>
        </section>

        <section id="campus">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Campus &amp; Facilities</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-4">
            <p>The campus at Ulsoor, Bengaluru provides state-of-the-art facilities for academic and extracurricular activities:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
              {["Library with thousands of books, journals, and e-resources", "Computer Labs with high-speed internet access", "Business Lab & Media Design Lab for practical training", "Sports grounds for cricket, football, throwball, and athletics", "On-campus canteen with hygienic, affordable meals", "Seminar Hall for workshops and guest lectures", "Women's Common Room for female students", "Campus-wide Wi-Fi connectivity"].map(f => (
                <li key={f} className="flex items-start gap-2 text-gray-700">
                  <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="scholarships">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Scholarships &amp; Financial Aid</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-3">
            <p>The college facilitates multiple scholarship schemes for deserving students:</p>
            <ul className="space-y-3">
              <li><strong>Post-Matric Scholarship (SC/ST/OBC):</strong> Karnataka government scholarships covering tuition and maintenance for reserved categories.</li>
              <li><strong>Merit-Based Scholarships:</strong> For top scorers in 10+2 board examinations.</li>
              <li><strong>Minority Scholarship:</strong> For eligible students from minority communities.</li>
              <li><strong>EWS Fee Concession:</strong> Fee waivers for economically weaker section students on case-by-case basis.</li>
              <li><strong>National Scholarship Portal (NSP):</strong> Centrally funded scholarships for eligible students.</li>
            </ul>
            <Link href="/scholarships" className="text-blue-700 font-semibold underline inline-block mt-2">View all Scholarships →</Link>
          </div>
        </section>

        <section id="placements">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Placements &amp; Career Support</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-3">
            <p>The college has an active <strong>Placement and Career Development Cell</strong> that connects students with top employers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Campus recruitment drives with IT, banking, retail, and services sector companies.</li>
              <li>Resume writing workshops, mock interviews, and personality development training.</li>
              <li>Internship facilitation through industry MoUs and alumni networks.</li>
              <li>Career counselling for higher studies: MBA, MCA, M.Com., UPSC, and professional certifications.</li>
              <li>Industry visits and guest lectures by Bengaluru-based corporate professionals.</li>
            </ul>
            <p className="text-sm text-gray-500 pt-1">Alumni have been placed with companies including Infosys, TCS, Wipro, HDFC Bank, Axis Bank, and Accenture.</p>
          </div>
        </section>

        <section id="accreditation">
          <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-yellow-400 pl-4 mb-6">Accreditation &amp; Recognition</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-gray-700 space-y-3">
            <ul className="space-y-3">
              <li><strong>✓ NAAC Accredited</strong> — Quality assurance in teaching, infrastructure, and governance.</li>
              <li><strong>✓ UGC Recognised</strong> — Under Sections 2(f) and 12(B) of the UGC Act, 1956.</li>
              <li><strong>✓ Dr. Manmohan Singh Bengaluru City University Affiliated</strong> — One of the long-standing affiliated colleges, maintaining standards for 40+ years.</li>
              <li><strong>✓ IQAC Active</strong> — Internal Quality Assurance Cell ensuring continuous improvement.</li>
              <li><strong>✓ AICTE Compliance</strong> — Programmes are aligned with All India Council for Technical Education guidelines.</li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-950 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Join RBANMS First Grade College?</h2>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Applications for 2026–27 are now open. Join thousands of successful alumni who began their journey here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admission" className="bg-yellow-400 text-blue-950 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">Apply Now</Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-950 transition-colors font-semibold">Contact Admissions Office</Link>
          </div>
          <div className="mt-6 text-sm text-blue-300 space-y-1">
            <p>📍 12, Annaswamy Mudaliar Road, Ulsoor, Bengaluru – 560042</p>
            <p>📞 080-25512976 / 080-48533572 | 📧 info@rbanmsfgc.edu.in</p>
          </div>
        </section>

      </div>
    </main>
  );
}
