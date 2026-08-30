"use client"

import {ButtonContact} from "@/componenten/Cards/KontaktButton";
import IconCard from "../../../componenten/Cards/IconCard";
import {
  CONTACT_PHONE_PRIMARY,
  CONTACT_PHONE_PRIMARY_TEL,
  CONTACT_PHONE_WHATSAPP,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contactLinks";
import { useTranslations } from "@/lib/TranslationProvider"
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
    const t = useTranslations()

  return (
    <div
      className="
        relative md:absolute
        left-1/2 md:bottom-0
        -translate-x-1/2 md:translate-y-1/2
        w-[90%] md:w-[65%]
        bg-white/95 backdrop-blur-md
        rounded-2xl shadow-xl
        p-6 md:p-8
        z-50
        mt-10 md:mt-0
      "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start text-left md:text-center">
        <IconCard
          icon={<Phone className="text-xl" />}
          title="Hotline"
          description={
      <span className="flex flex-col gap-1">
        <a href={CONTACT_PHONE_PRIMARY_TEL}>
          {CONTACT_PHONE_PRIMARY}
        </a>
        <a href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
          <FaWhatsapp className="text-green-500" />
          {CONTACT_PHONE_WHATSAPP}
        </a>
      </span>
    }
        />

        <IconCard
          icon={<Mail />}
          title="Email"
          description="info@jts-structure.com" 
        />

        <IconCard
          icon={<MapPin />}
          title= {t.contact.iconLocation}
          description={t.contact.addresse}
        />

        <div className="flex justify-center items-center h-full">
          <ButtonContact />
        </div>

      </div>
    </div>
  );
}
