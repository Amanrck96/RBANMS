import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Trophy,
  Mic2,
  Library,
  BookOpen,
  Coffee,
  Trees,
  MapPin,
  Clock,
  Wifi,
  Printer
} from 'lucide-react';

export default function FacilitiesPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <h2 className="text-2xl font-bold text-slate-800">Infrastructural Abundance</h2>
      <p>
        It is part of the basic policy of the promoters that infrastructural self-sufficiency is a pre-requisite for better productivity and performance in all the activities, more so for academic activities. The Management has always been creating and updating academic and building infrastructure to meet the standards from time to time and to make life easy and stress-free in the campus.
      </p>
      <p>
        Today every bit of the vacant space is covered with lawns, trees, flower plants and gardens. It is an environment friendly campus, full of greenery, set in the heart of town.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Trees className="h-6 w-6 stroke-[3px]" /> Green Campus
      </h3>
      <p className="text-muted-foreground italic">
        "A stress-free, environment-friendly campus set in the heart of town, covering every vacant space with lawns and gardens."
      </p>
    </div>
  );

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2 mb-4">Location</h4>
        <div className="flex items-start gap-3 text-muted-foreground text-sm">
          <MapPin className="h-5 w-5 text-primary shrink-0" />
          <p>Located in the heart of Bangalore City, with easy access to Metro and Bus stations.</p>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2 mb-4">Quick Facilities</h4>
        <div className="flex flex-wrap gap-2">
          {["Computer Labs", "Auditorium", "Library", "Canteen", "Sports Ground", "Seminar Hall", "Design Studio"].map((tag, i) => (
            <Badge key={i} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Monitor className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Technologically Enabled</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          From high-performance computer labs to tech-enabled classrooms, we ensure students have the tools they need.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Library className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Knowledge Hub</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Our library houses over 40,000 volumes, providing a vast resource for academic and personal growth.
        </p>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Computer Labs", href: "#labs", isActive: false },
    { label: "Sports Ground", href: "#sports", isActive: false },
    { label: "Auditorium", href: "#auditorium", isActive: false },
    { label: "Library", href: "#library", isActive: false },
    { label: "Classrooms", href: "#classrooms", isActive: false },
    { label: "Canteen", href: "#canteen", isActive: false },
  ];

  return (
    <DepartmentLayout
      title="Campus Facilities"
      tagline="Creating an environment for better productivity and stress-free learning."
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      navItems={navItems}
      badgeText="Infrastructure"
    >
      {/* Computer Labs */}
      <section id="labs">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Computer Labs</h2>
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  There are three computer labs on campus: two for the exclusive use of BCA students, and one used as a Design Lab for students of Journalism and the Phoenix Club. These labs have been the main learning resource in providing students with practical exposure for the syllabus of Bangalore University and to go beyond it.
                </p>
                <div className="flex gap-4 pt-2">
                  <Badge variant="outline" className="gap-1 px-4 py-2"><Monitor className="h-4 w-4" /> 3 Labs</Badge>
                  <Badge variant="outline" className="gap-1 px-4 py-2"><Wifi className="h-4 w-4" /> Internet Access</Badge>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-slate-100 h-48 rounded-lg flex items-center justify-center">
                <Monitor className="h-16 w-16 text-slate-300" />
                {/* Placeholder for Lab Image */}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sports Ground */}
      <section id="sports">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Sports Ground</h2>
        <Card>
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The college has a large ground on campus, dedicated to sports. This area is regularly used for throwball, volleyball, basketball, kho kho, and more. The grounds are also used for NCC parades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In addition, the sports students have access to the SUFC and Karnataka Cricket Club that are situated on land owned by RBANMs Educational Charities.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Auditorium */}
      <section id="auditorium">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Auditorium & Seminar Hall</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-50 border">
            <CardHeader><CardTitle className="text-lg">Seminar Hall</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">A space for small, intimate gatherings, such as the Natya club and guest lectures.</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 border">
            <CardHeader><CardTitle className="text-lg">Large Auditorium</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">Used for hosting major events such as Orientation, Freshers’ Day, and other cultural activities.</p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-4 text-muted-foreground text-sm italic">
          In addition, the college has access to Sabha, a centre for Art and Culture, situated in a building owned by RBANMs Educational Charities.
        </p>
      </section>

      {/* Library */}
      <section id="library">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Library</h2>
        <Card className="overflow-hidden">
          <div className="bg-primary/5 p-6 text-center border-b">
            <h3 className="text-xl font-bold text-primary mb-2">Timing: 8 A.M. to 5 P.M.</h3>
            <p className="text-sm text-muted-foreground">Fully computerized with database search cataloging</p>
          </div>
          <CardContent className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Collection</h4>
                <p className="text-muted-foreground">
                  More than 40,000 volumes of books on all subjects, ranging from academic books, encyclopaedias, fiction, science, photography, arts, religion and general knowledge. Excellent facilities with Newspapers, periodicals and magazines.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Services</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex gap-2 items-center"><BookOpen className="h-4 w-4" /> Reference Service</li>
                  <li className="flex gap-2 items-center"><Printer className="h-4 w-4" /> Reprographic Service</li>
                  <li className="flex gap-2 items-center"><Wifi className="h-4 w-4" /> Internet Facilities</li>
                  <li className="flex gap-2 items-center"><BookOpen className="h-4 w-4" /> Open Access Service</li>
                  <li className="flex gap-2 items-center"><Library className="h-4 w-4" /> Book Bank Facilities</li>
                  <li className="flex gap-2 items-center"><Globe className="h-4 w-4" /> British Council Tie-up</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Classrooms */}
      <section id="classrooms">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Classrooms</h2>
        <Card>
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed">
              Spread over three floors, the college has well equipped, brightly lit classrooms with old-style bench seating, combining modern facilities with the charm of a century old heritage. Most classrooms have projectors and the faculty makes classes come alive with lectures that are more than the traditional chalk-and-talk teaching method.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Canteen */}
      <section id="canteen">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Canteen</h2>
        <Card>
          <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The canteen on campus provides meals and snacks to students, staff, and guests that is hygienic and affordable. It also caters to college events where meals are part of the invitation.
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground bg-slate-50 p-4 rounded-lg">
                <div className="flex justify-between items-center border-b pb-2"><span>Breakfast</span> <span className="font-semibold text-slate-700">Before 9:00 AM</span></div>
                <div className="flex justify-between items-center border-b pb-2"><span>Snacks</span> <span className="font-semibold text-slate-700">11:00 AM - 11:15 AM</span></div>
                <div className="flex justify-between items-center"><span>Lunch</span> <span className="font-semibold text-slate-700">1:15 PM - 1:45 PM</span></div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="font-bold text-lg mb-1">Open Mon-Sat</h4>
              <p className="text-sm text-muted-foreground">Until 5PM (2PM on Sat)</p>
            </div>
          </CardContent>
        </Card>
      </section>

    </DepartmentLayout>
  );
}
