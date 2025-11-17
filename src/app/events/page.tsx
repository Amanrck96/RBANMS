import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const events = [
  {
    date: { day: '02', month: 'Sep', year: '2022' },
    title: 'Annual Athletics Meet',
    description: 'Cordially invites you all for the Annual Athletics Meet on 2nd September, 2022. Starts from 10.30 AM onwards. Venue: Opposite to Charities Office.',
  },
  {
    date: { day: '01', month: 'Sep', year: '2022' },
    title: 'Job Fair',
    description: 'Placement Department of RBANM’s First Grade College has conducted a Campus pool drive on 01 September 2022 in collaboration with Magic Bus Foundation in College Campus. The Program was coordinated by Mrs. Priya (placement coordinator).',
  },
  {
    date: { day: '09', month: 'May', year: '2022' },
    title: 'Report: World Red Cross Day',
    description: 'World Red Cross Day (also known as Red Crescent Day) is celebrated on May 8 every year. This date marks the birth anniversary of Henry Dunant, the founder of the International Committee of the Red Cross (ICRC) and recipient of the first Nobel Peace Prize.',
  },
  {
    date: { day: '26', month: 'Jun', year: '2022' },
    title: 'Best Entrepreneur Competition',
    description: 'Commerce Club of RBANM\'S First Grade College conducted ‘Best Entrepreneur competition’ on 20.06.2022 for final year students from BA, B. Com, BBA, and BCA. The competition mainly aimed to bring entrepreneurial skills among students and motivate them.',
  },
  {
    date: { day: '08', month: 'Mar', year: '2022' },
    title: 'Women\'s Health & Wellness',
    description: 'Women’s cell of RBANM’S First Grade College had organized a one day Seminar on Women’s Health and Wellness on 8.2.2022, Tuesday at the A. V Room. The Resource persons for the day were Ms. Anitha Iyer, an Ambassador from ECO Femme and Ms. Ma.',
  },
  {
    date: { day: '07', month: 'Mar', year: '2020' },
    title: 'BLOOD DONATION CAMP',
    description: 'BLOOD DONATION CAMP ORGANISED BY RED CROSS UNIT IN RBANM’S FIRST GRADE COLLEGE',
  },
  {
    date: { day: '06', month: 'May', year: '2019' },
    title: 'Graduation Day',
    description: 'The aim of education is the knowledge, not of facts, but of values.” -William S. Burroughs The Graduation Day was conducted for the UG 2018-2019 batch and 2018-2019 PG batch in the campus. After the ceremonial invocation son and',
  },
  {
    date: { day: '12', month: 'Jan', year: '2020' },
    title: 'VIVEKANANDA JAYANTHI',
    description: 'On Swami Vivekananda\'s birth anniversary on January 12, the students & staff paid homage to one of the world\'s greatest spiritual leaders, known as the "Messenger of Indian wisdom to the western world". His birth anniversary is observed.',
  },
  {
    date: { day: '19', month: 'Jul', year: '2019' },
    title: 'Ethnic Day',
    description: 'The Cultural Club of RBANMS College has organized Ethnic Day for Students, Teachers & Non Teaching Staff on 05/10/2019 Saturday. Girls were dressed in Ghagharas, Lehngas and traditional Sarees and the boys wore Dhothis, Kurtas, Sherw.',
  },
  {
    date: { day: '18', month: 'Jul', year: '2019' },
    title: 'NCC',
    description: 'The National Cadet Corps (NCC), as a premier youth organisation in our country has immensely contributed in propagating national unity and integrity amongst youth. Its role in instilling in them the values of character, discipline and hard work an.',
  },
  {
    date: { day: '26', month: 'Jan', year: '2020' },
    title: 'Republic Day Celebration',
    description: 'The 70th Republic Day of India was celebrated with gaiety and patriotic fervor at RBANMS FGC amidst the foggy morning of 26th January, 2019. The ceremony took place in the presence of Administrative officer, Dr.Veerabadhrappa, Principal.',
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline">Events</h1>
        <p className="text-muted-foreground mt-2">Stay updated with the latest happenings at our college.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50 p-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{event.date.day}</div>
                  <div className="text-sm font-medium text-muted-foreground">{event.date.month}</div>
                  <div className="text-xs text-muted-foreground">{event.date.year}</div>
                </div>
              </div>
              <div className="flex-grow pl-4">
                 <CardTitle className="text-lg font-bold mb-1">{event.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{event.description}</p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="#">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
