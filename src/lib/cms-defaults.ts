
export const CMS_DEFAULTS: Record<string, { title: string; content: string; imageUrl?: string;[key: string]: any }> = {
    'home-intro': {
        title: 'Introduction',
        content: `
            <p>RBANM's First Grade College was established by RBANM's Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
            <p>This is one of the many institutions established under the umbrella of the RBANM's Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
            <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
        `
    },
    'about-founder': {
        title: 'Our Founder',
        content: `
            <p>Arcot Narrainswamy Mudaliar was a pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality, education, and social justice. Born in Arcot in 1827, he moved to Bangalore as a child, shouldering the responsibility of his family after his father's demise.</p>
            <p>Despite his business success, what set Mudaliar apart was his progressive vision for society. In 1873, he founded the Free English Primary School in Bangalore Cantonment for non-white students—an assertion of the principle of equality at a time when education was a privilege of the elite.</p>
            <p>Mudaliar also championed gender and caste equality with the founding of the Thirukulatar School in 1883 and the Govindammal Girls School in 1886.</p>
        `,
        imageUrl: '/images/founder.jpg'
    },
    'about-history': {
        title: 'History of the College',
        content: `
            <div class="space-y-6">
                <p>RBANM’s First Grade College was established by RBANM’s Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
                <p>This is one of the many institutions established under the umbrella of the RBANM’s Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
                <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
                <div class="mt-8">
                    <h3 class="text-2xl font-bold text-[#b91c1c] mb-4">Our Commitment</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Provides a value-driven and holistic education, fostering intellectual, physical, mental, and spiritual growth.</li>
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Offers inclusive education, ensuring that students from all social and economic backgrounds receive quality learning opportunities.</li>
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Maintains discipline, punctuality, and responsibility in both students and staff.</li>
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Encourages students to pursue academic excellence with a sense of curiosity and passion.</li>
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Supports holistic development through sports, cultural activities, and NCC programs.</li>
                        <li class="flex items-start"><span class="mr-2 text-[#b91c1c]">•</span>Engages students in community development and nation-building, shaping them into socially responsible citizens.</li>
                    </ul>
                </div>
            </div>
        `
    },
    'about-vision': {
        title: 'Our Vision',
        content: `
            <div class="space-y-8">
                <p class="text-lg font-bold text-center text-gray-600 mb-10">The vision of RBANMS is built upon three fundamental principles:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="flex flex-col items-start text-left">
                        <h3 class="text-2xl font-bold text-[#b91c1c] mb-2">Equity</h3>
                        <p class="text-gray-600">Ensuring that every student, regardless of their background, has access to the same opportunities, resources, and support needed to succeed.</p>
                    </div>
                    <div class="flex flex-col items-start text-left">
                        <h3 class="text-2xl font-bold text-[#b91c1c] mb-2">Justice</h3>
                        <p class="text-gray-600">Upholding fairness and integrity in education and society. RBANMS strives to create a learning environment where students are encouraged to act with honesty and respect.</p>
                    </div>
                    <div class="flex flex-col items-start text-left">
                        <h3 class="text-2xl font-bold text-[#b91c1c] mb-2">Equality</h3>
                        <p class="text-gray-600">Providing an inclusive education system where every individual is treated with dignity and given the same chances to achieve their fullest potential.</p>
                    </div>
                </div>
            </div>
        `
    },
    'about-mission': {
        title: 'Our Mission',
        content: `
            <div class="space-y-6">
                <p class="text-lg text-gray-600 mb-6">At RBANMS, we are committed to providing quality education that empowers students to excel in life, staying true to the visionary dream of our founder. Our mission is to:</p>
                <ul class="space-y-4">
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Nurture young minds with knowledge, shaping them into confident and capable individuals.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Deliver a strong foundation in Arts, Science, and Commerce, equipping students with a broad and deep understanding of their fields.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Develop essential life skills like critical thinking, communication, and problem-solving.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Foster leadership qualities and social responsibility, preparing students to make meaningful contributions.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Incorporate ethical standards, professionalism, and a lifelong curiosity for learning.</span></li>
                </ul>
            </div>
        `
    },
    'about-director': {
        title: 'Message from Director',
        content: 'Education must go beyond the syllabus and prepare students for life so that their professional success is balanced with personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful.',
        imageUrl: '/images/director_new.png'
    },
    'about-principal': {
        title: 'Message from Principal',
        content: 'The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. Our objective is to create efficient academicians, innovative entrepreneurs, and responsible citizens.',
        imageUrl: '/images/migrated/principal-whatsapp.jpeg'
    },
    'dept-commerce': {
        title: 'Department of Commerce',
        content: '<p>Welcome to the Department of Commerce. Since 1984, we have been shaping capable graduates through practical learning and innovation, delivering education that meets global standards.</p>'
    },
    'dept-commerce-sidebar': {
        title: 'Department Team',
        content: '<p>Our dedicated faculty and eager students.</p>',
        imageUrl: '/images/departments/commerce/group_photo.jpg'
    },
    'page-dept-commerce-tab-why-bcom': {
        title: 'Why B.COM?',
        content: '<p>The Commerce stream builds strong fundamentals in accounting, finance, taxation, economics, and business management while developing digital, analytical, and communication skills.</p>'
    },
    'page-dept-commerce-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Practical Learning</li><li>Add-on programmes</li><li>Strong Faculty</li><li>Industry Alignment</li><li>Clubs and Cells</li></ul>'
    },
    'page-dept-commerce-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>Nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment.</p>'
    },
    'page-dept-commerce-tab-skills': {
        title: 'Skill Set Acquired',
        content: '<ul><li>Financial Literacy</li><li>Business Fundamentals</li><li>Analytical Ability</li><li>Digital Competence</li><li>Communication Skills</li></ul>'
    },
    'page-dept-commerce-tab-matrix': {
        title: 'Paper Titles',
        content: '<p>Core papers across 6 semesters including Financial Accounting, Marketing, and GST.</p>'
    },
    'page-dept-commerce-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Gain fundamental knowledge of accounting, finance, taxation, and business management.</p>'
    },
    'page-dept-commerce-tab-activities': {
        title: 'Activities',
        content: '<p>Industrial visits, Magic Bus training, and NISM certifications.</p>'
    },
    'page-dept-commerce-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced Associate and Assistant Professors guide students with expertise.</p>'
    },

    // Dept Management (BBA)
    'dept-management': {
        title: 'Department of Management (BBA)',
        content: '<p>Developing future business leaders through comprehensive curriculum, industry exposure, and practical management skills.</p>'
    },
    'page-dept-management-tab-why-bba': {
        title: 'Why BBA?',
        content: '<p>The BBA program is designed to provide a strong foundation in business management with specializations in HR and Marketing.</p>'
    },
    'page-dept-management-tab-skills': {
        title: 'Skill Set Acquired',
        content: '<p>Strategic thinking, leadership, professional communication, and marketing orientation.</p>'
    },
    'page-dept-management-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Dual Specialization</li><li>Mentorship</li><li>Career Pathways</li><li>Certifications</li></ul>'
    },
    'page-dept-management-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>Diversity & Inclusion, Equality, Career Opportunities, and Inclusive Excellence.</p>'
    },
    'page-dept-management-tab-matrix': {
        title: 'Paper Titles',
        content: '<p>Course matrix covering 6 semesters of management studies.</p>'
    },
    'page-dept-management-tab-objectives': {
        title: 'Objectives',
        content: '<p>Develop comprehensive business competencies with dual specialization.</p>'
    },
    'page-dept-management-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Business Acumen, HR Expertise, Marketing Competence, and Strategic Thinking.</p>'
    },
    'page-dept-management-tab-activities': {
        title: 'Activities',
        content: '<p>Certificate training, industry visits, and entrepreneurship lectures.</p>'
    },
    'page-dept-management-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced faculty members in Management and Accounting.</p>'
    },

    // Dept BCA
    'dept-bca': {
        title: 'Department of Computer Applications (BCA)',
        content: '<p>Providing quality education in computer science and applications.</p>'
    },
    'page-dept-bca-tab-overview': {
        title: 'Overview',
        content: '<p>Strong foundation in software development and applications.</p>'
    },
    'page-dept-bca-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Hands-on Labs</li><li>Industry Projects</li><li>Coding Clubs</li></ul>'
    },
    'page-dept-bca-tab-syllabus': {
        title: 'Syllabus',
        content: '<p>Comprehensive curriculum covering Programming, Web Tech, and AI.</p>'
    },
    'page-dept-bca-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced IT professionals and academicians.</p>'
    },

    // Dept Arts
    'dept-arts': {
        title: 'Department of Arts',
        content: '<p>Exploring the world through History, Economics, and Political Science.</p>'
    },
    'page-dept-arts-tab-highlights': {
        title: 'Highlights',
        content: '<p>Well-defined curriculum with emphasis on analytical reasoning.</p>'
    },
    'page-dept-arts-tab-skills': {
        title: 'Skills Developed',
        content: '<p>Critical thinking, public speaking, and research orientation.</p>'
    },
    'page-dept-arts-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>To develop an academic environment for social sciences with intellectual discipline.</p>'
    },
    'page-dept-arts-tab-courses': {
        title: 'Courses',
        content: '<p>B.A with History, Economics, and Political Science.</p>'
    },
    'page-dept-arts-tab-objectives': {
        title: 'Objectives',
        content: '<p>Strengthen students\' practical understanding of economic and social concepts.</p>'
    },
    'page-dept-arts-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Disciplinary knowledge, application, and global competencies.</p>'
    },
    'page-dept-arts-tab-history': {
        title: 'History',
        content: '<p>Emphasis on context, continuity, and transformation.</p>'
    },
    'page-dept-arts-tab-economics': {
        title: 'Economics',
        content: '<p>Informed decisions about limited resources.</p>'
    },
    'page-dept-arts-tab-political-science': {
        title: 'Political Science',
        content: '<p>Evaluate political systems, policies, and institutions.</p>'
    },
    'page-dept-arts-tab-activities': {
        title: 'Activities',
        content: '<p>Eco-Wizz quiz, Mock Budget, and Educational visits.</p>'
    },
    'page-dept-arts-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Distinguished professors and researchers in social sciences.</p>'
    },

    // Missing top-level pages
    'alumni-activity': {
        title: 'Alumni Activity',
        content: '<p>Digital India support campaign and other community initiatives.</p>'
    },
    'career': {
        title: 'Career Opportunities',
        content: '<p>Join our team and be part of a legacy that values compassion and education.</p>'
    },
    'rti': {
        title: 'RTI',
        content: '<p>Right to Information details coming soon.</p>'
    },
    'governance': {
        title: 'Governance',
        content: '<p>Institutional governance and board details coming soon.</p>'
    },
    'code-of-conduct': {
        title: 'Code of Conduct',
        content: '<p>Professional and ethical standards for students and staff.</p>'
    },
    'dept-english': {
        title: 'Department of English',
        content: '<p>Dedicated to developing language proficiency, literary appreciation, and communication skills essential for academic and professional success.</p>'
    },
    'dept-languages': {
        title: 'Department of Languages',
        content: '<p>Promoting multilingual proficiency and cultural diversity through comprehensive language programs including Kannada, Hindi, Sanskrit, and other regional languages.</p>'
    },
    'dept-physed': {
        title: 'Department of Physical Education',
        content: '<p>Committed to holistic development through sports, fitness, and physical training programs that build discipline, teamwork, and healthy lifestyles.</p>'
    },
    'cell-nss': {
        title: 'National Service Scheme (NSS)',
        content: '<p>The NSS unit promotes social responsibility through community service, rural development programs, and nation-building activities. Students participate in camps, awareness drives, and social welfare projects.</p>'
    },
    'cell-ncc-army': {
        title: 'NCC Army Wing',
        content: '<p>The NCC Army Wing instills discipline, leadership, and patriotism among students through military training, adventure activities, and character building exercises.</p>'
    },
    'cell-ncc-navy': {
        title: 'NCC Naval Wing',
        content: '<p>The NCC Naval Wing provides unique maritime training opportunities, leadership development, and serves as a platform for students interested in naval careers.</p>'
    },
    'cell-ipc': {
        title: 'Internal Placement Cell (IPC)',
        content: '<p>The IPC bridges the gap between academics and industry by organizing training sessions, workshops, and recruitment drives to ensure our graduates are employable and confident.</p>'
    },
    'cell-manasa': {
        title: 'Manasa – Counselling Cell',
        content: '<p>Manasa prioritizes mental wellbeing and emotional support for students through professional counseling, stress management workshops, and peer support programs.</p>'
    },
    'cell-womens': {
        title: 'Women\'s Cell',
        content: '<p>Dedicated to empowering female students through awareness programs, skill development, safety initiatives, and support systems that promote gender equality.</p>'
    },
    'cell-eco': {
        title: 'Eco Club',
        content: '<p>Creating environmental awareness and promoting sustainable practices through tree plantation drives, waste management initiatives, and green campus activities.</p>'
    },
    'cell-cultural': {
        title: 'Cultural Committee',
        content: '<p>Celebrating creativity, talent, and diversity through cultural events, festivals, competitions, and platforms for students to showcase their artistic abilities.</p>'
    },
    'cell-antiragging': {
        title: 'Anti-Ragging Committee',
        content: '<p>Zero tolerance policy towards ragging. The committee ensures a safe campus environment through vigilance, awareness campaigns, and strict disciplinary action.</p>'
    },
    'cell-grievance': {
        title: 'Grievance Redressal Cell',
        content: '<p>Providing a transparent mechanism for students to voice concerns and complaints, ensuring timely resolution and maintaining institutional harmony.</p>'
    },
    'cell-aicte': {
        title: 'AICTE Committee',
        content: '<p>Ensuring compliance with AICTE norms and regulations, maintaining academic standards, and implementing quality enhancement initiatives as per regulatory requirements.</p>'
    },
    'cell-discipline': {
        title: 'Discipline Committee',
        content: '<p>Maintaining order, decorum, and professional conduct on campus through clear guidelines, fair enforcement, and character development programs.</p>'
    },
    'cell-exam': {
        title: 'Examination Committee',
        content: '<p>Ensuring transparency, fairness, and efficiency in all examination processes including conduct, evaluation, and result publication.</p>'
    },
    'cell-iqac': {
        title: 'Internal Quality Assurance Cell (IQAC)',
        content: '<p>The driving force behind academic excellence, continuously monitoring and enhancing quality of teaching, learning, and infrastructure through NAAC compliance and best practices.</p>'
    },
    'administration': {
        title: 'Administration',
        content: '<p>The backbone of our college - efficient, responsive, and dedicated to supporting the academic environment and student welfare.</p>'
    },
    'facilities': {
        title: 'Facilities',
        content: `
            <p>RBANMS First Grade College offers state-of-the-art facilities to support academic excellence and holistic development:</p>
            <ul>
                <li><strong>Modern Classrooms:</strong> Well-equipped smart classrooms with audio-visual aids</li>
                <li><strong>Library:</strong> Extensive collection of books, journals, and digital resources</li>
                <li><strong>Computer Labs:</strong> Latest hardware and software for practical learning</li>
                <li><strong>Sports Facilities:</strong> Playgrounds, indoor sports, and fitness equipment</li>
                <li><strong>Auditorium:</strong> For seminars, cultural events, and guest lectures</li>
            </ul>
        `
    },
    'scholarships': {
        title: 'Scholarships',
        content: `
            <p>We believe in making quality education accessible. Various scholarship opportunities are available:</p>
            <ul>
                <li>Government scholarships for SC/ST/OBC students</li>
                <li>Merit-based scholarships</li>
                <li>Need-based financial assistance</li>
                <li>Sports and cultural achievement scholarships</li>
            </ul>
        `
    },
    'naac': {
        title: 'NAAC Accreditation',
        content: '<p>RBANMS First Grade College is accredited by NAAC (National Assessment and Accreditation Council), demonstrating our commitment to maintaining high academic standards and quality education.</p>'
    },
    'contact-info': {
        title: 'Contact Information',
        content: `
            <p><strong>RBANMS First Grade College</strong></p>
            <p>Address: Palace Road, Bangalore</p>
            <p>Phone: [Phone Number]</p>
            <p>Email: info@rbanmsfgc.edu.in</p>
        `
    },
    'academics-courses': {
        title: 'Courses Offered',
        content: '<p>We offer undergraduate programs in Commerce (B.Com), Management (BBA), Computer Applications (BCA), and Arts with various specializations.</p>'
    },
    'academics-rules': {
        title: 'Academic Rules & Regulations',
        content: `
            <ul>
                <li>Minimum 75% attendance required</li>
                <li>Regular internal assessments</li>
                <li>Adherence to university examination guidelines</li>
                <li>Code of conduct for students</li>
            </ul>
        `
    },
    'home-hero': {
        title: 'Welcome to RBANMS',
        content: '<h1>Empowering Generations Since 1883</h1><p>A legacy of excellence in education and character building.</p>',
        imageUrl: '/images/hero/hero-2.jpg'
    },
    '8': {
        title: 'Campus Updates',
        content: '',
        major_events_image: '/images/hero/hero-1.jpg',
        major_events_alt: 'Campus Event',
        major_events_text: ['Annual Sports Day', 'Cultural Fest 2026', 'Inter-college Debate'],
        month_that_was_items: [
            { title: "MILANA", date: "November 7, 2025", text: "Inter high school / PU cultural competition hosted at FGC" },
            { title: "SPICMACAY - Saraikela Chhau", date: "November 13, 2025", text: "Folk Dance from Odisha, Lecture-Demonstration" },
            { title: "Pre-Final Exams", date: "November 14-22, 2025", text: "Internal assessments for all departments" },
            { title: "NAADAHABBA", date: "November 19, 2025", text: "Folk dances of Karnataka at Sabha. Open to all and the Media." },
            { title: "SPICMACAY: Sattriya Dance", date: "November 27, 2025", text: "Classical dance from Assam, Lecture - Demonstration" },
            { title: "Tribute to Bharatiyar", date: "November 29, 2025", text: "An event by the Department of Languages - Tamil" }
        ],
        announcements_text: `
            <ul class="space-y-2 list-disc list-inside">
                <li>Admissions open for AY 2026-27. For a Campus Tour, email info@rbanmsfgc.edu.in.</li>
                <li>The Even Semester for AY 2025-26 will begin on January 16, 2026 for Faculty and all Final Year students.</li>
                <li>Regular classes for all courses will commence on January 27.</li>
                <li>Second and First Year students will begin classes on January 27.</li>
            </ul>
        `,
        brochure_image: '/images/phoenix-magazine.png',
        brochure_alt: 'College Magazine',
        upcoming_events_text: [
            'Internal Assessment - Jan 20',
            'Republic Day Celebration - Jan 26',
            'Industrial Visit - Feb 05'
        ],
        blog_text: `
            <p>Welcome to our blog section where we share insights, stories, and updates from our college community. Stay tuned for upcoming articles on academic excellence, student achievements, and educational initiatives that shape the future of learning.</p>
            <p>Blog content coming soon...</p>
        `
    },
    'header-top': {
        title: 'Header Top Bar',
        content: ''
    },
    'home-top-banner': {
        title: 'Home Hero Carousel',
        content: '',
        imageUrl: '' // Use this for overriding the first slide or adding a featured slide
    },
    'footer-about': {
        title: 'Footer Copyright',
        content: '<p>&copy; 2025 RBANM\'s First Grade College. All Rights Reserved.</p>'
    }
};
