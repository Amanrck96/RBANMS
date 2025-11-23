
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function TeachingPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Philosophy of Teaching/Learning</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <blockquote className="border-l-4 border-accent pl-6 text-foreground/90 relative">
            <Quote className="h-10 w-10 text-accent/20 absolute -top-4 -left-5" fill="currentColor" />
            With the dedication of our teachers and the strong support of our management, we have created an environment that fosters curiosity, learning, and innovation.
            At RBANMS, we believe that success isn’t just about academics, it’s about character. Respect, humility, honesty, and sincerity are values we hold close, and we encourage our students to take pride in their Institution. After all, the way they engage with their teachers and peers today shapes the way they will engage with the world tomorrow.
            We know that every child is unique, with talents waiting to be discovered. Our goal is to create an environment where students feel supported, both at home and in college, so they can unlock their full potential. With the right blend of education, mentorship, and opportunities, we empower them to become confident, capable individuals ready to take on the world.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}

    
