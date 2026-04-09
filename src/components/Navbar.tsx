"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react"; // Pastikan lucide-react terinstall

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/tiket", label: "Tiket" },
  { href: "/karir", label: "Karir" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Header Bar */}
        <div className="mt-3 flex items-center justify-between rounded-full border border-white/20 bg-white/50 px-6 py-3 shadow-sm backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/logo-pikuland.png"
              alt="Pikuland Logo"
              width={60}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all hover:text-[#E5007E] ${
                  pathname === link.href ? "text-[#E5007E]" : "text-[#1A2E44]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/tiket"
            className="hidden items-center gap-2 rounded-full bg-[#00AEEF] px-6 py-2.5 text-sm font-bold text-white shadow-[3px_4px_0px_#007DB3] transition-all hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none md:inline-flex"
          >
            Beli Tiket
          </Link>

          {/* Mobile menu button (Hamburger) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[#1A2E44] md:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* FULL SCREEN MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="animate-in fade-in fixed inset-0 z-[60] overflow-hidden bg-[#B9E9FF] duration-300 md:hidden">
            {/* Animasi Background Glow - Muncul perlahan */}
            <div className="animate-in zoom-in absolute right-[-10%] bottom-[-10%] h-[300px] w-[300px] rounded-full bg-[#C1A7E2] opacity-60 blur-[80px] duration-1000" />

            <div className="relative flex h-full flex-col px-4">
              {/* 1. Header Pill - Slide down dari atas */}
              <div className="animate-in slide-in-from-top-10 mt-3 flex items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-sm backdrop-blur-sm duration-500">
                <Image
                  src="/assets/logo-pikuland.png"
                  alt="Pikuland Logo"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-slate-100/50 p-2 text-slate-600 transition-transform duration-300 hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 2. Menu Links - Animasi Staggered (Muncul bergantian) */}
              <div className="-mt-20 flex flex-grow flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }} // Jeda antar menu
                    className={`animate-in fade-in slide-in-from-bottom-10 fill-mode-forwards text-4xl font-black transition-all hover:scale-110 active:scale-95 ${
                      pathname === link.href
                        ? "text-[#E5007E]"
                        : "text-[#1A2E44]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* 3. Button - Muncul paling terakhir */}
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${navLinks.length * 100}ms` }}
                  className="animate-in fade-in zoom-in fill-mode-forwards mt-4 rounded-full bg-[#00AEEF] px-12 py-4 text-xl font-black text-white shadow-[4px_6px_0px_#007DB3] transition-all duration-500 hover:translate-y-1 hover:shadow-none"
                >
                  Beli Tiket
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
