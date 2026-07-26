import { getTranslations } from "@/lib/translation";
import { TranslationProvider } from "@/lib/TranslationProvider";
import "../globals.css";
import { notFound } from "next/navigation"; 
import { Manrope } from "next/font/google";

import Footer from "@/componenten/Footer"

const locales = ["en", "de", "fr"];

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  // Vérifier que la locale est valide
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getTranslations(locale);

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${manrope.className} overflow-x-hidden font-sans`}>

        <TranslationProvider messages={messages}>
          {children}
          <Footer />
        </TranslationProvider>

      </body>
    </html>
  );
}
