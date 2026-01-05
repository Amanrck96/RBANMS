'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function PrincipalMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-principal"
            defaultTitle="Message from Principal"
            defaultImageUrl="/images/migrated/principal-whatsapp.jpeg"
            defaultContent={
              <div className="space-y-4">
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
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
