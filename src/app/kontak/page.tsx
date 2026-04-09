"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Send, MessageCircle, Phone, Mail } from "lucide-react";

export default function KontakPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#FFFDF0] pt-32 pb-24">
        {/* BACKGROUND VECTORS - Biarkan Sesuai Permintaan */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
          <Image
            src="/assets/lines-1.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[7%] right-[8%] w-10 scale-x-[-1] rotate-180 sm:hidden"
          />
          <Image
            src="/assets/vector-10.png"
            alt=""
            width={150}
            height={150}
            className="absolute top-[10%] right-[5%] w-15 sm:hidden"
          />
          <Image
            src="/assets/vector-15.png"
            alt=""
            width={180}
            height={180}
            className="absolute top-[62%] right-[1%] w-40 sm:top-[18%] sm:right-[9%] sm:w-auto"
          />
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[15%] left-[-2%] w-10 sm:top-[75%] sm:left-[4%] sm:w-auto"
          />
        </div>

        <section className="relative z-10 mx-auto max-w-6xl px-6">
          {/* HEADER */}
          <header className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-3xl leading-tight font-black text-[#1A2E44] md:text-5xl">
              Halo, Ada <br className="md:hidden" /> yang Bisa{" "}
              <br className="md:hidden" /> Dibantu?
            </h1>
            <p className="mx-auto max-w-2xl leading-relaxed font-medium text-slate-500">
              Jangan ragu untuk bertanya, tim kami yang ramah siap membantu Ayah
              & Bunda!
            </p>
          </header>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-2">
            {/* KOLOM KIRI (LOKASI + KONTAK KHUSUS MOBILE) */}
            <div className="flex flex-col gap-6">
              {/* KARTU LOKASI - Warna BG Kuning di Mobile, Putih di Desktop */}
              <div className="rounded-[2.5rem] border border-yellow-100/50 bg-white p-6 shadow-xl shadow-blue-900/5 md:rounded-[3rem] md:border-slate-50 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFC107] text-white">
                    <MapPin size={22} fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-black text-[#1A2E44]">
                    Lokasi Pikuland
                  </h3>
                </div>

                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-100">
                  <Image
                    src="/assets/map.png"
                    alt="Peta Lokasi"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1 text-sm font-medium text-slate-500 md:text-base">
                  <p className="font-black text-[#1A2E44]">
                    Mall Grand Pikuland, Lantai 3
                  </p>
                  <p>Jl. Boulevard Raya No. 1, Kelapa Gading</p>
                  <p>Jakarta Utara, 14240</p>
                </div>
              </div>

              {/* KONTAK ITEMS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:hidden">
                {/* WhatsApp */}
                <div className="flex flex-col items-center gap-3 rounded-[2rem] border border-slate-50 bg-white p-5 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-black text-[#1A2E44]">
                      WhatsApp
                    </p>
                    <p className="text-sm text-slate-500">0812-3456-7890</p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex flex-col items-center gap-3 rounded-[2rem] border border-slate-50 bg-white p-5 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#039BE5]/10 text-[#039BE5]">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-black text-[#1A2E44]">
                      Telepon
                    </p>
                    <p className="text-sm text-slate-500">(021) 555-0123</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center gap-3 rounded-[2rem] border border-slate-50 bg-white p-5 text-center shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5007E]/10 text-[#E5007E]">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-black text-[#1A2E44]">
                      Email
                    </p>
                    <p className="text-sm text-slate-500">halo@pikuland.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN (FORMULIR) */}
            <div className="mt-4 rounded-[3.5rem] bg-[#F0F9FF] p-1.5 shadow-xl shadow-blue-100/50 lg:mt-0">
              <div className="rounded-[3rem] bg-white p-8 shadow-sm md:p-10">
                <h3 className="mb-8 text-2xl font-black text-[#1A2E44]">
                  Kirim Pesan
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block px-1 text-sm font-black text-[#1A2E44]">
                      Nama Ayah/Bunda
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-slate-600 transition-all focus:border-[#E5007E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block px-1 text-sm font-black text-[#1A2E44]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@contoh.com"
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-slate-600 transition-all focus:border-[#E5007E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block px-1 text-sm font-black text-[#1A2E44]">
                      Pesan
                    </label>
                    <textarea
                      placeholder="Tulis pertanyaan atau saran di sini..."
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-slate-600 focus:border-[#E5007E] focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#E5007E] py-4 text-lg font-black text-white shadow-lg shadow-pink-200 transition-all hover:brightness-110"
                  >
                    <Send size={20} className="rotate-[-10deg]" /> Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
