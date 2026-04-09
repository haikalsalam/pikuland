import Image from "next/image";

const testimonials = [
  {
    name: "Bunda Sarah",
    role: "Ibu dari 2 anak",
    quote:
      "Tempat bermain paling bersih dan aman di Jakarta! Anak-anak saya betah banget seharian di sini.",
    rating: 5,
    avatarColor: "bg-[#E5007E]",
  },
  {
    name: "Pak Budi",
    role: "Ayah si kembar",
    quote:
      "Konsep edukasinya dapet banget. Gak cuma lari-larian, tapi anak belajar profesi dan sosialisasi.",
    rating: 5,
    avatarColor: "bg-[#009FE3]",
  },
  {
    name: "Ibu Dian",
    role: "Guru TK Bintang",
    quote:
      "Sangat rekomended untuk field trip sekolah. Fasilitas lengkap dan kakak pendampingnya ramah-ramah.",
    rating: 5,
    avatarColor: "bg-[#FFCB05]",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="text-yellow h-4 w-4 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-visible bg-transparent px-4 py-16 md:py-20">
      {/* Lines background is now handled by the parent wrapper in page.tsx */}

      {/* Decorative Vectors Testimonial */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
        <Image
          src="/assets/vector-2.png"
          alt=""
          width={70}
          height={70}
          className="absolute right-10 -bottom-1 w-10 sm:top-[-30%] sm:right-40 sm:h-auto"
        />
        <Image
          src="/assets/vector-12.png"
          alt=""
          width={200}
          height={200}
          className="absolute -bottom-10 w-35 sm:w-auto"
        />
        <Image
          src="/assets/vector-14.png"
          alt=""
          width={80}
          height={100}
          className="absolute top-[11%] right-[16%] sm:-bottom-[-32%] sm:-left-[-20%] sm:w-auto"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="mb-16 text-center text-3xl font-black text-[#263238] sm:text-4xl md:mb-20 md:text-5xl">
          Apa Kata Mereka?
        </h2>

        {/* Testimonial cards — stacked on mobile, 3-column on desktop */}
        <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative mt-4 rounded-[2rem] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl md:mt-2 md:p-8"
            >
              {/* Floating Avatar */}
              <div
                className={`absolute -top-6 left-6 h-12 w-12 ${t.avatarColor} flex items-center justify-center rounded-full text-white shadow-md`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* Stars */}
              <div className="mt-4">
                <StarRating count={t.rating} />
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed font-medium text-gray-500 italic md:text-base">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-8 md:mt-10">
                <p className="text-base font-extrabold text-[#263238]">
                  {t.name}
                </p>
                <p className="mt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase md:text-xs">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
