"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/assets/galeri-1.png",
    category: "Fisik",
    pos: "left-tall",
  },
  {
    id: 2,
    src: "/assets/galeri-2.png",
    category: "Bermain",
    pos: "mid-top",
  },
  {
    id: 3,
    src: "/assets/galeri-3.png",
    category: "Edukasi",
    pos: "mid-bottom",
  },
  {
    id: 4,
    src: "/assets/galeri-4.png",
    category: "Fisik",
    pos: "right-tall",
  },
];

const categories = ["Semua", "Edukasi", "Fisik", "Kreativitas", "Event"];

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  // const filteredImages =
  //   activeTab === "Semua"
  //     ? images
  //     : images.filter((img) => img.category === activeTab);
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#FFFBE6] pt-32 pb-24">
        {/* BACKGROUND UTAMA - TIDAK DIHAPUS */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <Image
            src="/assets/lines-1.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        {/* VEKTOR DEKORASI DARI ASET ANDA */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
          <Image
            src="/assets/vector-16.png"
            alt=""
            width={180}
            height={180}
            className="absolute top-[5%] right-[3.5%] w-20 sm:top-[20%] sm:right-[3.5%] sm:w-auto"
          />
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[14%] left-[-1%] w-20 sm:top-[75%] sm:left-[4%] sm:w-auto"
          />
          <Image
            src="/assets/vector-11.png"
            alt=""
            width={100}
            height={50}
            className="absolute right-[20%] bottom-[-1%] scale-x-[-1] rotate-90 transform"
          />
          <Image
            src="/assets/vector-11.png"
            alt=""
            width={100}
            height={50}
            className="absolute bottom-[-1%] left-[20%] rotate-280"
          />
        </div>

        <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-6xl font-black text-[#1A2E44]">
              Galeri Keseruan
            </h1>
            <p className="mx-auto max-w-2xl text-base font-medium text-slate-500 md:text-lg">
              Intip momen-momen bahagia teman-teman kecil kita di Pikuland!
            </p>
          </header>

          {/* FILTER TABS */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-8 py-2.5 text-sm font-bold shadow-sm transition-all ${
                  activeTab === cat
                    ? "bg-[#E5007E] text-white shadow-lg shadow-pink-200"
                    : "border border-slate-100 bg-white text-slate-400 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:h-[700px] md:grid-cols-3">
            {/* Kolom Kiri: Foto Tinggi */}
            <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-xl md:h-full">
              <Image
                src={images[0].src}
                alt="Petualangan"
                fill
                className="object-cover"
              />
            </div>

            {/* Kolom Tengah: Dua Foto Kecil Vertikal */}
            <div className="grid h-[600px] grid-rows-2 gap-5 md:h-full">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={images[1].src}
                  alt="Kolam Bola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={images[2].src}
                  alt="Gameplay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Kolom Kanan: Foto Tinggi */}
            <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-xl md:h-full">
              <Image
                src={images[3].src}
                alt="Panjat Tebing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
