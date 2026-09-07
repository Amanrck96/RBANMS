export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  published: boolean;
  createdAt: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
}

export const staticBlogPosts: BlogPostItem[] = [
  {
    id: "blog-1",
    slug: "career-opportunities-after-bca-bcom-guide",
    title: "Career Opportunities After BCA & B.Com: A Comprehensive Guide for Graduates",
    authorName: "Placement & Career Development Cell",
    published: true,
    createdAt: "2026-08-10T10:00:00.000Z",
    category: "Career Guidance",
    excerpt: "Explore the most rewarding career pathways, higher education options, and industry certifications available for BCA and B.Com graduates in today's competitive job market.",
    content: `
      <h2>Navigating Career Choices in the Modern Economy</h2>
      <p>Graduating with an undergraduate degree like Bachelor of Computer Applications (BCA) or Bachelor of Commerce (B.Com.) from an affiliated institution like RBANMS First Grade College opens numerous doors. The key is understanding how to leverage your coursework, practical projects, and additional certifications to match industry demands.</p>
      
      <h3>Top Career Pathways for BCA Graduates</h3>
      <p>With Bengaluru being the Silicon Valley of India, BCA graduates enjoy proximity to global tech enterprises, startups, and IT consultancy firms. Promising roles include:</p>
      <ul>
        <li><strong>Software Developer / Web Engineer:</strong> Building full-stack web and mobile applications using modern frameworks like React, Node.js, and Python.</li>
        <li><strong>Database Administrator & Data Analyst:</strong> Managing enterprise SQL/NoSQL databases and extracting business intelligence insights.</li>
        <li><strong>Cloud & DevOps Associate:</strong> Assisting in deploying cloud infrastructure on AWS, Azure, and Google Cloud Platform.</li>
        <li><strong>Higher Studies (MCA / M.Sc. IT):</strong> Pursuing master's degrees for specialized research and leadership roles in software engineering.</li>
      </ul>

      <h3>Promising Career Pathways for B.Com. Graduates</h3>
      <p>A B.Com degree provides foundational mastery in financial accounting, corporate taxation, auditing, and business jurisprudence:</p>
      <ul>
        <li><strong>Chartered Accountancy (CA) & CMA:</strong> The gold standard professional qualifications in auditing, taxation, and management accounting.</li>
        <li><strong>Corporate Banking & Financial Services:</strong> Executive roles in investment banking, retail banking, risk assessment, and financial planning.</li>
        <li><strong>Corporate Compliance & GST Consultation:</strong> Guiding enterprises through modern tax regimes and regulatory compliance.</li>
        <li><strong>Master of Business Administration (MBA):</strong> Specializing in Finance, Marketing, or HR for corporate leadership careers.</li>
      </ul>

      <h3>The Role of RBANMS Placement Cell</h3>
      <p>The RBANMS Placement and Career Development Cell conducts periodic aptitude training, resume-building workshops, and mock technical interviews. By participating actively in on-campus recruitment drives, students regularly secure placements in leading firms across Karnataka.</p>
    `
  },
  {
    id: "blog-2",
    slug: "why-naac-accreditation-matters-for-your-degree",
    title: "Why NAAC Accreditation Matters When Choosing Your Degree College",
    authorName: "Internal Quality Assurance Cell (IQAC)",
    published: true,
    createdAt: "2026-07-25T11:30:00.000Z",
    category: "Academic Quality",
    excerpt: "Understanding how NAAC accreditation ensures quality teaching, modern laboratory infrastructure, transparent governance, and national recognition for your higher education.",
    content: `
      <h2>The Benchmark of Higher Education Excellence</h2>
      <p>When prospective students and parents evaluate undergraduate institutions in Bengaluru, the National Assessment and Accreditation Council (NAAC) grading is one of the most critical parameters to consider. Established by the UGC, NAAC evaluates colleges across rigorous benchmarks of academic performance, infrastructure, and institutional values.</p>

      <h3>Key Pillars of NAAC Evaluation</h3>
      <p>NAAC assesses institutions on seven comprehensive criteria:</p>
      <ol>
        <li><strong>Curricular Aspects:</strong> Relevance, academic flexibility, and integration of cross-cutting issues like environmental ethics and gender equity.</li>
        <li><strong>Teaching-Learning & Evaluation:</strong> Quality of full-time faculty, student-centric pedagogical methods, ICT-enabled classrooms, and transparent examination systems.</li>
        <li><strong>Research, Innovations & Extension:</strong> Community outreach programs through NSS and NCC units, faculty publications, and student research projects.</li>
        <li><strong>Infrastructure & Learning Resources:</strong> Library volumes, digital databases, science laboratories, computer facilities, and sports grounds.</li>
        <li><strong>Student Support & Progression:</strong> Scholarships, career guidance, anti-ragging compliance, and alumni engagement.</li>
        <li><strong>Governance, Leadership & Management:</strong> Visionary leadership, institutional transparency, and staff welfare policies.</li>
        <li><strong>Institutional Values & Best Practices:</strong> Green campus initiatives, solar energy adoption, and inclusive education for underprivileged students.</li>
      </ol>

      <h3>How Accreditation Benefits RBANMS Students</h3>
      <p>RBANMS First Grade College's NAAC accreditation assures students that their degree is recognized by universities worldwide for post-graduate admissions and corporate recruiters for employment. Furthermore, it enables eligibility for various state and central government scholarship grants.</p>
    `
  },
  {
    id: "blog-3",
    slug: "holistic-student-development-through-nss-ncc",
    title: "Holistic Student Development Through NSS and NCC at RBANMS",
    authorName: "Student Affairs & Community Outreach",
    published: true,
    createdAt: "2026-06-18T09:15:00.000Z",
    category: "Student Life",
    excerpt: "Discover how co-curricular wings like the National Cadet Corps (NCC) and National Service Scheme (NSS) instill discipline, leadership, and social responsibility in our students.",
    content: `
      <h2>Beyond the Classroom: Building Character and Leadership</h2>
      <p>At RBANMS First Grade College, education extends far beyond textbooks and lecture halls. Under the legacy of RBANMS Educational Charities, cultivating social responsibility, civic awareness, and physical fitness is integral to holistic student transformation.</p>

      <h3>National Cadet Corps (NCC) Units</h3>
      <p>Our college hosts active NCC Army and Navy wings. NCC cadets undergo rigorous military-style drill training, weapon handling fundamentals, obstacle courses, and national integration camps (NIC/RDC). Cadets consistently earn:</p>
      <ul>
        <li>'B' and 'C' Certificate qualifications, granting preferential bonus marks and direct entry schemes in Indian Armed Forces and police services.</li>
        <li>Participation in Republic Day and Independence Day state parades.</li>
        <li>Enhanced leadership qualities, crisis management skills, and team cohesion.</li>
      </ul>

      <h3>National Service Scheme (NSS) Activities</h3>
      <p>The NSS unit embodies the motto <em>'Not Me, But You'</em>. Throughout the academic year, student volunteers participate in:</p>
      <ul>
        <li>Annual 7-day Special Rural Camping programs focusing on health hygiene, village sanitation, and literacy drives.</li>
        <li>Ulsoor Lake environmental cleaning and tree plantation campaigns.</li>
        <li>Voluntary Blood Donation Camps conducted in collaboration with the Indian Red Cross Society.</li>
        <li>Voter awareness rallies and disaster relief collection drives.</li>
      </ul>
      <p>These experiences provide students with invaluable real-world perspective and empathy, shaping them into responsible global citizens.</p>
    `
  },
  {
    id: "blog-4",
    slug: "mastering-bengaluru-city-university-exams-tips",
    title: "Mastering Bengaluru City University Semester Exams: Proven Study Strategies",
    authorName: "Academic Advisory Committee",
    published: true,
    createdAt: "2026-05-12T14:00:00.000Z",
    category: "Academic Tips",
    excerpt: "Actionable study methods, time management techniques, and revision schedules designed to help undergraduate students excel in BCU semester examinations.",
    content: `
      <h2>Structured Preparation for Semester Success</h2>
      <p>Semester examinations under Bengaluru City University (BCU) evaluate both conceptual depth and structured presentation. Preparing systematically throughout the academic calendar ensures high CGPA scores without last-minute stress.</p>

      <h3>1. Map the University Syllabus & Weightage</h3>
      <p>Begin each semester by reviewing the official BCU syllabus for your discipline. Identify unit-wise mark weightages and prioritize core foundational topics before progressing to advanced modules.</p>

      <h3>2. Solve Previous Five Years' Question Papers</h3>
      <p>The library at RBANMS provides physical and digital archives of university question papers. Solving these papers under timed conditions helps you:</p>
      <ul>
        <li>Understand the recurring question patterns and mark allocations (2-mark, 5-mark, and 12/15-mark questions).</li>
        <li>Refine time allocation so you never run out of time during final theory papers.</li>
      </ul>

      <h3>3. Master Diagrammatic and Structured Presentation</h3>
      <p>In subjects like Economics, Computer Science, and Business Management, clean flowcharts, architecture diagrams, and formula derivations elevate your answer sheets, demonstrating analytical clarity to examiners.</p>

      <h3>4. Utilize Faculty Mentorship & Library Resources</h3>
      <p>Our faculty members conduct dedicated revision sessions and doubt-clearing clinics before study holidays. Students are encouraged to leverage reference textbooks, journals, and quiet study halls in the college library.</p>
    `
  },
  {
    id: "blog-5",
    slug: "rbanms-educational-charities-historic-legacy",
    title: "RBANMS Educational Charities: Over 140 Years of Educational Philanthropy",
    authorName: "College Archive & Heritage Committee",
    published: true,
    createdAt: "2026-04-05T10:30:00.000Z",
    category: "Heritage",
    excerpt: "Reflecting on the inspiring philanthropic journey of Dharmarathnakara Rai Bahadur Arcot Narrainsawmy Mudaliar and his enduring legacy of inclusive education in Bangalore.",
    content: `
      <h2>A Visionary Mission That Transformed Bangalore's Education Landscape</h2>
      <p>The history of RBANMS First Grade College is inextricably woven into the noble vision of <strong>Dharmarathnakara Rai Bahadur Arcot Narrainsawmy Mudaliar</strong>, an eminent visionary and philanthropist who dedicated his life and fortune to democratizing education in the late 19th century.</p>

      <h3>Pioneering Education Since 1873</h3>
      <p>Believing passionately that socio-economic backwardness could only be overcome through quality secular education, Sri Narrainsawmy Mudaliar established the RBANMS Educational Charities in 1873. He founded educational institutions open to children of all communities, castes, and creeds at a time when such inclusive education was virtually unprecedented.</p>

      <h3>Establishment of the First Grade College in 1983</h3>
      <p>To provide accessible tertiary education to graduating students, the RBANMS Educational Charities Trust established the First Grade College in 1983. For over 40 years, the college has upheld the founding principles:</p>
      <ul>
        <li>Affordable fee structures enabling first-generation college learners to achieve undergraduate degrees.</li>
        <li>Generous trust-managed scholarships and financial fee concessions for underprivileged students.</li>
        <li>State-of-the-art academic facilities situated along the serene banks of Ulsoor Lake.</li>
      </ul>
      <p>Today, thousands of alumni from RBANMS First Grade College serve with distinction in government services, multinational corporations, educational institutions, and entrepreneurial ventures across the world.</p>
    `
  }
];
