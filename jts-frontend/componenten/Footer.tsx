"use client"

import { useTranslations } from "@/lib/TranslationProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import {
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_PRIMARY_TEL,
  CONTACT_PHONE_WHATSAPP,
  CONTACT_WHATSAPP_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
} from "@/lib/contactLinks";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <Link href={`/${locale}`} className="relative mb-4 block h-20 w-44">
              <Image
                src="/images/jts-structure-logo-transparent.png"
                alt="JTS Structure Consulting Engineers"
                fill
                sizes="176px"
                className="object-contain p-2"
              />
            </Link>
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

    {/* Phone */}
    <li className="flex items-start gap-3 group">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[var(--foreground)]
        group-hover:bg-[var(--foreground)] group-hover:text-white transition">
        <Phone size={16} />
      </div>
      <div className="flex flex-col gap-1">
        <a
          href={CONTACT_PHONE_PRIMARY_TEL}
          className="text-gray-700 group-hover:text-[var(--foreground)] transition"
        >
          {CONTACT_PHONE_PRIMARY}
        </a>
        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 group-hover:text-[var(--foreground)] transition"
        >
          <FaWhatsapp size={16} className="text-green-500" />
          {CONTACT_PHONE_WHATSAPP}
        </a>
      </div>
    </li>
    
    {/* Email */}
    <li className="flex items-center gap-3 group cursor-pointer">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-[var(--foreground)]
        group-hover:bg-[var(--foreground)] group-hover:text-white transition">
        <Mail size={16} />
      </div>
      <a
        href="mailto:info@jts-structure.com"
        className="text-gray-700 group-hover:text-[var(--foreground)] transition"
      >
        info@jts-structure.com
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
	                  href={FACEBOOK_URL}
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
                  href={LINKEDIN_URL}
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
          <p>© {new Date().getFullYear()} JTS Structure. {t.footer.sublime}<Link href="https://sublimeprod.com" target="_blank" rel="noopener noreferrer" >Sublimeprod</Link> </p>

        </div>
      </div>
    </footer>
  );
}
