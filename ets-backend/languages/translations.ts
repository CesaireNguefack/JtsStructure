// email/translations.ts

export type Lang = "fr" | "en" | "de";

type Translation = {
    userSubject: string;
    greeting: string;
    received: string;
    review: string;
    confirmed: string;
    cancelled: string;
    adminSubject: string;
    confirmBtn: string;
    cancelBtn: string;
    thanks: string;
    team: string;
    newReservation: string;
    newContact: string;
    callationDetail: string;
    callationerror: string;
    confirmed_body: string;
    salutation: string;
    contactformsubject: string;
    contactsubjectbody: string;

};

export const translations: Record<Lang, Translation> = {
    fr: {
        userSubject: "Accusé de réception: votre demande a été reçue",
        greeting: "Bonjour",
        callationDetail:" Votre demande pour la prestation ci-dessous a été <strong>annulée</strong>.",
        callationerror:"Si cela est une erreur, veuillez nous contacter.",
        received: "Votre demande d’étude a été reçue avec succès.",
        review: "Notre équipe analyse votre demande et vous contactera très rapidement.",
        confirmed: "✅ Votre demande a été confirmée 🎉",
        confirmed_body: "Votre demande pour la prestation suivante a été confirmée.",
        cancelled: "Votre demande a été annulée ❌",
        contactformsubject: "Accusé de réception",
        contactsubjectbody: " Votre message a été reçue avec succès.",
        adminSubject: "Nouvelle demande d’étude 🚀",
        confirmBtn: "Confirmer",
        cancelBtn: "Annuler",
        salutation: "Cordialement",
        thanks: "Merci pour votre confiance ✨",
        team: "L’équipe ETS Structure",
        newReservation: "Nouvelle demande depuis le site web",
        newContact: "Nouveau message depuis le site web"
    },

    en: {
        userSubject: "Acknowledgment of receipt: your request has been received",
        greeting: "Hello",
        contactformsubject: "Acknowledgment of receipt",
        contactsubjectbody: " Your message has been successfully received.",
        callationDetail: " Your request for the service below has been <strong>cancelled</strong>.",
        callationerror: "If this is an error, please contact us.",
        received: "Your engineering request has been successfully received.",
        confirmed_body: "Your request for the following service has been confirmed.",
        review: "Our team is reviewing your request and will contact you shortly.",
        confirmed: "✅ Your request has been confirmed 🎉",
        cancelled: "Your request has been cancelled ❌",
        adminSubject: "New project request 🚀",
        confirmBtn: "Confirm",
        cancelBtn: "Cancel",
        salutation: "Best regards",
        thanks: "Thank you for your trust ✨",
        team: "ETS Structure Team",
        newReservation: "New project request from the website",
        newContact: "New message from the website"
    },

    de: {
        userSubject: "Eingangsbestätigung: Ihre Anfrage wurde erhalten",
        greeting: "Hallo",
        contactformsubject: "Eingangsbestätigung",
        contactsubjectbody: " Ihre Nachricht wurde erfolgreich erhalten.",
        callationDetail: "Ihre Anfrage fur die unten aufgefuhrte Leistung wurde <strong>storniert</strong>.",
        callationerror: "Wenn dies ein Fehler ist, kontaktieren Sie uns bitte.",
        confirmed_body: "Ihre Anfrage fur die folgende Leistung wurde bestatigt.",
        received: "Ihre Projektanfrage wurde erfolgreich erhalten.",
        review: "Unser Team prüft Ihre Anfrage und wird Sie in Kürze kontaktieren.",
        confirmed: "✅ Ihre Anfrage wurde bestatigt 🎉",
        cancelled: "Ihre Anfrage wurde storniert ❌",
        adminSubject: "Neue Projektanfrage 🚀",
        confirmBtn: "Bestätigen",
        cancelBtn: "Stornieren",
        salutation: "Mit freundlichen Grüßen",
        thanks: "Vielen Dank für Ihr Vertrauen ✨",
        team: "Ihr ETS Structure Team",
        newReservation: "Neue Projektanfrage von der Website",
        newContact: "Neue Nachricht von der Website"
    },
};

// helper
export function getTranslation(lang?: string): Translation {
    if (!lang) return translations.fr;

    const key = lang.toLowerCase() as Lang;

    return translations[key] || translations.fr;
}
