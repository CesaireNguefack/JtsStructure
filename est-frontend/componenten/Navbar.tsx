"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
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
    if (path === "/services") {
      return pathname === `/${locale}/services` || pathname.startsWith(`/${locale}/service/`)
    }
    return pathname === `/${locale}${path}`
  }

  const linkClass = (path: string) =>
    `relative py-2 text-[13px] font-bold uppercase tracking-[0.02em] transition after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:bg-[var(--foreground)] after:transition-transform after:duration-300 ${isActive(path)
      ? "text-[var(--foreground)] after:scale-x-100"
      : "text-black after:scale-x-0 hover:text-[var(--foreground)] hover:after:scale-x-100"
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
        {isTop ? <TopLogo href={`/${locale}`} /> : <Logo2 show={showLogo} href={`/${locale}`} />}


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
              <MobileMenuLink href={`/${locale}`} active={isActive("")} onClick={() => setOpen(false)}>
                {t.navbar.home}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/secteurs`} active={isActive("/secteurs")} onClick={() => setOpen(false)}>
                {t.navbar.sectors}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/services`} active={isActive("/services")} onClick={() => setOpen(false)}>
                {t.navbar.services}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/realisations`} active={isActive("/realisations")} onClick={() => setOpen(false)}>
                {t.navbar.realisations}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/about`} active={isActive("/about")} onClick={() => setOpen(false)}>
                {t.navbar.about}
              </MobileMenuLink>

              <MobileMenuLink href={`/${locale}/contact`} active={isActive("/contact")} onClick={() => setOpen(false)}>
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
  active,
  onClick,
  children,
}: {
  href: string;
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`border-l-2 pl-4 text-[19px] font-medium uppercase leading-none tracking-[0.02em] transition ${
        active
          ? "border-[var(--foreground)] text-[var(--foreground)]"
          : "border-transparent text-slate-950 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
      }`}
    >
      {children}
    </Link>
  );
}

export function Logo({ className = "", href = "/" }) {
  return (
    <Link href={href} className={`relative block h-14 w-36 md:h-16 md:w-44 ${className}`}>
      <Image
        src="/images/jts-structure-logo.png"
        alt="JTS Structure Consulting Engineers"
        fill
        sizes="176px"
        className="object-contain"
        priority
      />
    </Link>
  );
}


export function TopLogo({ className = "", href = "/" }) {
  return (
    <Link href={href} className={`relative block h-16 w-40 md:h-20 md:w-52 ${className}`}>
      <Image
        src="/images/jts-structure-logo.png"
        alt="JTS Structure Consulting Engineers"
        fill
        sizes="208px"
        className="object-contain"
        priority
      />
    </Link>
  );
}


export function Logo2({ show = true, className = "", href = "/" }) {
  if (!show) return null;
  return (
    <Link href={href} className={`relative block h-11 w-32 md:h-14 md:w-40 ${className}`}>
      <Image
        src="/images/jts-structure-logo.png"
        alt="JTS Structure Consulting Engineers"
        fill
        sizes="160px"
        className="object-contain"
        priority
      />
    </Link>
  );
}
