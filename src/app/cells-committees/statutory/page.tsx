import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCellCategory } from '@/lib/cells'

export default function StatutoryCellsPage() {
  const category = getCellCategory('statutory')!

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Statutory</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {category.items.map((item) => (
              <Link key={item.slug} href={`/cells-committees/statutory/${item.slug}`} className="group">
                <div className="h-full rounded-lg border shadow-sm overflow-hidden flex flex-col bg-background">
                  <div className="relative w-full aspect-[16/9]">
                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
                    {/* <div className="mt-auto pt-3">
               <span className="text-primary text-sm group-hover:underline">Read More →</span>
             </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

