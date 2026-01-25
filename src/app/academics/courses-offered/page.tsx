'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Computer, Briefcase, Landmark, BookOpen, Dumbbell, Newspaper, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { usePageContent } from '@/hooks/use-page-content';
import { Loader2 } from 'lucide-react';

const courses = [
  {
    icon: Computer,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'The BCA (Bachelor of Computer Applications) is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications. It is designed for students who aspire to build a career in the tech industry, covering subjects like database management, networking, web development, and cybersecurity.',
    href: '/departments/computer-applications',
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'The B.Com (Bachelor of Commerce) is a three-year undergraduate degree that provides in-depth knowledge of commerce, finance, accounting, taxation, and business law. It is ideal for students interested in banking, finance, and corporate sectors.',
    href: '/departments/commerce',
  },
  {
    icon: Landmark,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'The BBA (Bachelor of Business Administration) is a three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world.',
    href: '/departments/management',
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'The BA (Bachelor of Arts) is a three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and the social sciences, helping students develop critical thinking, research, and analytical skills.',
    href: '/departments/arts',
  },
  {
    icon: Dumbbell,
    title: 'Bachelor of Arts (Physical Education with History & Political Science)',
    description: 'The BA in Physical Education combines sports science with humanities subjects like History and Political Science. This three-year undergraduate program is designed for students passionate about sports, fitness, and education. It covers sports psychology, exercise physiology, coaching techniques, and sports management alongside analytical subjects. Graduates can pursue careers as physical education teachers, sports coaches, fitness trainers, sports administrators, and athletic trainers. Further studies like M.P.Ed (Master of Physical Education) or certifications in sports nutrition, yoga, or sports management can enhance career prospects.',
    href: '/departments/physical-education',
  },
  {
    icon: Newspaper,
    title: 'Bachelor of Arts (Journalism, History & Economics)',
    description: 'The BA in Journalism with History and Economics is a three-year undergraduate program that blends media studies with social sciences. This specialization develops strong communication, research, and analytical skills essential for the media industry. Students learn news writing, reporting, media ethics, and digital journalism alongside historical context and economic analysis. Career opportunities include journalism, content creation, news reporting, editorial work, media production, and public relations. Further studies like Master in Journalism, Mass Communication, or specialized courses in digital media and broadcast journalism can lead to senior roles in media organizations.',
    href: '/departments/english',
  },
  {
    icon: GraduationCap,
    title: 'Masters in Commerce (M.Com)',
    description: 'This two year post-graduate degree provides an opportunity to upgrade a career in commerce and accounting. At RBANM’s FGC, the M.Com programme is designed to cater to working professionals.',
    href: '/departments/commerce',
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

  // Default title/tagline/badge logic acting as fallback
  const badgeText = data?.badgeText || "Academic Excellence";
  const title = data?.title || "Courses Offered";
  const tagline = data?.tagline || "Discover our diverse range of undergraduate programs designed to empower you with knowledge, skills, and future-ready capabilities.";
  const content = data?.content;

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none px-4 py-1 text-sm font-medium rounded-full">
            {badgeText}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-blue-950 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>

        {content && (
          <div className="prose prose-lg max-w-none text-gray-800 mb-16" dangerouslySetInnerHTML={{ __html: content }} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              href={course.href}
              className="group block h-full"
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center">
                    <course.icon className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950 leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {course.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                    Click here for details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
