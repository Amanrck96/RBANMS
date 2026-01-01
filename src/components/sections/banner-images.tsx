import Image from 'next/image';

export function BannerImages() {
  const images = [
    {
      src: 'https://images.shiksha.com/mediadata/images/1429163955phpbWVwvu.jpeg',
      alt: "RBANMS campus view",
    },
    {
      src: 'https://scontent.fccu9-2.fna.fbcdn.net/v/t1.6435-9/41508772_10215738208944684_2838609422832369664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2285d6&_nc_ohc=0qsWPuHkI70Q7kNvwFN7Ted&_nc_oc=AdmdaGIn7nwruAEyXpAHvSCGNXZ0pwh5KjxuLUjGBY89tzOWwBP-kYfBIoPtt3D8icqbRwJr-laHQaW2gfx0XlWU&_nc_zt=23&_nc_ht=scontent.fccu9-2.fna&_nc_gid=NmLH5fT1pSYvraaVv8gKgA&oh=00_AfjbIJqmTw-t3RZkChb-AxexS6h3Yf2D7H2KzbQfyAIeWg&oe=69426B5E',
      alt: "RBANMS building",
    },
    {
      src: 'https://images.shiksha.com/mediadata/images/1429182153phpSYuYdw.jpeg',
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

