'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function DirectorMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-director"
            defaultTitle="Message from Director"
            defaultImageUrl="/images/director_new.png"
            defaultContent={
              <div className="space-y-5 leading-relaxed text-gray-700">
                <p>
                  A very warm welcome to the RBANM&apos;s Degree college and its website.
                </p>
                <p>
                  I am privileged to lead an Institution like ours, where education is not a commercial transaction, but a tool of transformation towards a better life. It is therefore natural that the years at RBANM&apos;s go beyond just the syllabus. Our student-centric philosophy of education includes employability skills, personality development, and social sensitivity along with the expected degree from the University. This, to us, is true education.
                </p>
                <p>
                  Our high student-teacher ratio is very advantageous to building a relationship of trust and real engagement with our students. I am indeed very proud of the faculty here being one of the most compassionate I have ever seen in any Institution. Soon after entry, RBANM&apos;s Degree college becomes a second home for our students, a safe place for them to discover themselves.
                </p>
                <p>
                  At RBANM&apos;s, we dedicate ourselves to working tirelessly to inspire and guide students towards not just academic achievement, but towards becoming thoughtful, responsible, and empathetic human beings. We believe every student has unique potential, and our role is to help them discover and nurture it in a supportive and encouraging environment.
                </p>
                <p>
                  We continue to grow, innovate, and improve, constantly seeking to provide our students with the best possible learning experiences and opportunities. I invite you to explore our website, learn more about our programmes, and discover what makes RBANM&apos;s a truly special place.
                </p>
                <p className="font-semibold text-[#800000]">
                  With warm regards,<br />Director, RBANM&apos;s Degree College
                </p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

