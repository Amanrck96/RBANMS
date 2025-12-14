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
      { slug: "anti-ragging", title: "Anti-Ragging Committee", excerpt: "Ensuring a ragging-free campus with zero tolerance.", imageUrl: "https://placehold.co/600x400?text=Anti+Ragging" },
      { slug: "internal-compliance", title: "Internal Compliance Committee", excerpt: "Compliance oversight and grievance handling within the institution.", imageUrl: "https://placehold.co/600x400?text=Internal+Compliance" },
      { slug: "posh", title: "PoSH (Prevention of Sexual Harassment)", excerpt: "Ensuring a safe, secure, and dignified environment for all.", imageUrl: "https://placehold.co/600x400?text=PoSH" },
      { slug: "sc-st-cell", title: "SC/ST Cell", excerpt: "Support services and facilitation for SC/ST students.", imageUrl: "https://placehold.co/600x400?text=SC%2FST+Cell" },
      { slug: "grievance-redressal", title: "Grievance Redressal Cell", excerpt: "Mechanisms to address and resolve student grievances.", imageUrl: "https://placehold.co/600x400?text=Grievance+Redressal" },
      { slug: "equal-opportunity-cell", title: "Equal Opportunity Cell", excerpt: "Ensuring equal opportunities for all students.", imageUrl: "https://placehold.co/600x400?text=Equal+Opportunity+Cell" },
    ],
  },
  {
    id: "others",
    title: "Others",
    items: [
      { slug: "examination-committee", title: "Examination Committee", excerpt: "Ensuring transparency, fairness, and efficiency in assessments.", imageUrl: "https://placehold.co/600x400?text=Examination+Committee" },
      { slug: "discipline-committee", title: "Discipline Committee", excerpt: "Maintenance of order, decorum, and professional conduct.", imageUrl: "https://placehold.co/600x400?text=Discipline+Committee" },
      { slug: "aicte-committee", title: "AICTE Committee", excerpt: "Overseeing compliance with national regulatory requirements.", imageUrl: "https://placehold.co/600x400?text=AICTE+Committee" },
      { slug: "ipc", title: "Internal Placement Cell (IPC)", excerpt: "Bridging the gap between academic learning and industry requirements.", imageUrl: "https://placehold.co/600x400?text=IPC" },
      { slug: "manasa-counselling-cell", title: "Manasa – Counselling Cell", excerpt: "Prioritizing mental well-being and emotional support.", imageUrl: "https://placehold.co/600x400?text=Manasa" },
      { slug: "cultural-committee", title: "Cultural Committee", excerpt: "Celebrating creativity, talent, and diversity on campus.", imageUrl: "https://placehold.co/600x400?text=Cultural+Committee" },
      { slug: "womens-cell", title: "Women Cell", excerpt: "Empowering female students and staff in a supportive environment.", imageUrl: "https://placehold.co/600x400?text=Women+Cell" },
      { slug: "eco-club", title: "Eco Club", excerpt: "Creating a greener, more sustainable campus and community.", imageUrl: "https://placehold.co/600x400?text=Eco+Club" },
      { slug: "yrcs", title: "Youth Red Cross Society (YRCS)", excerpt: "Service to the sick and promotion of international friendship.", imageUrl: "https://placehold.co/600x400?text=YRCS" },
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

