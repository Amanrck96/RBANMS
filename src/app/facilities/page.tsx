
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building, Laptop, BookOpen, FlaskConical, HandHeart, Bus, Train, Award, Leaf, GraduationCap, 
  Briefcase, Trophy, Zap, HeartHandshake, Drama, Paintbrush, Mic, Handshake, Users, Gem, ParkingCircle, Utensils, Droplets, ShowerHead
} from 'lucide-react';

const facilities = [
  { icon: Building, text: "A beautiful campus, opposite Ulsoor lake" },
  { icon: Laptop, text: "Bright classrooms, equipped with LCD projectors" },
  { icon: Laptop, text: "Three computer labs" },
  { icon: BookOpen, text: "Physical library with nearly 40,000 books" },
  { icon: BookOpen, text: "Digital Library" },
  { icon: FlaskConical, text: "Research Centre" },
  { icon: HandHeart, text: "Counselling Room" },
  { icon: Mic, text: "A large auditorium" },
  { icon: Mic, text: "A seminar Hall" },
  { icon: Mic, text: "An assembly Hall" },
  { icon: Drama, text: "An amphitheatre" },
  { icon: Trophy, text: "Ample space for recreational sports" },
  { icon: Trophy, text: "Proximity and access to professional sports organisations (Cricket & Football)" },
  { icon: Award, text: "A gym" },
  { icon: Trophy, text: "Indoor games room" },
  { icon: Utensils, text: "College Canteen" },
  { icon: Droplets, text: "Access to clean drinking water" },
  { icon: ShowerHead, text: "Clean and modern washrooms" },
  { icon: ParkingCircle, text: "Parking space on campus" },
];

export default function FacilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Facilities</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {facilities.map((facility, index) => (
              <div key={index} className="box-border h-full w-full flex items-center p-4 bg-secondary rounded-lg">
                <facility.icon className="h-8 w-8 text-accent mr-4 shrink-0" />
                <span className="text-muted-foreground">{facility.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    
