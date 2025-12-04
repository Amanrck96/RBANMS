import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Building,
  Monitor,
  Trophy,
  Mic,
  BookOpen,
  Users,
  Utensils,
  Clock,
  CheckCircle,
  Wifi,
  Copy,
  Library,
  Dumbbell,
  Trees
} from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-800 to-green-700 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Facilities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Infrastructural <span className="text-yellow-400">Abundance</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
              Creating an environment friendly campus, full of greenery, set in the heart of town.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Infrastructural Self-Sufficiency</h2>
            <p className="text-muted-foreground leading-relaxed">
              It is part of the basic policy of the promoters that infrastructural self-sufficiency is a pre-requisite for better productivity and performance in all the activities, more so for academic activities. The Management has always been creating and updating academic and building infrastructure to meet the standards from time to time and to make life easy and stress-free in the campus.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today every bit of the vacant space is covered with lawns, trees, flower plants and gardens. It is an environment friendly campus, full of greenery, set in the heart of town.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-emerald-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Trees className="h-8 w-8 text-emerald-600" />
                <span className="font-semibold text-emerald-900">Green Campus</span>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Building className="h-8 w-8 text-green-600" />
                <span className="font-semibold text-green-900">Modern Infra</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Wifi className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Connected</span>
              </CardContent>
            </Card>
            <Card className="bg-lime-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Users className="h-8 w-8 text-lime-600" />
                <span className="font-semibold text-lime-900">Student Centric</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>

          <div className="space-y-16">
            {/* Computer Labs */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Monitor className="h-6 w-6" /> Computer Labs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      There are three computer labs on campus: two for the exclusive use of BCA students, and one used as a Design Lab for students of Journalism, and those who are part of the Editorial/ Design Team, the Phoenix Club.
                    </p>
                    <p className="text-muted-foreground">
                      These labs have been the main learning resource in providing students with practical exposure for the syllabus of Bangalore University and to go beyond it.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-emerald-300" />
                </div>
              </div>
            </div>

            {/* Sports Ground */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-16 w-16 text-green-300" />
                </div>
              </div>
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Trophy className="h-6 w-6" /> Sports Ground
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The college has a large ground on campus, dedicated to sports. This area is regularly used for throwball, volleyball, basketball, kho kho, and more. The grounds are also used for NCC parades.
                    </p>
                    <p className="text-muted-foreground">
                      In addition, the sports students have access to the SUFC and Karnataka Cricket Club that are situated on land owned by RBANMs Educational Charities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Auditorium */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Mic className="h-6 w-6" /> Auditorium
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Believing that experience on stage does wonders for the personality and individual growth of students, the college has two performance spaces:
                    </p>
                    <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-2">
                      <li>A seminar hall for small, intimate gatherings, such as the Natya club and guest lectures.</li>
                      <li>A large auditorium to host events such as Orientation, Freshers’ Day, and other cultural activities.</li>
                    </ul>
                    <p className="text-muted-foreground">
                      In addition, the college have access to Sabha, a centre for Art and Culture, that is situated in a building owned by RBANMs Educational Charities.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Mic className="h-16 w-16 text-emerald-300" />
                </div>
              </div>
            </div>

            {/* Library */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-green-300" />
                </div>
              </div>
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Library className="h-6 w-6" /> Library
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4" /> Timing: 8 A.M. to 5 P.M.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-emerald-700 mb-2">Highlights</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Reference Service</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Reprographic Service</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Internet Facilities</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Tie up with British Council</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> BU Institutional membership</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Open Access Service</span>
                        <span className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald-500" /> Book Bank Facilities</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      The college library is large, with more than 40,000 volumes of books on all subjects, ranging from academic books, encyclopaedias, fiction, science, photography, arts, religion and general knowledge. The collection supports the curriculum and is built through student-teacher suggestions.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      The library is fully computerized with database search cataloging and offers borrowing facilities @ 3 books/ student member for a period of 15 days and @ 5 books staff member for a period of a semester.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Classrooms */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Users className="h-6 w-6" /> Classrooms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Spread over three floors, the college has well equipped, brightly lit classrooms with old-style bench seating, combining modern facilities with the charm of a century old heritage. Most classrooms have projectors and the faculty makes classes come alive with lectures that are more than the traditional chalk-and-talk teaching method.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="h-16 w-16 text-emerald-300" />
                </div>
              </div>
            </div>

            {/* Canteen */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center">
                  <Utensils className="h-16 w-16 text-green-300" />
                </div>
              </div>
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl text-emerald-800">
                      <Utensils className="h-6 w-6" /> Canteen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The canteen on campus provides meals and snacks to students, staff, and guests that is hygienic and affordable. It also caters to college events where meals are part of the invitation.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-emerald-800 mb-2">Timings</h4>
                      <ul className="space-y-1 text-sm text-emerald-700">
                        <li><strong>Breakfast:</strong> Before 9:00 AM</li>
                        <li><strong>Snacks:</strong> 11:00 AM - 11:15 AM</li>
                        <li><strong>Lunch:</strong> 1:15 PM - 1:45 PM</li>
                        <li><strong>Open until:</strong> 5:00 PM (Mon-Fri), 2:00 PM (Sat)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
