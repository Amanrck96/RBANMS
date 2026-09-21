'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Sparkles, Calendar, ChevronLeft, ChevronRight, ArrowRight, Bell, FileText } from 'lucide-react';

interface CarouselSlide {
  title: string;
  desc: string;
  imageUrl: string;
  link?: string;
}

interface ColumnData {
  title: string;
  subtitle: string;
  icon: any;
  link: string;
  linkText: string;
  slides: CarouselSlide[];
}

function inferPrimaryTag(event: any): 'Academics' | 'Co-curricular' | 'Events' {
  if (event.primaryTag) {
    const raw = String(event.primaryTag).toLowerCase().replace(/[^a-z]/g, '');
    if (raw.includes('academic')) return 'Academics';
    if (raw.includes('curricul') || raw.includes('cocurricular') || raw.includes('activity')) return 'Co-curricular';
    if (raw.includes('event')) return 'Events';
  }
  const all = [
    ...(Array.isArray(event.secondaryTags) ? event.secondaryTags : []),
    ...(Array.isArray(event.tags) ? event.tags : []),
    event.department || ''
  ].map((t: string) => String(t).toLowerCase());

  if (all.some((t: string) => ['academics', 'commerce', 'computer-applications', 'bca', 'management', 'bba', 'arts', 'english', 'languages', 'hindi', 'kannada', 'anrc', 'commerce-forum', 'bca-forum', 'management-forum', 'literary-forum', 'languages-forum'].includes(t))) {
    return 'Academics';
  }
  if (all.some((t: string) => ['co-curricular', 'cocurricular', 'nss', 'ncc', 'ncc-army', 'ncc-navy', 'physical-education', 'cultural-committee', 'eco-club', 'yrc-scouts', 'manasa-counselling', 'womens-cell'].includes(t))) {
    return 'Co-curricular';
  }
  return 'Events';
}

const COLUMNS_DATA: ColumnData[] = [
  {
    title: 'Academics',
    subtitle: 'Classroom & Labs',
    icon: BookOpen,
    link: '/academics',
    linkText: 'Explore Academics',
    slides: [
      {
        title: 'Modern Computing & IT Labs',
        desc: 'Advanced software systems, cloud labs, and hands-on developer environments.',
        imageUrl: '/images/departments/bca_dept.jpg'
      },
      {
        title: 'Commerce & Accounting Seminars',
        desc: 'Industry-guided workshops on taxation, banking operations, and financial analysis.',
        imageUrl: '/images/departments/commerce/group_photo.jpg'
      },
      {
        title: 'Social Sciences & Humanities',
        desc: 'Interactive discussions, economic policy analysis, and civil service coaching.',
        imageUrl: '/images/departments/arts/group_photo.jpg'
      },
      {
        title: 'Undergraduate Research Colloquium',
        desc: 'Students presenting research papers and projects under faculty mentorship.',
        imageUrl: '/images/events/basavanna-3.jpg'
      },
      {
        title: 'Annual Academic Orientation',
        desc: 'Inauguration of incoming batches with traditional lamp lighting and guidance.',
        imageUrl: '/images/gallery/orientation-lamp.jpg'
      }
    ]
  },
  {
    title: 'Co-Curricular',
    subtitle: 'Clubs, NCC & NSS',
    icon: Sparkles,
    link: '/activities',
    linkText: 'Explore Activities',
    slides: [
      {
        title: 'NCC Army & Navy Wings',
        desc: 'Annual passing out parade and drill training cultivating leadership and discipline.',
        imageUrl: '/images/gallery/ncc-group-photo.jpg'
      },
      {
        title: 'Guard of Honour Ceremony',
        desc: 'Cadets presenting ceremonial honors to inspecting armed forces dignitaries.',
        imageUrl: '/images/gallery/ncc-cadet.jpg'
      },
      {
        title: 'Classical Music & Fine Arts',
        desc: 'Students showcasing vocal mastery and classical traditions during youth festivals.',
        imageUrl: '/images/gallery/natya-singing-1.jpg'
      },
      {
        title: 'Instrumental Ensemble',
        desc: 'Harmonious percussion and string recitals organized by the Natya Forum.',
        imageUrl: '/images/gallery/natya-singing-2.jpg'
      },
      {
        title: 'Eco-Club & Nature Trekking',
        desc: 'Outdoor environmental expeditions and ecological biodiversity awareness.',
        imageUrl: '/images/gallery/group-hiking.jpg'
      }
    ]
  },
  {
    title: 'Events',
    subtitle: 'Campus Celebrations',
    icon: Calendar,
    link: '/events',
    linkText: 'View All Events',
    slides: [
      {
        title: 'Basavanna Jayanthi Celebration',
        desc: 'Floral tributes and symposium exploring universal humanism and equality.',
        imageUrl: '/images/events/basavanna-1.jpg'
      },
      {
        title: 'Literary & Cultural Discourse',
        desc: 'Kannada and English literary colloquiums with prominent guest scholars.',
        imageUrl: '/images/events/basavanna-2.jpg'
      },
      {
        title: 'NSS & Red Cross Public Rally',
        desc: 'Student volunteers spreading civic and public health awareness across Ulsoor.',
        imageUrl: '/images/gallery/aids-awareness-rally.jpg'
      },
      {
        title: 'Annual Athletics Meet',
        desc: 'Track and field championships testing sporting excellence across departments.',
        imageUrl: '/images/hero/hero-2.jpg'
      },
      {
        title: 'Inter-Collegiate Cultural Fest',
        desc: 'Multi-disciplinary competitions celebrating creativity, dance, and music.',
        imageUrl: '/images/hero/hero-4.jpg'
      }
    ]
  }
];

