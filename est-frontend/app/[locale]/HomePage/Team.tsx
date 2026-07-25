import {ButtonContact} from "@/componenten/Cards/KontaktButton";
import { useTranslations } from "@/lib/TranslationProvider"

export default function TeamHome(){
        const t = useTranslations()
    return (
        <section
                className="relative bg-fixed bg-center bg-cover py-40 text-white"
                style={{ backgroundImage: "linear-gradient(rgba(2, 6, 23, 0.72), rgba(2, 6, 23, 0.72)), url('/images/ets-structure-hero.png')" }}
            >
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <div className="mb-6 flex items-center justify-center gap-4">
                        <span className="h-px w-14 bg-white/75" />
                        <h2 className="text-4xl font-bold md:text-5xl">
                            {t.teamsection.title}
                        </h2>
                        <span className="h-px w-14 bg-white/75" />
                    </div>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                       {t.teamsection.description}
                     </p>
                </div>
            </section>
    )
}
