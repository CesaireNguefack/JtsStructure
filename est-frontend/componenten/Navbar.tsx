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
  const isTop = navState === "transparent"
  const isSubPage = navState === "gradient"

  const locale = pathname.split("/")[1] || "fr"

  // ✅ FIX ACTIVE LINK (important)
  const isActive = (path: string) => {
    if (path === "") return pathname === `/${locale}`
    return pathname === `/${locale}${path}`
  }

  const linkClass = (path: string) =>
    `text-[13px] font-bold uppercase tracking-[0.02em] transition ${isActive(path) && !isTop
      ? "text-blue-700"
      : "text-black hover:text-red-700"
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
      className={`fixed top-0 w-full z-50 overflow-visible
  ${isTop ? "h-24 bg-transparent pt-4 md:h-[118px]" : isSubPage ? "h-20 bg-transparent pt-3 md:h-24" : "h-14"}
  ${navState === "white" && "bg-white shadow-md"}
  `}
    >
      <div
        className={`mx-auto flex items-center px-4 md:px-8
          ${isTop
            ? "h-20 w-[calc(100%-2rem)] max-w-[1804px] bg-white/65 shadow-sm backdrop-blur-sm md:h-[102px]"
            : isSubPage
              ? "h-16 w-[calc(100%-1.5rem)] max-w-7xl bg-white/82 shadow-md backdrop-blur-sm md:h-20"
            : "h-full w-[calc(100%-2rem)] max-w-[1804px]"
          }`}
      >
        {isTop ? <TopLogo /> : <Logo2 show={showLogo} />}


        {/* RIGHT BLOCK → tout à droite */}
        <div className={`hidden md:flex items-center ml-auto ${isTop ? "gap-8" : "gap-8"}`}>

          {/* NAV */}
          <nav className={`flex items-center ${isTop ? "gap-9" : "gap-7"}`}>
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
          <div className={`flex gap-4 items-center ${isTop ? "text-lg" : "text-xl"}`}>
            <Link href={getLocalizedPath("fr")} className={langClass("fr")}>
              🇫🇷
            </Link>
            <Link href={getLocalizedPath("en")} className={langClass("en")}>
              🇬🇧
            </Link>
            <Link href={getLocalizedPath("de")} className={langClass("de")}>
              🇩🇪
            </Link>
          </div>

        </div>

        {/* BURGER (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ml-auto text-2xl font-bold ${isTop ? "text-black" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="block leading-none">☰</span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-y-0 right-0 left-16 z-[60] md:hidden bg-white text-slate-950 shadow-2xl">
          <div className="flex min-h-dvh flex-col px-5 py-7">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-4xl font-light leading-none text-slate-950 shadow-sm"
                aria-label="Fermer le menu"
              >
                ×
              </button>
            </div>

            <nav className="mt-2 flex flex-col items-start gap-9">
              <MobileMenuLink href={`/${locale}`} onClick={() => setOpen(false)}>
                {t.navbar.home}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/secteurs`} onClick={() => setOpen(false)}>
                {t.navbar.sectors}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/services`} onClick={() => setOpen(false)}>
                {t.navbar.services}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/realisations`} onClick={() => setOpen(false)}>
                {t.navbar.realisations}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/about`} onClick={() => setOpen(false)}>
                {t.navbar.about}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/contact`} onClick={() => setOpen(false)}>
                {t.navbar.contact}
              </MobileMenuLink>
            </nav>

            {/* LANG MOBILE */}
            <div className="mt-auto border-t border-slate-200 pt-6">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Langue
              </p>
              <div className="flex gap-5 text-2xl">

                <Link
                  href={getLocalizedPath("fr")}
                  className={langClass("fr")}
                  onClick={() => setOpen(false)}
                >
                  🇫🇷
                </Link>

                <Link
                  href={getLocalizedPath("en")}
                  className={langClass("en")}
                  onClick={() => setOpen(false)}
                >
                  🇬🇧
                </Link>

                <Link
                  href={getLocalizedPath("de")}
                  className={langClass("de")}
                  onClick={() => setOpen(false)}
                >
                  🇩🇪
                </Link>
              </div>
            </div>
          </div>

        </div>
      )}

    </header>
  )
}

function MobileMenuLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[19px] font-medium uppercase leading-none tracking-[0.02em] text-slate-950 transition hover:text-red-700"
    >
      {children}
    </Link>
  );
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


export function TopLogo({ className = "" }) {
  return (
    <div className={`inline-flex h-full items-center gap-4 ${className}`}>
      <div className="flex h-14 w-20 items-center justify-center bg-red-700 text-2xl font-black tracking-[-0.12em] text-white md:h-16 md:w-24">
        EST
      </div>
      <div className="h-16 w-px bg-slate-400 md:h-20" />
      <p className="hidden text-[15px] font-black uppercase tracking-[0.08em] text-slate-950 sm:block md:text-[17px]">
        ETS Structure
      </p>
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
