"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Calendar as CalendarIcon,
  Users,
} from "lucide-react";

const tickets = [
  {
    id: "harian",
    title: "Tiket Harian",
    price: "150.000",
    unit: "/ anak",
    features: [
      "Akses seharian penuh",
      "Termasuk 1 pendamping",
      "Akses semua wahana",
      "Free Wifi untuk orang tua",
    ],
    color: "text-[#00AEEF]",
    icon: "📅",
  },
  {
    id: "annual",
    title: "Annual Pass",
    price: "1.500.000",
    unit: "/ tahun",
    features: [
      "Bebas masuk setahun",
      "Diskon ultah 20%",
      "Antrian prioritas",
      "Merchandise eksklusif",
      "Undangan event member",
    ],
    color: "text-[#E5007E]",
    popular: true,
    icon: "👑",
  },
  {
    id: "ultah",
    title: "Paket Ulang Tahun",
    price: "250.000",
    unit: "/ anak (min 10)",
    features: [
      "Ruang pesta privat (2 jam)",
      "Dekorasi tematik",
      "MC & Games seru",
      "Makan siang & Snack",
      "Goodie bag spesial",
    ],
    color: "text-[#FFC107]",
    icon: "⭐",
  },
];

const faqs = [
  {
    q: "Apakah boleh bawa makanan dari luar?",
    a: "Demi kebersihan dan keamanan, makanan dan minuman dari luar tidak diperkenankan. Kami menyediakan food court dengan menu ramah anak.",
  },
  {
    q: "Apakah tiket bisa di-refund?",
    a: "Tiket yang sudah dibeli tidak dapat di-refund, namun dapat dilakukan reschedule maksimal H-1 kunjungan.",
  },
  {
    q: "Apakah pendamping wajib bayar?",
    a: "Satu tiket anak sudah termasuk satu orang pendamping dewasa secara gratis.",
  },
];

