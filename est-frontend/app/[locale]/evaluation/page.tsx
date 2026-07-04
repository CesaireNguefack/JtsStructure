"use client";

import { useState } from "react";
import HeaderPages from "@/componenten/headerPages";
import { getCurentLanguage } from "@/languages/getcurentlanguage";
import { getSiteContent } from "@/lib/siteContent";
import { createContact } from "@/services/contactApi";

export default function EvaluationPage() {
  const locale = getCurentLanguage();
  const content = getSiteContent(locale);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    date: "",
    details: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.phone || !form.serviceType || !form.details) {
      setError("Veuillez remplir les champs principaux.");
      return;
    }

    try {
      setLoading(true);
      const message = [
        `Type de service: ${form.serviceType}`,
        `Adresse de prestation: ${form.address || "-"}`,
        `Date souhaitee: ${form.date || "-"}`,
        "",
        form.details,
      ].join("\n");

      const response = await createContact({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message,
        lang: locale,
      });

      if (!response.ok) {
        throw new Error("Erreur envoi");
      }

      setSuccess(content.evaluation.success);
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        address: "",
        date: "",
        details: "",
      });
    } catch (submitError: unknown) {
      setError(submitError instanceof Error ? submitError.message : "Erreur envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      <HeaderPages
        title="contact.reserve"
        headerTitle="contactPageHeaderInfos.title"
        subtitle="contactPageHeaderInfos.subtitle"
        image="appointment1.png"
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
              {content.evaluation.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {content.evaluation.intro}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-2"
          >
            <Field label={content.evaluation.firstName}>
              <input name="name" value={form.name} onChange={handleChange} className={inputClass} required />
            </Field>
            <Field label="Email">
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} required />
            </Field>
            <Field label="Telephone">
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} required />
            </Field>
            <Field label={content.evaluation.serviceType}>
              <select name="serviceType" value={form.serviceType} onChange={handleChange} className={inputClass} required>
                <option value=""></option>
                {content.services.items.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={content.evaluation.address}>
              <input name="address" value={form.address} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label={content.evaluation.date}>
              <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
            </Field>
            <Field label={content.evaluation.details} className="md:col-span-2">
              <textarea name="details" value={form.details} onChange={handleChange} rows={6} className={inputClass} required />
            </Field>

            {error && <p className="text-sm font-medium text-red-600 md:col-span-2">{error}</p>}
            {success && <p className="text-sm font-medium text-green-700 md:col-span-2">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="rounded bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              {loading ? "..." : content.evaluation.submit}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100";
