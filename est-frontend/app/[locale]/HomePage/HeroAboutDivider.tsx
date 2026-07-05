const items = [
  "Études structurelles",
  "Expertise technique",
  "Suivi de réalisation",
]

export default function HeroAboutDivider() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-14 text-slate-950 md:py-18">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,72,108,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(26,72,108,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[rgba(26,72,108,0.45)] to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[rgba(26,72,108,0.35)] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 flex max-w-4xl items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(26,72,108,0.5)]" />
          <div className="h-2 w-2 rotate-45 border border-[var(--foreground)] bg-[var(--foreground)]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(26,72,108,0.5)]" />
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="relative border border-[rgba(26,72,108,0.15)] bg-white/75 px-5 py-6 shadow-sm backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[var(--foreground)]" />
              <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-[rgba(26,72,108,0.75)]" />
              <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[rgba(26,72,108,0.75)]" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[var(--foreground)]" />

              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
