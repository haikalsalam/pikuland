import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/galeri-1.png",
    alt: "Anak bermain di area petualangan Pikuland",
  },
  {
    src: "/assets/galeri-2.png",
    alt: "Kolam bola warna-warni Pikuland",
  },
  {
    src: "/assets/galeri-4.png",
    alt: "Wall climbing untuk anak di Pikuland",
  },
  { src: "/assets/galeri-3.png", alt: "Taman bermain Pikuland" },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-visible bg-[#E1F5FE] px-4 py-16 md:py-20">
      {/* Decorative Vectors Gallery */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
        <Image
          src="/assets/vector-7.png"
          alt=""
          width={50}
          height={100}
          className="absolute -top-[-50%] right-[10%] h-auto"
        />
        <Image
          src="/assets/vector-3.png"
          alt=""
          width={80}
          height={80}
          className="absolute right-[7%] -bottom-[-10%] h-auto"
        />
        <Image
          src="/assets/vector-4.png"
          alt=""
          width={150}
          height={100}
          className="absolute -top-[-22%] left-[8%] h-auto"
        />
        <Image
          src="/assets/vector-10.png"
          alt=""
          width={90}
          height={40}
          className="absolute -top-[155%] -left-[7%] sm:hidden"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <h2 className="text-blue-dark mb-8 text-center text-2xl font-black sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl">
          Lihat Keseruan Anak di Pikuland
        </h2>

        {/* Gallery grid — 3 columns bento-style (Tall left, 2 stacked middle, Tall right) */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {/* Left Column (Tall Image 1) */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-xl md:min-h-[500px]">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Middle Column (2 Stacked Images) */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-3xl shadow-xl md:min-h-[238px]">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-3xl shadow-xl md:min-h-[238px]">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (Tall Image 2) */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-xl md:min-h-[500px]">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
