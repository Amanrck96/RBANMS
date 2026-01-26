'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { usePageContent } from '@/hooks/use-page-content';
import { Loader2 } from 'lucide-react';
import { ArrowRight, Monitor, Calculator, Briefcase, BookOpen, GraduationCap, Newspaper, Database, Dumbbell } from 'lucide-react';

const standardCourses = [
  {
    icon: Monitor,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'The BCA (Bachelor of Computer Applications) is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications. It is designed for students who aspire to build a career in the tech industry, covering subjects like database management, networking, web development, and cybersecurity. BCA graduates have diverse career opportunities, including roles as software developers, web designers, system analysts, IT support specialists, and database administrators. Further studies such as MCA (Master of Computer Applications) or certifications in AI, cloud computing, and data science can enhance career prospects.',
    duration: '3 Years',
    focus: 'Software Development',
    career: 'Software Developer',
    href: '/departments/computer-applications',
  },
  {
    icon: Calculator,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'The B.Com (Bachelor of Commerce) is a three-year undergraduate degree that provides in-depth knowledge of commerce, finance, accounting, taxation, and business law. It is ideal for students interested in banking, finance, and corporate sectors. B.Com graduates can pursue careers as accountants, financial analysts, tax consultants, auditors, and investment bankers. Those who wish to advance in finance or management can opt for further studies such as M.Com, MBA, CA (Chartered Accountancy), CMA (Cost and Management Accounting), or CFA (Chartered Financial Analyst).',
    duration: '3 Years',
    focus: 'Commerce & Finance',
    career: 'Accountant/Analyst',
    href: '/departments/commerce',
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'The BBA (Bachelor of Business Administration) is a three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world. BBA graduates can work as business analysts, marketing executives, HR managers, and financial advisors. Many students also pursue an MBA (Master of Business Administration) for higher career growth, leading to roles such as business consultants, company executives, and start-up founders.',
    duration: '3 Years',
    focus: 'Management',
    career: 'Business Analyst',
    href: '/departments/management',
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'The BA (Bachelor of Arts) is a three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and the social sciences, helping students develop critical thinking, research, and analytical skills. Career options for BA graduates include journalism, teaching, social work, public administration, and content writing. Further studies like MA (Master of Arts), PhD, or professional courses in mass communication, law, and public relations can open more specialized career paths.',
    duration: '3 Years',
    focus: 'Humanities',
    career: 'Journalism/Teaching',
    href: '/departments/arts',
  },
  {
    icon: GraduationCap,
    title: 'Masters in Commerce (M.Com)',
    description: 'A two-year post-graduate degree designed for upgraded careers in commerce and accounting, providing advanced expertise for leadership roles in the financial sector.',
    duration: '2 Years',
    focus: 'Advanced Commerce',
    career: 'Finance Manager',
    href: '/departments/commerce',
  },
];

const appliedCourses = [
  {
    icon: Newspaper,
    title: 'Bachelor of Arts (Journalism, History & Economics)',
    description: 'The BA in Journalism with History and Economics is a three-year undergraduate program that blends media studies with social sciences. This specialization develops strong communication, research, and analytical skills essential for the media industry. Students learn news writing, reporting, media ethics, and digital journalism alongside historical context and economic analysis. Career opportunities include journalism, content creation, news reporting, editorial work, media production, and public relations. Further studies like Master in Journalism, Mass Communication, or specialized courses in digital media and broadcast journalism can lead to senior roles in media organizations.',
    duration: '3 Years',
    focus: 'Media & Communication',
    career: 'Journalist/Editor',
    href: '/academics/new-courses',
  },
  {
    icon: Dumbbell,
    title: 'Bachelor of Arts (Physical Education with History & Political Science)',
    description: 'The BA in Physical Education combines sports science with humanities subjects like History and Political Science. This three-year undergraduate program is designed for students passionate about sports, fitness, and education. It covers sports psychology, exercise physiology, coaching techniques, and sports management alongside analytical subjects. Graduates can pursue careers as physical education teachers, sports coaches, fitness trainers, sports administrators, and athletic trainers. Further studies like M.P.Ed (Master of Physical Education) or certifications in sports nutrition, yoga, or sports management can enhance career prospects.',
    duration: '3 Years',
    comingSoon: 'Expected to begin in June 2026',
    focus: 'Sports & Humanities',
    career: 'PE Teacher / Coach',
    href: '/departments/physical-education',
  }
];

export default function CoursesOfferedPage() {
  const { data, loading } = usePageContent('academics-courses');

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin text-primary h-8 w-8" />
      </div>
    );
  }

  const badgeText = data?.badgeText || "Academic Excellence";
  const title = data?.title || "Courses Offered";
  const tagline = data?.tagline || "Discover our diverse range of undergraduate programs designed to empower you with knowledge, skills, and future-ready capabilities.";

  const renderCourseSection = (courses: typeof standardCourses, sectionTitle?: string) => (
    <div className="space-y-12 mb-20">
      {sectionTitle && (
        <div className="space-y-6">
          <div className={`border-l-8 pl-6 py-2 ${sectionTitle === "APPLIED FOR" ? "border-[#800000]" : "border-blue-900"}`}>
            <h2 className={`text-3xl md:text-4xl font-bold font-headline uppercase tracking-wide ${sectionTitle === "APPLIED FOR" ? "!text-[#800000]" : "text-blue-950"}`}>
              {sectionTitle}
            </h2>
          </div>
          {sectionTitle === "APPLIED FOR" && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
              In response to the changing demands of the industry and society, we continuously evolve our curriculum and introduce new programs. These courses are designed to equip students with cutting-edge skills and future-ready knowledge.
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={course.href}
            className="group block h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 flex-shrink-0 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                  <course.icon className="h-7 w-7 text-blue-900 transition-colors group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-950 leading-tight">
                    {course.title}
                  </h3>
                  {('comingSoon' in course) && course.comingSoon && (
                    <Badge variant="secondary" className="mt-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 font-semibold">
                      {course.comingSoon}
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                {course.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-50">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Duration</span>
                  <p className="text-sm font-semibold text-blue-900">{course.duration}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Focus</span>
                  <p className="text-sm font-semibold text-blue-900">{course.focus}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Career</span>
                  <p className="text-sm font-semibold text-blue-900">{course.career}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                  View Department Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none px-4 py-1 text-sm font-medium rounded-full">
            {badgeText}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-blue-950 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>

        {renderCourseSection(standardCourses, "COURSES OFFERED")}
        {renderCourseSection(appliedCourses, "APPLIED FOR")}
      </div>
    </div>
  );
}
