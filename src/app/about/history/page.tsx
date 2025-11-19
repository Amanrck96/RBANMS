
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const commitments = [
  "Providing a value-driven and holistic education, fostering intellectual, physical, mental, and spiritual growth.",
  "Offering inclusive education, ensuring that students from all social and economic backgrounds receive quality learning opportunities.",
  "Maintaining discipline, punctuality, and responsibility in both students and staff.",
  "Encouraging students to pursue academic excellence with a sense of curiosity and passion.",
  "Supporting holistic development through sports, cultural activities, and NCC programs.",
  "Engaging students in community development and nation-building, shaping them into socially responsible citizens.",
  "Creating a healthy and dynamic learning environment through strong student-teacher relationships.",
  "Promoting ethical values and a strong work ethic among students.",
  "Offering a wide range of academic programs that align with evolving societal and professional needs.",
  "Shaping students into resilient and compassionate individuals, ready to face the challenges of modern life with confidence and a positive outlook.",
  "Striking a balance between academics, extracurricular activities, and character building, ensuring well-rounded personal and professional growth."
];

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">History of the College</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
            <p>
              RBANMS First Grade College was founded in 1983 as part of RBANM’s Educational Charities to meet the growing educational needs of Bangalore, a city rapidly emerging as a modern technology hub. Our institution is a proud extension of the RBANMS Educational Charities, which was established in 1873 by Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar. With a vision of social regeneration, our founder dedicated himself to making education accessible to all, transcending social and economic barriers. Today, RBANMS First Grade College stands as a testament to that vision, fostering learning, inclusivity, and growth.
            </p>
            <p>
              We strongly believe that education is a collaborative journey. When students, parents, and educators work together, learning becomes more meaningful. Our dedicated teachers teach, guide, mentor, and inspire. Through a mix of academics and extracurricular activities, we shape well-rounded individuals who are prepared for both career success and personal fulfilment. RBANMS First Grade College is a space where we prepare students for life.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
            <ul className="space-y-3">
              {commitments.map((commitment, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <span className="text-muted-foreground">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    