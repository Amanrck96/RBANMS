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

  const computerLabsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-black text-xl flex items-center gap-2"><Monitor className="text-primary" /> Computer Labs</CardTitle></CardHeader>
        <CardContent className="pt-6 text-black">
          <p>There are three computer labs on campus: two for the exclusive use of BCA students, and one used as a Design Lab for students of Journalism, and those who are part of the Editorial/ Design Team, the Phoenix Club.</p>
          <p className="mt-2">These labs have been the main learning resource in providing students with practical exposure for the syllabus of Bangalore University and to go beyond it.</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Monitor className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Technology</h3>
            <p className="text-black leading-relaxed text-sm">
              Three computer labs and server-based Design Studio providing practical exposure.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Trees className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Green Campus</h3>
            <p className="text-black leading-relaxed text-sm">
              A stress-free environment full of lawns, trees, and flower plants.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const sportsGroundContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-black text-xl flex items-center gap-2"><Trophy className="text-primary" /> Sports Ground</CardTitle></CardHeader>
        <CardContent className="pt-6 text-black">
          <p>The college has a large ground on campus, dedicated to sports. This area is regularly used for throwball, volleyball, basketball, kho kho, and more. The grounds are also used for NCC parades.</p>
          <p className="mt-2">In addition, the sports students have access to the SUFC and Karnataka Cricket Club that are situated on land owned by RBANMs Educational Charities.</p>
        </CardContent>
      </Card>
    </div>
  );

  const auditoriumContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-black text-xl flex items-center gap-2"><Music className="text-primary" /> Auditorium</CardTitle></CardHeader>
        <CardContent className="pt-6 text-black">
          <p>Believing that experience on stage does wonders for the personality and individual growth of students, the college has two performance spaces:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>A seminar hall for small, intimate gatherings, such as the Natya club and guest lectures</li>
            <li>A large auditorium to host events such as Orientation, Freshers’ Day, and other cultural activities.</li>
          </ul>
          <p className="mt-2">In addition, the college have access to Sabha, a centre for Art and Culture, that is situated in a building owned by RBANMs Educational Charities.</p>
        </CardContent>
      </Card>
    </div>
  );

  const libraryContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black flex items-center gap-2"><Book className="text-primary" /> Library</CardTitle>
          <CardDescription className="text-black font-semibold">Timing: 8 A.M. to 5 P.M.</CardDescription>
        </CardHeader>
        <CardContent className="text-black space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-black mb-2">Highlights</h4>
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
    </div>
  );

  const digitalLibraryContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-2 border-primary">
          <CardHeader><CardTitle className="text-primary flex items-center gap-2"><Globe className="text-primary" /> E-Resources</CardTitle></CardHeader>
          <CardContent className="text-black">
            <p className="mb-4">The digital library provides access to online databases, textbooks, articles, and audio-video materials. Available e-resources include:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {["N - List", "DELNET", "National Digital Library", "Directory of Open Access Books", "Wikipedia", "JESTOR", "e-Pathashala"].map((e, i) => (
                <li key={i} className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" />{e}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white border-2 border-primary">
          <CardHeader><CardTitle className="text-primary flex items-center gap-2"><Database className="text-primary" /> Software</CardTitle></CardHeader>
          <CardContent className="text-black">
            <p className="mb-4"><strong>EASY-LIB (Version 6.4):</strong> A multi-user library software running on Windows.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Provision of bar coding for easy search.</li>
              <li>Modules: Acquisition, serial control, circulation, cataloging, and OPAC.</li>
              <li>OPAC allows searching by author, title, keyword, accession number, etc.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6 bg-white border-2 border-primary">
        <CardContent className="pt-6 text-black">
          <h4 className="font-bold mb-2 text-primary">E-Books & Journals Access</h4>
          <p className="text-sm text-black mb-2">The library provides access to collections from: Cambridge Books, Springer eBooks, Sage Publication, Taylor Francis, McGraw Hill, Oxford UP, etc.</p>
          <p className="text-sm text-black">YouTube Video and Published articles upload facilities are available in DELNET consortium using institutional membership.</p>
        </CardContent>
      </Card>
    </div>
  );

  const classroomsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-black text-xl flex items-center gap-2"><LayoutGrid className="text-primary" /> Classrooms</CardTitle></CardHeader>
        <CardContent className="pt-6 text-black">
          <p>Spread over three floors, the college has well equipped, brightly lit classrooms with old-style bench seating, combining modern facilities with the charm of a century old heritage. Most classrooms have projectors and the faculty makes classes come alive with lectures that are more than the traditional chalk-and-talk teaching method.</p>
        </CardContent>
      </Card>
    </div>
  );

  const canteenContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-black text-xl flex items-center gap-2"><Coffee className="text-primary" /> Canteen</CardTitle></CardHeader>
        <CardContent className="pt-6 text-black">
          <p>The canteen on campus provides meals and snacks to students, staff, and guests that is hygienic and affordable. It also caters to college events where meals are part of the invitation.</p>
          <p className="mt-2"><strong>Timing:</strong> Open until 5pm Mondays to Fridays, and till 2 pm on Saturdays.</p>
        </CardContent>
      </Card>
    </div>
  );

  const sections = [
    { id: "computer-labs", label: "Computer Labs", content: computerLabsContent },
    { id: "sports-ground", label: "Sports Ground", content: sportsGroundContent },
    { id: "auditorium", label: "Auditorium", content: auditoriumContent },
    { id: "library", label: "Library", content: libraryContent },
    { id: "digital-library", label: "Digital Library", content: digitalLibraryContent },
    { id: "classrooms", label: "Classrooms", content: classroomsContent },
    { id: "canteen", label: "Canteen", content: canteenContent },
  ];

  return (
    <DepartmentLayout
      title="Our Facilities"
      tagline="Creating an environment for better productivity and performance. Infrastructural Abundance: It is part of the basic policy of the promoters that infrastructural self-sufficiency is a pre-requisite for better productivity and performance in all the activities, more so for academic activities. The Management has always been creating and updating academic and building infrastructure to meet the standards from time to time and to make life easy and stress-free in the campus. Today every bit of the vacant space is covered with lawns, trees, flower plants and gardens. It is an environment friendly campus, full of greenery, set in the heart of town."
      sections={sections}
    />
  );
}
