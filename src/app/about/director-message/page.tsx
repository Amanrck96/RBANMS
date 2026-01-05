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
              <div className="space-y-4">
                <p>
                  Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful all through the academic year and offer learnings that will always stay as anchor in the ebb and flow of life.
                </p>
                <p>
                  What is education? What is the value of coming to college? Why bother with a degree? At RBANM’s First Grade College we ask these very important questions and try to find answers from the point of view of the student who has decided to trust us as a life guide. We have a three-pronged approach: address exams, address employability, and address personality development. In the classroom and outside, through theory and in practice, it is this philosophy of education that fuels all that we do.
                </p>
                <p>
                  This holistic approach to education is in keeping with the vision of that extraordinary man who founded the RBANM’s Educational Charities in 1873: Rai Bahadur Arcot Narrainswamy Mudaliar. Even today, his ideals of equity, equality, justice, inclusion, and respect for diversity permeate our teaching philosophy. Ours is a college that is a temple of learning for all, where no student is ignored or left behind, and where education is seen as a precious gift that is life changing.
                </p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
