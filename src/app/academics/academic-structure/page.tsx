
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, CheckSquare, Languages, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const structure = {
  duration: "There are 6 semesters to be covered for an undergraduate degree, with 2 semesters per academic year.",
  courses: [
    {
      title: "Core Subject Courses",
      icon: Book,
      description: "Core courses in the chosen discipline. Options at RBANM's, depending on eligibility:",
      options: [
        { name: "Bachelor of Arts – B.A.", href: "/departments/arts" },
        { name: "Bachelor of Commerce – B.Com.", href: "/departments/commerce" },
        { name: "Bachelor of Business Management – B.B.A.", href: "/departments/management" },
        { name: "Bachelor of Computer Applications – B.C.A.", href: "/departments/computer-applications" },
      ],
    },
    {
      title: "Compulsory English",
      icon: Languages,
      description: "Compulsory English courses over the first 4 semesters.",
      href: "/departments/english",
    },
    {
      title: "Compulsory Language",
      icon: Languages,
      description: "Compulsory Language courses over the first 4 semesters. Options include:",
      options: [
        { name: "Hindi" },
        { name: "Kannada" },
        { name: "Tamil" },
        { name: "Additional English" },
      ],
      href: "/departments/languages",
    },
    {
      title: "Other Compulsory Courses",
      icon: CheckSquare,
      description: "Compulsory courses in subjects like Constitution, and Environmental Science as directed by Bengaluru City University.",
    },
     {
      title: "Skill-Based & Vocational Courses",
      icon: BrainCircuit,
      description: "Offered in collaboration with external trainers. On completion of these courses, students earn a certificate of recognition.",
      href: "/industry-connect/addon-programmes"
    }
  ],
};


export default function AcademicStructurePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Academic Structure</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          <p className="text-lg text-muted-foreground">{structure.duration}</p>
          <p className="text-lg text-muted-foreground">Each semester has the following courses:</p>
          
          <div className="space-y-6">
            {structure.courses.map((course, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-secondary/50">
                <course.icon className="h-8 w-8 text-accent mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary">{course.title}</h3>
                  <p className="text-muted-foreground mt-1">{course.description}</p>
                  {course.options && (
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {course.options.map(opt => (
                        <li key={opt.name}>
                          {opt.href ? (
                            <Link href={opt.href} className="text-primary hover:underline">
                              {opt.name}
                            </Link>
                          ) : (
                            <span className="text-muted-foreground">{opt.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                   {course.href && !course.options && (
                     <Link href={course.href} className="text-sm text-primary hover:underline mt-2 inline-block">
                        Learn More
                      </Link>
                   )}
                </div>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