function ColumnCarousel({ column }: { column: ColumnData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [column.slides.length]);

  useEffect(() => {
    if (isPaused || column.slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % column.slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, column.slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + column.slides.length) % column.slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % column.slides.length);
  };

  const IconComponent = column.icon;
  const currentSlide = column.slides[currentIndex] || column.slides[0];

  return (
    <Card 
      className="flex flex-col h-full overflow-hidden border border-slate-200 hover:border-[#800000] transition-all shadow-sm hover:shadow-xl bg-white group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CardHeader className="bg-slate-50/80 pb-3 p-4 border-b border-slate-100 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#800000]/10 flex items-center justify-center text-[#800000]">
            <IconComponent className="h-4 w-4" />
          </div>
          <div>
            <CardTitle className="text-slate-900 text-lg font-bold font-headline">
              {column.title}
            </CardTitle>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{column.subtitle}</p>
          </div>
        </div>
        <span className="text-xs font-bold text-[#800000] bg-red-50 px-2 py-0.5 rounded-full">
          {currentIndex + 1} / {column.slides.length}
        </span>
      </CardHeader>

      <CardContent className="p-0 flex-grow flex flex-col justify-between">
        {/* Carousel Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          {currentSlide.link ? (
            <Link href={currentSlide.link} className="block w-full h-full">
              <Image
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={currentIndex === 0}
                unoptimized={currentSlide.imageUrl?.startsWith('http')}
              />
            </Link>
          ) : (
            <Image
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={currentIndex === 0}
              unoptimized={currentSlide.imageUrl?.startsWith('http')}
            />
          )}

          {/* Left / Right Buttons */}
          {column.slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#800000] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#800000] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Indicators */}
          {column.slides.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
              {column.slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex ? 'w-5 bg-[#FFD700]' : 'w-1.5 bg-white/70 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Slide Description & Link */}
        <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
          <div>
            {currentSlide.link ? (
              <Link href={currentSlide.link} className="hover:text-[#800000] transition-colors">
                <h4 className="font-bold text-base text-slate-900 group-hover:text-[#800000] transition-colors line-clamp-1 mb-1.5">
                  {currentSlide.title}
                </h4>
              </Link>
            ) : (
              <h4 className="font-bold text-base text-slate-900 group-hover:text-[#800000] transition-colors line-clamp-1 mb-1.5">
                {currentSlide.title}
              </h4>
            )}
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
              {currentSlide.desc}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <Link
              href={column.link}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800000] hover:translate-x-1 transition-transform"
            >
              {column.linkText} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {currentSlide.link && (
              <Link
                href={currentSlide.link}
                className="text-[11px] font-semibold text-slate-500 hover:text-[#800000] hover:underline"
              >
                View Details
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ThreeColumnCarousel() {
  const [columns, setColumns] = useState<ColumnData[]>(COLUMNS_DATA);

  useEffect(() => {
    async function fetchDynamicEvents() {
      try {
        const res = await fetch('/api/events?published=true');
        if (!res.ok) return;
        const data = await res.json();
        const events: any[] = data.events || [];
        if (!events.length) return;

        const dynamicAcademics: CarouselSlide[] = [];
        const dynamicCoCurricular: CarouselSlide[] = [];
        const dynamicEvents: CarouselSlide[] = [];

        events.forEach((ev) => {
          const pTag = inferPrimaryTag(ev);
          const slide: CarouselSlide = {
            title: ev.title,
            desc: ev.excerpt || (ev.description || (ev.content ? ev.content.replace(/<[^>]*>?/gm, '').slice(0, 110) + '...' : '')),
            imageUrl: ev.imageUrl || (ev.images && ev.images[0]) || (
              pTag === 'Academics' ? '/images/departments/bca_dept.jpg' :
              pTag === 'Co-curricular' ? '/images/gallery/ncc-group-photo.jpg' :
              '/images/events/basavanna-1.jpg'
            ),
            link: `/events/${ev.slug || ev.id}`,
          };

          if (pTag === 'Academics') {
            dynamicAcademics.push(slide);
          } else if (pTag === 'Co-curricular') {
            dynamicCoCurricular.push(slide);
          } else {
            dynamicEvents.push(slide);
          }
        });

        setColumns(prev => prev.map(col => {
          if (col.title === 'Academics') {
            return { ...col, slides: [...dynamicAcademics, ...COLUMNS_DATA[0].slides] };
          }
          if (col.title === 'Co-Curricular') {
            return { ...col, slides: [...dynamicCoCurricular, ...COLUMNS_DATA[1].slides] };
          }
          if (col.title === 'Events') {
            return { ...col, slides: [...dynamicEvents, ...COLUMNS_DATA[2].slides] };
          }
          return col;
        }));
      } catch (err) {
        console.error('Failed to load dynamic events for carousel:', err);
      }
    }
    fetchDynamicEvents();
  }, []);

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#800000]/10 text-[#800000] border border-[#800000]/20">
            <Calendar className="h-3.5 w-3.5" /> Campus Highlights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-headline">
            Academics, Co-Curricular &amp; Events
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Discover the dynamic atmosphere at RBANMS First Grade College across academic achievements, vibrant extracurricular forums, and landmark institutional events.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {columns.map((col) => (
            <div key={col.title} className="h-full">
              <ColumnCarousel column={col} />
            </div>
          ))}
        </div>

        {/* Quick Notices & Brochure Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="md:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800000]">
              <Bell className="h-4 w-4 animate-pulse" /> Latest Campus Notice
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Admissions open for Academic Year 2026-27 for B.C.A., B.Com, B.B.A., and B.A. For campus tour and scholarship inquiries, email <a href="mailto:info@rbanmsfgc.edu.in" className="text-[#800000] underline font-semibold">info@rbanmsfgc.edu.in</a> or call 080-25512976.
            </p>
          </div>

          <div className="keep-colors bg-gradient-to-r from-[#800000] to-[#990000] p-5 rounded-xl shadow-md flex items-center justify-between gap-4" style={{ backgroundColor: '#800000' }}>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: '#FFD700' }}>
                <FileText className="h-4 w-4" style={{ color: '#FFD700' }} /> Prospectus
              </div>
              <h4 className="font-bold text-base" style={{ color: '#ffffff' }}>College Brochure</h4>
              <p className="text-xs" style={{ color: '#fde8e8' }}>Download our updated prospectus and course guides.</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1CzrsV32FaXRc79ZHvfneH4dZbinqriDH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white font-bold text-xs rounded-lg hover:bg-[#FFD700] transition-colors shrink-0 shadow"
              style={{ color: '#800000' }}
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
