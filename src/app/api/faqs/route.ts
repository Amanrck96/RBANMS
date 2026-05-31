import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

const DEFAULT_FAQs = [
  // Admissions (1-10)
  {
    id: '1',
    category: 'admissions',
    question: 'What programmes does RBANM’s FG College offer?',
    answer: 'RBANM’s FG College offers undergraduate degrees in Arts, Commerce, and Science streams including B.A., B.Com., and B.Sc. programmes.',
    order: 1
  },
  {
    id: '2',
    category: 'admissions',
    question: 'How do I apply for admission to RBANM’s FG College?',
    answer: 'Apply online through the college admissions portal, complete the form, upload documents, and pay the application fee.',
    order: 2
  },
  {
    id: '3',
    category: 'admissions',
    question: 'What are the eligibility criteria for undergraduate courses?',
    answer: 'You need 10+2 or equivalent with minimum marks specified per programme; check the course page for exact requirements.',
    order: 3
  },
  {
    id: '4',
    category: 'admissions',
    question: 'When does admission open for 2026?',
    answer: 'Admission dates are published on the website each year; the 2026 cycle opens as per the academic calendar on the Admissions page.',
    order: 4
  },
  {
    id: '5',
    category: 'admissions',
    question: 'Is there an entrance exam for undergraduate admissions?',
    answer: 'Most general UG programmes admit based on 10+2 merit; some special courses may require entrance tests—check the programme page.',
    order: 5
  },
  {
    id: '6',
    category: 'admissions',
    question: 'Can I apply for multiple courses at once?',
    answer: 'Yes, you can apply to multiple programmes but must meet eligibility for each and pay separate application fees if required.',
    order: 6
  },
  {
    id: '7',
    category: 'admissions',
    question: 'What documents are needed for admission?',
    answer: 'Required documents: 10+2 marksheet, birth certificate, photo ID, passport photo, category certificate (if applicable), and transfer certificate.',
    order: 7
  },
  {
    id: '8',
    category: 'admissions',
    question: 'How do I check my admission application status?',
    answer: 'Log into the admissions portal with your application ID to view your status and notifications.',
    order: 8
  },
  {
    id: '9',
    category: 'admissions',
    question: 'Are there management quota seats available?',
    answer: 'Seat reservation and management quota rules follow university and government guidelines; details are on the Admissions page.',
    order: 9
  },
  {
    id: '10',
    category: 'admissions',
    question: 'Can I get admission after the deadline?',
    answer: 'Late admissions depend on seat availability; contact the admissions office for late application procedures.',
    order: 10
  },

  // Fees & Financial Aid (11-20)
  {
    id: '11',
    category: 'fees',
    question: 'What is the tuition fee for B.Com. at RBANM’s FG College?',
    answer: 'Tuition fees vary by programme; check the Fees page for current 2026 fees for B.Com. and other courses.',
    order: 11
  },
  {
    id: '12',
    category: 'fees',
    question: 'How do I pay college fees online?',
    answer: 'Pay fees via the student portal using card, net banking, or UPI; payment instructions are shown during checkout.',
    order: 12
  },
  {
    id: '13',
    category: 'fees',
    question: 'Are fee instalments allowed?',
    answer: 'Yes, the college may allow fee instalments—contact the accounts office or check the fee policy for instalment plans.',
    order: 13
  },
  {
    id: '14',
    category: 'fees',
    question: 'Does RBANM’s FG College offer scholarships?',
    answer: 'Yes, merit-based and need-based scholarships are available; details and application forms are on the Scholarships page.',
    order: 14
  },
  {
    id: '15',
    category: 'fees',
    question: 'How do I apply for government scholarships?',
    answer: 'Apply through the college for state and central government scholarship schemes; the student support office guides you.',
    order: 15
  },
  {
    id: '16',
    category: 'fees',
    question: 'Is there a refund policy if I withdraw?',
    answer: 'Fee refund rules follow university policy; check the admission/fee policy document for refund timelines and conditions.',
    order: 16
  },
  {
    id: '17',
    category: 'fees',
    question: 'Are there scholarships for SC/ST/OBC students?',
    answer: 'Yes, government scholarships for SC/ST/OBC categories are facilitated through the college—contact the scholarship cell.',
    order: 17
  },
  {
    id: '18',
    category: 'fees',
    question: 'Can I get a fee receipt digitally?',
    answer: 'Yes, digital receipts are issued after payment and downloadable from the student portal.',
    order: 18
  },
  {
    id: '19',
    category: 'fees',
    question: 'What happens if I miss the fee payment deadline?',
    answer: 'Late fees may apply; check the fee policy for late payment penalties and grace periods.',
    order: 19
  },
  {
    id: '20',
    category: 'fees',
    question: 'Is there financial aid for economically weaker students?',
    answer: 'Means-based financial assistance and fee concessions are available for eligible students; apply through student welfare.',
    order: 20
  },

  // Academics & Curriculum (21-30)
  {
    id: '21',
    category: 'academics',
    question: 'How long is the undergraduate degree programme?',
    answer: 'Most undergraduate degrees at RBANM’s FG College are 3 years (6 semesters) as per the university structure.',
    order: 21
  },
  {
    id: '22',
    category: 'academics',
    question: 'Does the college follow a semester system?',
    answer: 'Yes, the college follows a semester system with continuous assessment and end-semester exams.',
    order: 22
  },
  {
    id: '23',
    category: 'academics',
    question: 'Can I change my subject combination after admission?',
    answer: 'Subject changes are possible within deadlines and subject to availability; apply to your department or academic office.',
    order: 23
  },
  {
    id: '24',
    category: 'academics',
    question: 'Are elective courses available in UG programmes?',
    answer: 'Yes, many programmes offer electives to broaden learning—check your programme curriculum for elective options.',
    order: 24
  },
  {
    id: '25',
    category: 'academics',
    question: 'Is practical/lab work part of the curriculum?',
    answer: 'Yes, Science and Commerce programmes include practicals, lab sessions, and project work as part of assessment.',
    order: 25
  },
  {
    id: '26',
    category: 'academics',
    question: 'How are student grades calculated?',
    answer: 'Grades are calculated based on continuous internal assessment and end-semester exams as per university grading rules.',
    order: 26
  },
  {
    id: '27',
    category: 'academics',
    question: 'What is the passing criteria for courses?',
    answer: 'Minimum passing marks/grade are defined in the academic regulations; check your programme handbook for details.',
    order: 27
  },
  {
    id: '28',
    category: 'academics',
    question: 'Are guest lectures and workshops conducted?',
    answer: 'Yes, the college regularly organizes guest lectures, seminars, and workshops by industry and academic experts.',
    order: 28
  },
  {
    id: '29',
    category: 'academics',
    question: 'How are exam timetables published?',
    answer: 'Exam schedules are released each semester on the college website, student portal, and notice boards.',
    order: 29
  },
  {
    id: '30',
    category: 'academics',
    question: 'Can I apply for re-evaluation of exam papers?',
    answer: 'Yes, re-evaluation/recounting is allowed as per university guidelines; submit applications within the stipulated time.',
    order: 30
  },

  // Campus Life & Facilities (31-40)
  {
    id: '31',
    category: 'campus',
    question: 'Is there hostel accommodation for students?',
    answer: 'Hostel availability varies; contact the administration or check the Accommodation page for current hostel options.',
    order: 31
  },
  {
    id: '32',
    category: 'campus',
    question: 'Does the college have a library?',
    answer: 'Yes, the college library has books, journals, and e-resources with membership rules and opening hours on the Library page.',
    order: 32
  },
  {
    id: '33',
    category: 'campus',
    question: 'Is Wi-Fi available on campus?',
    answer: 'Yes, campus Wi-Fi is available for students; IT services provide login details and acceptable-use policy.',
    order: 33
  },
  {
    id: '34',
    category: 'campus',
    question: 'Are sports facilities available on campus?',
    answer: 'Yes, sports grounds and equipment for various games are available for students.',
    order: 34
  },
  {
    id: '35',
    category: 'campus',
    question: 'Is there a canteen or dining facility?',
    answer: 'Yes, a campus canteen and dining options are available; menus and timings are posted locally.',
    order: 35
  },
  {
    id: '36',
    category: 'campus',
    question: 'Is the campus safe with security?',
    answer: 'The campus has security personnel and safety protocols; emergency contacts are shared during orientation.',
    order: 36
  },
  {
    id: '37',
    category: 'campus',
    question: 'Are medical services available on campus?',
    answer: 'Basic health support or access to nearby clinics is arranged; medical emergency contacts are published by the college.',
    order: 37
  },
  {
    id: '38',
    category: 'campus',
    question: 'Is parking available for students and parents?',
    answer: 'Parking is available with rules posted by campus administration; permits may be required.',
    order: 38
  },
  {
    id: '39',
    category: 'campus',
    question: 'What clubs and societies exist on campus?',
    answer: 'Various cultural, academic, and sports clubs are active; join during orientation or contact the student activities office.',
    order: 39
  },
  {
    id: '40',
    category: 'campus',
    question: 'Are there cultural fests and events?',
    answer: 'Yes, annual cultural fests, seminars, and student events are organized throughout the year.',
    order: 40
  },

  // Placements & Career (41-45)
  {
    id: '41',
    category: 'placements',
    question: 'Does RBANM’s FG College have a placement cell?',
    answer: 'Yes, the placement/career services office coordinates internships, campus recruitment, and career counselling.',
    order: 41
  },
  {
    id: '42',
    category: 'placements',
    question: 'Which companies recruit from the college?',
    answer: 'Recruiter lists vary yearly; recent recruiters and placement statistics are shared by the placement office.',
    order: 42
  },
  {
    id: '43',
    category: 'placements',
    question: 'How do I register for campus placements?',
    answer: 'Register with the placement cell and attend pre-placement training, resume workshops, and mock interviews.',
    order: 43
  },
  {
    id: '44',
    category: 'placements',
    question: 'Are internships provided through the college?',
    answer: 'Yes, the college facilitates internships and industry projects via the placement cell.',
    order: 44
  },
  {
    id: '45',
    category: 'placements',
    question: 'Does the college offer career counselling?',
    answer: 'Yes, career guidance, resume clinics, and interview preparation are provided by the placement cell.',
    order: 45
  },

  // Contact & General (46-50)
  {
    id: '46',
    category: 'general',
    question: 'Where is RBANM’s FG College located?',
    answer: 'RBANM’s FG College is located in Ulsoor, Bengaluru, Karnataka—directions and map are on the Contact Us page.',
    order: 46
  },
  {
    id: '47',
    category: 'general',
    question: 'How do I contact the admissions office?',
    answer: 'Admissions contact numbers and email are listed on the Admissions page for quick assistance.',
    order: 47
  },
  {
    id: '48',
    category: 'general',
    question: 'How do I get my marksheet or transfer certificate?',
    answer: 'Apply to the examinations/records office with a formal request for marksheets, TC, or character certificates.',
    order: 48
  },
  {
    id: '49',
    category: 'general',
    question: 'Can parents meet faculty members?',
    answer: 'Yes, parents can meet faculty by prior appointment; parent-teacher meetings are held periodically.',
    order: 49
  },
  {
    id: '50',
    category: 'general',
    question: 'How do I give feedback or suggestions to the college?',
    answer: 'Use the feedback form on the website or contact student affairs/administration to submit feedback.',
    order: 50
  }
];

