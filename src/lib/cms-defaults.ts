
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
    'academics-courses': {
        title: 'Courses Offered',
        tagline: 'Discover our diverse range of undergraduate programs designed to empower you with knowledge, skills, and future-ready capabilities.',
        badgeText: 'Academic Excellence',
        content: `
            <div class="grid grid-cols-1 gap-8">
                <!-- BCA -->
                <div class="border-2 rounded-xl overflow-hidden hover:border-blue-600 transition-all bg-white">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-8 bg-slate-50 md:w-1/4 flex flex-col items-center justify-center text-center">
                            <div class="p-4 bg-white rounded-full shadow-sm mb-4"><i class="lucide-computer h-10 w-10 text-blue-900"></i></div>
                            <h3 class="font-bold text-xl text-blue-900">Bachelor of Computer Applications</h3>
                            <span class="text-slate-500 font-semibold">(BCA)</span>
                        </div>
                        <div class="flex-1 p-8">
                            <h4 class="text-2xl font-bold mb-4">Bachelor of Computer Applications (BCA)</h4>
                            <p class="text-slate-600 mb-6">The BCA is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Duration: 3 Years</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Focus: Software Development</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Career: Software Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- B.Com -->
                <div class="border-2 rounded-xl overflow-hidden hover:border-blue-600 transition-all bg-white">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-8 bg-slate-50 md:w-1/4 flex flex-col items-center justify-center text-center">
                            <div class="p-4 bg-white rounded-full shadow-sm mb-4"><i class="lucide-briefcase h-10 w-10 text-blue-900"></i></div>
                            <h3 class="font-bold text-xl text-blue-900">Bachelor of Commerce</h3>
                            <span class="text-slate-500 font-semibold">(B.Com)</span>
                        </div>
                        <div class="flex-1 p-8">
                            <h4 class="text-2xl font-bold mb-4">Bachelor of Commerce (B.Com)</h4>
                            <p class="text-slate-600 mb-6">The B.Com provides in-depth knowledge of commerce, finance, accounting, taxation, and business law.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Duration: 3 Years</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Focus: Commerce & Finance</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Career: Accountant/Analyst</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BBA -->
                <div class="border-2 rounded-xl overflow-hidden hover:border-blue-600 transition-all bg-white">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-8 bg-slate-50 md:w-1/4 flex flex-col items-center justify-center text-center">
                            <div class="p-4 bg-white rounded-full shadow-sm mb-4"><i class="lucide-landmark h-10 w-10 text-blue-900"></i></div>
                            <h3 class="font-bold text-xl text-blue-900">Bachelor of Business Administration</h3>
                            <span class="text-slate-500 font-semibold">(BBA)</span>
                        </div>
                        <div class="flex-1 p-8">
                            <h4 class="text-2xl font-bold mb-4">Bachelor of Business Administration (BBA)</h4>
                            <p class="text-slate-600 mb-6">The BBA focuses on management, entrepreneurship, marketing, finance, and human resources.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Duration: 3 Years</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Focus: Management</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Career: Business Analyst</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BA -->
                <div class="border-2 rounded-xl overflow-hidden hover:border-blue-600 transition-all bg-white">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-8 bg-slate-50 md:w-1/4 flex flex-col items-center justify-center text-center">
                            <div class="p-4 bg-white rounded-full shadow-sm mb-4"><i class="lucide-book-open h-10 w-10 text-blue-900"></i></div>
                            <h3 class="font-bold text-xl text-blue-900">Bachelor of Arts</h3>
                            <span class="text-slate-500 font-semibold">(BA)</span>
                        </div>
                        <div class="flex-1 p-8">
                            <h4 class="text-2xl font-bold mb-4">Bachelor of Arts (BA)</h4>
                            <p class="text-slate-600 mb-6">The BA with History, Political Science, and Economics provides a strong foundation in humanities.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Duration: 3 Years</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Focus: Humanities</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Career: Journalism/Teaching</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- M.Com -->
                <div class="border-2 rounded-xl overflow-hidden hover:border-blue-600 transition-all bg-white">
                    <div class="flex flex-col md:flex-row">
                        <div class="p-8 bg-slate-50 md:w-1/4 flex flex-col items-center justify-center text-center">
                            <div class="p-4 bg-white rounded-full shadow-sm mb-4"><i class="lucide-graduation-cap h-10 w-10 text-blue-900"></i></div>
                            <h3 class="font-bold text-xl text-blue-900">Masters in Commerce</h3>
                            <span class="text-slate-500 font-semibold">(M.Com)</span>
                        </div>
                        <div class="flex-1 p-8">
                            <h4 class="text-2xl font-bold mb-4">Masters in Commerce (M.Com)</h4>
                            <p class="text-slate-600 mb-6">A two-year post-graduate degree designed for upgraded careers in commerce and accounting.</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Duration: 2 Years</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Focus: Advanced Commerce</div>
                                <div class="bg-slate-100 p-3 rounded text-sm font-medium">Career: Finance Manager</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'page-administration-tab-overview': {
        title: 'Overview',
        content: `
            <div class="space-y-6 text-gray-800 text-justify leading-relaxed">
                <p>Our non-teaching staff serve as the backbone of the college. Their steady work keeps our academic environment organized, responsive, and efficient. From administrative support to campus maintenance and student services, they handle essential operations with professionalism and care.</p>
                <p>Their diligence ensures that classrooms are ready, records are accurate, processes run smoothly, and every member of the community gets the support they need.</p>
            </div>
        `
    },
    'page-administration-tab-staff-list': {
        title: 'Staff List',
        content: `
            <div class="overflow-x-auto">
                <table class="w-full text-left border">
                    <thead class="bg-slate-100 font-bold">
                        <tr><th class="p-3">Name</th><th class="p-3">Designation</th></tr>
                    </thead>
                    <tbody class="divide-y">
                        <tr><td class="p-3">Mrs. DEEPA . V</td><td class="p-3">Head - Office Admin</td></tr>
                        <tr><td class="p-3">Mr. KUMAR R.H</td><td class="p-3">Accounts Officer</td></tr>
                        <tr><td class="p-3">Mr. PRASANT KUMAR BISWAL</td><td class="p-3">Maintenance In Charge</td></tr>
                        <tr><td class="p-3">Mr. BHASKARAN. M</td><td class="p-3">Office Assistant</td></tr>
                        <tr><td class="p-3">Mr. PUTTARAJU. H. E</td><td class="p-3">Librarian</td></tr>
                        <tr><td class="p-3">Mr. SHIVANNA. N</td><td class="p-3">Sports Attender & Gardener</td></tr>
                        <tr><td class="p-3">Mr. PANDY SELVAN</td><td class="p-3">Office Attender</td></tr>
                        <tr><td class="p-3">Mr. EMMANUEL SHREYAS. S</td><td class="p-3">Reception</td></tr>
                        <tr><td class="p-3">Mrs. ARPITHA S</td><td class="p-3">Office Assistant</td></tr>
                        <tr><td class="p-3">Ms. MARY CELESTINA. J</td><td class="p-3">IQAC Assistant</td></tr>
                        <tr><td class="p-3">Mr. RAMESH</td><td class="p-3">Accounts Officer</td></tr>
                        <tr><td class="p-3">Mr. SRINIVAS E</td><td class="p-3">Office Assistant</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    'page-administration-tab-photos': {
        title: 'Staff Photos',
        content: '<p>Group photographs of our dedicated administrative and support team.</p>'
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
    'activities-cultural': {
        title: 'Cultural Activities',
        content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <img src="https://placehold.co/600x400?text=Natya" alt="Natya" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">Natya</h4>
                        <p class="text-sm text-gray-600 mb-4">The dramatics club fostering stagecraft and performance.</p>
                        <a href="#" class="text-blue-600 font-bold hover:underline">Read More →</a>
                    </div>
                </div>
                <div class="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <img src="https://placehold.co/600x400?text=Theatre" alt="Theatre" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">Theatre</h4>
                        <p class="text-sm text-gray-600 mb-4">Exploring theatre arts through workshops and productions.</p>
                        <a href="#" class="text-blue-600 font-bold hover:underline">Read More →</a>
                    </div>
                </div>
                <div class="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <img src="https://placehold.co/600x400?text=Music" alt="Music" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">Music</h4>
                        <p class="text-sm text-gray-600 mb-4">Vocal and instrumental ensembles, performances, and learning.</p>
                        <a href="#" class="text-blue-600 font-bold hover:underline">Read More →</a>
                    </div>
                </div>
                <!-- ... other items ... -->
            </div>
        `
    },
    'activities-co-curricular': {
        title: 'Co-Curricular Activities',
        content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <img src="https://placehold.co/600x400?text=YRCS" alt="YRCS" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">YRCS</h4>
                        <p class="text-sm text-gray-600 mb-4">Youth Red Cross Society activities and volunteering.</p>
                        <a href="#" class="text-blue-600 font-bold hover:underline">Read More →</a>
                    </div>
                </div>
                <div class="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <img src="https://placehold.co/600x400?text=NSS" alt="NSS" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">NSS</h4>
                        <p class="text-sm text-gray-600 mb-4">National Service Scheme social outreach and service.</p>
                        <a href="#" class="text-blue-600 font-bold hover:underline">Read More →</a>
                    </div>
                </div>
            </div>
        `
    },
    'events': {
        title: 'Events',
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="border rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
                    <div class="bg-gray-50 p-4 border-b flex items-center justify-between">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-blue-900">02</div>
                            <div class="text-xs uppercase text-gray-500 font-bold">Sep</div>
                        </div>
                        <h4 class="font-bold text-gray-800 text-lg ml-4">Annual Athletics Meet</h4>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-sm text-gray-600 mb-4">Cordially invites you all for the Annual Athletics Meet on 2nd September, 2022.</p>
                        <a href="#" class="text-blue-600 text-sm font-bold">Read More →</a>
                    </div>
                </div>
                <!-- ... other events ... -->
            </div>
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

    // Dept English

    // Dept Languages

    // Dept Physical Education

    // Dept BCA
    // Dept Arts
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

    'scholarships': {
        title: 'Scholarships & Financial Aid',
        content: `
                                                                                    < p class="mb-6 text-lg" > We strictly believe that financial constraints should never hinder a student's education. RBANMS offers and facilitates various scholarship schemes.</p>
                                                                                        < div class="space-y-4" >
                                                                                            <div class="border rounded-lg p-4 bg-white hover:shadow-md transition" >
                                                                                                <h3 class="text-lg font-bold text-primary mb-2" > Government Scholarships </h3>
                                                                                                    < ul class="list-disc pl-5 text-gray-600 text-sm space-y-1" >
                                                                                                        <li><strong>SSP(State Scholarship Portal): </strong> For SC/ST and OBC students of Karnataka.</li>
                                                                                                            < li > <strong>NSP(National Scholarship Portal): </strong> For minority community students.</li >
                                                                                                                <li><strong>Labor Welfare Fund: </strong> For children of construction/unorganized sector workers.</li>
                                                                                                                    </ul>
                                                                                                                    </div>
                                                                                                                    < div class="border rounded-lg p-4 bg-white hover:shadow-md transition" >
                                                                                                                        <h3 class="text-lg font-bold text-primary mb-2" > Institutional Management Scholarships </h3>
                                                                                                                            < p class="text-gray-600 text-sm mb-2" > RBANMS Charities provides financial assistance to meritorious students from economically weaker sections.</p>
                                                                                                                                < span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded" > Merit - Cum - Means </span>
                                                                                                                                    </div>
                                                                                                                                    < div class="border rounded-lg p-4 bg-white hover:shadow-md transition" >
                                                                                                                                        <h3 class="text-lg font-bold text-primary mb-2" > Endowment Awards </h3>
                                                                                                                                            < p class="text-gray-600 text-sm" > Cash prizes and awards instituted by alumni and philanthropists for subject toppers and best outgoing students.</p>
                                                                                                                                                </div>
                                                                                                                                                < div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200" >
                                                                                                                                                    <h4 class="font-bold text-yellow-800 mb-1" >📢 How to Apply ? </h4>
                                                                                                                                                        < p class="text-sm text-yellow-900" > Applications are typically opened at the beginning of the academic year.Contact the College Office or the Scholarship Committee Nodal Officer for assistance.</p>
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
                                                                                                                                                            < div class= "space-y-6" >
                                                                                                                                                            <div class= "bg-red-50 p-5 rounded-lg border-l-4 border-red-500" >
                                                                                                                                                            <h3 class= "font-bold text-red-900 mb-2" > Attendance Policy </h3>
                                                                                                                                                                < p class="text-gray-700 text-sm" > As per Bangalore City University norms, a minimum of < strong > 75 % attendance < /strong> is mandatory in each subject to appear for the end-semester examination. Students falling short will not be permitted to write the exams.</p >
                                                                                                                                                                    </div>

                                                                                                                                                                    < div >
                                                                                                                                                                    <h3 class="font-bold text-lg text-primary mb-3" > Internal Assessment </h3>
                                                                                                                                                                        < ul class="space-y-3" >
                                                                                                                                                                            <li class="flex items-start bg-white p-3 rounded border" > <span class="mr-2 font-bold text-blue-600" > 1. < /span> Tests: Two rounds of internal tests are conducted every semester.</li >
                                                                                                                                                                                <li class="flex items-start bg-white p-3 rounded border" > <span class="mr-2 font-bold text-blue-600" > 2. < /span> Assignments: Subject-wise assignments and presentations are evaluated.</li >
                                                                                                                                                                                    <li class="flex items-start bg-white p-3 rounded border" > <span class="mr-2 font-bold text-blue-600" > 3. < /span> Conduct: Marks are also awarded for classroom behavior and participation.</li >
                                                                                                                                                                                        </ul>
                                                                                                                                                                                        </div>

                                                                                                                                                                                        < div >
                                                                                                                                                                                        <h3 class="font-bold text-lg text-primary mb-3" > General Discipline </h3>
                                                                                                                                                                                            < div class="grid grid-cols-1 md:grid-cols-2 gap-4" >
                                                                                                                                                                                                <div class="bg-gray-50 p-4 rounded items-center flex gap-3" >
                                                                                                                                                                                                    <span class="text-2xl" >🆔</span>
                                                                                                                                                                                                        < span class="text-sm font-medium" > ID Cards must be worn at all times on campus.</span>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            < div class="bg-gray-50 p-4 rounded items-center flex gap-3" >
                                                                                                                                                                                                                <span class="text-2xl" >📱</span>
                                                                                                                                                                                                                    < span class="text-sm font-medium" > Use of mobile phones in classrooms is strictly prohibited.</span>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                        < div class="bg-gray-50 p-4 rounded items-center flex gap-3" >
                                                                                                                                                                                                                            <span class="text-2xl" >🚭</span>
                                                                                                                                                                                                                                < span class="text-sm font-medium" > The college campus is a tobacco and drug - free zone.</span>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                    < div class="bg-gray-50 p-4 rounded items-center flex gap-3" >
                                                                                                                                                                                                                                        <span class="text-2xl" >👗</span>
                                                                                                                                                                                                                                            < span class="text-sm font-medium" > Students must adhere to the formal dress code.</span>
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
                                                                                                                                                                                                                                                < ul class="space-y-2 list-disc list-inside" >
                                                                                                                                                                                                                                                    <li>Admissions open for AY 2026 - 27. For a Campus Tour, email info @rbanmsfgc.edu.in.</li>
                                                                                                                                                                                                                                                        < li > The Even Semester for AY 2025 - 26 will begin on January 16, 2026 for Faculty and all Final Year students.</li>
                                                                                                                                                                                                                                                            < li > Regular classes for all courses will commence on January 27. </li>
                                                                                                                                                                                                                                                                < li > Second and First Year students will begin classes on January 27. </li>
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
                                                                                                                                                                                                                                                                    < p > Welcome to our blog section where we share insights, stories, and updates from our college community.Stay tuned for upcoming articles on academic excellence, student achievements, and educational initiatives that shape the future of learning.</p>
                                                                                                                                                                                                                                                                        < p > We invite submissions from students and faculty.Please contact the editorial board for guidelines.</p>
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

    'about-board': {
        title: 'Board Members',
        content: `
                                                                                                                                                                                                                                                                            < div class= "flex flex-col items-center justify-center min-h-[40vh] text-center" >
                                                                                                                                                                                                                                                                            <h2 class= "text-2xl font-semibold text-muted-foreground" > Coming Soon </h2>
                                                                                                                                                                                                                                                                                < p class="mt-2 text-foreground/80" > This page is under construction.Please check back later! </p>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                        `
    },
    'cell-sc-st': {
        title: 'SC/ST Cell',
        badgeText: 'Statutory Cell',
        content: '<p>Providing support and guidance to students from SC/ST communities, ensuring they access all eligible benefits and opportunities.</p>'
    },
    'cell-posh': {
        title: 'Prevention of Sexual Harassment (POSH)',
        badgeText: 'Statutory Cell',
        content: '<p>Committed to providing a safe and respectful environment for all staff and students, with zero tolerance for harassment.</p>'
    },
    'cell-internal-compliance': {
        title: 'Internal Compliance Committee',
        badgeText: 'Statutory Committee',
        content: '<p>Ensuring institutional transparency and compliance with academic and administrative standards.</p>'
    },
    'cell-grievance': {
        title: 'Grievance Redressal Cell',
        badgeText: 'Statutory Cell',
        content: '<p>Providing a transparent mechanism for students to voice concerns and complaints, ensuring timely resolution and maintaining institutional harmony.</p>'
    },
    'cell-equal-opportunity': {
        title: 'Equal Opportunity Cell',
        badgeText: 'Statutory Cell',
        content: '<p>Dedicated to promoting equality and social justice, ensuring all students have equal access to academic and extra-curricular opportunities.</p>'
    },
    'cell-antiragging': {
        title: 'Anti-Ragging Committee',
        badgeText: 'Statutory Committee',
        content: '<p>RBNMS College maintains a zero-tolerance policy towards ragging. The Anti-Ragging Committee works vigilantly to ensure the college campus remains a ragging-free zone. We strictly enforce UGC regulations and state laws to protect new students from any form of physical or mental harassment. Through counselling and strict monitoring, we guarantee a friendly and welcoming atmosphere where every student feels safe and comfortable from their very first day.</p>'
    },
    'cell-exam': {
        title: 'Examination Committee',
        badgeText: 'Committee',
        content: '<p>The Examination Committee is the backbone of the college\'s evaluation system, ensuring transparency, fairness, and efficiency in all internal and external assessments. We are responsible for scheduling exams, securing question papers, and managing the conduct of tests in strict accordance with university norms. By maintaining the integrity of the examination process, we ensure that student performance is assessed accurately and impartially, upholding the academic credibility of RBNMS College.</p>'
    },
    'cell-eco': {
        title: 'Eco Club',
        badgeText: 'Club',
        content: '<p>Dedicated to environmental awareness and sustainable practices within the campus and community.</p>'
    },
    'cell-aicte': {
        title: 'AICTE Committee',
        badgeText: 'Committee',
        content: '<p>The AICTE Committee ensures that the college adheres to the norms and standards set by the All India Council for Technical Education where applicable. This body oversees the compliance of technical and management programs with national regulatory requirements. We focus on maintaining the quality of curriculum, infrastructure, and faculty qualifications to meet statutory standards. The committee serves as a bridge between the institution and regulatory bodies, ensuring seamless approval processes and academic quality.</p>'
    },
    'cell-yrc': {
        title: 'YRCS (Youth Red Cross Society)',
        badgeText: 'Society',
        content: '<p>The Youth Red Cross Society unit focuses on the protection of health and life, service to the sick, and promotion of international friendship. Our student volunteers are trained in first aid, disaster management, and community health hygiene. We regularly organize blood donation camps and health check-ups. The YRCS at RBNMS encourages students to embrace humanitarian values, fostering a spirit of compassion and readiness to help those in distress.</p>'
    },
    'cell-womens': {
        title: 'Women Cell',
        badgeText: 'Cell',
        content: '<p>The Women Cell at RBNMS College is dedicated to empowering female students and staff by creating a supportive and inclusive campus environment. The cell serves as a platform for women to voice their concerns and aspirations, fostering confidence and leadership skills. We organize seminars, workshops, and awareness programs focusing on gender equity, women\'s rights, and health. We are committed to ensuring that women feel safe, respected, and valued in all their endeavors on campus and beyond.</p>'
    },
    'cell-cultural': {
        title: 'Cultural Committee',
        badgeText: 'Committee',
        content: '<p>The Cultural Committee brings the campus to life by celebrating creativity, talent, and diversity. We organize annual fests, inter-class competitions, and celebrations of national and regional festivals. The committee provides a platform for students to showcase their skills in music, dance, theater, and fine arts. By balancing academics with cultural expression, we ensure the holistic development of our students, making their college experience vibrant and memorable.</p>'
    },
    'cell-manasa': {
        title: 'Manasa Counseling Cell',
        badgeText: 'Cell',
        content: '<p>The Manasa Counselling Cell provides a safe and confidential space for students to seek guidance and support for their emotional and mental well-being. Our professional counselors offer listening, empathy, and practical strategies to help students navigate personal challenges, academic stress, and transition into college life. We are dedicated to ensuring that every student has the mental health resources they need to thrive and succeed in all aspects of their lives.</p>'
    },
    'cell-ipc': {
        title: 'IPC (Internal Placement Cell)',
        badgeText: 'Cell',
        content: '<p>The Internal Placement Cell (IPC) bridges the gap between academic learning and industry requirements. We are committed to preparing students for their careers by organizing training sessions, workshops, and recruitment drives. The cell actively liaises with top companies to facilitate internship and job opportunities, ensuring our graduates are employable and confident. Our goal is to guide every student toward the right career path, equipping them with the professional skills needed to succeed in a competitive job market.</p>'
    },
    'cell-discipline': {
        title: 'Discipline Committee',
        badgeText: 'Committee',
        content: '<p>The Discipline Committee at RBANMS First Grade College is committed to maintaining a learning environment built on respect, integrity, and accountability. Our task is to ensure that all students and staff adhere to the college\'s code of conduct, fostering a safe and orderly campus. We work closely with students to promote self-discipline and positive behavior, ensuring that everyone has the opportunity to learn and grow in an environment that is conducive to academic excellence and personal development.</p>'
    },
    'cell-nss': {
        title: 'National Service Scheme (NSS)',
        badgeText: 'Activity',
        content: '<p>Engaging students in social service and community development activities, fostering a sense of social responsibility.</p>'
    },
    'cell-ncc-navy': {
        title: 'NCC Navy Wing',
        badgeText: 'Activity',
        content: '<p>Providing naval-oriented training and fostering a sense of discipline and patriotism among the youth.</p>'
    },
    'cell-ncc-army': {
        title: 'NCC Army Wing',
        badgeText: 'Activity',
        content: '<p>Developing character, comradeship, discipline, and leadership among students through military-style training and social service.</p>'
    },
    'cell-ncc': {
        title: 'National Cadet Corps (NCC)',
        badgeText: 'Activity',
        content: '<p>The National Cadet Corps (NCC) at RBNMS College is a premier youth organization that strives to develop the qualities of character, courage, comradeship, discipline, leadership, and the ideal of selfless service among the youth of the country. We offer both Army and Navy wings, providing cadets with diverse opportunities for personal growth and adventure.</p>'
    },






    // IQAC Defaults
    'industry-mou': {
        title: 'Memorandum of Understanding (MoU)',
        content: '<p>Information about our institutional MoUs coming soon.</p>'
    },
    'industry-internship': {
        title: 'Internships',
        content: '<p>Information about our student internship programs coming soon.</p>'
    },
    'academics-structure': {
        title: 'Academic Structure',
        content: '<p>Our academic structure follows the Bangalore City University guidelines with NEP integration.</p>'
    },
    'academics-philosophy': {
        title: 'Philosophy of Teaching',
        content: '<p>Our teaching philosophy is student-centric, focusing on holistic development and practical application.</p>'
    },
    'facilities': {
        title: 'Our Facilities',
        tagline: 'Creating an environment for better productivity and performance.',
        content: '<p>We provide world-class infrastructure to support academic and extracurricular activities.</p>'
    },
    'page-facilities-tab-overview': {
        title: 'Overview',
        content: `
                                                                                                                                                                                                                                                                                    < div class="space-y-6 text-lg leading-relaxed" >
                                                                                                                                                                                                                                                                                        <p>Creating an environment for better productivity and performance.Infrastructural Abundance: It is part of the basic policy of the promoters that infrastructural self - sufficiency is a pre - requisite for better productivity and performance in all the activities, more so for academic activities.</p>
                                                                                                                                                                                                                                                                                            < p > The Management has always been creating and updating academic and building infrastructure to meet the standards from time to time and to make life easy and stress - free in the campus.</p>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                    `
    },
    'page-facilities-tab-computer-labs': {
        title: 'Computer Labs',
        content: `
                                                                                                                                                                                                                                                                                                < div class="grid md:grid-cols-2 gap-6 items-center" >
                                                                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                                                                    <p>There are three computer labs on campus: two for the exclusive use of BCA students, and one used as a Design Lab for students of Journalism, and those who are part of the Editorial / Design Team, the Phoenix Club.</p>
                                                                                                                                                                                                                                                                                                        < p class="mt-4" > These labs have been the main learning resource in providing students with practical exposure for the syllabus of Bangalore University and to go beyond it.</p>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                            < img src = "/images/facilities/lab.jpg" alt = "Computer Lab" class="rounded-lg shadow-md" />
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                    `
    },
    'page-facilities-tab-sports-ground': {
        title: 'Sports Ground',
        content: `
                                                                                                                                                                                                                                                                                                                < div class="grid md:grid-cols-2 gap-6 items-center" >
                                                                                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                                                                                    <p>The college has a large ground on campus, dedicated to sports.This area is regularly used for throwball, volleyball, basketball, kho kho, and more.The grounds are also used for NCC parades.</p>
                                                                                                                                                                                                                                                                                                                        < p class= "mt-4" > In addition, the sports students have access to the SUFC and Karnataka Cricket Club that are situated on land owned by RBANMs Educational Charities.</p>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                            < img src = "/images/facilities/ground.jpg" alt = "Sports Ground" class="rounded-lg shadow-md" />
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                    `
    },
    'page-facilities-tab-auditorium': {
        title: 'Auditorium',
        content: `
                                                                                                                                                                                                                                                                                                                                < div class="space-y-4" >
                                                                                                                                                                                                                                                                                                                                    <p>Believing that experience on stage does wonders for the personality and individual growth of students, the college has two performance spaces: </p>
                                                                                                                                                                                                                                                                                                                                        < ul class="list-disc pl-5 mt-2 space-y-1" >
                                                                                                                                                                                                                                                                                                                                            <li>A seminar hall for small, intimate gatherings, such as the Natya club and guest lectures </li>
                                                                                                                                                                                                                                                                                                                                                < li > A large auditorium to host events such as Orientation, Freshers’ Day, and other cultural activities.</li>
                                                                                                                                                                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                        `
    },
    'page-facilities-tab-library': {
        title: 'Library',
        content: `
                                                                                                                                                                                                                                                                                                                                                    < div class="space-y-6" >
                                                                                                                                                                                                                                                                                                                                                        <p>The college library is large, with more than 40,000 volumes of books on all subjects.The collection supports the curriculum and is built through student - teacher suggestions.</p>
                                                                                                                                                                                                                                                                                                                                                            < div class="grid grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg" >
                                                                                                                                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                                                                                                                                <h4 class="font-bold border-b mb-2" > Highlights </h4>
                                                                                                                                                                                                                                                                                                                                                                    < ul class="list-disc pl-5 text-sm" >
                                                                                                                                                                                                                                                                                                                                                                        <li>Reference Service </li>
                                                                                                                                                                                                                                                                                                                                                                            < li > Reprographic Service </li>
                                                                                                                                                                                                                                                                                                                                                                                < li > Internet Facilities </li>
                                                                                                                                                                                                                                                                                                                                                                                    < li > Open Access Service </li>
                                                                                                                                                                                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                        < div >
                                                                                                                                                                                                                                                                                                                                                                                        <h4 class="font-bold border-b mb-2" > Timings </h4>
                                                                                                                                                                                                                                                                                                                                                                                            < p class="text-sm" > 8 A.M.to 5 P.M.</p>
                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                    `
    },
    'page-facilities-tab-digital-library': {
        title: 'Digital Library',
        content: '<p>The digital library provides access to online databases, textbooks, articles, and audio-video materials via platforms like N-List, DELNET, and NDL.</p>'
    },
    'page-facilities-tab-classrooms': {
        title: 'Classrooms',
        content: '<p>Spread over three floors, the college has well equipped, brightly lit classrooms with old-style bench seating, combining modern facilities with heritage charm.</p>'
    },
    'page-facilities-tab-canteen': {
        title: 'Canteen',
        content: '<p>The canteen on campus provides hygienic and affordable meals and snacks to students, staff, and guests.</p>'
    },
    'page-facilities-tab-green-campus': {
        title: 'Green Campus',
        content: '<p>A stress-free environment full of lawns, trees, and flower plants, providing an eco-friendly atmosphere in the heart of town.</p>'
    },

    'cell-iqac': {
        title: 'Internal Quality Assurance Cell (IQAC)',
        tagline: '',
        content: '<p>The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence. Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure. By implementing best practices and coordinating with accreditation bodies like NAAC, the IQAC ensures that the institution evolves to meet global educational standards while fostering a culture of continuous improvement for both faculty and students.</p>'
    },
    'page-cell-iqac-tab-objectives': {
        title: 'Objectives',
        content: `
            <div class="space-y-6">
                <p class="text-lg leading-relaxed">
                    The primary aim of IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.
                </p>
                <ul class="list-disc pl-5 space-y-2 text-lg">
                    <li>To develop a quality culture as the prime concern for the Institution</li>
                    <li>To facilitate the creation of a learner-centric environment conducive to quality education and Faculty development</li>
                    <li>To arrange for feedback responses from students, parents and other stakeholders on quality related institutional processes</li>
                    <li>To disseminate information on various quality parameters to all stakeholders</li>
                    <li>To organize inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
                    <li>To document various activities of the institutions leading to quality improvement</li>
                    <li>To act as a nodal agency of the Institution for coordinating quality related activities including adoption and dissemination of best practices</li>
                    <li>To develop and apply quality benchmarks/parameters for various academic and administrative activities of the Institution</li>
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
                    <li>Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality</li>
                    <li>Development of Quality Culture in the institution</li>
                    <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC</li>
                </ul>
            </div>
        `
    },
    'page-cell-iqac-tab-major-contributions': {
        title: 'Major Contributions',
        content: `
            <div class="space-y-6">
                <ul class="list-disc pl-5 space-y-2 text-lg mb-6">
                    <li>Ensures timely, efficient and progressive performance of academic, administrative and financial tasks</li>
                    <li>Ensures the adequacy, maintenance and proper allocation of support structure and services</li>
                    <li>Facilitates a heightened level of clarity and focus in institutional functioning towards quality enhancement</li>
                    <li>Ensures enhancement and coordination among various activities including curricular and co-curricular aspects</li>
                    <li>Ensures the adequacy, maintenance and functioning of the support structure and services of the institution</li>
                    <li>Provides a sound basis for decision-making to improve institutional functioning</li>
                    <li>Acts as a dynamic system for quality changes in HEIs</li>
                    <li>Builds an organised methodology of documentation and internal communication</li>
                </ul>
                
                <h3 class="text-xl font-bold text-primary mt-6 mb-4">Institutional Achievements</h3>
                <div class="space-y-4 text-lg bg-slate-50 p-6 rounded-lg">
                    <p><strong>NIRF Participation:</strong> The College participates in the NIRF ranking every year.</p>
                    <p><strong>AISHE:</strong> Data is uploaded to the All India Survey on Higher Education portal every year.</p>
                    <p><strong>Feedback:</strong> Feedback is collected from various stakeholders like students, parents, alumni, and employers, analyzed, and action taken report is prepared and uploaded on the website.</p>
                    <p><strong>Result Analysis:</strong> Result analysis is done after every semester to identify advanced learners and slow learners.</p>
                    <p><strong>Audit:</strong> Academic and Administrative Audit is conducted to evaluate the performance of the institution.</p>
                    <div>
                        <strong>Fidelity to the requirements of NAAC:</strong>
                        <ul class="list-disc pl-8 mt-2">
                            <li>AQAR is submitted every year.</li>
                            <li>SSR is submitted for the accreditation process (First Cycle, Second Cycle, Third Cycle, and Fourth Cycle).</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'page-cell-iqac-tab-documents': {
        title: 'Documents',
        content: `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        < div class="space-y-6" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h2 class="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase" > IQAC Documents </h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                < div class="grid md:grid-cols-2 gap-8" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3 class="font-bold border-b pb-2 mb-2" > Constitution </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><a href="https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing" class="text-blue-600 hover:underline" > 2024 - 25 < /a></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><a href="https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing" class="text-blue-600 hover:underline" > 2023 - 24 < /a></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li><a href="https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing" class="text-blue-600 hover:underline" > 2022 - 23 < /a></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li><a href="https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing" class="text-blue-600 hover:underline" > 2021 - 22 < /a></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                < div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h3 class="font-bold border-b pb-2 mb-2" > Annual SPP </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li><span class="text-gray-500" > 2024 - 25(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><span class="text-gray-500" > 2023 - 24(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    < div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3 class="font-bold border-b pb-2 mb-2" > Annual Report </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><span class="text-gray-500" > 2024 - 25(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><span class="text-gray-500" > 2023 - 24(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        < div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 class="font-bold border-b pb-2 mb-2" > Activities </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><span class="text-gray-500" > 2024 - 25(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li><span class="text-gray-500" > 2023 - 24(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            < div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3 class="font-bold border-b pb-2 mb-2" > Cell / Committee Members </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li><span class="text-gray-500" > 2024 - 25(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li><span class="text-gray-500" > 2023 - 24(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><span class="text-gray-500" > 2022 - 23(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><span class="text-gray-500" > 2021 - 22(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        < div class="border rounded p-4" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 class="font-bold border-b pb-2 mb-2" > AISHE Certificate </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                < ul class="space-y-1" >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><span class="text-gray-500" > 2024 - 25(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <li><span class="text-gray-500" > 2023 - 24(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <li><span class="text-gray-500" > 2022 - 23(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><span class="text-gray-500" > 2021 - 22(Coming Soon) < /span></li >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         `
    },
    'cell-statutory': {
        title: 'Statutory Cells & Committees',
        content: `
            <div class="space-y-6">
                <p class="text-lg">The statutory committees at RBANMS First Grade College are established in accordance with UGC and University regulations to ensure institutional transparency, student welfare, and a safe learning environment.</p>
                <p>These committees handle critical aspects such as anti-ragging, grievance redressal, and prevention of sexual harassment, ensuring that the college remains a space of mutual respect and equal opportunity.</p>
            </div>
        `
    },
    'cell-others': {
        title: 'Other Cells & Clubs',
        content: `
            <div class="space-y-6">
                <p class="text-lg">Beyond academics and statutory requirements, RBANMS provides a vibrant ecosystem of various other cells and clubs that allow students to explore their interests, develop leadership skills, and contribute to social causes.</p>
                <p>From the Eco Club protecting our environment to the Cultural Committee celebrating our heritage, these platforms ensure the holistic development of every student.</p>
            </div>
        `
    },
    'research': {
        title: 'Research & Innovation',
        content: `
            <div class="space-y-6">
                <p class="text-lg text-justify leading-relaxed">RBANM’S First Grade College is committed to promoting a culture of research and innovation among its faculty and students. We believe that an inquiry-driven environment is essential for academic excellence and for preparing students to meet the challenges of a rapidly changing world.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 class="text-xl font-bold text-blue-900 mb-4 font-headline">Key Objectives</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <span class="text-blue-600 mt-1">●</span>
                                <span class="text-gray-700">To encourage faculty and students to undertake research projects.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-blue-600 mt-1">●</span>
                                <span class="text-gray-700">To facilitate participation in national and international conferences.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-blue-600 mt-1">●</span>
                                <span class="text-gray-700">To support the publication of research papers in reputed journals.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-blue-600 mt-1">●</span>
                                <span class="text-gray-700">To organize workshops on research methodology and ethics.</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 class="text-xl font-bold text-blue-900 mb-4 font-headline">Research Areas</h3>
                        <p class="text-gray-700 mb-4">Our faculty members are actively involved in research across multiple disciplines, including:</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-800 text-sm">Commerce & Management</span>
                            <span class="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-800 text-sm">Computer Applications</span>
                            <span class="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-800 text-sm">Economic Policy</span>
                            <span class="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-800 text-sm">Social Sciences</span>
                            <span class="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-800 text-sm">Linguistics & Literature</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};
