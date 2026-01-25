'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, BookOpen, Briefcase, Heart, Lightbulb } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function TeachingPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline tracking-tight">Philosophy of Teaching & Learning</h1>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            "Enrich, Excel, and Evolve" – Our commitment to steering Every student towards a brighter future.
          </p>
        </div>

        <DynamicSection
          pageId="academics-philosophy"
          defaultContent={
            <div className="space-y-12">
              {/* Introduction Card */}
              <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden">
                <CardContent className="p-8 md:p-12 relative">
                  <Quote className="h-20 w-20 text-white/10 absolute -top-4 -left-4 rotate-12" fill="currentColor" />
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-medium relative z-10">
                    With the dedication of our teachers and the strong support of our management, we have created an environment that fosters curiosity, learning, and innovation. At RBANMS, we believe that success isn’t just about academics, it’s about character. Respect, humility, honesty, and sincerity are values we hold close.
                  </blockquote>
                </CardContent>
              </Card>

              {/* The Three Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Academic Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Guiding students through prescribed syllabi and a robust examination system while fostering intellectual curiosity.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Career Readiness</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Addressing employability through skill-building, industry connect, and vocational certification programs.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Character Building</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Instilling values of respect, humility, and sincerity to shape students into responsible global citizens.
                  </p>
                </div>
              </div>

              {/* Discovery Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                    <Lightbulb className="h-4 w-4" />
                    <span>Nurturing Potential</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Every Child is Unique</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We know that every student has talents waiting to be discovered. Our goal is to create an environment where they feel supported, both at home and in college, so they can unlock their full potential.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The way our students engage with their teachers and peers today shapes the way they will engage with the world tomorrow. With the right blend of education, mentorship, and opportunities, we empower them to become confident, capable individuals.
                  </p>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  {/* Background placeholder for a future high-quality academic image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center">
                    <img
                      src="/images/gallery/natya-singing-2.jpg"
                      alt="Philosophy of Discovery"
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
