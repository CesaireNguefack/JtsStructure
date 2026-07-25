import { getTranslations } from "@/lib/translation";
import { TranslationProvider } from "@/lib/TranslationProvider";
import "../globals.css";
import { notFound } from "next/navigation"; 
import { IBM_Plex_Sans } from "next/font/google";

import Footer from "@/componenten/Footer"

const locales = ["en", "de", "fr"];

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
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
      <body className={`${ibmPlexSans.variable} ${ibmPlexSans.className} overflow-x-hidden font-sans`}>

        <TranslationProvider messages={messages}>
          {children}
          <Footer />
        </TranslationProvider>

      </body>
    </html>
  );
}