// GET - Fetch all FAQs
export async function GET(request: NextRequest) {
    try {
        const faqsSnapshot = await adminDb.collection('faqs').orderBy('order', 'asc').get();
        
        let faqs = faqsSnapshot.docs.map(doc => doc.data());

        // Seeding database if empty
        if (faqs.length === 0) {
            console.log('[FAQ API] Firestore faqs collection is empty. Seeding default FAQs...');
            const now = new Date().toISOString();
            
            // Perform writes in batches
            const batch = adminDb.batch();
            
            DEFAULT_FAQs.forEach((faq) => {
                const docRef = adminDb.collection('faqs').doc(faq.id);
                batch.set(docRef, {
                    ...faq,
                    createdAt: now,
                    updatedAt: now
                });
            });
            
            await batch.commit();
            console.log('[FAQ API] Seeded 50 default FAQs successfully.');
            
            // Re-fetch to return seeded data
            const freshSnapshot = await adminDb.collection('faqs').orderBy('order', 'asc').get();
            faqs = freshSnapshot.docs.map(doc => doc.data());
        }

        return NextResponse.json({ faqs });
    } catch (error: any) {
        console.error('Fetch FAQs error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch FAQs' },
            { status: 500 }
        );
    }
}

// POST - Create a new FAQ (Admin/Super Admin only)
export async function POST(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const uid = decodedToken.uid;

        // Check if user has permission
        const userDoc = await adminDb.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const userData = userDoc.data();
        if (userData?.role !== 'admin' && userData?.role !== 'super_admin') {
            return NextResponse.json({ error: 'Forbidden: Insufficient permissions' }, { status: 403 });
        }

        const { question, answer, category, order } = await request.json();

        if (!question || !answer || !category) {
            return NextResponse.json({ error: 'Question, answer, and category are required' }, { status: 400 });
        }

        const now = new Date().toISOString();
        const faqId = adminDb.collection('faqs').doc().id;

        const faqData = {
            id: faqId,
            question,
            answer,
            category,
            order: order !== undefined ? Number(order) : 999,
            createdAt: now,
            updatedAt: now,
            createdBy: uid
        };

        await adminDb.collection('faqs').doc(faqId).set(faqData);

        return NextResponse.json({
            message: 'FAQ created successfully',
            faq: faqData
        });
    } catch (error: any) {
        console.error('Create FAQ error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create FAQ' },
            { status: 500 }
        );
    }
}

