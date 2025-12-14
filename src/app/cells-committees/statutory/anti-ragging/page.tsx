
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AntiRaggingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Anti-Ragging Committee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              RBNMS College maintains a zero-tolerance policy towards ragging. The Anti-Ragging Committee works vigilantly to ensure the college campus remains a ragging-free zone. We strictly enforce UGC regulations and state laws to protect new students from any form of physical or mental harassment. Through counselling and strict monitoring, we guarantee a friendly and welcoming atmosphere where every student feels safe and comfortable from their very first day.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
