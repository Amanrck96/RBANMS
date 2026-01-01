
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DirectorMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-blue-900 font-headline">Message from Director</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-6">
          <div className="md:col-span-1 space-y-4">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/images/director_new.png"
                alt="Director Dr Sahana Das"
                fill
                className="object-cover"
                data-ai-hint="professional headshot"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-blue-900">Dr. Sahana Das</h2>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 prose prose-lg max-w-none content-black">
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
        </CardContent>
      </Card>
    </div>
  );
}


