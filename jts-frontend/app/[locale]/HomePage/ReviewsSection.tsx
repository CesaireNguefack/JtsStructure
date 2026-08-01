"use client"
import { useState } from "react"
import { useTranslations } from "@/lib/TranslationProvider"


const reviews = [
    {
        id: 0,
        name: "Martina Blume",
        location: "Braunschweig",
        initials: "MB",
        message: "Die technische Analyse war klar, nachvollziehbar und sehr hilfreich für unsere Projektentscheidung. JTS Structure können wir empfehlen."

    },
    {
        id: 1,
        name: "Christian Weber",
        location: "Hannover, Deutschland",
        initials: "CW",
        message: "Die statischen Nachweise waren sauber strukturiert und gut nachvollziehbar. Die Abstimmung mit Architekt und Ausführung verlief professionell."
    },
    {
        id: 2,
        name: "Wilfried Mund",
        location: "Braunschweig",
        initials: "WM",
        message: "Professionell, präzise und reaktionsschnell. Die Empfehlungen zur Tragwerksplanung ließen sich sehr gut im Projektteam einsetzen."
    }
]

export default function ReviewsSection() {

    const [selected, setSelected] = useState(1)
    const review = reviews[selected]
    const t = useTranslations()

    return (

        <section className="py-20 md:py-28 bg-gray-50">

            <div className="max-w-6xl mx-auto px-4 overflow-hidden">

                {/* TITLE */}
                <div className="text-center mb-14 md:mb-20">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-[var(--foreground)]/70" />
                        <h2 className="text-3xl font-bold text-[var(--foreground)] md:text-4xl">
                            {t.reviewsection.title}
                        </h2>
                        <span className="h-px w-14 bg-[var(--foreground)]/70" />
                    </div>
                    <p className="mt-2 font-medium text-[var(--foreground2)]">
                        {t.reviewsection.subtitle}
                    </p>
                </div>

                {/* MAIN */}
                <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-10">

                    {/* LEFT ARC (inchangé design, sécurisé mobile) */}
                    <div className="relative h-[260px] w-full max-w-[320px] mx-auto md:mx-0 pl-6 md:pl-0">

                        {reviews.map((r, index) => {

                            const active = index === selected
                            const offset = Math.abs(index - selected)

                            // 👉 moins agressif sur mobile
                            const translateX = offset * -20

                            return (
                                <div
                                    key={r.id}
                                    onClick={() => setSelected(index)}
                                    className={`absolute flex items-center gap-3 md:gap-4 cursor-pointer transition-all duration-300 ${active ? "bg-white shadow-lg scale-105" : ""
                                        }`}
                                    style={{
                                        top: `${index * 85}px`,
                                        padding: "10px",
                                        borderRadius: "20px",
                                        transform: `translateX(${translateX}px)`
                                    }}
                                >

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-xs font-black text-white md:h-12 md:w-12">
                                        {r.initials}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-sm md:text-base  text-[var(--foreground2)]">
                                            {r.name}
                                        </p>

                                        <p className="text-xs md:text-sm text-gray-500">
                                            {r.location}
                                        </p>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                    {/* CENTER LINE */}
                    <div className="w-full flex justify-center">

                        <div className="flex md:hidden items-center w-full max-w-[320px]">
                            <div className="h-[2px] bg-[var(--foreground2)] w-full relative">
                                {reviews.map((_, index) => {
                                    const active = index === selected

                                    return (
                                        <div
                                            key={index}
                                            style={{ left: `${index * 25}%` }}
                                            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${active
                                                    ? "bg-[var(--foreground2)] border-[var(--foreground2)]"
                                                    : "bg-white border-[var(--foreground2)]"
                                                }`}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        {/* 💻 DESKTOP → VERTICAL LINE */}
                        <div className="hidden md:block relative">
                            <div className="w-[2px] bg-[var(--foreground2)] h-[260px] relative">
                                {reviews.map((_, index) => {
                                    const active = index === selected

                                    return (
                                        <div
                                            key={index}
                                            style={{ top: `${index * 90}px` }}
                                            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${active
                                                    ? "bg-[var(--foreground2)] border-[var(--foreground2)]"
                                                    : "bg-white border-[var(--foreground2)]"
                                                }`}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT MESSAGE */}
                    <div className="w-full text-center md:text-left max-w-xl">

                        <div className="text-[var(--foreground2)-500 text-3xl md:text-4xl mb-4">
                            ❝
                        </div>

                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            {review.message}
                        </p>

                        <div className="mt-6 text-blue-500">
                            ⭐⭐⭐⭐⭐
                        </div>

                    </div>

                </div>

                {/* BUTTON */}
                <div className="mt-10 text-center">
                    <a
                        href= "https://share.google/5BMXF9gzR9jo0bPYt" target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[var(--foreground2)] hover:underline"
                    >
                        {t.reviewsection.seemore}
                    </a>
                </div>

            </div>

        </section>
    )
}
