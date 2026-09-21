'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

const defaultResearchContent = (
    <div className="space-y-8 prose prose-lg max-w-none text-slate-800">
        <p className="text-lg text-justify leading-relaxed">
            RBANM’S First Grade College is committed to promoting a culture of research and innovation among its faculty and students. We believe that an inquiry-driven environment is essential for academic excellence and for preparing students to meet the challenges of a rapidly changing world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4 font-headline">Key Objectives</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1 font-bold">●</span>
                        <span className="text-slate-700">To encourage faculty and students to undertake innovative research projects and publications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1 font-bold">●</span>
                        <span className="text-slate-700">To facilitate active participation in national and international research conferences and symposiums.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1 font-bold">●</span>
                        <span className="text-slate-700">To support paper presentations and publications in UGC-CARE and peer-reviewed journals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1 font-bold">●</span>
                        <span className="text-slate-700">To organize periodic workshops on research methodology, data analysis tools, and academic ethics.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-headline">Disciplines & Focus Areas</h3>
                <p className="text-slate-600 mb-4 text-sm">Faculty and undergraduate scholars actively pursue interdisciplinary inquiries across:</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Commerce, Taxation & GST</span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Cloud Computing & AI</span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Corporate Strategy & HR</span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Macroeconomics & Public Policy</span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Regional History & Heritage</span>
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[#800000] font-semibold text-xs shadow-sm">Linguistics & Comparative Literature</span>
                </div>
            </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50/60 rounded-xl border border-amber-200/60 not-prose">
            <h3 className="text-lg font-bold text-amber-950 mb-2 font-headline">Research Cell Committee</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
                The Research Cell coordinates student paper submissions, guides research methodology workshops, and manages institutional affiliations with university research forums under Dr. Manmohan Singh Bengaluru City University guidelines.
            </p>
        </div>
    </div>
);

export default function ResearchPage() {
    return (
        <DynamicSection
            pageId="research"
            render={(data) => {
                // data is the Firebase document — title/tagline saved by admin
                const title = (data && data.title) ? data.title : "Research & Innovation";
                const tagline = (data && data.tagline) ? data.tagline : "Advancing knowledge through inquiry, collaboration, and academic excellence.";
                return (
                    <div className="container mx-auto px-4 py-12 md:py-16">
                        <Card className="overflow-hidden border-none shadow-xl">
                            <div className="bg-white py-12 px-8 border-b border-gray-100">
                                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-[#800000]">{title}</h1>
                                <p className="text-slate-600 text-lg max-w-2xl">
                                    {tagline}
                                </p>
                            </div>
                            <CardContent className="pt-12 pb-16 px-8 md:px-12 prose prose-lg max-w-none">
                                {(data && data.content) ? (
                                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                ) : (
                                    defaultResearchContent
                                )}
                            </CardContent>
                        </Card>
                    </div>
                );
            }}
        />
    );
}
