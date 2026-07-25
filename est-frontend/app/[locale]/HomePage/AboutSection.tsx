import { useTranslations } from "@/lib/TranslationProvider"

export default function AboutSection() {
  const t = useTranslations()
  return (
    <section
      className="relative overflow-hidden bg-slate-950 bg-cover bg-center bg-fixed px-6 py-24 text-white md:py-32"
      style={{ backgroundImage: "url('/images/about-section/conference_background.png')" }}
    >
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-white/75" />
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {t.about.title}
          </h2>
          <span className="h-px w-14 bg-white/75" />
        </div>

        <p className="mt-12 max-w-4xl text-sm font-medium leading-8 text-white md:text-base">
          {t.about.description}
        </p>

        <h3 className="mt-8 text-xl font-semibold text-white md:text-2xl">
          {t.about.subtitle}
        </h3>

        <p className="mt-5 max-w-4xl text-sm font-medium leading-8 text-white md:text-base">
          {t.about.subdescription}
        </p>
      </div>
    </section>
  );
}
