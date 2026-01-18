
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
        content: '<p>Information about awards and recognition received by the college and its students.</p>'
    },
    'academics-index': {
        title: 'Academics',
        content: '<p>Explore our academic structure, courses, and educational philosophy.</p>'
    },
    'academics-new-courses': {
        title: 'New Courses',
        content: '<p>Details about newly introduced courses and programs will appear here.</p>'
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
    'cell-yrc': {
        title: 'YRCS (Youth Red Cross Society)',
        content: '<p>The Youth Red Cross Society unit focuses on the protection of health and life, service to the sick, and promotion of international friendship through humanitarian values and community service.</p>'
    },
    'industry-field-trip': {
        title: 'Field Trips',
        content: '<p>Information about educational field trips coming soon.</p>'
    },
    'industry-visits': {
        title: 'Industry Visits',
        content: '<p>Information about industry visits and partnerships coming soon.</p>'
    },
    'industry-addon': {
        title: 'Add-on Programmes',
        content: '<p>Skill-building and certification programmes offered in collaboration with industry partners.</p>'
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
