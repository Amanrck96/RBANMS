import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getActivityItem } from '@/lib/activities'

export default function ActivityDetailPage({ params }: { params: { category: 'cultural' | 'co-curricular'; slug: string } }) {
  const item = getActivityItem(params.category, params.slug)

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-muted-foreground">Not found.</p>
        <div className="mt-4">
          <Link href={`/activities/${params.category}`} className="text-primary hover:underline">Back to {params.category}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border">
            <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
          </div>
          <p className="text-foreground/80">{item.excerpt}</p>
          <div>
            <Link href={`/activities/${params.category}`} className="text-primary hover:underline">Back to {params.category}</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

