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
  Flag,
  Mail
} from 'lucide-react';

export default function PhysicalEducationPage() {

  // 1. Highlights (Overview + Highlights List)
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Overview</h2>
        <p>
          Whether for recreation or competition, we provide ample opportunities for students to engage in physical activities that suit their interests and talents.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-slate-200">
          <CardHeader><CardTitle className="text-xl">Highlights</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Experienced Leadership: Headed by a qualified Physical Education Director with a Ph.D.",
                "Excellent Infrastructure: Large playground, indoor stadium, and a well-equipped multi-gym.",
                "Sports Quota Admissions: Deserving sports candidates are given preference in admissions.",
                "Financial Support: Fee concessions and scholarships for outstanding sports achievers.",
                "Regular Coaching: Coaching camps for major games like Cricket, Football, and Basketball.",
                "Annual Sports Meet: A grand event to showcase the athletic talents of all students."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-muted-foreground">
                  <span className="text-primary font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-slate-200">
          <CardHeader><CardTitle className="text-xl">Sports Activities</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Cricket", "Football", "Volleyball", "Kabaddi", "Throwball", "Badminton", "Athletics", "Chess", "Carrom"
              ].map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 2. Vision
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
        <p>"To empower students to lead a healthy lifestyle and achieve excellence in sports through dedication, discipline, and training."</p>
      </div>
    </div>
  );

  // 3. Facilities
  const facilitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Sports Facilities</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Outdoor Grounds", icon: Flag, desc: "Spacious grounds for Cricket, Football, and Athletics events." },
          { title: "Indoor Games Hall", icon: Dumbbell, desc: "Facilities for Table Tennis, Chess, Carrom, and Badminton." },
          { title: "Equipment Room", icon: Medal, desc: "Well-stocked with sports gear for various team and individual sports." }
        ].map((fac, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
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

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Activity className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Health & Wellness</h3>
            <p className="text-black leading-relaxed text-sm">
              Promoting physical fitness as a way of life, ensuring students maintain a healthy balance between academics and sports.
            </p>
          </CardContent>
        </Card>
        <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Trophy className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-bold">Competitive Excellence</h3>
            <p className="text-black leading-relaxed text-sm">
              Providing training and support for students to excel in inter-collegiate, university, and state-level tournaments.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 4. Events
  const eventsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Events & Achievements</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {[
              { title: "Annual Athletic Meet", desc: "A track and field event for all students." },
              { title: "Inter-Class Tournaments", desc: "Competitions in Cricket, Throwball, Volleyball, and Football." },
              { title: "Yoga Day", desc: "Celebration of International Yoga Day with mass demonstrations." },
              { title: "Selection Trials", desc: "To select college teams for University and Inter-collegiate matches." }
            ].map((event, i) => (
              <li key={i} className="text-lg text-muted-foreground">
                <span className="text-primary font-bold">•</span> <strong>{event.title}:</strong> {event.desc}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 4b. Courses
  const coursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">COURSES OFFERED</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">Bachelor of Arts (Physical Education with History & Political Science)</CardTitle>
              <CardDescription className="text-primary font-semibold">Expected to begin in June 2026</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The BA in Physical Education combines sports science with humanities subjects like History and Political Science. This three-year undergraduate program is designed for students passionate about sports, fitness, and education.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            It covers sports psychology, exercise physiology, coaching techniques, and sports management alongside analytical subjects. Graduates can pursue careers as physical education teachers, sports coaches, fitness trainers, sports administrators, and athletic trainers. Further studies like M.P.Ed (Master of Physical Education) or certifications in sports nutrition, yoga, or sports management can enhance career prospects.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Contact
  const contactContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Contact</h2>
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          <p className="font-bold text-slate-800 mb-2">Physical Education Department</p>
          <p className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:rbanmsfgc.ped@gmail.com" className="hover:text-primary transition-colors">rbanmsfgc.ped@gmail.com</a>
          </p>
          <p className="mt-4 text-sm italic">For inquiries regarding sports activities and teams, please visit the Physical Education Department on campus.</p>
        </CardContent>
      </Card>
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision", content: visionContent },
    { id: "facilities", label: "Sports Facilities", content: facilitiesContent },
    { id: "courses", label: "Courses", content: coursesContent },
    { id: "events", label: "Events", content: eventsContent },
    { id: "contact", label: "Contact", content: contactContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Physical Education"
      pageId="dept-physed"
      tagline="Welcome to our department, a vibrant community where every voice is heard and every story matters. We believe that learning is a shared journey of discovery, where diverse perspectives come together to spark creativity and understanding. Whether you are here to master a new skill, explore rich traditions, or shape your future career, you will find a supportive environment that nurtures your growth and inspires you to reach your full potential."
      sections={sections}
    />
  );
}
