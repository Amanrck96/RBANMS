'use client';

import { Card, CardContent } from '@/components/ui/card';
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
    details: [
      'Duration: 3 Years',
      'Focus: Software Development, IT Applications',
      'Career Roles: Software Developer, Web Designer, System Analyst'
    ],
    href: '/departments/computer-applications',
    isNew: false
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'The B.Com (Bachelor of Commerce) is a three-year undergraduate degree that provides in-depth knowledge of commerce, finance, accounting, taxation, and business law. It is ideal for students interested in banking, finance, and corporate sectors.',
    details: [
      'Duration: 3 Years',
      'Focus: Commerce, Finance, Accounting',
      'Career Roles: Accountant, Financial Analyst, Tax Consultant'
    ],
    href: '/departments/commerce',
    isNew: false
  },
  {
    icon: Landmark,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'The BBA (Bachelor of Business Administration) is a three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world.',
    details: [
      'Duration: 3 Years',
      'Focus: Management, Entrepreneurship, Marketing',
      'Career Roles: Business Analyst, HR Manager, Marketing Executive'
    ],
    href: '/departments/management',
    isNew: false
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'The BA (Bachelor of Arts) is a three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and the social sciences, helping students develop critical thinking, research, and analytical skills.',
    details: [
      'Duration: 3 Years',
      'Focus: Humanities, Social Sciences',
      'Career Roles: Journalism, Teaching, Social Work'
    ],
    href: '/departments/arts',
    isNew: false
  },
  {
    icon: Dumbbell,
    title: 'Bachelor of Arts (Physical Education with History & Political Science)',
    subtitle: 'Expected to begin in June 2026',
    description: 'The BA in Physical Education combines sports science with humanities subjects like History and Political Science. This three-year undergraduate program is designed for students passionate about sports, fitness, and education. It covers sports psychology, exercise physiology, coaching techniques, and sports management alongside analytical subjects.',
    details: [
      'Duration: 3 Years',
      'Focus: Sports Science, Humanities',
      'Career Roles: Sports Coach, Fitness Trainer, Sports Administrator'
    ],
    href: '/departments/physical-education',
    isNew: true
  },
  {
    icon: Newspaper,
    title: 'Bachelor of Arts (Journalism, History & Economics)',
    subtitle: 'Expected to begin in June 2026',
    description: 'The BA in Journalism with History and Economics is a three-year undergraduate program that blends media studies with social sciences. This specialization develops strong communication, research, and analytical skills essential for the media industry. Students learn news writing, reporting, media ethics, and digital journalism alongside historical context and economic analysis.',
    details: [
      'Duration: 3 Years',
      'Focus: Media Studies, Social Sciences',
      'Career Roles: Journalist, Content Creator, Media Producer'
    ],
    href: '/departments/english',
    isNew: true
  },
  {
    icon: GraduationCap, // using GraduationCap for M.Com as it's a masters degree
    title: 'Masters in Commerce (M.Com)',
    description: 'This two year post-graduate degree provides an opportunity to upgrade a career in commerce and accounting. At RBANM’s FGC, the M.Com programme is designed to cater to working professionals.',
    details: [
      'Duration: 2 Years',
      'Focus: Commerce, Accounting, Professional Development',
      'Career Roles: Senior Accountant, Finance Manager, Corporate Professional'
    ],
    href: '/departments/commerce', // Assuming it belongs to commerce department
    isNew: false
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 text-primary font-bold bg-blue-50">
            {badgeText}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            {tagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {content ? (
          <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row">
                  <div className="p-8 bg-muted/30 md:w-1/4 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border">
                    <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <course.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl text-primary">{course.title.split('(')[0].trim()}</h3>
                    {course.title.includes('(') && (
                      <span className="text-muted-foreground font-semibold mt-1">({course.title.split('(')[1]}</span>
                    )}
                    {course.subtitle && (
                      <Badge variant="outline" className="mt-3 text-xs border-primary text-primary">
                        {course.subtitle}
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        {course.isNew && (
                          <div className="mb-2">
                            <span className="text-lg font-bold text-primary font-headline animate-pulse">Applied for</span>
                          </div>
                        )}
                        <h4 className="text-2xl font-bold font-headline text-foreground">{course.title}</h4>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {course.details.map((detail, idx) => (
                        <div key={idx} className="bg-secondary/50 p-3 rounded-md text-sm font-medium border border-secondary">
                          {detail}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t flex justify-end">
                      <Button asChild className="group-hover:bg-primary group-hover:text-white transition-colors">
                        <Link href={course.href}>
                          View Department Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 bg-white border rounded-xl p-8 md:p-12 text-center text-foreground relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Join us at RBANM's First Grade College and become part of a legacy of excellence in education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 font-bold border-none">
                <Link href="/contact">Contact Admissions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/5">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-slate-100 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
      </div>
    </div>
  );
}
