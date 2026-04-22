export type EventItem = {
  slug: string;
  date: { day: string; month: string; year: string };
  title: string;
  description: string;
  tag?: string;
  images?: string[];
};

export const events: EventItem[] = [
  {
    slug: 'basavanna-jayanthi-2026',
    date: { day: '21', month: 'Apr', year: '2026' },
    title: 'Basavanna Jayanthi',
    description: 'Honouring the timeless wisdom of Basavanna—a voice of equality, compassion and truth.',
    tag: 'Department Of Language',
    images: [
      '/images/events/basavanna-1.jpg',
      '/images/events/basavanna-2.jpg',
      '/images/events/basavanna-3.jpg',
    ],
  },
  {
    slug: 'annual-athletics-meet-2022',
    date: { day: '02', month: 'Sep', year: '2022' },
    title: 'Annual Athletics Meet',
    description: 'Cordially invites you all for the Annual Athletics Meet on 2nd September, 2022. Starts from 10.30 AM onwards. Venue: Opposite to Charities Office.',
  },
  {
    slug: 'job-fair-2022',
    date: { day: '01', month: 'Sep', year: '2022' },
    title: 'Job Fair',
    description: 'Placement Department of RBANM’s First Grade College has conducted a Campus pool drive on 01 September 2022 in collaboration with Magic Bus Foundation in College Campus. The Program was coordinated by Mrs. Priya (placement coordinator).',
  },
  {
    slug: 'world-red-cross-day-2022',
    date: { day: '09', month: 'May', year: '2022' },
    title: 'Report: World Red Cross Day',
    description: 'World Red Cross Day (also known as Red Crescent Day) is celebrated on May 8 every year. This date marks the birth anniversary of Henry Dunant, the founder of the International Committee of the Red Cross (ICRC) and recipient of the first Nobel Peace Prize.',
  },
  {
    slug: 'best-entrepreneur-competition-2022',
    date: { day: '26', month: 'Jun', year: '2022' },
    title: 'Best Entrepreneur Competition',
    description: 'Commerce Club of RBANM\'S First Grade College conducted ‘Best Entrepreneur competition’ on 20.06.2022 for final year students from BA, B. Com, BBA, and BCA. The competition mainly aimed to bring entrepreneurial skills among students and motivate them.',
  },
  {
    slug: 'womens-health-wellness-2022',
    date: { day: '08', month: 'Mar', year: '2022' },
    title: 'Women\'s Health & Wellness',
    description: 'Women’s cell of RBANM’S First Grade College had organized a one day Seminar on Women’s Health and Wellness on 8.2.2022, Tuesday at the A. V Room. The Resource persons for the day were Ms. Anitha Iyer, an Ambassador from ECO Femme and Ms. Ma.',
  },
  {
    slug: 'blood-donation-camp-2020',
    date: { day: '07', month: 'Mar', year: '2020' },
    title: 'BLOOD DONATION CAMP',
    description: 'BLOOD DONATION CAMP ORGANISED BY RED CROSS UNIT IN RBANM’S FIRST GRADE COLLEGE',
  },
];
