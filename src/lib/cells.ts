export type CellItem = {
  slug: string
  title: string
  excerpt: string
  imageUrl: string
}

export type CellCategory = {
  id: "statutory" | "others"
  title: string
  items: CellItem[]
}

export const cellsData: CellCategory[] = [
  {
    id: "statutory",
    title: "Statutory",
    items: [
      { slug: "anti-ragging", title: "Anti Ragging", excerpt: "Policy, committee mandate, and reporting channels.", imageUrl: "https://placehold.co/600x400?text=Anti+Ragging" },
      { slug: "internal-compliance", title: "Internal Compliance Committee", excerpt: "Compliance oversight and grievance handling within the institution.", imageUrl: "https://placehold.co/600x400?text=Internal+Compliance" },
      { slug: "posh", title: "POSH", excerpt: "Prevention of Sexual Harassment framework and redressal.", imageUrl: "https://placehold.co/600x400?text=POSH" },
      { slug: "sc-st-cell", title: "SC/ST cell", excerpt: "Support services and facilitation for SC/ST students.", imageUrl: "https://placehold.co/600x400?text=SC%2FST+Cell" },
      { slug: "grievance-redressal", title: "Grievance Redressal Cell", excerpt: "Mechanisms to address and resolve student grievances.", imageUrl: "https://placehold.co/600x400?text=Grievance+Redressal" },
      { slug: "equal-opportunity-cell", title: "Equal Opportunity Cell", excerpt: "Ensuring equal opportunities for all students.", imageUrl: "https://placehold.co/600x400?text=Equal+Opportunity+Cell" },
    ],
  },
  {
    id: "others",
    title: "Others",
    items: [
      { slug: "cultural-committee", title: "Cultural Committee", excerpt: "Coordination and promotion of cultural activities.", imageUrl: "https://placehold.co/600x400?text=Cultural+Committee" },
      { slug: "womens-cell", title: "Women’s Cell", excerpt: "Empowerment, awareness, and welfare initiatives for women.", imageUrl: "https://placehold.co/600x400?text=Women%E2%80%99s+Cell" },
      { slug: "eco-club", title: "Eco Club", excerpt: "Sustainability awareness and eco-friendly campus initiatives.", imageUrl: "https://placehold.co/600x400?text=Eco+Club" },
    ],
  },
]

export function getCellCategory(id: "statutory" | "others") {
  return cellsData.find((c) => c.id === id)
}

export function getCellItem(categoryId: "statutory" | "others", slug: string) {
  const cat = getCellCategory(categoryId)
  return cat?.items.find((i) => i.slug === slug)
}

