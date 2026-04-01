import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative py-10 md:py-16 px-4 bg-transparent overflow-hidden">

      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#E5007E] rounded-[2rem] md:rounded-[3rem] px-6 py-12 md:px-16 md:py-20 text-center overflow-hidden shadow-2xl">
          
          {/* Decorative Vectors CTA Banner */}
          <Image src="/assets/vector-9.png" alt="" width={100} height={100} className="absolute -top-[0] -right-[-6%] w-20 sm:-top-[0] sm:-right-[-6%] sm:h-auto sm:w-auto" />
          <Image src="/assets/vector-8.png" alt="" width={250} height={250} className="absolute -bottom-[0] -right-2 w-30 sm:-bottom-[0] sm:-right-2 sm:h-auto sm:w-auto" />
          <Image src="/assets/vector-6.png" alt="" width={280} height={280} className="absolute -top-[-5%] -left-13 w-40 sm:bottom-[-5%] sm:-left-8 sm:h-auto sm:w-auto" />

          <div className="relative z-10">
            <h2 className="text-[3.25rem] font-black text-white leading-tight">
              Siap Petualangan Hari Ini?
            </h2>
            <p className="mt-4 md:mt-6 text-white text-sm md:text-lg max-w-2xl mx-auto font-medium">
              Jangan sampai kehabisan tiket! Pesan online lebih hemat dan tanpa antri.
            </p>
            <Link
              href="/tiket"
              className="mt-8 md:mt-10 inline-flex items-center justify-center bg-white text-[#E5007E] font-extrabold text-sm md:text-lg px-8 md:px-12 py-3.5 md:py-4 rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-xl"
            >
              Pesan Tiket Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
