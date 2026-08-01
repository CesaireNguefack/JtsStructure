"use client";

import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WhyChoose() {
  const locale = getCurentLanguage();
  const content = getSiteContent(locale);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const subtitle =
    locale === "de"
      ? "Ihr zuverlässiger Partner für dauerhafte Tragwerke"
      : locale === "en"
        ? "Reliable expertise for durable structures"
        : "Une expertise fiable pour des ouvrages durables";

  useEffect(() => {
    const section = sectionRef.current;
    const revealTimers: ReturnType<typeof setTimeout>[] = [];

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        content.whyChoose.items.forEach((_, index) => {
          const timer = setTimeout(
            () =>
              setVisibleItems((currentItems) =>
                currentItems.includes(index)
                  ? currentItems
                  : [...currentItems, index]
              ),
            index * 260
          );

          revealTimers.push(timer);
        });

        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      revealTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [content.whyChoose.items]);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[var(--foreground)]/70" />
            <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              {content.whyChoose.title}
            </h2>
            <span className="h-px w-14 bg-[var(--foreground)]/70" />
          </div>
          <p className="mt-3 text-sm font-medium text-slate-500 md:text-base">
            {subtitle}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="relative min-h-[520px] overflow-hidden rounded-sm bg-slate-100 shadow-xl shadow-slate-900/10 lg:min-h-[690px]">
            <div
              className="absolute inset-0 bg-cover bg-[position:left_center] bg-no-repeat md:hidden"
              style={{ backgroundImage: "url('/images/why-choose/confident-engineer-mobile.png')" }}
            />
            <div
              className="absolute inset-0 hidden bg-cover bg-[position:left_center] bg-no-repeat md:block"
              style={{ backgroundImage: "url('/images/why-choose/confident-engineer.png')" }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/70 to-transparent p-6">
              <div className="max-w-xs bg-white/88 p-5 shadow-lg backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--foreground)]">
                  {locale === "de"
                    ? "Strukturingenieurwesen"
                    : locale === "en"
                      ? "Structural engineering"
                      : "Ingenierie structurelle"}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  {locale === "de"
                    ? "Präzision, Kontrolle und Begleitung für jedes Bauprojekt."
                    : locale === "en"
                      ? "Precision, control and guidance for every construction project."
                      : "Precision, contrôle et accompagnement pour chaque projet de construction."}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--foreground)]">
              JTS Structure
            </p>

            <div className="mt-6 space-y-7">
              {content.whyChoose.items.map(([title, text], index) => {
                const entersFromLeft = index % 2 === 0;
                const isItemVisible = visibleItems.includes(index);

                return (
                  <article
                    key={title}
                    className="relative border-b border-slate-200 pb-7 motion-reduce:!translate-x-0 motion-reduce:!opacity-100"
                    style={{
                      opacity: isItemVisible ? 1 : 0,
                      transform: isItemVisible
                        ? "translateX(0)"
                        : `translateX(${entersFromLeft ? "-90px" : "90px"})`,
                      transitionDuration: "1500ms",
                      transitionProperty: "opacity, transform",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "opacity, transform",
                    }}
                  >
                    <div className="flex gap-4">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-black text-white">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-slate-900">
                          {title}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                          {text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-9">
              <Link
                href={`/${locale}/evaluation`}
                className="inline-flex bg-gradient-to-r from-[#9ed0ef] via-[#2f6f9f] to-[var(--foreground)] px-6 py-3 text-sm font-bold !text-white shadow-lg shadow-slate-900/10 transition hover:from-[#5fa7d6] hover:via-[var(--foreground)] hover:to-slate-950"
              >
                {content.cta}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
