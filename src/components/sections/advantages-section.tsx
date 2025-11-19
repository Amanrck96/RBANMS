export function AdvantagesSection() {
  const leftPoints = [
    'Experienced faculty across disciplines',
    'Strong industry connect and internships',
    'Focus on holistic development',
    'Modern labs and library resources',
  ];
  const rightPoints = [
    'Vibrant cultural and sports activities',
    'Community outreach and NSS/NCC',
    'Research opportunities and guidance',
    'Career services and placements',
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline text-center">RBANMS Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ul className="space-y-2">
            {leftPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {rightPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

