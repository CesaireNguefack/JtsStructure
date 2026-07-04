"use client"

import { useEffect, useState } from "react"
import ContactSection from "@/app/[locale]/HomePage/Contact"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/componenten/Navbar"
import { useTranslations } from "@/lib/TranslationProvider"

const slides = [
  "/images/ets-structure-hero.png",
  "/images/about20.png",
  "/images/about1.png",
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
      className="relative min-h-[720px] overflow-hidden pt-1 md:pt-10 pb-20 md:pb-32 z-10 bg-slate-950"
    >
      <Image
        src={slides[slideIndex]}
        alt="Bureau d'etudes structurelles ETS Structure"
        fill
        priority
        className="object-cover opacity-70 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20" />

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">

        {/* ✅ LOGO aligné avec le contenu */}
        <div className="mb-8">
          <Logo />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center min-h-[520px]">

          {/* LEFT */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              ETS Structure
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              {t.hero.title}
            </h1>

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
