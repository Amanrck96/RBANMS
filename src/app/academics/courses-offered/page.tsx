
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Computer, Briefcase, Landmark, BookOpen } from 'lucide-react';

const courses = [
  {
    icon: Computer,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'The BCA (Bachelor of Computer Applications) is a three-year undergraduate program that focuses on computer science, programming, software development, and IT applications. It is designed for students who aspire to build a career in the tech industry, covering subjects like database management, networking, web development, and cybersecurity. BCA graduates have diverse career opportunities, including roles as software developers, web designers, system analysts, IT support specialists, and database administrators. Further studies such as MCA (Master of Computer Applications) or certifications in AI, cloud computing, and data science can enhance career prospects.',
    href: '/departments/computer-applications'
  },
  {
    icon: Briefcase,
    title: 'Bachelor of Commerce (B.Com)',
    description: 'The B.Com (Bachelor of Commerce) is a three-year undergraduate degree that provides in-depth knowledge of commerce, finance, accounting, taxation, and business law. It is ideal for students interested in banking, finance, and corporate sectors. B.Com graduates can pursue careers as accountants, financial analysts, tax consultants, auditors, and investment bankers. Those who wish to advance in finance or management can opt for further studies such as M.Com, MBA, CA (Chartered Accountancy), CMA (Cost and Management Accounting), or CFA (Chartered Financial Analyst).',
    href: '/departments/commerce'
  },
  {
    icon: Landmark,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'The BBA (Bachelor of Business Administration) is a three-year undergraduate program focusing on management, entrepreneurship, marketing, finance, and human resources. It is designed for students who want to develop leadership and managerial skills for the corporate world. BBA graduates can work as business analysts, marketing executives, HR managers, and financial advisors. Many students also pursue an MBA (Master of Business Administration) for higher career growth, leading to roles such as business consultants, company executives, and start-up founders.',
    href: '/departments/management'
  },
  {
    icon: BookOpen,
    title: 'Bachelor of Arts (BA)',
    description: 'The BA (Bachelor of Arts) is a three-year undergraduate degree with History, Political Science, and Economics. It provides a strong foundation in humanities and the social sciences, helping students develop critical thinking, research, and analytical skills. Career options for BA graduates include journalism, teaching, social work, public administration, and content writing. Further studies like MA (Master of Arts), PhD, or professional courses in mass communication, law, and public relations can open more specialized career paths.',
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
        <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="flex-row gap-4 items-center">
                 <div className="p-3 bg-primary/10 rounded-full">
                    <course.icon className="h-8 w-8 text-accent" />
                 </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="content-black">{course.description}</p>
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

    
