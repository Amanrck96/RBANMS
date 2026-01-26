import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export default function NewCoursesPage() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-20 text-blue-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-6 mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            New Courses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In response to the changing demands of the industry and society, we continuously evolve our curriculum and introduce new programs. These courses are designed to equip students with cutting-edge skills and future-ready knowledge.
          </p>
        </div>

        <div className="py-20 text-center space-y-8">
          <div className="inline-flex items-center justify-center p-6 bg-blue-50 rounded-full mb-4">
            <Sparkles className="h-12 w-12 text-blue-900" />
          </div>
          <div className="space-y-6">
            <p className="text-2xl font-medium text-gray-600">
              Our new academic programs are currently being finalized.
            </p>
            <div className="flex justify-center">
              <Badge className="bg-white text-blue-900 border-2 border-blue-900 px-12 py-3 text-2xl font-bold rounded-2xl shadow-md">
                Coming Soon
              </Badge>
            </div>
            <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Contact our admissions office for more information about eligibility and enrollment for future semesters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
