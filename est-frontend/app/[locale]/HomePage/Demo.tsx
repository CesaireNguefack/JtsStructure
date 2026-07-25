
import { useTranslations } from "@/lib/TranslationProvider"
import {ButtonContact} from "@/componenten/Cards/KontaktButton";

export default function Demo() {
     const t = useTranslations()
    return (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <img
                src="/images/ets-structure-hero.png"
                alt="Expertise structurelle"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay sombre pour lisibilité */}
            <div className="absolute inset-0 bg-slate-950/65"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-6">

                <div className="mb-6 flex items-center justify-center gap-4">
                    <span className="h-px w-14 bg-white/75" />
                    <h2 className="text-4xl font-bold md:text-5xl">
                       {t.demosection.title}
                    </h2>
                    <span className="h-px w-14 bg-white/75" />
                </div>

                <p className="text-lg md:text-xl mb-8">
                    {t.demosection.subtitle}
                </p>
            </div>

        </section>
    )
}
