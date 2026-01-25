'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { usePageContent } from '@/hooks/use-page-content';
import { Loader2 } from 'lucide-react';
import { ArrowRight, Monitor, Calculator, Briefcase, BookOpen, GraduationCap, Newspaper, Database } from 'lucide-react';

const courses = [
  {
    icon: Monitor,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'The BCA is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications.',
    duration: '3 Years',
    focus: 'Software Development',
    career: 'Software Developer',
    href: '/departments/computer-applications',
  },
  {
    icon: Calculator,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'The B.Com provides in-depth knowledge of commerce, finance, accounting, taxation, and business law.',
    duration: '3 Years',
    focus: 'Commerce & Finance',
    career: 'Accountant/Analyst',
    href: '/departments/commerce',
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'The BBA focuses on management, entrepreneurship, marketing, finance, and human resources.',
    duration: '3 Years',
    focus: 'Management',
    career: 'Business Analyst',
    href: '/departments/management',
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'The BA with History, Political Science, and Economics provides a strong foundation in humanities.',
    duration: '3 Years',
    focus: 'Humanities',
    career: 'Journalism/Teaching',
    href: '/departments/arts',
  },
  {
    icon: GraduationCap,
    title: 'Masters in Commerce (M.Com)',
    description: 'A two-year post-graduate degree designed for upgraded careers in commerce and accounting.',
    duration: '2 Years',
    focus: 'Advanced Commerce',
    career: 'Finance Manager',
    href: '/departments/commerce',
  },
  {
    icon: Newspaper,
    title: 'B.A. in Journalism',
    description: 'A comprehensive program preparing students for the dynamic world of media, covering print, broadcast, and digital journalism.',
    duration: '3 Years',
    focus: 'Media & Communication',
    career: 'Journalist/Editor',
    href: '/academics/new-courses',
  },
  {
    icon: Database,
    title: 'B.Sc. in Data Science',
    description: 'An interdisciplinary program focusing on big data, machine learning, and statistical analysis to meet the growing demand for data professionals.',
    duration: '3 Years',
    focus: 'Data Analytics',
    career: 'Data Scientist',
    href: '/academics/new-courses',
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
                  <div>
                    <h3 className="text-2xl font-bold text-blue-950 leading-tight">
                      {course.title}
                    </h3>
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
    </div>
  );
}
