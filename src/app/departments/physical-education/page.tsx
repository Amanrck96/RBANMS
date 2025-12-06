import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Activity,
  Heart,
  Users,
  Target,
  Medal,
  Dumbbell,
  Timer,
  Flag
} from 'lucide-react';

export default function PhysicalEducationPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        The Department of Physical Education at RBANM’s First Grade College is dedicated to promoting health, fitness, and sportsmanship among students. We believe that physical education is an integral part of holistic education, contributing to the physical, mental, and social development of an individual.
      </p>
      <p>
        Our goal is to foster a culture of fitness and healthy competition. We encourage students to participate in various sports and games, helping them develop discipline, leadership skills, and team spirit.
      </p>
      <p>
        Whether for recreation or competition, we provide ample opportunities for students to engage in physical activities that suit their interests and talents.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision
      </h3>
      <p className="text-muted-foreground italic">
        "To empower students to lead a healthy lifestyle and achieve excellence in sports through dedication, discipline, and training."
      </p>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Annual Athletic Meet",
            "Inter-Class Sports Competitions",
            "University Level Representation",
            "Yoga & Wellness Sessions",
            "Well-Maintained Sports Facilities"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Activities Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Activities</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Cricket", "Football", "Volleyball", "Kabaddi", "Throwball", "Badminton", "Athletics", "Chess", "Carrom"
          ].map((skill, i) => (
            <span key={i} className="bg-white border rounded px-2 py-1 text-xs font-semibold text-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Activity className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Health & Wellness</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Promoting physical fitness as a way of life, ensuring students maintain a healthy balance between academics and sports.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Trophy className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Competitive Excellence</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Providing training and support for students to excel in inter-collegiate, university, and state-level tournaments.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Physical Education"
      tagline="Fostering Fitness, Discipline, and Team Spirit."
      activeTab="physical-education"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Facilities Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Sports Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Outdoor Grounds", icon: Flag, desc: "Spacious grounds for Cricket, Football, and Athletics events." },
            { title: "Indoor Games Hall", icon: Dumbbell, desc: "Facilities for Table Tennis, Chess, Carrom, and Badminton." },
            { title: "Equipment Room", icon: Medal, desc: "Well-stocked with sports gear for various team and individual sports." }
          ].map((fac, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <fac.icon className="h-5 w-5 text-primary" /> {fac.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{fac.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Events & Achievements</h2>
        <div className="bg-slate-50 p-6 rounded-xl border space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Annual Athletic Meet</h3>
              <p className="text-muted-foreground mt-2">
                The college organizes a grand Annual Athletic Meet where students from all departments complete in track and field events. It is a day of high energy, team spirit, and celebration of sporting talent.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Inter-Collegiate Tournaments</h3>
              <p className="text-muted-foreground mt-2">
                Our college teams actively participate in various inter-collegiate tournaments across Bangalore, winning accolades and bringing laurels to the institution in sports like Cricket, Throwball, and Kabaddi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty / Contact Placeholder */}
      <section className="text-center py-8">
        <h3 className="text-xl font-semibold text-slate-700">Contact Physical Education Department</h3>
        <p className="text-muted-foreground mt-2">For inquiries regarding sports activities and teams, please visit the PE Department on campus.</p>
      </section>

    </DepartmentLayout>
  );
}
