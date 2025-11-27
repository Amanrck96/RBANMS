export type ActivityItem = {
  slug: string
  title: string
  excerpt: string
  imageUrl: string
}

export type ActivityCategory = {
  id: "cultural" | "co-curricular"
  title: string
  items: ActivityItem[]
}

export const activitiesData: ActivityCategory[] = [
  {
    id: "cultural",
    title: "Cultural",
    items: [
      { slug: "natya", title: "Natya", excerpt: "The dramatics club fostering stagecraft and performance.", imageUrl: "https://placehold.co/600x400?text=Natya" },
      { slug: "theatre", title: "Theatre", excerpt: "Exploring theatre arts through workshops and productions.", imageUrl: "https://placehold.co/600x400?text=Theatre" },
      { slug: "music", title: "Music", excerpt: "Vocal and instrumental ensembles, performances, and learning.", imageUrl: "https://placehold.co/600x400?text=Music" },
      { slug: "dance", title: "Dance", excerpt: "Classical and contemporary dance forms and showcases.", imageUrl: "https://placehold.co/600x400?text=Dance" },
      { slug: "film-club", title: "Film Club", excerpt: "Screenings, discussions, and film-making initiatives.", imageUrl: "https://placehold.co/600x400?text=Film+Club" },
      { slug: "literary-club", title: "Magazine Team", excerpt: "Reading, writing, debates, and creative literary forums.", imageUrl: "https://placehold.co/600x400?text=Magazine+Team" },
    ],
  },
  {
    id: "co-curricular",
    title: "Co-Curricular",
    items: [
      { slug: "yrcs", title: "YRCS", excerpt: "Youth Red Cross Society activities and volunteering.", imageUrl: "https://placehold.co/600x400?text=YRCS" },
      { slug: "ncc-army", title: "NCC (Army)", excerpt: "Army wing training, drills, and leadership.", imageUrl: "https://placehold.co/600x400?text=NCC+Army" },
      { slug: "ncc-navy", title: "NCC (Navy)", excerpt: "Naval wing initiatives, seamanship, and discipline.", imageUrl: "https://placehold.co/600x400?text=NCC+Navy" },
      { slug: "nss", title: "NSS", excerpt: "National Service Scheme social outreach and service.", imageUrl: "https://placehold.co/600x400?text=NSS" },
    ],
  },
]

export function getActivityCategory(id: "cultural" | "co-curricular") {
  return activitiesData.find((c) => c.id === id)
}

export function getActivityItem(categoryId: "cultural" | "co-curricular", slug: string) {
  const cat = getActivityCategory(categoryId)
  return cat?.items.find((i) => i.slug === slug)
}
