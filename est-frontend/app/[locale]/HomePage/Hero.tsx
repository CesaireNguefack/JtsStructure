"use client"

import { useEffect, useState } from "react"
import ContactSection from "@/app/[locale]/HomePage/Contact"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/lib/TranslationProvider"

const slides = [
  "/images/headers/home/cover_header_clean.png",
  "/images/headers/services/cover_header_clean.png",
  "/images/headers/secteurs/cover_header_clean.png",
  "/images/headers/realisations/cover_header_clean.png",
  "/images/headers/about/cover_header_clean.png",
]

export default function Hero() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split("/")[1] || "fr"
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-[720px] overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32 z-10 bg-slate-950"
    >
      <Image
        src={slides[slideIndex]}
        alt="Bureau d'etudes structurelles ETS Structure"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-[72%_center] transition-opacity duration-700 md:object-center"
      />

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">

        {/* GRID */}
        <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center min-h-[500px]">

          {/* LEFT */}
          <div className="max-w-3xl">
            
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              ETS Structure
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              {t.hero.title}
            </h2>

            <p className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <Link
              href={`/${locale}/evaluation`}
              className="mt-8 inline-flex rounded bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-sky-100"
            >
              {t.contact.contactbtn}
            </Link>
          </div>

          {/* RIGHT */}
          <div />

        </div>
      </div>
    </section>
  );
}
