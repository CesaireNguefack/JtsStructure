"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderPages from "@/componenten/headerPages";
import ServiceBody from "@/app/[locale]/HomePage/ServiceBody";
import { getServices, Lang, Service } from "@/services/dienstApi";

export default function ServicesPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr";
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

      <ServiceBody services={services} />
    </main>
  );
}
