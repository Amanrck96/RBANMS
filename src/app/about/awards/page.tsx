
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AwardsPage() {
  const items = [
    'Annual College Fest - Aarohana 2024',
    'Alumni Meet & Greet',
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-blue-900 font-headline">Awards & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="content-black">
              Scrolling list of awards and achievements will be displayed here.
            </p>
            <div className="border rounded-lg p-4 h-64 overflow-y-auto content-black">
              <ul className="space-y-2">
                {items.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-900 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
