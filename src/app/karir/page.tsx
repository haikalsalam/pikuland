"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Smile, Heart, BookOpen, ChevronDown } from "lucide-react";

const benefits = [
  {
    title: "Fun Environment",
    description: "Kerja rasa main, bebas stres, dan penuh kreativitas.",
    icon: <Smile className="text-yellow-500" size={32} />,
    bg: "bg-yellow-50",
  },
  {
    title: "Health & Bonus",
    description: "BPJS, tunjangan kesehatan, dan bonus performa menarik.",
    icon: <Heart className="text-pink-500" size={32} />,
    bg: "bg-pink-50",
  },
  {
    title: "Training",
    description: "Pelatihan soft skill dan pengembangan karir berkala.",
    icon: <BookOpen className="text-cyan-500" size={32} />,
    bg: "bg-cyan-50",
  },
];

const jobs = [
  {
    id: "facilitator",
    title: "Play Fasilitator (Kakak Pendamping)",
    category: "Operasional",
    type: "Full Time / Part Time",
    description:
      "Bertanggung jawab mendampingi anak-anak bermain, memastikan keamanan, dan menciptakan suasana ceria di setiap wahana.",
    qualifications: [
      "Usia 18-25 tahun",
      "Suka anak-anak & energik",
      "Pendidikan minimal SMA/SMK",
      "Bersedia kerja shift & weekend",
    ],
    deadline: "23 Januari 2026",
    isOpen: true,
  },
  {
    id: "cs",
    title: "Customer Service Officer",
    category: "Front Office",
    type: "Full Time",
    isOpen: false,
  },
  {
    id: "event",
    title: "Creative Event Staff",
    category: "Marketing",
    type: "Full Time",
    isOpen: false,
  },
  {
    id: "cleaning",
    title: "Cleaning Crew",
    category: "Facility",
    type: "Full Time",
    isOpen: false,
  },
];

export default function KarirPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#FFFDF0] pt-28 pb-24">
        {/* Background & Vector (Diabaikan sesuai instruksi) */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
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
            className="absolute top-[5%] right-[3.5%] w-20 sm:w-auto"
          />
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[35%] left-[4%]"
          />
          <Image
            src="/assets/vector-11.png"
            alt=""
            width={100}
            height={50}
            className="absolute right-[13%] bottom-[35%]"
          />
          <Image
            src="/assets/vector-11.png"
            alt=""
            width={100}
            height={50}
            className="absolute bottom-[35%] left-[13%] rotate-180"
          />
        </div>

        <section className="relative z-10 mx-auto max-w-6xl px-4">
          {/* HEADER */}
          <header className="mb-16 flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-[#E0F7FF] px-6 py-2 text-xs font-black tracking-widest text-[#00AEEF] shadow-sm">
              JOIN OUR TEAM
            </div>
            <h1 className="mb-6 text-6xl font-black text-[#1A2E44]">
              Bekerja Sambil Bermain!
            </h1>
            <p className="max-w-2xl leading-relaxed font-medium text-slate-500">
              Pikuland bukan sekadar tempat kerja, tapi rumah kedua di mana kita
              menciptakan senyum anak-anak setiap hari. Lingkungan kerja
              suportif, seru, dan penuh tawa menantimu!
            </p>
          </header>

          {/* BENEFIT CARDS */}
          <div className="mx-auto mb-24 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-[2.5rem] border border-slate-50 bg-white p-8 text-center shadow-xl shadow-slate-200/50 transition-transform hover:-translate-y-2"
              >
                <div
                  className={`h-16 w-16 rounded-2xl ${benefit.bg} mb-6 flex items-center justify-center shadow-inner`}
                >
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-black text-[#1A2E44]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* POSISI TERSEDIA CONTAINER */}
          <div className="mx-auto max-w-4xl rounded-[3rem] border border-slate-50 bg-white p-6 shadow-2xl md:p-12">
            <h2 className="mb-10 text-center text-3xl font-black text-[#1A2E44]">
              Posisi Tersedia
            </h2>

            <div className="space-y-4">
              {jobs.map((job) => (
                <details
                  key={job.id}
                  open={job.isOpen}
                  className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white transition-all open:border-2 open:border-[#E5007E]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 outline-none md:p-8">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-black text-[#1A2E44] transition-colors group-open:text-[#E5007E] md:text-xl">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#26C1ED] px-4 py-1 text-[10px] font-black tracking-wider text-white uppercase">
                          {job.category}
                        </span>
                        <span className="rounded-full bg-slate-100 px-4 py-1 text-[10px] font-black tracking-wider text-slate-500 uppercase">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className="text-slate-300 transition-transform group-open:rotate-180"
                      size={24}
                    />
                  </summary>

                  {job.description && (
                    <div className="px-6 pt-2 pb-8 md:px-8">
                      <p className="mb-6 text-sm leading-relaxed font-medium text-slate-500">
                        {job.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-black text-[#1A2E44]">
                          Kualifikasi:
                        </h4>
                        <ul className="space-y-2">
                          {job.qualifications?.map((q, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm font-medium text-slate-500"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />{" "}
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col justify-between gap-4 border-t border-slate-50 pt-6 md:flex-row md:items-end">
                        <div>
                          <p className="text-sm font-black text-[#1A2E44]">
                            Kirim CV kamu ke :
                          </p>
                          <p className="text-sm font-bold text-[#00AEEF]">
                            careers@pikuland.com
                          </p>
                        </div>
                        <p className="text-[11px] font-medium text-red-500 italic">
                          *Lowongan Berakhir {job.deadline}
                        </p>
                      </div>
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
