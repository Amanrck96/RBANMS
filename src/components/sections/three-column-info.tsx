import Image from 'next/image';
import Link from 'next/link';

export function ThreeColumnInfo() {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Affiliation</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              RBANMS First Grade College is affiliated to Bengaluru City University,
              accredited by NAAC with B+, and recognised under 2(f) & 12(B) of the UGC Act 1956.
            </p>
            <p className="text-foreground/80 text-sm leading-relaxed mt-2">
              We are committed to high standards in teaching, research, and holistic development.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Message from Director</h3>
            <div className="flex items-start gap-4">
              <Image src="https://rbanmsfgc.ac.in/images/director.jpg" alt="Director" width={96} height={96} className="rounded-md object-cover" />
              <div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Our vision is to empower students through innovative learning and
                  value-based education, fostering leadership and excellence.
                </p>
                <Link href="/about/director-message" className="text-primary mt-2 inline-block text-sm">Read more…</Link>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-primary font-headline mb-3">Message from Principal</h3>
            <div className="flex items-start gap-4">
              <Image src="https://rbanmsfgc.ac.in/images/principal.jpg" alt="Principal" width={96} height={96} className="rounded-md object-cover" />
              <div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  We strive to create a supportive environment that nurtures curiosity,
                  creativity, and discipline, preparing students for future challenges.
                </p>
                <Link href="/about/principal-message" className="text-primary mt-2 inline-block text-sm">Read more…</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

