"use client";

import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";
import { Star } from "lucide-react";

export default function AboutSection() {
  const locale = getCurentLanguage();
  const content = getSiteContent(locale);

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <img
              src="/images/about/team_lead.png"
              alt="Équipe EST Structure"
              className="h-[420px] w-full object-cover shadow-sm"
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

            <div className="mt-8 bg-slate-950 p-6 text-white">
              <h2 className="text-2xl font-bold">{content.about.missionTitle}</h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-200">
                {content.about.missionText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {content.about.valuesTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {content.about.values.map(([title, text]) => (
              <article key={title} className="border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <Star
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--foreground)]"
                    fill="currentColor"
                    strokeWidth={1.8}
                  />
                  <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
