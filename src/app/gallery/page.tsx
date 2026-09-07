'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { Camera, Calendar, Tag } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'ncc' | 'cultural' | 'academic';
  date: string;
  description: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lamp Lighting at Annual College Orientation',
    category: 'events',
    date: 'Academic Year 2026-27',
    description: 'Dignitaries, Director, and Principal inaugurating the fresh batch orientation ceremony with the traditional lamp lighting.',
    imageUrl: '/images/gallery/orientation-lamp.jpg',
  },
  {
    id: 'gal-2',
    title: 'NCC Cadets & Officers Annual Group Photo',
    category: 'ncc',
    date: 'Annual Training Camp',
    description: 'RBANMS NCC Army & Navy wing cadets along with Associate NCC Officers following the annual passing out parade.',
    imageUrl: '/images/gallery/ncc-group-photo.jpg',
  },
  {
    id: 'gal-3',
    title: 'NCC Guard of Honour Ceremony',
    category: 'ncc',
    date: 'National Celebration',
    description: 'Cadets presenting the Guard of Honour to inspecting dignitaries during the ceremonial parade at the college grounds.',
    imageUrl: '/images/gallery/ncc-cadet.jpg',
  },
  {
    id: 'gal-4',
    title: 'NSS & Red Cross Public Awareness Rally',
    category: 'events',
    date: 'Community Outreach Drive',
    description: 'Student volunteers marching through Ulsoor holding educational banners for public health and civic awareness.',
    imageUrl: '/images/gallery/aids-awareness-rally.jpg',
  },
  {
    id: 'gal-5',
    title: 'Annual Cultural Fest: Classical Vocal Concert',
    category: 'cultural',
    date: 'Annual Youth Festival',
    description: 'Talented student musicians performing traditional classical renditions during the inter-collegiate cultural fest.',
    imageUrl: '/images/gallery/natya-singing-1.jpg',
  },
  {
    id: 'gal-6',
    title: 'Musical Ensemble & Instrumental Recital',
    category: 'cultural',
    date: 'Fine Arts Forum',
    description: 'Faculty and student artists harmonizing percussion and strings at the college auditorium.',
    imageUrl: '/images/gallery/natya-singing-2.jpg',
  },
  {
    id: 'gal-7',
    title: 'Adventure & Eco-Club Nature Trekking',
    category: 'events',
    date: 'Eco-Club Outing',
    description: 'Students and faculty mentors on an outdoor environmental study and trekking expedition.',
    imageUrl: '/images/gallery/group-hiking.jpg',
  },
  {
    id: 'gal-8',
    title: 'Basavanna Jayanthi Celebration & Floral Tributes',
    category: 'academic',
    date: 'Department of Languages',
    description: 'Faculty and scholars offering floral tributes to Lord Basaveshwara, discussing principles of social equity.',
    imageUrl: '/images/events/basavanna-1.jpg',
  },
  {
    id: 'gal-9',
    title: 'Vachana Sahitya Literary Discourse',
    category: 'academic',
    date: 'Literary Forum',
    description: 'Kannada department symposium with guest speakers exploring 12th-century philosophical heritage.',
    imageUrl: '/images/events/basavanna-2.jpg',
  },
  {
    id: 'gal-10',
    title: 'Student Presentations on Cultural Heritage',
    category: 'academic',
    date: 'Department Colloquium',
    description: 'Undergraduate scholars presenting research posters on regional literature and socio-cultural reforms.',
    imageUrl: '/images/events/basavanna-3.jpg',
  },
  {
    id: 'gal-11',
    title: 'NCC Army Wing Field Exercise',
    category: 'ncc',
    date: 'Combined Annual Training',
    description: 'Army wing cadets practicing drill routines and survival maneuvers under military instructors.',
    imageUrl: '/images/ncc/army_wing.jpg',
  },
  {
    id: 'gal-12',
    title: 'NCC Naval Wing Ship Modelling & Semaphore',
    category: 'ncc',
    date: 'Naval Unit Training',
    description: 'Naval cadets mastering seamanship, signalling, and boat pulling fundamentals.',
    imageUrl: '/images/ncc/navy_wing.png',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'events', label: 'Campus & Events' },
  { id: 'ncc', label: 'NCC & NSS' },
  { id: 'cultural', label: 'Cultural Fest' },
  { id: 'academic', label: 'Academic & Seminars' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SiteHeader />

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400 text-blue-950 uppercase tracking-wider">
            <Camera className="h-3.5 w-3.5" /> Campus Life & Heritage
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">College Photo Gallery</h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Capturing the vibrant moments, academic achievements, national service, and cultural celebrations across RBANMS First Grade College.
          </p>
        </div>
      </header>

      {/* Main Gallery Area */}
      <main className="container mx-auto px-4 py-12 max-w-7xl flex-grow">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border shrink-0 ${
                  isActive
                    ? 'bg-[#800000] text-[#FFD700] border-[#800000] shadow-md -translate-y-0.5'
                    : 'bg-white text-slate-700 hover:text-[#800000] hover:bg-slate-100 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all border-slate-200 group flex flex-col h-full bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur text-yellow-300 text-[10px] font-bold px-2.5 py-1 rounded shadow uppercase tracking-wider">
                  {item.category.toUpperCase()}
                </span>
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>{item.date}</span>
                </div>
                <h2 className="font-bold text-lg text-blue-950 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notice for visitors */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center max-w-2xl mx-auto text-sm text-slate-700">
          <p className="font-semibold text-blue-950 mb-1">Looking for high-resolution event archives?</p>
          <p>Official photographs from graduation ceremonies and annual sports meets can be obtained through the college media cell or administration office.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
