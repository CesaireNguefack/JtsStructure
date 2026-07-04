"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "@/lib/TranslationProvider"

type Props = {
  navState: "transparent" | "gradient" | "white",
  showLogo: boolean
}

export default function Navbar({ navState, showLogo }: Props) {

  const pathname = usePathname()
  const t = useTranslations()
  const [open, setOpen] = useState(false)

  const locale = pathname.split("/")[1] || "fr"

  // ✅ FIX ACTIVE LINK (important)
  const isActive = (path: string) => {
    if (path === "") return pathname === `/${locale}`
    return pathname === `/${locale}${path}`
  }

  const linkClass = (path: string) =>
    `transition ${isActive(path)
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-500"
    }`

  // ✅ LANGUAGE SWITCH (stay on same page)
  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/")

    if (!["de", "en", "fr"].includes(segments[1])) {
      return `/${newLocale}`
    }

    segments[1] = newLocale
    return segments.join("/")
  }

  // ✅ LANGUAGE ACTIVE STYLE
  const langClass = (lang: string) =>
    `transition cursor-pointer ${locale === lang
      ? "scale-125 ring-2   "
      : "opacity-60 hover:opacity-100 text-primary"
    }`

  return (
    <header
      className={`fixed top-0 w-full z-50 h-14 overflow-visible
  ${navState === "transparent" && "bg-transparent"}
  ${navState === "gradient" && "bg-gradient-to-r from-[#d7e8f2] via-[#a9c9e4] to-[#6fa6d8] shadow-lg backdrop-blur-md"}
  ${navState === "white" && "bg-white shadow-md"}
  `}
    >
      <div className="max-w-7xl mx-auto flex items-center h-full px-4 md:px-10">
        <Logo2 show={showLogo} />


        {/* RIGHT BLOCK → tout à droite */}
        <div className="hidden md:flex items-center gap-8 ml-auto">

          {/* NAV */}
          <nav className="flex gap-6 text-slate-700">
            <Link href={`/${locale}`} className={linkClass("")}>
              {t.navbar.home}
            </Link>

            <Link href={`/${locale}/secteurs`} className={linkClass("/secteurs")}>
              {t.navbar.sectors}
            </Link>

            <Link href={`/${locale}/services`} className={linkClass("/services")}>
              {t.navbar.services}
            </Link>

            <Link href={`/${locale}/realisations`} className={linkClass("/realisations")}>
              {t.navbar.realisations}
            </Link>

            <Link href={`/${locale}/about`} className={linkClass("/about")}>
              {t.navbar.about}
            </Link>

            <Link href={`/${locale}/contact`} className={linkClass("/contact")}>
              {t.navbar.contact}
            </Link>
          </nav>

          {/* LANGUAGES */}
          <div className="flex gap-4 items-center text-xl">
            <Link href={getLocalizedPath("de")} className={langClass("de")}>
              🇩🇪
            </Link>
            <Link href={getLocalizedPath("en")} className={langClass("en")}>
              🇬🇧
            </Link>
            <Link href={getLocalizedPath("fr")} className={langClass("fr")}>
              🇫🇷
            </Link>
          </div>

        </div>

        {/* BURGER (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6 text-lg">

          <Link href={`/${locale}`} onClick={() => setOpen(false)}>
            {t.navbar.home}
          </Link>

          <Link href={`/${locale}/secteurs`} onClick={() => setOpen(false)}>
            {t.navbar.sectors}
          </Link>

          <Link href={`/${locale}/services`} onClick={() => setOpen(false)}>
            {t.navbar.services}
          </Link>

          <Link href={`/${locale}/realisations`} onClick={() => setOpen(false)}>
            {t.navbar.realisations}
          </Link>

          <Link href={`/${locale}/about`} onClick={() => setOpen(false)}>
            {t.navbar.about}
          </Link>

          <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}>
            {t.navbar.contact}
          </Link>

          {/* LANG MOBILE */}
          <div className="flex gap-4 text-xl">

            <Link
              href={getLocalizedPath("de")}
              className={langClass("de")}
              onClick={() => setOpen(false)}
            >
              🇩🇪
            </Link>

            <Link
              href={getLocalizedPath("en")}
              className={langClass("en")}
              onClick={() => setOpen(false)}
            >
              🇬🇧
            </Link>
            <Link
              href={getLocalizedPath("fr")}
              className={langClass("fr")}
              onClick={() => setOpen(false)}
            >
              🇫🇷
            </Link>
          </div>

        </div>
      )}

    </header>
  )
}

export function Logo({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded bg-slate-950 text-sm font-bold text-white shadow">
        ETS
      </span>
      <div className="leading-tight">
        <p className="text-xl font-bold text-white md:text-2xl">ETS Structure</p>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-100">
          Ingénierie structurelle
        </p>
      </div>
    </div>
  );
}


export function Logo2({ show = true, className = "" }) {
  if (!show) return null;
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded bg-slate-950 text-xs font-bold text-white">
        ETS
      </span>
      <span className="text-base font-bold text-slate-900 md:text-lg">
        ETS Structure
      </span>
    </div>
  );
}
