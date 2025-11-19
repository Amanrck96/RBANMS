
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FounderPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border shadow-sm">
                <Image
                  src="https://rbanmsfgc.ac.in/images/founder.png"
                  alt="Rai Bahadur Arcot Narrainswamy Mudaliar"
                  fill
                  className="object-contain object-top"
                  data-ai-hint="historical portrait"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary">Rai Bahadur Arcot Narrainswamy Mudaliar</h2>
                <p className="text-muted-foreground">(1827–1910)</p>
                <p className="mt-2 text-sm font-semibold text-accent">A Visionary Philanthropist & Social Reformer</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline border-b pb-2">Our Founder</h1>
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                <p>
                  Arcot Narrainswamy Mudaliar was a pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality, education, and social justice. Born in Arcot in 1827, he moved to Bangalore as a child, shouldering the responsibility of his family after his father’s demise. His entrepreneurial acumen led him to establish successful businesses, including Mysore Hall and Bangalore Agency, making him one of the wealthiest merchants of his time.
                </p>
                <p>
                  Despite his business success, what set Mudaliar apart was his progressive vision for society. Deeply influenced by the idea that wealth was a trust for the upliftment of the needy, he dedicated himself to philanthropy, particularly in education. In 1873, he founded the Free English Primary School in Bangalore Cantonment for non-white students—an assertion of the principle of equality at a time when education was a privilege of the elite. Remarkably, despite not being literate in English himself, he understood its value in empowering future generations.
                </p>
                <p>
                  Mudaliar also championed gender and caste equality, first, with the founding of the Thirukulatar School in 1883, which provided education to the most marginalized castes from untouchable communities, defying rigid social hierarchies that completely excluded them from mainstream education. In 1886, he established the Govindammal Girls School, recognizing that education was the key to women's empowerment, at a time when societal norms relegated women to domestic roles.
                </p>
                <p>
                  His impact was not limited to education. Mudaliar established one of Bangalore’s earliest technical schools in 1897, breaking the barriers of hereditary professions and providing opportunities for skill development. His response to the devastating famine of 1876-1878 demonstrated his humanitarian spirit, as he set up feeding centers and later an orphanage, which evolved into a permanent hostel for the underprivileged.
                </p>
                <p>
                  Mudaliar’s reformist outlook was also reflected in his association with the Brahmo Samaj, an organization advocating against caste discrimination and ritualistic Hindu practices. His legacy of challenging caste hierarchies was carried forward by his descendants, who played a role in temple entry movements and supported the Indian independence struggle, including contributions to Mahatma Gandhi’s South African campaign.
                </p>
                <p>
                  Narrainswamy Mudaliar’s life and work prefigured many ideals later enshrined in the Indian Constitution, particularly the principles of equality and non-discrimination. His unwavering commitment to social reform, particularly in education, caste, and gender equality, places him among the visionary reformers of 19th-century India.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-primary mb-2">A Legacy That Inspires Generations</h3>
                <p className="text-muted-foreground mb-4">
                  The life and values of Rai Bahadur Arcot Narrainswamy Mudaliar continue to guide RBANMS’ commitment to education, equality, and social upliftment.
                </p>
                <Button asChild>
                  <Link href="/about/founders-vision">
                    Read Our Founder's Vision <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    