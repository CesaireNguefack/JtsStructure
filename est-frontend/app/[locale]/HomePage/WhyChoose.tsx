"use client";

import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";

export default function WhyChoose() {
  const content = getSiteContent(getCurentLanguage());

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {content.whyChoose.title}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {content.whyChoose.items.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-slate-950 p-6 text-center text-white md:p-8">
          <h3 className="text-2xl font-bold">{content.home.ctaTitle}</h3>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-slate-200 md:text-base">
            {content.home.ctaText}
          </p>
        </div>
      </div>
    </section>
  );
}
