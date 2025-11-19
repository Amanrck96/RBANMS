import StandardizedImage from '@/components/ui/standardized-image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AlumniActivityPage() {
  const alumniImage = PlaceHolderImages.find(p => p.id === 'alumni-activity-1');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 space-y-6">
              {alumniImage && (
                <StandardizedImage
                  src={alumniImage.imageUrl}
                  alt={alumniImage.description}
                  aspect="rect"
                  containerClassName="rounded-lg border shadow-sm"
                  className=""
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={alumniImage.imageHint}
                />
              )}
            </div>

            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline border-b pb-2">Alumni Activity</h1>
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                <h2 className="text-2xl font-bold text-primary">Digital India Support Campaign</h2>
                <p>
                  The Alumni Association was formally Registered on 21st January 2017 and as 1st initiative we started with Digital India support campaign - The Payments Without Cash. Our Students Make It Possible – The Alumnis spend time with current students in helping them understand how the digital payment app works and in turn the students ventured out to Ulsoor market and ensured the same was passed on to the local vendors as to how the usage of Mobile phone Apps for receiving payment.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
