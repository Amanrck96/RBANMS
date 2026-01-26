
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';

const admissionDiscounts = [
  "Alumni of RBANMs Institutions",
  "Children of the staff of RBANMs Institutions",
  "Meritorious NCC cadets who will continue with NCC in college",
  "Meritorious and active Sports students who will also play for the college",
  "Any student of extraordinary merit in any field",
];

const secondYearCriteria = [
  "attended college regularly",
  "made significant progress in academics",
  "has participated in college events",
  "participated in activities in college",
  "financial challenges at home",
  "faced discrimination based on caste, disability, or gender",
  "no other financial support in the form of educational aid from other sources",
];

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Scholarships</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              It is the mandate of our Founder and the mission of our college to make sure that no meritorious student is left behind. The policy for discounts in fees and awarding scholarships from the Management is as follows:
            </p>
          </div>

          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">At the time of admissions, discounts will be given only to:</h3>
            <ul className="space-y-2">
              {admissionDiscounts.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Star className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">In the Second Year, students will be awarded need-based scholarships and fee waivers, if the student has:</h3>
            <ul className="space-y-2">
              {secondYearCriteria.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
           <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">In the Final Year:</h3>
             <p className="text-muted-foreground">The same criteria will apply for renewals and fresh applications.</p>
          </div>

          <div className="pt-4">
             <h3 className="text-2xl font-bold text-primary mb-2">Additional Support</h3>
            <p className="text-lg text-muted-foreground">
              In addition, the college staff will assist students to apply for Government and private scholarships, as appropriate.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
