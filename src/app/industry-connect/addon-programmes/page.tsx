
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AddonProgrammesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Add-on Programmes & Certificate Courses
          </CardTitle>
        </CardHeader>
      </Card>

      {/* BCA Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-primary">BCA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Web Development + Career Prep</h3>
            <p className="text-foreground/90 leading-relaxed">
              This foundation course helps students build a solid base in computer fundamentals, internet usage, and modern web development. It covers HTML, CSS, and JavaScript so students can create structured, well-styled, and interactive web pages. Along with hands-on practice and a mini project, the course also includes resume building, job search strategies, freelancing basics, and portfolio development to help students prepare for future career opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Web Development + Cloud DevOps</h3>
            <p className="text-foreground/90 leading-relaxed">
              This value-added course for BCA V Semester students strengthens both theoretical and practical skills in modern web development. It covers HTML, CSS, JavaScript, Git/GitHub, API fundamentals, and cloud deployment using Microsoft Azure. By the end of the course, students are able to design, build, and deploy complete web applications.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* B.COM and BBA Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-primary">B.COM and BBA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Magic Bus Training Programme</h3>
            <p className="text-foreground/90 leading-relaxed">
              The Magic Bus Training Programme is a youth development initiative designed to equip students with essential life skills, employability competencies, and career readiness. Led by trained facilitators from the Magic Bus Foundation, the programme helps students build confidence, improve communication, and strengthen their problem-solving abilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">NISM Certification on Investor Awareness</h3>
            <p className="text-foreground/90 leading-relaxed">
              The NISM (National Institute of Securities Markets) Certification on Investor Awareness aims to build financial literacy and promote informed investment decisions among students. Conducted by certified NISM trainers, the programme gives participants a clear understanding of capital markets, financial products, and responsible investing practices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Training Programmes on Tally and GST</h3>
            <p className="text-foreground/90 leading-relaxed">
              Brought to RBANM's Degree College by FICCI FLO, the Training Programmes on Basic Tally, Advanced Tally, and GST is a skill-building initiative focused on strengthening students' accounting and digital finance abilities. Delivered by professional trainers certified by FICCI FLO, the programme offers practical training needed for modern accounting and business roles.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Department of English Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Department of English</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Campus to Corporate (10-day Certificate Course)</h3>
            <p className="text-foreground/90 leading-relaxed">
              A focused short-term programme designed for final-year (6th Semester) students across streams to help bridge the gap between campus life and the expectations of industry. Through intensive sessions on written tests, group discussions, interviews, basic English grammar, résumé and cover letter writing. The course aims to equip students with the confidence, clarity of communication, and professional presentation skills they need to successfully navigate placement drives and job-selection processes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Communication Skill & Soft Skills (4-month Course)</h3>
            <p className="text-foreground/90 leading-relaxed">
              This extended certificate course for 5th semester BCA and BA, emphasises building strong communication, public speaking, presentation (PPT) skills, research ability, group discussion experience, and polished written English, including résumé, portfolio and cover letter construction. The classes happen thrice a week. By fostering interpersonal skills, teamwork, clarity of thought and self-confidence, the course helps students develop professional-level soft skills that are highly valued in any corporate or collaborative work environment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Theatre (5 months)</h3>
            <p className="text-foreground/90 leading-relaxed">
              This creative and experiential course immerses students in dramatic arts through acting, role-play, voice and body-language workshops, improvisation, rehearsals and stage performances. Beyond artistic exposure, through theatre students build confidence, enhance vocal and non-verbal communication, improve body language and presence, deepen empathy and emotional intelligence, and learn teamwork, leadership and spontaneity, all of which contribute to their overall personality development and make them more effective communicators in both personal and professional spheres.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
