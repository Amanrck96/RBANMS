import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';

export default function CellsCommitteesIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Cells & Committees</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ensuring transparency, student safety, equal opportunity, and enriching campus life through structured institutional bodies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="hover:shadow-lg transition-all border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-primary font-bold">Statutory Committees</CardTitle>
            <CardDescription className="text-base text-gray-600">
              Mandated regulatory bodies including Anti-Ragging Committee, POSH (ICC), Grievance Redressal, Equal Opportunity, and SC/ST Cell.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Link
              href="/cells-committees/statutory"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              View Statutory Committees <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-primary font-bold">Other Institutional Cells</CardTitle>
            <CardDescription className="text-base text-gray-600">
              Specialized student support and development bodies including Cultural Committee, Eco Club, IPC, Women's Cell, and Counselling Cell.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Link
              href="/cells-committees/others"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              View Other Cells & Clubs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
