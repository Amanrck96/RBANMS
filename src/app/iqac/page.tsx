'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Settings, TrendingUp, Files } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function IQACPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="border-none shadow-xl">
        <CardContent className="pt-10">
          <div className="space-y-12">
            <DynamicSection
              pageId="cell-iqac"
              render={(data) => (
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <h1 className="text-4xl font-bold text-primary font-headline mb-6">
                    {data.title || "Internal Quality Assurance Cell (IQAC)"}
                  </h1>

                  {!data.content && (
                    <p className="text-lg">
                      The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence. Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure. By implementing best practices and coordinating with accreditation bodies like NAAC, the IQAC ensures that the institution evolves to meet global educational standards while fostering a culture of continuous improvement for both faculty and students.
                    </p>
                  )}

                  {data.content && (
                    <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                  )}
                </div>
              )}
            />

            <div className="grid grid-cols-1 gap-8 mt-12">
              {/* Objectives */}
              <DynamicSection
                pageId="page-cell-iqac-tab-objectives"
                render={(data) => (
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Target className="h-6 w-6" /> {data.title || "Objectives"}
                    </h3>
                    <div className="prose prose-slate max-w-none text-lg" dangerouslySetInnerHTML={{ __html: data.content }} />
                  </div>
                )}
              />

              {/* Functions */}
              <DynamicSection
                pageId="page-cell-iqac-tab-functions"
                render={(data) => (
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Settings className="h-6 w-6" /> {data.title || "Functions"}
                    </h3>
                    <div className="prose prose-slate max-w-none text-lg" dangerouslySetInnerHTML={{ __html: data.content }} />
                  </div>
                )}
              />

              {/* Contributions */}
              <DynamicSection
                pageId="page-cell-iqac-tab-major-contributions"
                render={(data) => (
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6" /> {data.title || "Major Contributions"}
                    </h3>
                    <div className="prose prose-slate max-w-none text-lg" dangerouslySetInnerHTML={{ __html: data.content }} />
                  </div>
                )}
              />
            </div>

            {/* Documents Section */}
            <DynamicSection
              pageId="page-cell-iqac-tab-documents"
              render={(data) => (
                <div className="mt-16 pt-12 border-t">
                  <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
