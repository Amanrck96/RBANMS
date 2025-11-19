"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

type VideoItem = { title: string; url: string }; 

const awards = [
  'Best College Cultural Trophy 2024',
  'NAAC Accreditation B+ Grade',
  'Excellence in Sports 2023',
  'Community Outreach Award 2022',
];

const videos: VideoItem[] = [
  { title: 'Campus Tour', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Annual Day Highlights', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { title: 'Student Achievements', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const events = [
  { title: 'Admissions Open', date: 'Jun 01' },
  { title: 'Orientation Programme', date: 'Aug 10' },
  { title: 'Intercollegiate Fest', date: 'Sep 18' },
  { title: 'Research Workshop', date: 'Oct 05' },
];

export function AwardsVideosEvents() {
  const [videoIndex, setVideoIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVideoIndex((i) => (i + 1) % videos.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Awards & Achievements */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Awards & Achievements</h3>
            <div className="max-h-[240px] overflow-y-auto space-y-2">
              {awards.map((a, i) => (
                <div key={i} className="text-foreground/80 text-sm border-b pb-2">{a}</div>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Videos</h3>
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <iframe
                key={videoIndex}
                className="w-full h-full"
                src={videos[videoIndex].url}
                title={videos[videoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {videos[videoIndex].title}
            </p>
            <div className="flex justify-center gap-2 mt-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === videoIndex ? 'bg-primary' : 'bg-muted-foreground/40'}`}
                  aria-label={`Select video ${i + 1}`}
                  onClick={() => setVideoIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Upcoming Events</h3>
            <ul className="space-y-3 max-h-[240px] overflow-y-auto">
              {events.map((e, i) => (
                <li key={i} className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm text-foreground/80">{e.title}</span>
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-2">
              <Link href="/events" className="text-primary text-sm">View all events →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

