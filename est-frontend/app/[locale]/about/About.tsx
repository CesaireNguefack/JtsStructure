"use client";

import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";

export default function AboutSection() {
  const locale = getCurentLanguage();
  const content = getSiteContent(locale);

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <img
              src="/images/about20.png"
              alt="EST-Structure"
              className="h-[420px] w-full rounded-lg object-cover shadow-sm"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
              {content.about.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {content.about.intro}
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-slate-800">
              {content.about.introFooter}
            </p>

            <div className="mt-8 rounded-lg bg-slate-950 p-6 text-white">
              <h2 className="text-2xl font-bold">{content.about.missionTitle}</h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-200">
                {content.about.missionText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.about.blocks.map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                >
                  <h2 className="text-base font-bold text-slate-900">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {content.about.valuesTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {content.about.values.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <TeamList title={content.about.teamNowTitle} items={content.about.teamNow} />
          <TeamList title={content.about.teamLaterTitle} items={content.about.teamLater} />
        </div>

        <section className="mt-14 rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2 className="text-2xl font-bold">{content.resources.title}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.resources.items.map((item) => (
              <div key={item} className="rounded border border-white/15 bg-white/5 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function TeamList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <span className="mt-2 h-2 w-2 rounded-full bg-sky-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
