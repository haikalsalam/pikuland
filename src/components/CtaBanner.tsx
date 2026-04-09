import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#E5007E] px-6 py-12 text-center shadow-2xl md:rounded-[3rem] md:px-16 md:py-20">
          {/* Decorative Vectors CTA Banner */}
          <Image
            src="/assets/vector-9.png"
            alt=""
            width={100}
            height={100}
            className="absolute -top-[0] -right-[-6%] w-20 sm:-top-[0] sm:-right-[-6%] sm:h-auto sm:w-auto"
          />
          <Image
            src="/assets/vector-8.png"
            alt=""
            width={250}
            height={250}
            className="absolute -right-2 -bottom-[0] w-30 sm:-right-2 sm:-bottom-[0] sm:h-auto sm:w-auto"
          />
          <Image
            src="/assets/vector-6.png"
            alt=""
            width={280}
            height={280}
            className="absolute -top-[-5%] -left-13 w-40 sm:bottom-[-5%] sm:-left-8 sm:h-auto sm:w-auto"
          />

          <div className="relative z-10">
            <h2 className="text-[3.25rem] leading-tight font-black text-white">
              Siap Petualangan Hari Ini?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-white md:mt-6 md:text-lg">
              Jangan sampai kehabisan tiket! Pesan online lebih hemat dan tanpa
              antri.
            </p>
            <Link
              href="/tiket"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#E5007E] shadow-xl transition-all hover:scale-105 hover:bg-gray-100 md:mt-10 md:px-12 md:py-4 md:text-lg"
            >
              Pesan Tiket Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
