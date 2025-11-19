
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <Card>
            <CardContent className="p-6 text-center">
                <p className="font-bold text-lg text-primary">Affiliated to Bengaluru City University, Accredited by NAAC with B+, Recognised under 2(f) & 12(B) of UGC Act 1956</p>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}

    