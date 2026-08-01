"use client";

import { Award, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";
import { useEffect, useMemo, useRef, useState } from "react";

export default function AboutCEO() {
  const locale = getCurentLanguage();
  const content = getSiteContent(locale).founder;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const icons = [GraduationCap, Building2, ShieldCheck, Award];
  const founderIntro = content.paragraphs[0];
  const expertiseItems = useMemo(
    () => [
      content.paragraphs[1],
      content.paragraphs[2],
      content.paragraphs[3],
      content.commitment,
    ],
    [content]
  );

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

        expertiseItems.forEach((_, index) => {
          const timer = setTimeout(
            () =>
              setVisibleItems((currentItems) =>
                currentItems.includes(index)
                  ? currentItems
                  : [...currentItems, index]
              ),
            index * 220
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
  }, [expertiseItems]);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[var(--foreground)]/70" />
            <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              {content.eyebrow}
            </h2>
            <span className="h-px w-14 bg-[var(--foreground)]/70" />
          </div>
          <p className="mt-3 text-sm font-medium text-slate-500 md:text-base">
            {content.title}
          </p>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="relative min-h-[540px] overflow-hidden rounded-sm bg-slate-100 shadow-xl shadow-slate-900/10 lg:h-full lg:min-h-[720px]">
            <img
              src="/images/about/founder-ceo.png"
              alt={content.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-[50%_center]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/85 via-white/55 to-transparent p-6">
              <div className="mx-auto max-w-sm bg-white/90 p-5 shadow-lg backdrop-blur">
                <p className="text-xl font-black leading-tight text-slate-900 md:text-2xl">
                  {content.name}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--foreground)]">
                  {content.role}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.highlights.map((item) => (
                    <span
                      key={item}
                      className="border border-[var(--foreground)]/15 bg-[var(--foreground)]/8 px-3 py-1 text-xs font-bold text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--foreground)]">
              JTS Structure
            </p>

            <p className="mt-6 text-base font-semibold leading-8 text-slate-700 md:text-lg">
              {founderIntro}
            </p>

            <div className="mt-9 space-y-7">
              {expertiseItems.map((paragraph, index) => {
                const entersFromLeft = index % 2 === 0;
                const isItemVisible = visibleItems.includes(index);
                const Icon = icons[index] ?? Award;

                return (
                  <article
                    key={paragraph}
                    className={`relative motion-reduce:!translate-x-0 motion-reduce:!opacity-100 ${
                      index < expertiseItems.length - 1
                        ? "border-b border-slate-200 pb-7"
                        : ""
                    }`}
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
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-white">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <p
                        className={`max-w-3xl text-sm leading-7 md:text-base ${
                          index === expertiseItems.length - 1
                            ? "font-bold text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        {paragraph}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
