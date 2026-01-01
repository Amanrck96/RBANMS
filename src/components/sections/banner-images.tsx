import Image from 'next/image';

export function BannerImages() {
  const images = [
    {
      src: 'https://www.rbanmsfgc.edu.in/images/campus1.jpg',
      alt: "RBANMS campus view",
    },
    {
      src: 'https://www.rbanmsfgc.edu.in/images/campus2.jpg',
      alt: "RBANMS building",
    },
    {
      src: 'https://www.rbanmsfgc.edu.in/images/campus3.jpg',
      alt: "RBANMS grounds",
    },
  ];

  return (
    <section className="w-full bg-muted">
      <div className="relative w-full h-[280px] md:h-[420px]">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
          {images.map((img, idx) => (
            <div key={idx} className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

