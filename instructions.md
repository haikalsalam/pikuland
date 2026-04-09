# Implementation Plan - Pikuland Menu Development

## 1. General Rules & Architecture

- **Framework:** Next.js 15 (App Router).
- **Styling:** Tailwind CSS.
- **Base Layout:** Use existing `@/components/Navbar` and `@/components/Footer`.
- **Global Constraints:** - NO Breadcrumbs (as per latest mockup).
  - Use `next/image` for all assets.
  - Consistent horizontal padding with `src/app/page.tsx`.
  - Maintain the existing color palette (Primary Yellow/Green from Tailwind config).

## 2. Page Specifics

### A. Gallery Page (`src/app/galeri/page.tsx`)

- **Visual Reference:** `Desktop - Galeri.jpg`
- **Components:**
  - Header: H1 "Galeri" (Bold, Left Aligned).
  - Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-6`.
  - Interaction:
    - Smooth scale transition on hover.
    - Dark overlay (`bg-black/50`) with centered white text "Lihat Detail" on hover.
- **Data:** Map through an array of objects `{ src: string, alt: string }`.

### B. Career Page (`src/app/karir/page.tsx`)

- **Visual Reference:** `Desktop - Karir.jpg`
- **Components:**
  - Hero Section: Simple title and subtitle.
  - Job List: Use Card components with:
    - Job Title (Bold).
    - Metadata (Location & Type) with Lucide Icons.
    - "Lamar Sekarang" Button (Match style with HeroSection's CTA).

### C. Ticket Page (`src/app/tiket/page.tsx`)

- **Visual Reference:** `Desktop - Tiket 1.jpg`
- **Components:**
  - Header: Title "Tiket & Promo".
  - Pricing Grid: 3-column layout for different ticket types.
  - Features: Use bullet points or icons for what's included.
  - CTA: High-contrast "Beli Tiket" buttons.

### D. Contact Page (`src/app/kontak/page.tsx`)

- **Visual Reference:** `Desktop - Kontak.jpg`
- **Components:**
  - Header: Title "Hubungi Kami".
  - Two-Column Layout:
    - Left: Form (Name, Email, Subject, Message) with light gray borders.
    - Right: Contact details (Address, WA, Email) with icons.

## 3. Implementation Steps for AI

1. Read existing `src/app/layout.tsx` to check Navbar/Footer integration.
2. If Navbar/Footer are not global, import them into each page.
3. Refer to the specific `.jpg` or `.png` reference for spacing and font sizes.
4. Ensure all image paths point correctly to `/assets/` directory.
