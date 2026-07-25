"use client"

import { useEffect, useState } from "react"
import ContactSection from "@/app/[locale]/HomePage/Contact"
import Image from "next/image"
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
              <span className="inline-block   bg-slate-950/45 px-3 py-2 backdrop-blur-[2px]">
                ETS Structure
              </span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              <span className="inline-block   bg-slate-950/45 px-3 py-2 backdrop-blur-[2px]">
                 {t.hero.title}
                </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100">
              <span className="inline-block rounded-sm bg-slate-950/45 px-4 py-3 backdrop-blur-[2px]">
                {t.hero.subtitle}
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <div />

        </div>
      </div>
    </section>
  );
}
