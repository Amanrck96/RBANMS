'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  GraduationCap, 
  DollarSign, 
  BookOpen, 
  Building, 
  Briefcase, 
  PhoneCall, 
  HelpCircle, 
  X, 
  ArrowRight,
  Info
} from 'lucide-react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FAQ {
  id: string | number;
  question: string;
  answer: string;
  category: 'admissions' | 'fees' | 'academics' | 'campus' | 'placements' | 'general';
  order?: number;
}

const FAQ_DATA: FAQ[] = [
  // Admissions (1-10)
  {
    id: 1,
    category: 'admissions',
    question: 'What programmes does RBANM’s FG College offer?',
    answer: 'RBANM’s FG College offers undergraduate degrees in Arts, Commerce, and Science streams including B.A., B.Com., and B.Sc. programmes.'
  },
  {
    id: 2,
    category: 'admissions',
    question: 'How do I apply for admission to RBANM’s FG College?',
    answer: 'Apply online through the college admissions portal, complete the form, upload documents, and pay the application fee.'
  },
  {
    id: 3,
    category: 'admissions',
    question: 'What are the eligibility criteria for undergraduate courses?',
    answer: 'You need 10+2 or equivalent with minimum marks specified per programme; check the course page for exact requirements.'
  },
  {
    id: 4,
    category: 'admissions',
    question: 'When does admission open for 2026?',
    answer: 'Admission dates are published on the website each year; the 2026 cycle opens as per the academic calendar on the Admissions page.'
  },
  {
    id: 5,
    category: 'admissions',
    question: 'Is there an entrance exam for undergraduate admissions?',
    answer: 'Most general UG programmes admit based on 10+2 merit; some special courses may require entrance tests—check the programme page.'
  },
  {
    id: 6,
    category: 'admissions',
    question: 'Can I apply for multiple courses at once?',
    answer: 'Yes, you can apply to multiple programmes but must meet eligibility for each and pay separate application fees if required.'
  },
  {
    id: 7,
    category: 'admissions',
    question: 'What documents are needed for admission?',
    answer: 'Required documents: 10+2 marksheet, birth certificate, photo ID, passport photo, category certificate (if applicable), and transfer certificate.'
  },
  {
    id: 8,
    category: 'admissions',
    question: 'How do I check my admission application status?',
    answer: 'Log into the admissions portal with your application ID to view your status and notifications.'
  },
  {
    id: 9,
    category: 'admissions',
    question: 'Are there management quota seats available?',
    answer: 'Seat reservation and management quota rules follow university and government guidelines; details are on the Admissions page.'
  },
  {
    id: 10,
    category: 'admissions',
    question: 'Can I get admission after the deadline?',
    answer: 'Late admissions depend on seat availability; contact the admissions office for late application procedures.'
  },

  // Fees & Financial Aid (11-20)
  {
    id: 11,
    category: 'fees',
    question: 'What is the tuition fee for B.Com. at RBANM’s FG College?',
    answer: 'Tuition fees vary by programme; check the Fees page for current 2026 fees for B.Com. and other courses.'
  },
  {
    id: 12,
    category: 'fees',
    question: 'How do I pay college fees online?',
    answer: 'Pay fees via the student portal using card, net banking, or UPI; payment instructions are shown during checkout.'
  },
  {
    id: 13,
    category: 'fees',
    question: 'Are fee instalments allowed?',
    answer: 'Yes, the college may allow fee instalments—contact the accounts office or check the fee policy for instalment plans.'
  },
  {
    id: 14,
    category: 'fees',
    question: 'Does RBANM’s FG College offer scholarships?',
    answer: 'Yes, merit-based and need-based scholarships are available; details and application forms are on the Scholarships page.'
  },
  {
    id: 15,
    category: 'fees',
    question: 'How do I apply for government scholarships?',
    answer: 'Apply through the college for state and central government scholarship schemes; the student support office guides you.'
  },
  {
    id: 16,
    category: 'fees',
    question: 'Is there a refund policy if I withdraw?',
    answer: 'Fee refund rules follow university policy; check the admission/fee policy document for refund timelines and conditions.'
  },
  {
    id: 17,
    category: 'fees',
    question: 'Are there scholarships for SC/ST/OBC students?',
    answer: 'Yes, government scholarships for SC/ST/OBC categories are facilitated through the college—contact the scholarship cell.'
  },
  {
    id: 18,
    category: 'fees',
    question: 'Can I get a fee receipt digitally?',
    answer: 'Yes, digital receipts are issued after payment and downloadable from the student portal.'
  },
  {
    id: 19,
    category: 'fees',
    question: 'What happens if I miss the fee payment deadline?',
    answer: 'Late fees may apply; check the fee policy for late payment penalties and grace periods.'
  },
  {
    id: 20,
    category: 'fees',
    question: 'Is there financial aid for economically weaker students?',
    answer: 'Means-based financial assistance and fee concessions are available for eligible students; apply through student welfare.'
  },

  // Academics & Curriculum (21-30)
  {
    id: 21,
    category: 'academics',
    question: 'How long is the undergraduate degree programme?',
    answer: 'Most undergraduate degrees at RBANM’s FG College are 3 years (6 semesters) as per the university structure.'
  },
  {
    id: 22,
    category: 'academics',
    question: 'Does the college follow a semester system?',
    answer: 'Yes, the college follows a semester system with continuous assessment and end-semester exams.'
  },
  {
    id: 23,
    category: 'academics',
    question: 'Can I change my subject combination after admission?',
    answer: 'Subject changes are possible within deadlines and subject to availability; apply to your department or academic office.'
  },
  {
    id: 24,
    category: 'academics',
    question: 'Are elective courses available in UG programmes?',
    answer: 'Yes, many programmes offer electives to broaden learning—check your programme curriculum for elective options.'
  },
  {
    id: 25,
    category: 'academics',
    question: 'Is practical/lab work part of the curriculum?',
    answer: 'Yes, Science and Commerce programmes include practicals, lab sessions, and project work as part of assessment.'
  },
  {
    id: 26,
    category: 'academics',
    question: 'How are student grades calculated?',
    answer: 'Grades are calculated based on continuous internal assessment and end-semester exams as per university grading rules.'
  },
  {
    id: 27,
    category: 'academics',
    question: 'What is the passing criteria for courses?',
    answer: 'Minimum passing marks/grade are defined in the academic regulations; check your programme handbook for details.'
  },
  {
    id: 28,
    category: 'academics',
    question: 'Are guest lectures and workshops conducted?',
    answer: 'Yes, the college regularly organizes guest lectures, seminars, and workshops by industry and academic experts.'
  },
  {
    id: 29,
    category: 'academics',
    question: 'How are exam timetables published?',
    answer: 'Exam schedules are released each semester on the college website, student portal, and notice boards.'
  },
  {
    id: 30,
    category: 'academics',
    question: 'Can I apply for re-evaluation of exam papers?',
    answer: 'Yes, re-evaluation/recounting is allowed as per university guidelines; submit applications within the stipulated time.'
  },

  // Campus Life & Facilities (31-40)
  {
    id: 31,
    category: 'campus',
    question: 'Is there hostel accommodation for students?',
    answer: 'Hostel availability varies; contact the administration or check the Accommodation page for current hostel options.'
  },
  {
    id: 32,
    category: 'campus',
    question: 'Does the college have a library?',
    answer: 'Yes, the college library has books, journals, and e-resources with membership rules and opening hours on the Library page.'
  },
  {
    id: 33,
    category: 'campus',
    question: 'Is Wi-Fi available on campus?',
    answer: 'Yes, campus Wi-Fi is available for students; IT services provide login details and acceptable-use policy.'
  },
  {
    id: 34,
    category: 'campus',
    question: 'Are sports facilities available on campus?',
    answer: 'Yes, sports grounds and equipment for various games are available for students.'
  },
  {
    id: 35,
    category: 'campus',
    question: 'Is there a canteen or dining facility?',
    answer: 'Yes, a campus canteen and dining options are available; menus and timings are posted locally.'
  },
  {
    id: 36,
    category: 'campus',
    question: 'Is the campus safe with security?',
    answer: 'The campus has security personnel and safety protocols; emergency contacts are shared during orientation.'
  },
  {
    id: 37,
    category: 'campus',
    question: 'Are medical services available on campus?',
    answer: 'Basic health support or access to nearby clinics is arranged; medical emergency contacts are published by the college.'
  },
  {
    id: 38,
    category: 'campus',
    question: 'Is parking available for students and parents?',
    answer: 'Parking is available with rules posted by campus administration; permits may be required.'
  },
  {
    id: 39,
    category: 'campus',
    question: 'What clubs and societies exist on campus?',
    answer: 'Various cultural, academic, and sports clubs are active; join during orientation or contact the student activities office.'
  },
  {
    id: 40,
    category: 'campus',
    question: 'Are there cultural fests and events?',
    answer: 'Yes, annual cultural fests, seminars, and student events are organized throughout the year.'
  },

  // Placements & Career (41-45)
  {
    id: 41,
    category: 'placements',
    question: 'Does RBANM’s FG College have a placement cell?',
    answer: 'Yes, the placement/career services office coordinates internships, campus recruitment, and career counselling.'
  },
  {
    id: 42,
    category: 'placements',
    question: 'Which companies recruit from the college?',
    answer: 'Recruiter lists vary yearly; recent recruiters and placement statistics are shared by the placement office.'
  },
  {
    id: 43,
    category: 'placements',
    question: 'How do I register for campus placements?',
    answer: 'Register with the placement cell and attend pre-placement training, resume workshops, and mock interviews.'
  },
  {
    id: 44,
    category: 'placements',
    question: 'Are internships provided through the college?',
    answer: 'Yes, the college facilitates internships and industry projects via the placement cell.'
  },
  {
    id: 45,
    category: 'placements',
    question: 'Does the college offer career counselling?',
    answer: 'Yes, career guidance, resume clinics, and interview preparation are provided by the placement cell.'
  },

  // Contact & General (46-50)
  {
    id: 46,
    category: 'general',
    question: 'Where is RBANM’s FG College located?',
    answer: 'RBANM’s FG College is located in Ulsoor, Bengaluru, Karnataka—directions and map are on the Contact Us page.'
  },
  {
    id: 47,
    category: 'general',
    question: 'How do I contact the admissions office?',
    answer: 'Admissions contact numbers and email are listed on the Admissions page for quick assistance.'
  },
  {
    id: 48,
    category: 'general',
    question: 'How do I get my marksheet or transfer certificate?',
    answer: 'Apply to the examinations/records office with a formal request for marksheets, TC, or character certificates.'
  },
  {
    id: 49,
    category: 'general',
    question: 'Can parents meet faculty members?',
    answer: 'Yes, parents can meet faculty by prior appointment; parent-teacher meetings are held periodically.'
  },
  {
    id: 50,
    category: 'general',
    question: 'How do I give feedback or suggestions to the college?',
    answer: 'Use the feedback form on the website or contact student affairs/administration to submit feedback.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All FAQs', icon: HelpCircle },
  { id: 'admissions', label: 'Admissions', icon: GraduationCap },
  { id: 'fees', label: 'Fees & Aid', icon: DollarSign },
  { id: 'academics', label: 'Academics', icon: BookOpen },
  { id: 'campus', label: 'Campus Life', icon: Building },
  { id: 'placements', label: 'Placements', icon: Briefcase },
  { id: 'general', label: 'General', icon: PhoneCall },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [faqs, setFaqs] = useState<FAQ[]>(FAQ_DATA);

  useEffect(() => {
    async function loadFAQs() {
      try {
        const res = await fetch('/api/faqs');
        const data = await res.json();
        if (data.faqs && data.faqs.length > 0) {
          setFaqs(data.faqs);
        }
      } catch (error) {
        console.error('Failed to load dynamic FAQs, using static fallback:', error);
      }
    }
    loadFAQs();
  }, []);

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, searchQuery, activeCategory]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-16 md:py-24">
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFD700] text-blue-950 uppercase tracking-wider shadow-sm">
            <Info className="h-3 w-3" /> Information Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions? Find quick answers about admissions, academic courses, fee payments, student support, and life on campus.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 gap-8">
          
          {/* Search Card */}
          <div className="relative -mt-20 z-20">
            <Card className="shadow-lg border-t-4 border-t-[#800000]">
              <CardContent className="p-4 md:p-6">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search by keyword, question, or topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-12 h-14 bg-slate-50 border-slate-200 text-slate-900 rounded-lg text-base focus-visible:ring-blue-900 focus-visible:bg-white transition-all shadow-inner"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleClearSearch}
                      className="absolute right-3 text-slate-400 hover:text-slate-600 rounded-full h-8 w-8"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Tabs */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-none flex gap-2 justify-start md:justify-center">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap border shrink-0
                    ${isActive 
                      ? 'bg-[#800000] text-[#FFD700] border-[#800000] shadow-md transform -translate-y-0.5' 
                      : 'bg-white text-slate-700 hover:text-[#800000] hover:bg-slate-50 border-slate-200 hover:border-[#800000]/30'
                    }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-[#FFD700]' : 'text-[#800000]'}`} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Results Metadata */}
          <div className="flex justify-between items-center px-1 text-sm text-slate-600">
            <span>
              Showing <strong>{filteredFAQs.length}</strong> {filteredFAQs.length === 1 ? 'question' : 'questions'}
              {activeCategory !== 'all' && ` in "${CATEGORIES.find(c => c.id === activeCategory)?.label}"`}
            </span>
            {searchQuery && (
              <span className="italic">
                Filtered by &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {/* FAQ Accordions */}
          {filteredFAQs.length > 0 ? (
            <Card className="shadow-md border-slate-200">
              <CardContent className="p-4 md:p-8">
                <Accordion type="single" collapsible className="w-full divide-y divide-slate-100">
                  {filteredFAQs.map((faq, idx) => {
                    // Match visual category name for badges
                    const catInfo = CATEGORIES.find(c => c.id === faq.category);
                    return (
                      <AccordionItem 
                        key={faq.id} 
                        value={`item-${faq.id}`}
                        className={`border-b-0 py-2 first:pt-0 last:pb-0`}
                      >
                        <AccordionTrigger className="text-left font-bold text-blue-900 hover:text-[#800000] hover:no-underline py-4 text-base md:text-lg group">
                          <div className="flex flex-col md:flex-row md:items-center gap-2.5 w-full pr-4">
                            <span className="text-xs uppercase tracking-wider font-bold bg-[#800000]/10 text-[#800000] px-2 py-0.5 rounded w-max select-none">
                              Q{faq.order || idx + 1}
                            </span>
                            <span className="flex-1 group-hover:translate-x-0.5 transition-transform duration-200">
                              {faq.question}
                            </span>
                            {activeCategory === 'all' && catInfo && (
                              <span className="hidden md:inline-block text-[10px] uppercase tracking-wider font-bold border border-blue-100 text-blue-900 px-2 py-0.5 rounded-full bg-blue-50/50 select-none">
                                {catInfo.label}
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-900 leading-relaxed text-sm md:text-base pb-4 pt-1 px-1">
                          <div className="bg-slate-50 border-l-4 border-l-[#800000] rounded-r-lg p-4 shadow-sm">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          ) : (
            /* No Results State */
            <Card className="border-dashed border-2 border-slate-300 bg-white">
              <CardContent className="p-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="p-4 bg-slate-100 rounded-full text-slate-400">
                  <HelpCircle className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">No questions found</h3>
                <p className="text-slate-500 max-w-md">
                  We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo; in this category. Try checking spelling or search for another term.
                </p>
                <div className="flex gap-4 pt-2">
                  <Button 
                    variant="outline"
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Reset Filters
                  </Button>
                  <Button asChild className="bg-blue-900 hover:bg-blue-950 text-white shadow-md">
                    <Link href="/contact" className="flex items-center gap-1.5">
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Need More Assistance Banner */}
          <div className="bg-gradient-to-br from-[#800000]/10 to-blue-900/5 rounded-2xl border border-[#800000]/15 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-950">Still have questions?</h3>
              <p className="text-slate-600 text-sm md:text-base max-w-xl">
                If you cannot find the answer to your query in our FAQs, please feel free to reach out to the college administration or student help desk.
              </p>
            </div>
            <Button asChild className="bg-[#800000] hover:bg-[#660000] text-white shadow-md transition-colors w-full md:w-auto px-6 py-5 rounded-lg font-semibold shrink-0">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Get In Touch <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
