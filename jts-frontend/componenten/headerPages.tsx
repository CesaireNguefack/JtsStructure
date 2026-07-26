"use client"

import Navbar from "@/componenten/Navbar";
import { useTranslations } from "@/lib/TranslationProvider"

type Props = {
    title: string,
    headerTitle: string,
    subtitle: string,
    image: string
}

export default function HeaderPages({ title, headerTitle, subtitle, image }: Props) {
    const t = useTranslations()

    let value = t
    let headerTitle_ = t
    let subtitle_ = t

    for (const key of headerTitle?.split(".") ?? []) {
        headerTitle_ = headerTitle_?.[key]
    }

    for (const key of subtitle?.split(".") ?? []) {
        subtitle_ = subtitle_?.[key]
    }


    for (const key of title?.split(".") ?? []) {
        value = value?.[key]
    }

    const titleText = String(value ?? "").replace(/\s*\n\s*/g, " ")
    const headerTitleText = String(headerTitle_ ?? "").replace(/\s*\n\s*/g, " ")
    const subtitleText = String(subtitle_ ?? "").replace(/\s*\n\s*/g, " ")

    return (
        <main>
            <Navbar navState="gradient" showLogo={true} />

            <section
                className="relative min-h-[320px] overflow-hidden bg-slate-950 pt-28 md:min-h-[390px] md:pt-36"
                style={{ backgroundImage: `url('/images/${image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute inset-0 bg-slate-950/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 min-h-[190px] md:min-h-[230px] flex items-center">
                    <div className="w-full max-w-6xl text-left text-white space-y-3 md:space-y-4">
                        <h1 className="font-black uppercase leading-none tracking-[0.01em] !text-white text-[clamp(2.2rem,7vw,5rem)]">
                            {titleText}
                        </h1>
                        <h2 className="truncate font-bold leading-tight text-white text-[clamp(1.35rem,3.5vw,2.4rem)]">
                            {headerTitleText}
                        </h2>

                        <p className="truncate text-white text-[clamp(0.95rem,2.2vw,1.2rem)]">
                            {subtitleText}
                        </p>
                    </div>
                </div>
            </section>
        </main>

    )
}