export default function TiketPage() {
  const [step, setStep] = useState(1);
  const [counts, setCounts] = useState({ anak: 1, dewasa: 1 });

  const updateCount = (type: "anak" | "dewasa", val: number) => {
    setCounts((prev) => ({ ...prev, [type]: Math.max(0, prev[type] + val) }));
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#FFFBE6] pt-28 pb-16">
        {/* Background (diabaikan sesuai permintaan, tapi dipertahankan strukturnya) */}
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
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[7%] right-[8%] w-10 scale-x-[-1] rotate-180 sm:top-[15%] sm:right-[13%] sm:w-auto"
          />
          <Image
            src="/assets/vector-10.png"
            alt=""
            width={150}
            height={150}
            className="absolute top-[10%] right-[5%] w-15 sm:top-[19%] sm:right-[8%] sm:w-auto"
          />
          <Image
            src="/assets/vector-1.png"
            alt=""
            width={100}
            height={50}
            className="absolute top-[15%] left-[-2%] w-10 sm:top-[45%] sm:left-[2%] sm:w-auto"
          />
          <Image
            src="/assets/vector-17.png"
            alt=""
            width={250}
            height={1125}
            className="absolute right-[5%] bottom-[-3%]"
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Header Section */}
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-black text-[#1A2E44] md:text-5xl">
              {step === 1 ? "Pilih Tiket Petualanganmu!" : "Kapan Mau Main?"}
            </h1>
            <p className="mx-auto max-w-xl font-medium text-slate-500">
              {step === 1
                ? "Main sepuasnya, belajar sebanyaknya. Pilih paket yang paling pas untuk keluarga."
                : "Pilih tanggal kunjungan dan jumlah petualang kecil yang akan bermain."}
            </p>
          </div>

          {/* Stepper Indicator */}
          <div className="mb-16 flex justify-center">
            <div className="flex items-center gap-4 rounded-full border border-yellow-100 bg-white/80 px-8 py-3 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? "bg-[#E5007E] text-white" : "bg-slate-200 text-slate-500"}`}
                >
                  {step > 1 ? <Check size={14} /> : "1"}
                </span>
                <span
                  className={`hidden text-sm font-bold sm:inline ${step >= 1 ? "text-[#E5007E]" : "text-slate-400"}`}
                >
                  Pilih Tiket
                </span>
              </div>
              <div
                className={`h-[2px] w-12 ${step >= 2 ? "bg-[#E5007E]" : "bg-slate-200"}`}
              ></div>
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? "bg-[#E5007E] text-white" : "bg-slate-200 text-slate-500"}`}
                >
                  {step > 2 ? <Check size={14} /> : "2"}
                </span>
                <span
                  className={`hidden text-sm font-bold sm:inline ${step >= 2 ? "text-[#E5007E]" : "text-slate-400"}`}
                >
                  Tanggal
                </span>
              </div>
              <div
                className={`h-[2px] w-12 ${step >= 3 ? "bg-[#E5007E]" : "bg-slate-200"}`}
              ></div>
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step === 3 ? "bg-[#E5007E] text-white" : "bg-slate-200 text-slate-500"}`}
                >
                  3
                </span>
                <span
                  className={`hidden text-sm font-bold sm:inline ${step === 3 ? "text-[#E5007E]" : "text-slate-400"}`}
                >
                  Bayar
                </span>
              </div>
            </div>
          </div>

          {/* STEP 1: PILIH TIKET */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                {tickets.map((t) => (
                  <div
                    key={t.id}
                    className={`relative flex flex-col rounded-[2.5rem] border border-slate-50 bg-white p-8 shadow-xl ${t.popular ? "ring-4 ring-[#E5007E]/10" : ""}`}
                  >
                    {t.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#E5007E] px-5 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-lg">
                        Paling Hemat!
                      </div>
                    )}
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner ${t.id === "harian" ? "bg-cyan-50" : t.id === "annual" ? "bg-pink-50" : "bg-yellow-50"}`}
                    >
                      {t.icon}
                    </div>
                    <h3 className="mb-1 text-xl font-black text-[#1A2E44]">
                      {t.title}
                    </h3>
                    <div className="mb-8">
                      <span className={`text-2xl font-black ${t.color}`}>
                        Rp {t.price}
                      </span>
                      <span className="text-sm font-medium text-slate-400">
                        {" "}
                        {t.unit}
                      </span>
                    </div>
                    <ul className="mb-10 flex-grow space-y-4">
                      {t.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-tight font-medium text-slate-600"
                        >
                          <Check
                            size={16}
                            className={`${t.color} mt-0.5 shrink-0`}
                          />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setStep(2)}
                      className={`w-full rounded-full py-3.5 font-bold transition-all ${t.popular ? "bg-[#E5007E] text-white shadow-lg hover:brightness-110" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                    >
                      Pilih Tiket
                    </button>
                  </div>
                ))}
              </div>

              {/* FAQ SECTION */}
              <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-yellow-100 bg-white/60 p-8 shadow-sm backdrop-blur md:p-12">
                <h2 className="mb-8 text-center text-2xl font-black text-[#1A2E44]">
                  Pertanyaan Sering Diajukan
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group border-b border-slate-100 pb-4 last:border-0"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[#1A2E44]">
                        {faq.q}
                        <ChevronRight
                          size={18}
                          className="text-slate-400 transition-transform group-open:rotate-90"
                        />
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PILIH TANGGAL */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl duration-500">
              <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  {/* Left Side: Calendar */}
                  <div>
                    <div className="mb-6 flex items-center gap-2">
                      <CalendarIcon className="text-cyan-500" size={20} />
                      <h3 className="text-xl font-black text-[#1A2E44]">
                        Pilih Tanggal
                      </h3>
                    </div>
                    <div className="rounded-3xl border border-slate-100 p-6">
                      <div className="mb-6 flex items-center justify-between px-2">
                        <span className="font-black text-[#1A2E44]">
                          Oktober 2023
                        </span>
                        <div className="flex gap-2">
                          <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50">
                            <ChevronLeft size={20} />
                          </button>
                          <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="mb-4 grid grid-cols-7 gap-1 text-center text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
                        {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map(
                          (d) => (
                            <div key={d}>{d}</div>
                          ),
                        )}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(
                          (day) => (
                            <button
                              key={day}
                              className={`flex aspect-square items-center justify-center rounded-full text-sm font-bold transition-colors ${day === 24 ? "bg-[#E5007E] text-white shadow-lg" : "text-[#1A2E44] hover:bg-pink-50"}`}
                            >
                              {day}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-3 rounded-2xl border border-yellow-100 bg-yellow-50 p-4">
                      <span className="text-lg">⚠️</span>
                      <p className="text-[11px] leading-relaxed font-medium text-yellow-700">
                        Tiket berlaku hanya untuk tanggal yang dipilih.
                        Reschedule maksimal H-1.
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Counters */}
                  <div className="flex flex-col">
                    <div className="mb-6 flex items-center gap-2">
                      <Users className="text-yellow-500" size={20} />
                      <h3 className="text-xl font-black text-[#1A2E44]">
                        Jumlah Pengunjung
                      </h3>
                    </div>
                    <div className="flex-grow space-y-4">
                      {[
                        {
                          label: "Anak-anak",
                          sub: "Usia 1 - 12 Tahun",
                          key: "anak",
                        },
                        {
                          label: "Dewasa",
                          sub: "Usia 17+ Tahun",
                          key: "dewasa",
                        },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between rounded-[2rem] border border-slate-100 bg-slate-50 p-6"
                        >
                          <div>
                            <p className="font-black text-[#1A2E44]">
                              {item.label}
                            </p>
                            <p className="text-xs font-medium text-slate-400">
                              {item.sub}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 rounded-full border border-slate-100 bg-white px-2 py-2 shadow-sm">
                            <button
                              onClick={() =>
                                updateCount(item.key as "anak" | "dewasa", -1)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-pink-500"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-6 text-center text-lg font-black">
                              {counts[item.key as "anak" | "dewasa"]}
                            </span>
                            <button
                              onClick={() =>
                                updateCount(item.key as "anak" | "dewasa", 1)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-pink-500"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-slate-100 py-4 font-black text-slate-400 hover:bg-slate-50"
                      >
                        <ChevronLeft size={20} /> Kembali
                      </button>
                      <button className="flex-[2] rounded-full bg-[#E5007E] py-4 font-black text-white shadow-xl shadow-pink-200 transition-all hover:brightness-110">
                        Lanjut Pembayaran
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
