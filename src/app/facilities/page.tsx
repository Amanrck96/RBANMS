import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Monitor,
  Trophy,
  Music,
  Book,
  Users,
  Coffee,
  Trees,
  LayoutGrid,
  Globe,
  Database
} from 'lucide-react';
import Image from 'next/image';

export default function FacilitiesPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <h2 className="text-3xl font-bold mb-4">Infrastructural Abundance</h2>
      <p>
        It is part of the basic policy of the promoters that infrastructural self-sufficiency is a pre-requisite for better productivity and performance in all the activities, more so for academic activities. The Management has always been creating and updating academic and building infrastructure to meet the standards from time to time and to make life easy and stress-free in the campus.
      </p>
      <p>
        Today every bit of the vacant space is covered with lawns, trees, flower plants and gardens. It is an environment friendly campus, full of greenery, set in the heart of town.
      </p>
    </div>
  );

  // Custom Navigation for Facilities
  const facilityNavItems = [
    { label: 'Computer Labs', href: '#computer-labs', isActive: false },
    { label: 'Sports Ground', href: '#sports-ground', isActive: false },
    { label: 'Auditorium', href: '#auditorium', isActive: false },
    { label: 'Library', href: '#library', isActive: false },
    { label: 'Classrooms', href: '#classrooms', isActive: false },
    { label: 'Canteen', href: '#canteen', isActive: false },
  ];

  const sidebarContent = (
    <div className="space-y-4">
      <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Quick Facts</h4>
      <ul className="space-y-3">
        <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-primary font-bold">•</span> Located in the heart of town</li>
        <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-primary font-bold">•</span> Environment friendly campus</li>
        <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-primary font-bold">•</span> 40,000+ volumes in Library</li>
        <li className="flex gap-3 text-sm text-muted-foreground"><span className="text-primary font-bold">•</span> Heritage classrooms with modern tech</li>
      </ul>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Trees className="h-6 w-6 stroke-[3px]" /> Green Campus
      </h3>
      <p className="text-muted-foreground italic text-sm">
        A stress-free environment full of lawns, trees, and flower plants.
      </p>
    </div>
  );


  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Monitor className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Technology</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Three computer labs and server-based Design Studio providing practical exposure.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Book className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Resources</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          A well-equipped library with over 40,000 volumes, newspapers, and periodicals.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Our Facilities"
      tagline="Creating an environment for better productivity and performance."
      contentLeft={welcomeText}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      ctaContent={ctaContent}
      navItems={facilityNavItems}
      badgeText="Campus Life"
    >
      <div className="space-y-16">
        {/* Computer Labs */}
        <section id="computer-labs" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Monitor /> Computer Labs</h2>
          <Card>
            <CardContent className="pt-6 text-muted-foreground">
              <p>There are three computer labs on campus: two for the exclusive use of BCA students, and one used as a Design Lab for students of Journalism, and those who are part of the Editorial/ Design Team, the Phoenix Club.</p>
              <p className="mt-2">These labs have been the main learning resource in providing students with practical exposure for the syllabus of Bangalore University and to go beyond it.</p>
            </CardContent>
          </Card>
        </section>

        {/* Sports Ground */}
        <section id="sports-ground" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Trophy /> Sports Ground</h2>
          <Card>
            <CardContent className="pt-6 text-muted-foreground">
              <p>The college has a large ground on campus, dedicated to sports. This area is regularly used for throwball, volleyball, basketball, kho kho, and more. The grounds are also used for NCC parades.</p>
              <p className="mt-2">In addition, the sports students have access to the SUFC and Karnataka Cricket Club that are situated on land owned by RBANMs Educational Charities.</p>
            </CardContent>
          </Card>
        </section>

        {/* Auditorium */}
        <section id="auditorium" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Music /> Auditorium</h2>
          <Card>
            <CardContent className="pt-6 text-muted-foreground">
              <p>Believing that experience on stage does wonders for the personality and individual growth of students, the college has two performance spaces:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>A seminar hall for small, intimate gatherings, such as the Natya club and guest lectures</li>
                <li>A large auditorium to host events such as Orientation, Freshers’ Day, and other cultural activities.</li>
              </ul>
              <p className="mt-2">In addition, the college have access to Sabha, a centre for Art and Culture, that is situated in a building owned by RBANMs Educational Charities.</p>
            </CardContent>
          </Card>
        </section>

        {/* Library */}
        <section id="library" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Book /> Library</h2>
          <Card>
            <CardHeader>
              <CardTitle>Timing: 8 A.M. to 5 P.M.</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Highlights</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Reference Service</li>
                    <li>Reprographic Service</li>
                    <li>Internet Facilities</li>
                    <li>Tie up with British Council Library</li>
                    <li>Bangalore University Institutional membership</li>
                    <li>Open Access Service</li>
                    <li>Book Bank Facilities</li>
                  </ul>
                </div>
                <div>
                  <p>The college library is large, with more than 40,000 volumes of books on all subjects. The collection supports the curriculum and is built through student-teacher suggestions.</p>
                  <p className="mt-2">The library is fully computerized with database search cataloging and offers borrowing facilities.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Digital Library */}
        <section id="digital-library" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Globe /> Digital Library</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>E-Resources</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">The digital library provides access to online databases, textbooks, articles, and audio-video materials. Available e-resources include:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {["N - List", "DELNET", "National Digital Library", "Directory of Open Access Books", "Wikipedia", "JESTOR", "e-Pathashala"].map((e, i) => (
                    <li key={i} className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />{e}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Software</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4"><strong>EASY-LIB (Version 6.4):</strong> A multi-user library software running on Windows.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Provision of bar coding for easy search.</li>
                  <li>Modules: Acquisition, serial control, circulation, cataloging, and OPAC.</li>
                  <li>OPAC allows searching by author, title, keyword, accession number, etc.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6">
            <CardContent className="pt-6">
              <h4 className="font-bold mb-2">E-Books & Journals Access</h4>
              <p className="text-sm text-muted-foreground mb-2">The library provides access to collections from: Cambridge Books, Springer eBooks, Sage Publication, Taylor Francis, McGraw Hill, Oxford UP, etc.</p>
              <p className="text-sm text-muted-foreground">YouTube Video and Published articles upload facilities are available in DELNET consortium using institutional membership.</p>
            </CardContent>
          </Card>
        </section>


        {/* Classrooms */}
        <section id="classrooms" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><LayoutGrid /> Classrooms</h2>
          <Card>
            <CardContent className="pt-6 text-muted-foreground">
              <p>Spread over three floors, the college has well equipped, brightly lit classrooms with old-style bench seating, combining modern facilities with the charm of a century old heritage. Most classrooms have projectors and the faculty makes classes come alive with lectures that are more than the traditional chalk-and-talk teaching method.</p>
            </CardContent>
          </Card>
        </section>

        {/* Canteen */}
        <section id="canteen" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-3"><Coffee /> Canteen</h2>
          <Card>
            <CardContent className="pt-6 text-muted-foreground">
              <p>The canteen on campus provides meals and snacks to students, staff, and guests that is hygienic and affordable. It also caters to college events where meals are part of the invitation.</p>
              <p className="mt-2"><strong>Timing:</strong> Open until 5pm Mondays to Fridays, and till 2 pm on Saturdays.</p>
            </CardContent>
          </Card>
        </section>

      </div>
    </DepartmentLayout>
  );
}
