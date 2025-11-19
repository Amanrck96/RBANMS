
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader className="flex flex-col items-center text-center">
          <FlaskConical className="h-12 w-12 text-accent mb-4" />
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Research Centre</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 prose prose-lg max-w-none text-center text-foreground/80">
          <p>
            The Arcot Narrainswamy Research Centre seeks to create a research environment in which faculty members and students can engage in academic discourses and publish research papers. It is inter-disciplinary in approach and is aimed at promoting a spirit of enquiry among students and faculty. Its activities include encouraging academic publications, organising seminars, conferences, workshops, and other research based activities at RBANM’s FGC.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

    