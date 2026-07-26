"use client";

import HeaderPages from "@/componenten/headerPages";
import { ReservationForm } from "@/app/[locale]/reservation/[slug]/page";

export default function EvaluationPage() {
  return (
    <main className="bg-white">
      <HeaderPages
        title="evaluationPageHeaderInfos.label"
        headerTitle="evaluationPageHeaderInfos.title"
        subtitle="evaluationPageHeaderInfos.subtitle"
        image="headers/contact/cover_header.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <ReservationForm general />
        </div>
      </section>
    </main>
  );
}
