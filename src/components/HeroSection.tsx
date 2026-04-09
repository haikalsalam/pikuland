"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* === TOP WRAPPER: Membungkus background dan wave sehingga foto background terpotong tepat pada Wave bounding box === */}
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden md:min-h-0">
        {/* ===== Hero Background ===== */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#E1F5FE]">
          <Image
            src={isMobile ? "/assets/header-mobile.png" : "/assets/header.png"}
            alt="Pikuland playground background"
            fill
            sizes="100vw"
            className="object-cover object-top brightness-60"
            priority
            quality={100}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* ===== Hero Content ===== */}
        {/* Konten teks pahlawan dipisahkan dari video agar wave dapat diselipkan di tengah */}
        <div className="relative z-20 flex flex-1 flex-col items-center px-4 pt-44 text-center sm:pt-32 md:flex-none md:pt-40 lg:pt-48">
          {/* H1 — Playful Typography */}
          <h1 className="mx-auto max-w-3xl text-center text-5xl leading-tight font-black text-white drop-shadow-md sm:text-6xl md:leading-[1.1] lg:text-5xl xl:text-6xl">
            Dunia Imajinasi <br className="hidden" />
            <span className="text-[#FFCB05]">Si Kecil</span> Dimulai di Sini!
          </h1>

          {/* CTA Button */}
          <div className="relative z-30 mt-5 md:mt-6">
            <Link
              href="/tiket"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border-[1px] border-white bg-[#E5007E] px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#E5007E]/90"
            >
              Beli Tiket Sekarang
              <Image
                src="/assets/icon.png"
                alt="Sparkle Icon"
                width={20}
                height={20}
                className="h-4 w-4 object-contain md:h-5 md:w-5"
              />
            </Link>
          </div>
        </div>

        {/* ===== Wave Container Image ===== */}
        <div className="pointer-events-none relative z-10 mt-auto flex w-full flex-col justify-end md:mt-8">
          <Image
            src="/assets/wave.png"
            alt="Wave Border"
            width={1440}
            height={150}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>{" "}
      {/* <-- END OF TOP WRAPPER */}
      {/* ===== Video / Gameplay Preview Container ===== */}
      {/* Kontainer ditarik naik (negative margin) menimpa gambar wave, sekaligus mengembalikan ornamen di sisi videonya */}
      <div className="relative z-20 mx-auto -mt-10 mb-20 w-full max-w-[650px] px-4 sm:-mt-16 md:-mt-20 lg:-mt-24 lg:mb-32">
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Decorative Vectors Hero */}
          {/* vector-1: kiri tengah — mobile: disembunyikan karena terlalu jauh */}
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={50}
            height={40}
            className="absolute -right-[4%] -bottom-[15%] sm:top-[40%] sm:-left-65 sm:block"
          />
          {/* vector-15: kiri bawah — mobile: kecil di pojok kiri bawah */}
          <Image
            src="/assets/vector-15.png"
            alt=""
            width={300}
            height={300}
            className="absolute -bottom-[-5%] -left-1 h-12 w-12 sm:-left-8 sm:h-[100px] sm:w-[100px]"
          />
          {/* vector-11: kanan bawah — mobile: kecil di pojok kanan bawah */}
          <Image
            src="/assets/vector-11.png"
            alt=""
            width={80}
            height={80}
            className="absolute top-[60%] -right-4 h-10 w-10 sm:-right-15 sm:h-[80px] sm:w-[80px]"
          />
          {/* vector-10: kanan tengah — mobile: disembunyikan karena terlalu jauh */}
          <Image
            src="/assets/vector-10.png"
            alt=""
            width={90}
            height={40}
            className="absolute hidden sm:top-[40%] sm:-right-12 sm:block"
          />
        </div>

        <div className="relative z-10 aspect-video overflow-hidden rounded-[1.5rem] border-[12px] border-white bg-white shadow-xl md:rounded-[2rem] md:border-[16px]">
          {/* Gameplay Preview Image */}
          <Image
            src="/assets/header-video.png"
            alt="Pikuland gameplay preview — lihat betapa serunya bermain di Pikuland"
            fill
            className="object-cover"
            priority
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20 hover:bg-black/20">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform hover:scale-110 md:h-20 md:w-20">
              <svg
                className="ml-1 h-6 w-6 text-[#E5007E] opacity-80 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Caption under video */}
        <div className="mt-4 flex items-center justify-center gap-2 md:mt-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00A1E4]"></span>
          <p className="text-[10px] font-bold tracking-wide text-[#6B7280] uppercase md:text-xs">
            See how kids explore and learn inside Pikuland
          </p>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00A1E4]"></span>
        </div>
      </div>
    </section>
  );
}