// PUT - Update an existing FAQ (Admin/Super Admin only)
export async function PUT(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const uid = decodedToken.uid;

        // Check permission
        const userDoc = await adminDb.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const userData = userDoc.data();
        if (userData?.role !== 'admin' && userData?.role !== 'super_admin') {
            return NextResponse.json({ error: 'Forbidden: Insufficient permissions' }, { status: 403 });
        }

        const { id, question, answer, category, order } = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'FAQ ID is required' }, { status: 400 });
        }

        const faqDoc = await adminDb.collection('faqs').doc(id).get();
        if (!faqDoc.exists) {
            return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
        }

        const now = new Date().toISOString();
        const updates: any = {
            updatedAt: now,
            updatedBy: uid
        };

        if (question !== undefined) updates.question = question;
        if (answer !== undefined) updates.answer = answer;
        if (category !== undefined) updates.category = category;
        if (order !== undefined) updates.order = Number(order);

        await adminDb.collection('faqs').doc(id).update(updates);

        const updatedFaq = await adminDb.collection('faqs').doc(id).get();

        return NextResponse.json({
            message: 'FAQ updated successfully',
            faq: updatedFaq.data()
        });
    } catch (error: any) {
        console.error('Update FAQ error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update FAQ' },
            { status: 500 }
        );
    }
}

// DELETE - Delete a FAQ (Super Admin only)
export async function DELETE(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const uid = decodedToken.uid;

        // Check if user is super admin
        const userDoc = await adminDb.collection('users').doc(uid).get();
        if (!userDoc.exists || userDoc.data()?.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Forbidden: Only super admins can delete FAQs' },
                { status: 403 }
            );
        }

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'FAQ ID required' }, { status: 400 });
        }

        await adminDb.collection('faqs').doc(id).delete();

        return NextResponse.json({ message: 'FAQ deleted successfully' });
    } catch (error: any) {
        console.error('Delete FAQ error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete FAQ' },
            { status: 500 }
        );
    }
}
