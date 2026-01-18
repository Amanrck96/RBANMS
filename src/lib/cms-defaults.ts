
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

    'about-intro': {
        title: "About RBANM's First Grade College",
        content: `
            <p class="mb-4">RBANM’s First Grade College was established by RBANM’s Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
            <p class="mb-4">This is one of the many institutions established under the umbrella of the RBANM’s Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
            <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
        `
    },
    'about-founders-vision': {
        title: "Founder's Vision",
        content: '<p>Our founder, Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar, envisioned an educational system that empowers the marginalized and fosters equality. His dream was to provide affordable, quality education to all sections of society, a legacy we strictly adhere to.</p>'
    },
    'about-core-values': {
        title: 'Core Values',
        content: `
            <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700">
                <li><strong>Excellence:</strong> Striving for the highest standards in all aspects of education.</li>
                <li><strong>Integrity:</strong> Upholding honesty and ethical behavior in our community.</li>
                <li><strong>Inclusivity:</strong> Treating everyone with dignity and respect, embracing diversity.</li>
                <li><strong>Social Responsibility:</strong> contributing to the well-being of society and the nation.</li>
                <li><strong>Compassion:</strong> Fostering a supportive and caring environment for students and staff.</li>
            </ul>
        `
    },
    'about-awards': {
        title: 'Awards & Recognition',
        content: `
            <p class="mb-6 text-lg">RBANNM's First Grade College has a long-standing tradition of excellence, recognized by various academic and social bodies. Our commitment to holistic education and community service has earned us numerous accolades.</p>
            <div class="space-y-4">
                <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
                    <h3 class="font-bold text-xl text-primary">Best College for Holistic Education (2024)</h3>
                    <p class="text-gray-700">Awarded by the Bangalore Education Trust for excellence in balancing academics with extracurricular development.</p>
                </div>
                <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                    <h3 class="font-bold text-xl text-primary">Green Campus Award (2023)</h3>
                    <p class="text-gray-700">Recognized for our sustainable practices, including solar energy adoption and waste management initiatives.</p>
                </div>
                <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                    <h3 class="font-bold text-xl text-primary">NSS Best Unit Award</h3>
                    <p class="text-gray-700">Our National Service Scheme unit has been consistently recognized for its impactful rural development camps and social awareness drives.</p>
                </div>
            </div>
        `
    },
    'academics-index': {
        title: 'Academics',
        content: `
            <p class="mb-4 text-lg">At RBANNM's First Grade College, academics is not just about clearing examinations; it is about igniting a passion for learning, developing critical thinking, and building a foundation for a successful career and a meaningful life.</p>
            <p class="mb-4">Our academic structure is designed to be rigorous yet flexible, allowing students to explore their interests while mastering the core fundamentals of their chosen discipline. We offer undergraduate programs in Commerce, Management, Computer Applications, and Arts, all affiliated with Bangalore City University.</p>
            <h3 class="text-xl font-bold text-primary mt-6 mb-3">Our Approach</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Student-Centric Learning:</strong> Focus on individual attention and mentorship.</li>
                <li><strong>Innovative Pedagogy:</strong> Use of ICT tools, case studies, and project-based learning.</li>
                <li><strong>Industry Integration:</strong> Regular guest lectures, workshops, and industrial visits.</li>
                <li><strong>Value-Added Courses:</strong> Certification programs to enhance employability.</li>
            </ul>
        `
    },
    'academics-new-courses': {
        title: 'New Courses',
        content: `
            <p class="mb-6 text-lg">In response to the changing demands of the industry and society, we continuously evolve our curriculum and introduce new programs. These courses are designed to equip students with cutting-edge skills and future-ready knowledge.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">B.A. in Journalism & Mass Communication</h3>
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3 font-semibold">New Introduction</span>
                    <p class="text-gray-700 mb-3">A comprehensive program preparing students for the dynamic world of media, covering print, broadcast, and digital journalism.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">B.Sc. in Data Science</h3>
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3 font-semibold">Coming Soon</span>
                    <p class="text-gray-700 mb-3">An upcoming interdisciplinary program focusing on big data, machine learning, and statistical analysis to meet the growing demand for data professionals.</p>
                </div>
            </div>
        `
    },
    'academics-addon-courses': {
        title: 'Add-on Courses',
        content: `
            <p class="mb-6 text-lg">Enhance your degree with our specialized certification and value-added courses designed to boost employability and skills.</p>
            <div class="grid gap-8">
                <div>
                    <h3 class="text-2xl font-bold text-primary mb-4">BCA</h3>
                    <div class="bg-slate-50 p-6 rounded-lg border">
                        <h4 class="text-xl font-bold text-blue-900 mb-2">Web Development + Career Prep</h4>
                        <p>Foundation course covering HTML, CSS, JavaScript, resume building, and job search strategies.</p>
                    </div>
                </div>
                 <div>
                    <h3 class="text-2xl font-bold text-primary mb-4">Commerce</h3>
                    <div class="bg-slate-50 p-6 rounded-lg border">
                        <h4 class="text-xl font-bold text-blue-900 mb-2">Tally and GST</h4>
                        <p>Skill-building initiative focused on strengthening accounting and digital finance abilities.</p>
                    </div>
                </div>
            </div>
        `
    },

    // Dept Management (BBA)
    'gallery': {
        title: 'Gallery',
        content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/group-hiking.jpg" alt="Students on a hiking trip" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">Students on a hiking trip.</figcaption>
                </figure>
                <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/natya-singing-1.jpg" alt="Student performing at Natya event" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">Student performing at Natya event.</figcaption>
                </figure>
                <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/natya-singing-2.jpg" alt="Natya cultural performance" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">Natya cultural performance.</figcaption>
                </figure>
                <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/ncc-cadet.jpg" alt="NCC Cadet receiving badge" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">NCC Cadet receiving badge.</figcaption>
                </figure>
                <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/orientation-lamp.jpg" alt="Lighting the lamp at Orientation" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">Lighting the lamp at Orientation.</figcaption>
                </figure>
                 <figure class="rounded-lg overflow-hidden border bg-white">
                    <img src="/images/gallery/aids-awareness-rally.jpg" alt="AIDS Awareness Campaign Rally" class="w-full h-auto aspect-video object-cover" />
                    <figcaption class="p-3 text-sm text-gray-600">AIDS Awareness Campaign Rally.</figcaption>
                </figure>
            </div>
        `
    },
    'blog-header': {
        title: 'Blog',
        tagline: 'Latest updates and articles from RBANM\'s First Grade College',
        content: ''
    },

    // Dept Management (BBA)
    'dept-management': {
        title: 'Department of Management (BBA)',
        content: '<p>Developing future business leaders through comprehensive curriculum, industry exposure, and practical management skills.</p>'
    },
    'academics-courses': {
        title: 'Courses Offered',
        tagline: 'Discover our diverse range of undergraduate programs designed to empower you with knowledge, skills, and future-ready capabilities.',
        content: `
            <div class="space-y-12">
                <!-- BCA -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <h3 class="text-2xl font-bold text-blue-900 mb-2">Bachelor of Computer Applications (BCA)</h3>
                    <p class="mb-4 text-gray-700">The BCA (Bachelor of Computer Applications) is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications. It is designed for students who aspire to build a career in the tech industry, covering subjects like database management, networking, web development, and cybersecurity.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Software Development, IT Applications</li>
                        <li><strong>Career Roles:</strong> Software Developer, Web Designer, System Analyst</li>
                    </ul>
                </div>

                <!-- B.Com -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <h3 class="text-2xl font-bold text-blue-900 mb-2">Bachelor of Commerce (B.Com)</h3>
                    <p class="mb-4 text-gray-700">The B.Com (Bachelor of Commerce) is a three-year undergraduate degree that provides in-depth knowledge of commerce, finance, accounting, taxation, and business law. It is ideal for students interested in banking, finance, and corporate sectors.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Commerce, Finance, Accounting</li>
                        <li><strong>Career Roles:</strong> Accountant, Financial Analyst, Tax Consultant</li>
                    </ul>
                </div>

                <!-- BBA -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <h3 class="text-2xl font-bold text-blue-900 mb-2">Bachelor of Business Administration (BBA)</h3>
                    <p class="mb-4 text-gray-700">The BBA (Bachelor of Business Administration) is a three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Management, Entrepreneurship, Marketing</li>
                        <li><strong>Career Roles:</strong> Business Analyst, HR Manager, Marketing Executive</li>
                    </ul>
                </div>

                <!-- BA -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <h3 class="text-2xl font-bold text-blue-900 mb-2">Bachelor of Arts (BA)</h3>
                    <p class="mb-4 text-gray-700">The BA (Bachelor of Arts) is a three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and the social sciences, helping students develop critical thinking, research, and analytical skills.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Humanities, Social Sciences</li>
                        <li><strong>Career Roles:</strong> Journalism, Teaching, Social Work</li>
                    </ul>
                </div>

                <!-- BA Physical Education -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-2xl font-bold text-blue-900">Bachelor of Arts (Physical Education)</h3>
                        <span class="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">New</span>
                    </div>
                    <p class="text-sm font-semibold text-primary mb-2">Physical Education with History & Political Science (Expected to begin in June 2026)</p>
                    <p class="mb-4 text-gray-700">The BA in Physical Education combines sports science with humanities subjects like History and Political Science. This three-year undergraduate program is designed for students passionate about sports, fitness, and education. It covers sports psychology, exercise physiology, coaching techniques, and sports management alongside analytical subjects.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Sports Science, Humanities</li>
                        <li><strong>Career Roles:</strong> Sports Coach, Fitness Trainer, Sports Administrator</li>
                    </ul>
                </div>

                <!-- BA Journalism -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-2xl font-bold text-blue-900">Bachelor of Arts (Journalism)</h3>
                        <span class="px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-200">New</span>
                    </div>
                    <p class="text-sm font-semibold text-primary mb-2">Journalism, History & Economics (Expected to begin in June 2026)</p>
                    <p class="mb-4 text-gray-700">The BA in Journalism with History and Economics is a three-year undergraduate program that blends media studies with social sciences. This specialization develops strong communication, research, and analytical skills essential for the media industry. Students learn news writing, reporting, media ethics, and digital journalism alongside historical context and economic analysis.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 3 Years</li>
                        <li><strong>Focus:</strong> Media Studies, Social Sciences</li>
                        <li><strong>Career Roles:</strong> Journalist, Content Creator, Media Producer</li>
                    </ul>
                </div>

                <!-- M.Com -->
                <div class="border-l-4 border-primary pl-6 py-2">
                    <h3 class="text-2xl font-bold text-blue-900 mb-2">Masters in Commerce (M.Com)</h3>
                    <p class="mb-4 text-gray-700">This two year post-graduate degree provides an opportunity to upgrade a career in commerce and accounting. At RBANM’s FGC, the M.Com programme is designed to cater to working professionals.</p>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                        <li><strong>Duration:</strong> 2 Years</li>
                        <li><strong>Focus:</strong> Commerce, Accounting, Professional Development</li>
                        <li><strong>Career Roles:</strong> Senior Accountant, Finance Manager, Corporate Professional</li>
                    </ul>
                </div>
            </div>
        `
    },
    'contact-info': {
        title: 'Contact Information',
        content: `
            <div className="flex items-start gap-4 mb-3">
                <span className="font-bold min-w-[80px]">Address:</span>
                <p>Opposite Ulsoor Lake, 12 Annasawmy Mudaliar Road, Bangalore 560042</p>
            </div>
            <div className="flex items-center gap-4 mb-3">
                <span className="font-bold min-w-[80px]">Email:</span>
                <a href="mailto:info@rbanmsfgc.edu.in" className="text-primary hover:underline">info@rbanmsfgc.edu.in</a>
            </div>
            <div className="flex items-center gap-4 mb-3">
                <span className="font-bold min-w-[80px]">Placement:</span>
                <a href="mailto:priyamahesh09@gmail.com" className="text-primary hover:underline">priyamahesh09@gmail.com</a>
            </div>
            <div className="flex items-start gap-4 mb-3">
                <span className="font-bold min-w-[80px]">Phone:</span>
                <div>
                   <p>Landline: 080-41653395 / 080-25512976</p>
                   <p>Mobile: 7349251497</p>
                </div>
            </div>
        `
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
        content: `
            <p class="mb-4 text-lg">Our alumni are our greatest ambassadors. They stay connected with their alma mater through various initiatives that benefit current students and society.</p>
            <div class="space-y-4">
               <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 class="font-bold text-lg text-indigo-900">Mentorship Program</h3>
                    <p class="text-gray-700">Senior alumni from top corporates guide final-year students on career choices and interview preparation.</p>
               </div>
               <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 class="font-bold text-lg text-indigo-900">Annual Alumni Meet</h3>
                    <p class="text-gray-700">A yearly gathering held on the second Saturday of January to reconnect, network, and celebrate shared memories.</p>
               </div>
               <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 class="font-bold text-lg text-indigo-900">Community Outreach</h3>
                    <p class="text-gray-700">Alumni-led initiatives including blood donation camps, digital literacy drives for the underprivileged, and environmental awareness campaigns.</p>
               </div>
            </div>
        `
    },
    'career': {
        title: 'Career Opportunities',
        content: `
            <p class="mb-4 text-lg">Join our team of dedicated educators and professionals.</p>
            <p class="mb-4">At RBANM's First Grade College, we value passion, integrity, and a commitment to student success. If you are looking for a fulfilling career in academia or administration, we invite you to explore our current openings.</p>
            <p><strong>Current Openings:</strong></p>
            <ul class="list-disc pl-5 mb-4">
                <li>Assistant Professor - Commerce</li>
                <li>Lab Instructor - Computer Science</li>
                <li>Office Assistant</li>
            </ul>
            <p>To apply, please email your resume to <a href="mailto:info@rbanmsfgc.edu.in" class="text-primary hover:underline">info@rbanmsfgc.edu.in</a>.</p>
        `
    },
    'rti': {
        title: 'Right to Information (RTI)',
        content: `
            <p class="mb-4 text-lg">Transparency and accountability are the pillars of our governance.</p>
            <p class="mb-4">Right to Information Act 2005 mandates timely response to citizen requests for government information. RBANM's First Grade College is committed to providing information to the public as per the provisions of the RTI Act.</p>
            <h3 class="text-xl font-bold text-primary mt-6 mb-3">Public Information Officers</h3>
            <table class="w-full border-collapse border border-gray-300 mt-2 text-sm">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border border-gray-300 p-2 text-left">Role</th>
                        <th class="border border-gray-300 p-2 text-left">Name</th>
                        <th class="border border-gray-300 p-2 text-left">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2">Appellate Authority</td>
                        <td class="border border-gray-300 p-2">Dr. Shanti Iyer (Principal)</td>
                        <td class="border border-gray-300 p-2">principal@rbanmsfgc.edu.in</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">Public Information Officer</td>
                        <td class="border border-gray-300 p-2">Office Superintendent</td>
                        <td class="border border-gray-300 p-2">office@rbanmsfgc.edu.in</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    'governance': {
        title: 'Governance',
        content: `
            <p class="mb-4 text-lg">Robust governance structure ensuring ethical management and academic excellence.</p>
            <p class="mb-4">The college is managed by the RBANM's Educational Charities Trust, a body with over a century of service to society. The governance structure ensures that all institutional activities align with the vision and mission of our founder.</p>
            <div class="space-y-6 mt-6">
                <div class="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">Board of Trustees</h3>
                    <p class="text-gray-700">Comprised of eminent personalities from various fields, the Board provides strategic direction and oversight to the institution.</p>
                </div>
                <div class="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">Governing Council</h3>
                    <p class="text-gray-700">Responsible for the administration and academic policies of the college, ensuring compliance with university and government regulations.</p>
                </div>
            </div>
        `
    },
    'code-of-conduct': {
        title: 'Code of Conduct',
        content: `
            <p class="mb-4">To maintain high standards of discipline and professionalism, all students and staff are expected to adhere to the college's code of conduct.</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>Respect for all members of the college community.</li>
                <li>Adherence to dress code and ID card regulations.</li>
                <li>Prohibition of ragging in any form (Zero Tolerance).</li>
                <li>Regular attendance and punctuality.</li>
                <li>Responsible use of college facilities and resources.</li>
            </ul>
        `
    },
    'industry-field-trip': {
        title: 'Field Trips',
        content: `
            <p class="mb-6 text-lg">Experiential learning beyond the classroom boundaries.</p>
            <p class="mb-4">Field trips are a vital part of our curriculum, providing students with practical insights and real-world exposure. They help bridge the gap between theoretical knowledge and its application.</p>
            <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="bg-blue-100 p-2 rounded-full text-blue-700 font-bold shrink-0">01</div>
                    <div>
                        <h4 class="font-bold text-lg">Historical Heritage Walks</h4>
                        <p class="text-gray-600">Department of History organizes walks to historical sites in and around Bangalore to study architecture and culture.</p>
                    </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div class="bg-blue-100 p-2 rounded-full text-blue-700 font-bold shrink-0">02</div>
                    <div>
                        <h4 class="font-bold text-lg">Environmental Study Tours</h4>
                        <p class="text-gray-600">The Eco Club and Department of Botany conduct trips to botanical gardens and nature reserves.</p>
                    </div>
                </div>
            </div>
        `
    },
    'industry-visits': {
        title: 'Industry Visits',
        content: `
            <p class="mb-6 text-lg">Connecting students with the corporate world.</p>
            <p class="mb-4">Our approach to education includes regular interaction with the industry. Industrial visits provide students with an opportunity to observe corporate operations, understand work culture, and interact with industry professionals.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div class="border p-4 rounded-lg text-center hover:bg-blue-50 transition">
                    <span class="block text-2xl font-bold text-primary mb-1">Tech Parks</span>
                    <span class="text-sm text-gray-600">For BCA Students</span>
                </div>
                <div class="border p-4 rounded-lg text-center hover:bg-blue-50 transition">
                    <span class="block text-2xl font-bold text-primary mb-1">Manufacturing Units</span>
                    <span class="text-sm text-gray-600">For Management Students</span>
                </div>
                <div class="border p-4 rounded-lg text-center hover:bg-blue-50 transition">
                    <span class="block text-2xl font-bold text-primary mb-1">Banks & Financial Inst.</span>
                    <span class="text-sm text-gray-600">For Commerce Students</span>
                </div>
                <div class="border p-4 rounded-lg text-center hover:bg-blue-50 transition">
                    <span class="block text-2xl font-bold text-primary mb-1">Media Houses</span>
                    <span class="text-sm text-gray-600">For Journalism Students</span>
                </div>
            </div>
        `
    },
    'industry-addon': {
        title: 'Add-on Programmes',
        content: `
            <p class="mb-6 text-lg">We offer a range of value-added courses in collaboration with industry partners to bridge the skill gap and enhance employability.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div class="border p-4 rounded hover:shadow-md transition bg-white">
                    <h3 class="font-bold text-primary mb-1">Advanced Excel & Tally</h3>
                    <p class="text-sm text-gray-600">For Commerce & Management students to master financial tools.</p>
                 </div>
                 <div class="border p-4 rounded hover:shadow-md transition bg-white">
                    <h3 class="font-bold text-primary mb-1">Digital Marketing</h3>
                    <p class="text-sm text-gray-600">Certification in SEO, SMM, and Content Marketing.</p>
                 </div>
                 <div class="border p-4 rounded hover:shadow-md transition bg-white">
                    <h3 class="font-bold text-primary mb-1">Python for Everybody</h3>
                    <p class="text-sm text-gray-600">Introductory programming course open to all streams.</p>
                 </div>
                 <div class="border p-4 rounded hover:shadow-md transition bg-white">
                    <h3 class="font-bold text-primary mb-1">Soft Skills & Etiquette</h3>
                    <p class="text-sm text-gray-600">Workshops on communication, team building, and corporate grooming.</p>
                 </div>
            </div>
        `
    },
    'administration': {
        title: 'Administration',
        content: `
            <p class="mb-6 text-lg">Our administrative team is the backbone of the college, ensuring smooth day-to-day operations and providing essential support to students and faculty.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-blue-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">College Office</h3>
                    <p class="text-gray-700 mb-2">Handles admissions, fee collection, and general enquiries.</p>
                    <p class="text-sm font-semibold">Contact: office@rbanmsfgc.edu.in</p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">Examination Section</h3>
                    <p class="text-gray-700 mb-2">Manages internal assessments and university examinations.</p>
                    <p class="text-sm font-semibold">Contact: exams@rbanmsfgc.edu.in</p>
                </div>
            </div>
        `
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
            <p>We invite submissions from students and faculty. Please contact the editorial board for guidelines.</p>
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
