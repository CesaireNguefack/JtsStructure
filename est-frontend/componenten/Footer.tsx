"use client"

import { useTranslations } from "@/lib/TranslationProvider";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split("/")[1] || "fr"

  return (
    <footer
      className="text-gray-800 mt-0"
      style={{
        background:
          "linear-gradient(135deg, #d7e8f2 0%, #a9c9e4 50%, #6fa6d8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">ETS Structure</h2>
            <p className="text-sm leading-relaxed">
              {t.footer.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:underline">
                  {t.navbar.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/secteurs`} className="hover:underline">
                  {t.navbar.sectors}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:underline">
                  {t.navbar.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/realisations`} className="hover:underline">
                  {t.navbar.realisations}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:underline">
                  {t.navbar.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:underline">
                  {t.navbar.contact}
                </Link>
              </li>

            </ul>
          </div>



          {/* Contact */}

<div>
  <h3 className="font-semibold mb-4">{t.navbar.contact}</h3>

  <ul className="space-y-3 text-sm">

    {/* WhatsApp */}
    <li className="flex items-center gap-3 group cursor-pointer">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[var(--foreground)]
        group-hover:bg-[var(--foreground)] group-hover:text-white transition">
        <FaWhatsapp size={16} />
      </div>
      <a
        href="https://wa.me/4917648082448"
        target="_blank"
        className="text-gray-700 group-hover:text-[var(--foreground)] transition"
      >
        +49 176 48082448
      </a>
    </li>
    
    {/* Email */}
    <li className="flex items-center gap-3 group cursor-pointer">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[var(--foreground)]
        group-hover:bg-[var(--foreground)] group-hover:text-white transition">
        <Mail size={16} />
      </div>
      <a
        href="mailto:contact@ets-structure.de"
        className="text-gray-700 group-hover:text-[var(--foreground)] transition"
      >
        contact@ets-structure.de
      </a>
    </li>
    {/* Adresse */}
     <li className="flex items-center gap-3 group cursor-pointer">
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-[var(--foreground)]
  group-hover:bg-[var(--foreground)] group-hover:text-white transition">
  <MapPin size={16} />
</div>
      <span className="text-gray-700 group-hover:text-[var(--foreground)] transition">
        {t.contact.addresse}
      </span>
    </li>

  </ul>
</div>



          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.navbar.reseaux}</h3>

            <ul className="space-y-3 text-sm">

              {/* Instagram */}
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[var(--foreground)] transition group"
                >
                  <FaInstagram size={30} className="text-pink-500 text-lg group-hover:scale-110 transition" />
                  <span>Instagram</span>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[var(--foreground)] transition group"
                >
                  <FaFacebook size={30} className="text-blue-600 text-lg group-hover:scale-110 transition" />
                  <span>Facebook</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[var(--foreground)] transition group"
                >
                  <FaLinkedin size={30} className="text-blue-700 text-lg group-hover:scale-110 transition" />
                  <span>LinkedIn</span>
                </a>
              </li>

            </ul>
          </div>
        </div>



        {/* Divider */}
        <div className="border-t border-white/40 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} ETS Structure. {t.footer.sublime}<Link href="https://sublimeprod.com" target="_blank" rel="noopener noreferrer" >Sublimeprod</Link> </p>

        </div>
      </div>
    </footer>
  );
}
