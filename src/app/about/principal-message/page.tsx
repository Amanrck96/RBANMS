
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PrincipalMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-blue-900 font-headline">Message from Principal</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-6">
          <div className="md:col-span-1 space-y-4">
            <div className="relative w-full aspect-square overflow-hidden border shadow-sm">
              <Image
                src="https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg"
                alt="Dr Shanti Iyer"
                fill
                className="object-cover"
                data-ai-hint="professional headshot"
                unoptimized
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-blue-900">Dr. Shanti Iyer</h2>
              <p className="text-sm text-muted-foreground mb-4">Ph.D.</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 prose prose-lg max-w-none content-black">
            <p>
              The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM’s First Grade College is to create efficient academicians, innovative entrepreneurs, true researchers and honest, dedicated and dynamic leaders who contribute to the development of society and nation at large.
            </p>
            <p>
              Guided by values of faith, integrity and dignity, we at RBANM’s FGC, are committed to providing holistic education by maintaining high academic standards, discipline and professional ethics.
            </p>
             <p>
              In the process of guiding students through the prescribed syllabii and the examination system, we also mould their personality by instilling in them values, skills and the right attitude towards life.
            </p>
            <p>
              In conclusion, I can say that, joining RBANM’s FGC will be a decision a student will never regret, for he/ she can then have secure future and a successful life. Having the opportunity to ‘Enrich, Excel and Evolve’, this is a place where students are taught to reach the sky and beyond.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    
