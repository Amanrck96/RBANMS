
export const CMS_DEFAULTS: Record<string, { title: string; content: string; imageUrl?: string }> = {
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
            <p>RBANMS First Grade College was founded in 1983 as part of RBANM's Educational Charities to meet the growing educational needs of Bangalore. Our founder, Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar, established educational institutions in 1873 with a vision of making education accessible to all.</p>
            <p>We believe education is a collaborative journey. Our dedicated teachers teach, guide, mentor, and inspire students through academics and extracurricular activities.</p>
        `
    },
    'about-vision': {
        title: 'Our Vision',
        content: `
            <p>The vision of RBANMS is built upon three fundamental principles:</p>
            <ul>
                <li><strong>Equity:</strong> Ensuring every student has access to opportunities and resources.</li>
                <li><strong>Justice:</strong> Upholding fairness and integrity in education.</li>
                <li><strong>Equality:</strong> Providing inclusive education where everyone is treated with dignity.</li>
            </ul>
        `
    },
    'about-mission': {
        title: 'Our Mission',
        content: `
            <p>Our mission is to provide quality education that empowers students to excel in life:</p>
            <ul>
                <li>Nurture confident and capable individuals</li>
                <li>Deliver strong foundation in Arts, Science, and Commerce</li>
                <li>Develop critical thinking and problem-solving skills</li>
                <li>Foster leadership and social responsibility</li>
                <li>Incorporate ethical standards and professionalism</li>
            </ul>
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
    'dept-management': {
        title: 'Department of Management (BBA)',
        content: '<p>Developing future business leaders through comprehensive curriculum, industry exposure, and practical management skills.</p>'
    },
    'dept-bca': {
        title: 'Department of Computer Applications (BCA)',
        content: '<p>Providing quality education in computer science and applications, preparing students for the dynamic IT industry with hands-on training and industry-relevant skills.</p>'
    },
    'dept-arts': {
        title: 'Department of Arts',
        content: '<p>The Department of Arts offers diverse programs in Humanities and Social Sciences, fostering critical thinking, creativity, and cultural awareness.</p>'
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
    'dept-commerce-sidebar': {
        title: 'Department Team',
        content: '<p>Our dedicated faculty and eager students.</p>',
        imageUrl: '/images/departments/commerce/group_photo.jpg'
    }
};
