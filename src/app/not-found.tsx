import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="bg-cream flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      {/* Decorative element */}
      <Image
        src="/assets/vector-12.png"
        alt=""
        width={120}
        height={120}
        className="animate-float"
      />
      <h1 className="text-pink text-6xl font-black md:text-8xl">404</h1>
      <p className="text-blue-dark text-xl font-bold md:text-2xl">
        Oops! Halaman tidak ditemukan
      </p>
      <p className="max-w-md text-gray-500">
        Petualangan ini belum tersedia. Yuk kembali ke halaman utama dan
        jelajahi Pikuland!
      </p>
      <Link
        href="/"
        className="bg-pink mt-4 inline-block rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
