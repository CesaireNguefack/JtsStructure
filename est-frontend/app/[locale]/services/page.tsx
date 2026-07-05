"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderPages from "@/componenten/headerPages";
import { getSiteContent } from "@/lib/siteContent";
import { API_URL, getServices, Lang, Service } from "@/services/dienstApi";

const getServiceCoverUrl = (cover?: string) => {
  if (!cover) return "/images/appointment0.png";
  if (cover.startsWith("http") || cover.startsWith("/images")) return cover;
  if (cover.startsWith("/")) return `${API_URL}${cover}`;
  return `${API_URL}/${cover}`;
};

export default function ServicesPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr";
  const content = getSiteContent(locale);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function loadServices() {
      const data = (await getServices(locale as Lang)).filter(
        (service) => service.id !== 0
      );
      setServices(data);
    }

    loadServices();
  }, [locale]);

  return (
    <main className="bg-white">
      <HeaderPages
        title="navbar.services"
        headerTitle="servicesPageHeaderInfos.title"
        subtitle="servicesPageHeaderInfos.subtitle"
        image="headers/services/cover_header.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
              {content.services.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {content.services.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-44 bg-slate-100">
                  <img
                    src={getServiceCoverUrl(service.cover)}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description1}
                    <br />
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/${locale}/evaluation`}
                    className="mt-6 inline-flex rounded bg-slate-950 px-4 py-2 text-sm font-semibold !text-white transition hover:bg-sky-800"
                  >
                    {content.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
