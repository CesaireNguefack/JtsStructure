import HeaderPages from "@/componenten/headerPages";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderPages
        title="navbar.gallery"
        headerTitle="realisationsPageHeaderInfos.title"
        subtitle="realisationsPageHeaderInfos.subtitle"
        image="headers/realisations/cover_header.png"
      />

      <section className="px-6 py-20 text-center">
        <p className="text-lg font-semibold text-slate-600">Coming soon...</p>
      </section>
    </main>
  );
}
