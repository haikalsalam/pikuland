import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Kolam Bola",
    description: "Berenang di lautan ribuan bola warna-warni!",
    image: "/assets/preview-1.png",
    color: "#009FE3", // Biru
  },
  {
    title: "Area Profesi",
    description: "Jadilah dokter, koki, atau pemadam kebakaran.",
    image: "/assets/preview-3.png",
    color: "#E5007E", // Pink
  },
  {
    title: "Wall Climbing",
    description: "Tantang keberanianmu memanjat tebing aman.",
    image: "/assets/preview-2.png",
    color: "#FFCB05", // Kuning
  },
  {
    title: "Creative Studio",
    description: "Tuangkan imajinasi lewat seni dan kerajinan.",
    image: "/assets/preview-4.png",
    color: "#8E24AA", // Ungu
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-visible bg-transparent px-4 py-16 md:py-20">
      {/* Background lines is now controlled by the parent wrapper in page.tsx */}

      {/* Decorative vectors crossing into Gallery */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
        <Image
          src="/assets/vector-13.png"
          alt=""
          width={90}
          height={90}
          className="absolute -bottom-14 left-[5%] h-auto sm:right-[5%] sm:-bottom-14 sm:left-auto"
        />
        <Image
          src="/assets/vector-5.png"
          alt=""
          width={450}
          height={350}
          className="absolute bottom-[1%] left-[50%] h-auto sm:right-[5%] sm:bottom-[-5%] sm:left-auto"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 text-center md:mb-12">
          <span className="text-sm font-extrabold tracking-[0.2em] text-[#E5007E] uppercase">
            Wahana Seru
          </span>
          <h2 className="mt-2 text-5xl font-black text-[#263238]">
            Petualangan Tanpa Batas
          </h2>
        </div>

        {/* Uniform cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[2rem] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container — Top Half */}
              <div className="relative h-48 flex-shrink-0 bg-white sm:h-52">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-white"></div>
                )}
              </div>

              {/* Content Container — Bottom Half (Colored) */}
              <div
                className="relative flex flex-grow flex-col justify-start overflow-hidden p-6"
                style={{ backgroundColor: service.color }}
              >
                {/* Lighter top-border effect seen in design (e.g light blue on top of blue) */}
                <div className="absolute top-0 left-0 h-2 w-full bg-white/20"></div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium text-white/90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 flex justify-start md:mt-12 lg:ml-2">
          <Link
            href="/tiket"
            className="inline-flex items-center justify-center rounded-full bg-[#009FE3] px-8 py-3.5 text-sm font-extrabold text-white shadow-md transition-all hover:scale-105 hover:bg-[#009FE3]/90 md:text-base"
          >
            Lihat Semua Wahana
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
