'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

const commitments = [
  "Providing a value-driven and holistic education, fostering intellectual, physical, mental, and spiritual growth.",
  "Offering inclusive education, ensuring that students from all social and economic backgrounds receive quality learning opportunities.",
  "Maintaining discipline, punctuality, and responsibility in both students and staff.",
  "Encouraging students to pursue academic excellence with a sense of curiosity and passion.",
  "Supporting holistic development through sports, cultural activities, and NCC programs.",
  "Engaging students in community development and nation-building, shaping them into socially responsible citizens.",
  "Creating a healthy and dynamic learning environment through strong student-teacher relationships.",
  "Promoting ethical values and a strong work ethic among students.",
  "Offering a wide range of academic programs that align with evolving societal and professional needs.",
  "Shaping students into resilient and compassionate individuals, ready to face the challenges of modern life with confidence and a positive outlook.",
  "Striking a balance between academics, extracurricular activities, and character building, ensuring well-rounded personal and professional growth."
];

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10 space-y-8">
          <DynamicSection
            pageId="about-history"
            defaultTitle="History of the College"
            defaultContent={
              <div className="space-y-4">
                <p>
                  RBANM’s First Grade College was established by RBANM’s Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.
                </p>
                <p>
                  This is one of the many institutions established under the umbrella of the RBANM’s Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.
                </p>
                <p>
                  The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.
                </p>
              </div>
            }
          />

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
            <ul className="space-y-3">
              {commitments.map((commitment, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}