import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  jelajahi: [
    { label: "Beranda", href: "/" },
    { label: "Tiket & Harga", href: "/tiket" },
    { label: "Galeri Foto", href: "/galeri" },
  ],
  infoPenting: [
    { label: "Lokasi & Jam Buka", href: "/kontak" },
    { label: "Karir", href: "/karir" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#121926] px-6 pt-16 pb-8 text-white md:pt-24 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-0 border-b border-white/10 pb-10 sm:grid-cols-2 sm:gap-12 md:gap-8 md:pb-16 lg:grid-cols-4">
          {/* Brand column — full width on mobile */}
          <div className="col-span-2 border-b border-white/10 pb-8 sm:border-none sm:pb-0 lg:col-span-1">
            <Image
              src="/assets/logo-pikuland.png"
              alt="Pikuland Logo"
              width={100}
              height={60}
              className="h-10 w-auto md:h-12"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed font-medium text-gray-400">
              Taman bermain peran edukatif pertama di Indonesia untuk anak usia
              2–14 tahun.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {["instagram", "facebook", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-gray-400 transition-colors hover:bg-slate-700 hover:text-white"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Jelajahi */}
          <div className="border-b border-white/10 py-8 sm:border-none sm:py-0">
            <h3 className="mb-5 text-base font-extrabold">Jelajahi</h3>
            <ul className="space-y-4">
              {footerLinks.jelajahi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Penting */}
          <div className="border-b border-white/10 py-8 sm:border-none sm:py-0">
            <h3 className="mb-5 text-base font-extrabold">Info Penting</h3>
            <ul className="space-y-4">
              {footerLinks.infoPenting.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div className="col-span-1 pt-8 sm:pt-0">
            <h3 className="mb-5 text-base font-extrabold">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Jl. Ceria No. 123, Jakarta Selatan</li>
              <li>halo@pikuland.com</li>
              <li>(021) 555-0123</li>
            </ul>
            <a
              href="https://wa.me/62215550123"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-[#00A1E4] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#008AC4] sm:inline-flex sm:w-auto"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs font-medium text-gray-500">
          © 2026 Pikuland Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg
          className="h-4 w-4 md:h-5 md:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          className="h-4 w-4 md:h-5 md:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          className="h-4 w-4 md:h-5 md:w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}
