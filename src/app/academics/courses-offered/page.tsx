
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Computer, Briefcase, Landmark, BookOpen } from 'lucide-react';

const courses = [
  {
    icon: Computer,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'A three-year undergraduate program focusing on computer science, programming, software development, and IT applications. It is designed for students who aspire to build a career in the tech industry, covering subjects like database management, networking, web development, and cybersecurity. Graduates have diverse career opportunities as software developers, web designers, system analysts, and more.',
    href: '/departments/computer-applications'
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'A three-year undergraduate degree providing in-depth knowledge of commerce, finance, accounting, taxation, and business law. Ideal for students interested in banking, finance, and corporate sectors. Graduates can pursue careers as accountants, financial analysts, tax consultants, and auditors.',
    href: '/departments/commerce'
  },
  {
    icon: Landmark,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'A three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world. Graduates can work as business analysts, marketing executives, and HR managers.',
    href: '/departments/management'
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'A three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and social sciences, helping students develop critical thinking, research, and analytical skills. Career options include journalism, teaching, social work, and public administration.',
    href: '/departments/arts'
  }
];

export default function CoursesOfferedPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline text-center">Courses Offered</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                 <div className="p-3 bg-primary/10 rounded-full">
                    <course.icon className="h-8 w-8 text-accent" />
                 </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0">
                  <Link href={course.href}>
                    Click here for details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
