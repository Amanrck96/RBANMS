
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
            <div class="space-y-6 text-gray-800">
                <p class="text-lg leading-relaxed"><strong>Arcot Narrainswamy Mudaliar</strong> was a pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality, education, and social justice. Born in Arcot in 1827, he moved to Bengaluru as a child, shouldering the responsibility of his family after his father’s demise. His entrepreneurial acumen led him to establish successful businesses, including Mysore Hall and Bangalore Agency, making him one of the wealthiest merchants of his time.</p>

                <p>Despite his business success, what set Mudaliar apart was his progressive vision for society. Deeply influenced by the idea that wealth was a trust for the upliftment of the needy, he dedicated himself to philanthropy, particularly in education. In 1873, he founded the <strong>Free English Primary School</strong> in Bangalore Cantonment for non-white students—an assertion of the principle of equality at a time when education was a privilege of the elite. Remarkably, despite not being literate in English himself, he understood its value in empowering future generations.</p>

                <h3 class="text-xl font-bold text-blue-900 mt-4">Champion of Equality</h3>
                <p>Mudaliar also championed gender and caste equality, first, with the founding of the <strong>Thirukulatar School in 1883</strong>, which provided education to the most marginalized castes from untouchable communities, defying rigid social hierarchies that completely excluded them from mainstream education. In 1886, he established the <strong>Govindammal Girls School</strong>, recognizing that education was the key to women's empowerment, at a time when societal norms relegated women to domestic roles.</p>

                <h3 class="text-xl font-bold text-blue-900 mt-4">Social & Humanitarian Impact</h3>
                <p>His impact was not limited to education. Mudaliar established one of Bangalore’s earliest technical schools in 1897, breaking the barriers of hereditary professions and providing opportunities for skill development. His response to the devastating famine of 1876-1878 demonstrated his humanitarian spirit, as he set up feeding centers and later an orphanage, which evolved into a permanent hostel for the underprivileged.</p>

                <p>Mudaliar’s reformist outlook was also reflected in his association with the <strong>Brahmo Samaj</strong>, an organization advocating against caste discrimination and ritualistic Hindu practices. His legacy of challenging caste hierarchies was carried forward by his descendants, who played a role in temple entry movements and supported the Indian independence struggle, including contributions to Mahatma Gandhi’s South African campaign.</p>

                <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 my-6">
                    <h3 class="text-lg font-bold text-blue-900 mb-2">A Legacy That Inspires Generations</h3>
                    <p class="italic text-gray-700">"Narrainswamy Mudaliar’s life and work prefigured many ideals later enshrined in the Indian Constitution, particularly the principles of equality and non-discrimination. His unwavering commitment to social reform, particularly in education, caste, and gender equality, places him among the visionary reformers of 19th-century India."</p>
                </div>
            </div>
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
        content: '<p>Welcome to the Department of Commerce. Since 1984, we have been shaping capable graduates through practical learning and innovation, delivering education that meets global standards.</p>',
        tagline: 'Empowering students with strong fundamentals in accounting, finance, and business management since 1984.'
    },
    'dept-commerce-sidebar': {
        title: 'Department Team',
        content: '<p>Our dedicated faculty and eager students.</p>',
        imageUrl: '/images/departments/commerce/group_photo.jpg'
    },
    'page-dept-commerce-tab-why-bcom': {
        title: 'Why B.COM?',
        content: `
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                <p class="text-lg font-medium text-blue-900">The Bachelor of Commerce (B.Com) is the most sought-after course for students aspiring for a career in finance, banking, and business.</p>
            </div>
            <p class="mb-4">Our B.Com program goes beyond the textbook. It is designed to build a robust foundation in:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">Financial Proficiency</h4>
                    <p class="text-sm text-gray-600">Mastering Financial Accounting, Cost Accounting, and Corporate Accounting.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">Taxation Experts</h4>
                    <p class="text-sm text-gray-600">In-depth knowledge of GST and Income Tax laws.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">Banking & Insurance</h4>
                    <p class="text-sm text-gray-600">Understanding the modern banking system and insurance regulations.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">Business Laws</h4>
                    <p class="text-sm text-gray-600">Legal frameworks governing corporate entities.</p>
                </div>
            </div>
        `
    },
    'page-dept-commerce-tab-highlights': {
        title: 'Highlights',
        content: `
            <ul class="space-y-3">
                <li class="flex items-start bg-slate-50 p-3 rounded"><span class="mr-3 text-green-600 font-bold">✓</span><div><strong>Practical Learning:</strong> Regular workshops on Tally Prime and Advanced Excel.</div></li>
                <li class="flex items-start bg-slate-50 p-3 rounded"><span class="mr-3 text-green-600 font-bold">✓</span><div><strong>Industry Experts:</strong> Guest lectures by CAs and Finance Managers.</div></li>
                <li class="flex items-start bg-slate-50 p-3 rounded"><span class="mr-3 text-green-600 font-bold">✓</span><div><strong>Career Focus:</strong> Dedicated placement training for roles in Banking and MNCs.</div></li>
                <li class="flex items-start bg-slate-50 p-3 rounded"><span class="mr-3 text-green-600 font-bold">✓</span><div><strong>Commerce Club:</strong> 'Vanijya' club organizes fests, quizzes, and mock stock markets.</div></li>
            </ul>
        `
    },
    'page-dept-commerce-tab-vision': {
        title: 'Vision & Mission',
        content: `
            <div class="space-y-6">
                <div class="text-center bg-blue-50 p-6 rounded-xl">
                   <h3 class="text-xl font-bold text-blue-900 mb-2">Vision</h3>
                   <p class="text-lg italic text-blue-800">"To be a centre of excellence in Commerce education, nurturing values, ethics, and professional competence."</p>
                </div>
                <div class="grid gap-4">
                    <h3 class="font-bold text-lg border-b pb-2">Mission</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>To provide a strong conceptual foundation in Commerce.</li>
                        <li>To foster an entrepreneurial mindset among students.</li>
                        <li>To instill ethical values and social responsibility in future business leaders.</li>
                    </ul>
                </div>
            </div>
        `
    },
    'page-dept-commerce-tab-skills': {
        title: 'Skill Set Acquired',
        content: `
            <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Financial Analysis</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Taxation Compliance</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Tally & ERP</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Auditing</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Business Communication</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm">Market Research</span>
            </div>
        `
    },
    'page-dept-commerce-tab-matrix': {
        title: 'Paper Titles',
        content: `
            <p class="mb-4">The B.Com curriculum is spread across 6 semesters (NEP Syllabus).</p>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left border rounded-lg">
                    <thead class="bg-gray-100 uppercase text-gray-700">
                        <tr><th class="px-4 py-3">Sem</th><th class="px-4 py-3">Core Subjects (Key)</th></tr>
                    </thead>
                    <tbody class="divide-y">
                        <tr class="bg-white"><td class="px-4 py-3 font-bold">1 & 2</td><td class="px-4 py-3">Financial Accounting, Management Principles, Digital Fluency</td></tr>
                        <tr class="bg-gray-50"><td class="px-4 py-3 font-bold">3 & 4</td><td class="px-4 py-3">Corporate Accounting, Costing, Artificial Intelligence</td></tr>
                        <tr class="bg-white"><td class="px-4 py-3 font-bold">5 & 6</td><td class="px-4 py-3">Income Tax, Auditing, GST, Financial Management</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    'page-dept-commerce-tab-outcomes': {
        title: 'Outcomes',
        content: `
            <div class="space-y-4">
                <p>Upon graduation, a B.Com student will be able to:</p>
                <div class="flex gap-3">
                     <span class="text-2xl">📊</span>
                     <p>Prepare and analyze financial statements of companies.</p>
                </div>
                <div class="flex gap-3">
                     <span class="text-2xl">💰</span>
                     <p>File tax returns (GST and Income Tax) independently.</p>
                </div>
                <div class="flex gap-3">
                     <span class="text-2xl">👔</span>
                     <p>Work effectively in corporate finance or audit teams.</p>
                </div>
            </div>
        `
    },
    'page-dept-commerce-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced Associate and Assistant Professors guide students with expertise.</p>'
    },
    'page-dept-commerce-tab-activities': {
        title: 'Activities',
        content: '<p>Industrial visits, Magic Bus training, and NISM certifications.</p>'
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
        tagline: 'Small business leaders through comprehensive curriculum, industry exposure, and practical management skills.',
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
        content: `
            <div class="space-y-4">
                <p>Curriculum spread across 6 semesters (NEP Syllabus) with Dual Specialization in HR and Marketing.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border p-3 rounded"><strong>Sem 1:</strong> Principles of Management, Market Analysis, Statistics I, Financial Accounting</div>
                    <div class="border p-3 rounded"><strong>Sem 2:</strong> HRM Practices, Indian Financial System, Statistics II, Corporate Accounting</div>
                    <div class="border p-3 rounded"><strong>Sem 3:</strong> Cost Accounting, Organizational Behaviour, Marketing Principles, Business Comm</div>
                    <div class="border p-3 rounded"><strong>Sem 4:</strong> Business Law, Research Methodology, Financial Management, CRM</div>
                    <div class="border p-3 rounded"><strong>Sem 5:</strong> Operations Management, Income Tax I, HR Development, Consumer Behaviour</div>
                    <div class="border p-3 rounded"><strong>Sem 6:</strong> International Business, Income Tax II, Advertising & Media, Compensation Mgmt</div>
                </div>
            </div>
        `
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

    // Dept English
    'dept-english': {
        title: 'Department of English',
        tagline: 'Nurturing linguistic proficiency and literary appreciation through a comprehensive and engaging curriculum.',
        content: '<p>The Department of English at RBANM’s First Grade College is committed to fostering a love for language and literature while developing critical thinking and communication skills essential for the modern world.</p>'
    },
    'page-dept-english-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Regular workshops on creative writing and theater.</li><li>Strong focus on communication skills and personality development.</li><li>Active student clubs like Natya and Fourth Wall.</li><li>Regular guest lectures by eminent scholars and authors.</li></ul>'
    },
    'page-dept-english-tab-facilities': {
        title: 'Facilities',
        content: '<p>The department uses ICT-enabled classrooms and the college’s well-equipped library to enhance the learning experience.</p>'
    },
    'page-dept-english-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>To empower students with a masterly over the English language and a deep appreciation for the diversity of human experience reflected in literature.</p>'
    },
    'page-dept-english-tab-programmes': {
        title: 'Programmes',
        content: '<p>The department offers English as a mandatory language subject for all undergraduate courses (B.Com, BBA, BCA, BA).</p>'
    },
    'page-dept-english-tab-certificate-courses': {
        title: 'Certificate Courses',
        content: '<p>Value-added courses in Business Communication and Creative Writing are offered to enhance employability.</p>'
    },
    'page-dept-english-tab-matrix': {
        title: 'Paper Titles',
        content: '<p>Course matrix covering English and Additional English subjects across 4-6 semesters depends on the course.</p>'
    },
    'page-dept-english-tab-objectives': {
        title: 'Objectives',
        content: '<p>To develop students’ ability to communicate effectively in English and to engage critically with literary texts.</p>'
    },
    'page-dept-english-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Graduates will demonstrate proficiency in English communication and critical analysis of various literary genres.</p>'
    },
    'page-dept-english-tab-natya': {
        title: 'Natya',
        content: '<p>The Natya club provides a platform for students to showcase their talents in theater, music, and dance.</p>'
    },
    'page-dept-english-tab-fourth-wall': {
        title: 'Fourth Wall',
        content: '<p>A theater group dedicated to exploring contemporary social issues through dramatic performances.</p>'
    },
    'page-dept-english-tab-phoenix': {
        title: 'Phoenix Club',
        content: '<p>A literary club that encourages students to express their creativity through writing and poetry.</p>'
    },
    'page-dept-english-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced faculty members dedicated to student mentorship and academic excellence.</p>'
    },
    'page-dept-english-tab-contact': {
        title: 'Contact Information',
        content: '<p>Email: english@rbanmsfgc.edu.in</p>'
    },

    // Dept Languages
    'dept-languages': {
        title: 'Department of Languages',
        tagline: 'Promoting linguistic diversity and cultural understanding through the study of Kannada, Hindi, and Tamil.',
        content: '<p>The Department of Languages plays a vital role in preserving and promoting India’s rich linguistic heritage while developing students’ communication skills in their mother tongues and other regional languages.</p>'
    },
    'page-dept-languages-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Celebration of cultural festivals and language days.</li><li>Language labs and interactive learning sessions.</li><li>Promotion of regional literature and arts.</li></ul>'
    },
    'page-dept-languages-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>To foster a deep appreciation for linguistic diversity and to equip students with the skills required to communicate effectively in various languages.</p>'
    },
    'page-dept-languages-tab-objectives': {
        title: 'Objectives',
        content: '<p>To develop linguistic proficiency and cultural awareness among students through the study of regional languages.</p>'
    },
    'page-dept-languages-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Students will demonstrate proficiency in their chosen languages and a nuanced understanding of the associated cultures.</p>'
    },
    'page-dept-languages-tab-hindi': {
        title: 'Hindi',
        content: '<p>Promoting the national language through literary events and language proficiency classes.</p>'
    },
    'page-dept-languages-tab-kannada': {
        title: 'Kannada',
        content: '<p>Focusing on the rich heritage of Kannada literature and the state’s cultural traditions.</p>'
    },
    'page-dept-languages-tab-tamil': {
        title: 'Tamil',
        content: '<p>Exploring the ancient and diverse literary traditions of the Tamil language.</p>'
    },
    'page-dept-languages-tab-events': {
        title: 'Events',
        content: '<p>Annual language festivals, poetry readings, and debate competitions.</p>'
    },
    'page-dept-languages-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Dedicated language experts specializing in various regional literatures.</p>'
    },
    'page-dept-languages-tab-contact': {
        title: 'Contact Information',
        content: '<p>Email: languages@rbanmsfgc.edu.in</p>'
    },

    // Dept Physical Education
    'dept-physed': {
        title: 'Department of Physical Education',
        tagline: 'Fostering physical fitness, sportsmanship, and holistic well-being among students.',
        content: '<p>The Department of Physical Education is dedicated to promoting a culture of health and fitness through a wide range of sports and recreational activities.</p>'
    },
    'page-dept-physed-tab-highlights': {
        title: 'Highlights',
        content: '<ul><li>Annual Sports Day and inter-departmental tournaments.</li><li>Excellent facilities for both indoor and outdoor sports.</li><li>Consistent achievements in university-level sports competitions.</li></ul>'
    },
    'page-dept-physed-tab-vision': {
        title: 'Vision & Mission',
        content: '<p>To inspire every student to adopt a healthy and active lifestyle through participation in sports and physical activities.</p>'
    },
    'page-dept-physed-tab-facilities': {
        title: 'Facilities',
        content: '<p>Large playground for outdoor sports and well-equipped indoor sports facilities.</p>'
    },
    'page-dept-physed-tab-courses': {
        title: 'Courses',
        content: '<p>Physical Education is offered as an elective and a value-added course for undergraduate students.</p>'
    },
    'page-dept-physed-tab-events': {
        title: 'Events',
        content: '<p>Organization of sports festivals, fitness workshops, and athletic meets.</p>'
    },
    'page-dept-physed-tab-contact': {
        title: 'Contact Information',
        content: '<p>Email: sports@rbanmsfgc.edu.in</p>'
    },

    // Dept BCA
    'dept-bca': {
        title: 'Department of Computer Applications (BCA)',
        content: '<p class="text-lg">The BCA Department is the technology hub of the college, dedicated to creating future-ready IT professionals with strong coding and analytical skills.</p>'
    },
    'page-dept-bca-tab-overview': {
        title: 'Overview',
        content: `
            <div class="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <p class="text-lg font-medium text-indigo-900">The BCA program bridges the gap between academic knowledge and industry requirements in the IT sector.</p>
            </div>
            <p class="mt-4">It focuses on providing a sound theoretical background as well as good practical exposure to students in the relevant areas. It increases the employability of the students in the IT sector.</p>
        `
    },
    'page-dept-bca-tab-highlights': {
        title: 'Highlights',
        content: `
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">🖥️ High-Tech Labs</h4>
                    <p class="text-sm text-gray-600">State-of-the-art computer labs with latest configuration and high-speed internet.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">🚀 Project Work</h4>
                    <p class="text-sm text-gray-600">Mandatory live projects in final year using technologies like Python, Java, and React.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">💡 Tech-Manthan Club</h4>
                    <p class="text-sm text-gray-600">Active student club organizing hackathons, IT quizzes, and coding debugging contests.</p>
                </div>
                <div class="bg-white p-4 rounded border shadow-sm">
                    <h4 class="font-bold text-gray-800">🌐 Web Development</h4>
                    <p class="text-sm text-gray-600">Special focus on Full Stack Development (MERN Stack) workshops.</p>
                </div>
            </div>
        `
    },
    'page-dept-bca-tab-syllabus': {
        title: 'Syllabus',
        content: `
            <p class="mb-3">The syllabus is updated regularly to align with Industry 4.0 standards.</p>
            <ul class="space-y-2 list-disc pl-5">
                <li><strong>Sem 1-2:</strong> C Programming, Data Structures, Web Design, Math for CS.</li>
                <li><strong>Sem 3-4:</strong> Java, Python, Operating Systems, Database Management (DBMS).</li>
                <li><strong>Sem 5-6:</strong> Artificial Intelligence, Cloud Computing, Cyber Security, Major Project.</li>
            </ul>
        `
    },
    'page-dept-bca-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Experienced IT professionals and academicians.</p>'
    },
    'page-dept-bca-tab-facilities': {
        title: 'Facilities',
        content: '<p>Multiple high-tech labs with the latest configurations and software for hands-on learning.</p>'
    },
    'page-dept-bca-tab-competency-training': {
        title: 'Competency Training',
        content: '<p>Specialized training in trending technologies like Cloud Computing and AI.</p>'
    },
    'page-dept-bca-tab-certificate-courses': {
        title: 'Certificate Courses',
        content: '<p>Value-added courses in Web Development, Python Programming, and Cyber Security.</p>'
    },
    'page-dept-bca-tab-matrix': {
        title: 'Paper Titles',
        content: `
            <div class="space-y-4">
                <p>Core subjects designed for full-stack software development competency.</p>
                <ul class="space-y-2">
                    <li><strong>Sem 1-2:</strong> C Programming, Data Structures, Web Design, Discrete Mathematics.</li>
                    <li><strong>Sem 3-4:</strong> Object Oriented Programming (Java), Python, DBMS (MySQL), Operating Systems.</li>
                    <li><strong>Sem 5-6:</strong> Software Engineering, Cloud Computing, AI & Machine Learning, Cyber Security, Major Project.</li>
                </ul>
            </div>
        `
    },
    'page-dept-bca-tab-objectives': {
        title: 'Objectives',
        content: '<p>To bridge the gap between academic knowledge and industry requirements in the IT sector.</p>'
    },
    'page-dept-bca-tab-outcomes': {
        title: 'Outcomes',
        content: '<p>Graduates will be proficient in software development, database management, and networking.</p>'
    },
    'page-dept-bca-tab-forum': {
        title: 'BCA Forum',
        content: '<p>A student-led forum for technical workshops, hackathons, and guest lectures.</p>'
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
    'page-dept-arts-tab-activities': {
        title: 'Activities',
        content: '<p>Eco-Wizz quiz, Mock Budget, and Educational visits.</p>'
    },
    'page-dept-arts-tab-faculty': {
        title: 'Faculty Profile',
        content: '<p>Distinguished professors and researchers in social sciences.</p>'
    },
    'page-dept-arts-tab-contact': {
        title: 'Contact Information',
        content: '<p>Email: arts@rbanmsfgc.edu.in</p>'
    },
    'page-dept-arts-tab-history': {
        title: 'History',
        content: '<p>The study of History provides students with a sense of context, continuity, and transformation. Our curriculum covers Ancient, Medieval, and Modern Indian History alongside European and World History.</p>'
    },
    'page-dept-arts-tab-economics': {
        title: 'Economics',
        content: '<p>Developing analytical skills to understand economic theories, market behaviors, and fiscal policies. Students explore Microeconomics, Macroeconomics, and Indian Economic development.</p>'
    },
    'page-dept-arts-tab-political-science': {
        title: 'Political Science',
        content: '<p>Understanding political systems, constitutions, and international relations. The course covers Political Theory, Indian Polity, and Comparative Politics.</p>'
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
            <p class="mb-6 text-lg">RBANMS First Grade College offers state-of-the-art facilities designed to support academic excellence and holistic student development.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-blue-600 font-bold">📚</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Central Library</h4>
                        <p class="text-sm text-gray-600">Extensive collection of over 25,000 books, journals, and access to digital resources like INFLIBNET.</p>
                    </div>
                </div>
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-green-600 font-bold">💻</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Computer Labs</h4>
                        <p class="text-sm text-gray-600">Three high-tech labs with 100+ systems, high-speed internet, and latest software for practical learning.</p>
                    </div>
                </div>
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-purple-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-purple-600 font-bold">🏟️</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Sports Complex</h4>
                        <p class="text-sm text-gray-600">Expansive playground for cricket and football, plus indoor facilities for table tennis and badminton.</p>
                    </div>
                </div>
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-yellow-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-yellow-600 font-bold">🎭</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Auditorium</h4>
                        <p class="text-sm text-gray-600">A 500-seater modern auditorium with excellent acoustics for cultural events, seminars, and guest lectures.</p>
                    </div>
                </div>
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-red-600 font-bold">🏫</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Smart Classrooms</h4>
                        <p class="text-sm text-gray-600">ICT-enabled classrooms with projectors and audio systems to facilitate interactive learning.</p>
                    </div>
                </div>
                <div class="bg-white p-5 rounded-lg border shadow-sm flex gap-4">
                    <div class="bg-orange-100 p-3 rounded-full h-12 w-12 flex items-center justify-center text-orange-600 font-bold">☕</div>
                    <div>
                        <h4 class="font-bold text-lg mb-1">Cafeteria</h4>
                        <p class="text-sm text-gray-600">Hygienic and affordable food options available for students and staff in a clean environment.</p>
                    </div>
                </div>
            </div>
        `
    },
    'scholarships': {
        title: 'Scholarships & Financial Aid',
        content: `
            <p class="mb-6 text-lg">We strictly believe that financial constraints should never hinder a student's education. RBANMS offers and facilitates various scholarship schemes.</p>
            <div class="space-y-4">
                <div class="border rounded-lg p-4 bg-white hover:shadow-md transition">
                    <h3 class="text-lg font-bold text-primary mb-2">Government Scholarships</h3>
                    <ul class="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        <li><strong>SSP (State Scholarship Portal):</strong> For SC/ST and OBC students of Karnataka.</li>
                        <li><strong>NSP (National Scholarship Portal):</strong> For minority community students.</li>
                        <li><strong>Labor Welfare Fund:</strong> For children of construction/unorganized sector workers.</li>
                    </ul>
                </div>
                <div class="border rounded-lg p-4 bg-white hover:shadow-md transition">
                    <h3 class="text-lg font-bold text-primary mb-2">Institutional Management Scholarships</h3>
                    <p class="text-gray-600 text-sm mb-2">RBANMS Charities provides financial assistance to meritorious students from economically weaker sections.</p>
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Merit-Cum-Means</span>
                </div>
                <div class="border rounded-lg p-4 bg-white hover:shadow-md transition">
                    <h3 class="text-lg font-bold text-primary mb-2">Endowment Awards</h3>
                    <p class="text-gray-600 text-sm">Cash prizes and awards instituted by alumni and philanthropists for subject toppers and best outgoing students.</p>
                </div>
                <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 class="font-bold text-yellow-800 mb-1">📢 How to Apply?</h4>
                    <p class="text-sm text-yellow-900">Applications are typically opened at the beginning of the academic year. Contact the College Office or the Scholarship Committee Nodal Officer for assistance.</p>
                </div>
            </div>
        `
    },
    'naac': {
        title: 'NAAC Accreditation',
        tagline: 'National Assessment and Accreditation Council (NAAC) Documentation',
        content: '<p>RBANMS First Grade College is accredited by NAAC (National Assessment and Accreditation Council), demonstrating our commitment to maintaining high academic standards and quality education.</p>',
        certificateItems: [
            { id: 'c4-cert', name: 'Cycle - 4', type: 'file', url: 'https://drive.google.com/file/d/1p8XTQ5vo3Qk9rRoWWrfsDNlXrqY3wUEq/view?usp=sharing' },
            { id: 'c3-cert', name: 'Cycle - 3', type: 'file', url: 'https://drive.google.com/file/d/1VQUzoE5vVt0DHPmqHPBckSOyCEJSrpzM/view?usp=sharing' },
            { id: 'c2-cert', name: 'Cycle - 2', type: 'file', url: 'https://drive.google.com/file/d/1rw9sWy3Euzqq5nMIRKOjcjm52-6tEH7K/view?usp=sharing' },
            { id: 'c1-cert', name: 'Cycle - 1', type: 'file', url: 'https://drive.google.com/file/d/1H7_5lRqjoGL9pin6Wb7m1Nizw6ku5qOc/view?usp=sharing' },
        ],
        ssrItems: [
            { id: 'ssr-2022', name: 'Cycle - 4', type: 'file', url: 'https://drive.google.com/file/d/18b7Qbb8pW6Ien3-e5HROO2h_r4NiFW8O/view?usp=sharing' },
        ],
        aqarItems: [
            { id: 'aqar-23-24', name: '2023-24 (Coming Soon)', type: 'file' },
            { id: 'aqar-22-23', name: '2022-23 (Coming Soon)', type: 'file' },
            { id: 'aqar-21-22', name: '2021-22 (Coming Soon)', type: 'file' },
        ]
    },

    'academics-rules': {
        title: 'Academic Rules & Regulations',
        content: `
            <div class="space-y-6">
                <div class="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h3 class="font-bold text-red-900 mb-2">Attendance Policy</h3>
                    <p class="text-gray-700 text-sm">As per Bangalore City University norms, a minimum of <strong>75% attendance</strong> is mandatory in each subject to appear for the end-semester examination. Students falling short will not be permitted to write the exams.</p>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg text-primary mb-3">Internal Assessment</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start bg-white p-3 rounded border"><span class="mr-2 font-bold text-blue-600">1.</span> Tests: Two rounds of internal tests are conducted every semester.</li>
                        <li class="flex items-start bg-white p-3 rounded border"><span class="mr-2 font-bold text-blue-600">2.</span> Assignments: Subject-wise assignments and presentations are evaluated.</li>
                        <li class="flex items-start bg-white p-3 rounded border"><span class="mr-2 font-bold text-blue-600">3.</span> Conduct: Marks are also awarded for classroom behavior and participation.</li>
                    </ul>
                </div>

                <div>
                    <h3 class="font-bold text-lg text-primary mb-3">General Discipline</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-4 rounded items-center flex gap-3">
                            <span class="text-2xl">🆔</span>
                            <span class="text-sm font-medium">ID Cards must be worn at all times on campus.</span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded items-center flex gap-3">
                            <span class="text-2xl">📱</span>
                            <span class="text-sm font-medium">Use of mobile phones in classrooms is strictly prohibited.</span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded items-center flex gap-3">
                            <span class="text-2xl">🚭</span>
                            <span class="text-sm font-medium">The college campus is a tobacco and drug-free zone.</span>
                        </div>
                        <div class="bg-gray-50 p-4 rounded items-center flex gap-3">
                            <span class="text-2xl">👗</span>
                            <span class="text-sm font-medium">Students must adhere to the formal dress code.</span>
                        </div>
                    </div>
                </div>
            </div>
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
    },

    // IQAC Defaults
    'cell-iqac': {
        title: 'Internal Quality Assurance Cell (IQAC)',
        tagline: 'The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence.',
        content: '<p>Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure.</p>'
    },
    'page-cell-iqac-tab-objectives': {
        title: 'Objectives',
        content: `
            <div class="space-y-6">
                <ul class="list-disc pl-5 space-y-2 text-lg">
                    <li>To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.</li>
                    <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
                </ul>
            </div>
        `
    },
    'page-cell-iqac-tab-functions': {
        title: 'Functions',
        content: `
            <div class="space-y-6">
                <ul class="list-disc pl-5 space-y-2 text-lg">
                    <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution</li>
                    <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</li>
                    <li>Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes</li>
                    <li>Dissemination of information on various quality parameters of higher education</li>
                    <li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
                    <li>Documentation of the various programmes/activities leading to quality improvement</li>
                    <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices</li>
                    <li>Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality</li>
                    <li>Development of Quality Culture in the institution</li>
                    <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC</li>
                </ul>
            </div>
        `
    },
    'page-cell-iqac-tab-major-contributions': {
        title: 'Major Contributions',
        content: `
            <div class="space-y-4 text-lg">
                <p><strong>NIRF Participation:</strong> The College participates in the NIRF ranking every year.</p>
                <p><strong>AISHE:</strong> Data is uploaded to the All India Survey on Higher Education portal every year.</p>
                <p><strong>Feedback:</strong> Feedback is collected from various stakeholders like students, parents, alumni, and employers, analyzed, and action taken report is prepared and uploaded on the website.</p>
                <p><strong>Result Analysis:</strong> Result analysis is done after every semester to identify advanced learners and slow learners.</p>
                <p><strong>Audit:</strong> Academic and Administrative Audit is conducted to evaluate the performance of the institution.</p>
                <p>
                    <strong>Fidelity to the requirements of NAAC:</strong>
                    <ul class="list-disc pl-8 mt-2">
                        <li>AQAR is submitted every year.</li>
                        <li>SSR is submitted for the accreditation process (First Cycle, Second Cycle, Third Cycle, and Fourth Cycle).</li>
                    </ul>
                </p>
            </div>
        `
    },
    'page-cell-iqac-tab-documents': {
        title: 'Documents',
        content: `
            <div class="space-y-6">
                <h2 class="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">IQAC Documents</h2>
                <div class="grid md:grid-cols-2 gap-8">
                     <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">Constitution</h3>
                        <ul class="space-y-1">
                            <li><a href="https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing" class="text-blue-600 hover:underline">2024-25</a></li>
                            <li><a href="https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing" class="text-blue-600 hover:underline">2023-24</a></li>
                            <li><a href="https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing" class="text-blue-600 hover:underline">2022-23</a></li>
                            <li><a href="https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing" class="text-blue-600 hover:underline">2021-22</a></li>
                        </ul>
                     </div>
                     <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">Annual SPP</h3>
                         <ul class="space-y-1">
                            <li><span class="text-gray-500">2024-25 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2023-24 (Coming Soon)</span></li>
                        </ul>
                     </div>
                      <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">Annual Report</h3>
                        <ul class="space-y-1">
                            <li><span class="text-gray-500">2024-25 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2023-24 (Coming Soon)</span></li>
                        </ul>
                     </div>
                      <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">Activities</h3>
                        <ul class="space-y-1">
                            <li><span class="text-gray-500">2024-25 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2023-24 (Coming Soon)</span></li>
                        </ul>
                     </div>
                     <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">Cell / Committee Members</h3>
                        <ul class="space-y-1">
                            <li><span class="text-gray-500">2024-25 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2023-24 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2022-23 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2021-22 (Coming Soon)</span></li>
                        </ul>
                     </div>
                     <div class="border rounded p-4">
                        <h3 class="font-bold border-b pb-2 mb-2">AISHE Certificate</h3>
                         <ul class="space-y-1">
                            <li><span class="text-gray-500">2024-25 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2023-24 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2022-23 (Coming Soon)</span></li>
                            <li><span class="text-gray-500">2021-22 (Coming Soon)</span></li>
                        </ul>
                     </div>
                </div>
            </div>
        `
    }
};
