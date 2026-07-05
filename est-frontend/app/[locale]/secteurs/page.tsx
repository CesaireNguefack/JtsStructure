import Link from "next/link";
import HeaderPages from "@/componenten/headerPages";
import { getSiteContent } from "@/lib/siteContent";

export default async function SectorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return (
    <main className="bg-white">
      <HeaderPages
        title="navbar.sectors"
        headerTitle="sectorsPageHeaderInfos.title"
        subtitle="sectorsPageHeaderInfos.subtitle"
        image="headers/secteurs/cover_header.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
             
              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
                {content.sectors.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {content.sectors.intro}
              </p>
              <Link
                href={`/${locale}/evaluation`}
                className="mt-8 inline-flex rounded bg-slate-950 px-5 py-3 text-sm font-semibold !text-white transition hover:bg-sky-800"
              >
                {content.cta}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.sectors.items.map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                  <h2 className="text-lg font-bold text-slate-900">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
