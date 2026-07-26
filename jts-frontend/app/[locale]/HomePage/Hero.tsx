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
      className="relative min-h-[680px] overflow-hidden pt-32 pb-20 z-10 bg-slate-950 md:min-h-[720px] md:pt-40 md:pb-32"
    >
      <Image
        src={slides[slideIndex]}
        alt="Bureau d'etudes structurelles JTS Structure"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-[72%_center] transition-opacity duration-700 md:object-center"
      />

      {/* CONTAINER */}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-10">

        {/* GRID */}
        <div className="grid min-h-[460px] items-center md:min-h-[500px] md:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div className="max-w-full translate-y-16 md:max-w-3xl md:translate-y-10">
            <h2 className="max-w-full text-[clamp(2rem,9vw,2.8rem)] font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              <span className="inline-block max-w-full break-words bg-slate-950/45 px-3 py-2 backdrop-blur-[2px]">
                 {t.hero.title}
                </span>
            </h2>

            <p className="mt-5 max-w-full text-base leading-relaxed text-slate-100 sm:text-lg md:max-w-2xl">
              <span className="inline-block max-w-full break-words rounded-sm bg-slate-950/45 px-4 py-3 backdrop-blur-[2px]">
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
