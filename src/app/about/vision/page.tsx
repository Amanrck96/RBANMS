'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Scale, ShieldCheck, Handshake, Eye, Target, Compass } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm uppercase tracking-wider mb-2">
            <Eye className="h-4 w-4" />
            <span>Institutional Vision</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-headline tracking-tight">Our Vision for the Future</h1>
          <div className="h-1.5 w-32 bg-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4 font-medium">
            Building a community of learners who are academically sound, ethically strong, and socially responsible.
          </p>
        </div>

        <DynamicSection
          pageId="about-vision"
          defaultTitle="Our Vision"
          render={(data) => (
            <div className="space-y-16">
              {/* Introduction Text */}
              <div className="prose prose-lg max-w-none text-center text-muted-foreground">
                <p className="text-lg font-bold text-gray-700 animate-in fade-in duration-700">The vision of RBANMS is built upon three fundamental principles that guide our every action and decision:</p>
              </div>

              {/* Three Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Equity */}
                <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="h-2 bg-blue-600" />
                  <CardContent className="p-8 space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                      <Scale className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-primary italic">Equity</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ensuring that every student, regardless of their background, has access to the same opportunities, resources, and support needed to succeed.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Justice */}
                <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="h-2 bg-red-700" />
                  <CardContent className="p-8 space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                      <ShieldCheck className="h-8 w-8 text-red-700" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-primary italic">Justice</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Upholding fairness and integrity in education and society. RBANMS strives to create a learning environment where students are encouraged to act with honesty and respect.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Equality */}
                <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <div className="h-2 bg-teal-600" />
                  <CardContent className="p-8 space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-teal-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                      <Handshake className="h-8 w-8 text-teal-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-primary italic">Equality</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Providing an inclusive education system where every individual is treated with dignity and given the same chances to achieve their fullest potential.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Founder's Dream Section */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white p-12 lg:p-20 text-center shadow-2xl border border-gray-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">The Founder's Dream</h2>
                    <p className="text-muted-foreground text-lg">Continuing a legacy of selfless service since 1873.</p>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium italic text-gray-700">
                    "Our vision is to continue the dream of our founder, Rai Bahadur Arcot Narrainswamy Mudaliar, in creating a society where education is a gift accessible to all, empowering generations to lead meaningful lives."
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Focus</span>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Compass className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Guided</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
