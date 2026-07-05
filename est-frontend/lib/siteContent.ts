export type SiteLocale = "fr" | "en" | "de";

export const getSiteContent = (locale: string) => {
  if (locale === "en" || locale === "de" || locale === "fr") {
    return siteContent[locale];
  }

  return siteContent.fr;
};

const siteContent = {
  fr: {
    cta: "Demander une évaluation",
    home: {
      ctaTitle: "Vous avez un projet de construction, de réhabilitation ou d'expertise technique ?",
      ctaText:
        "Contactez-nous dès aujourd'hui pour discuter de vos besoins et bénéficier d'un accompagnement professionnel adapté à votre projet. Notre équipe met son savoir-faire à votre service pour transformer vos idées en ouvrages durables et performants.",
    },
    services: {
      eyebrow: "Services",
      title: "Prestations d'ingenierie structurelle",
      intro:
        "Chaque mission est adaptee au niveau d'avancement du projet, aux documents disponibles et aux exigences techniques applicables.",
      items: [
        {
          title: "Etudes de structures",
          text: "Etudes en beton arme, structures metalliques et systemes porteurs pour batiments neufs ou existants.",
          tags: ["Beton arme", "Metal", "Bois"],
        },
        {
          title: "Conception et calcul d'ouvrage",
          text: "Predimensionnement, hypotheses de charges, notes de calcul et justification des elements structurels.",
          tags: ["Eurocodes", "Fondations", "Assemblages"],
        },
        {
          title: "Expertise technique",
          text: "Avis independant, analyse de faisabilite, verification documentaire et recommandations exploitables.",
          tags: ["Avis", "Faisabilite", "Conseil"],
        },
        {
          title: "Diagnostic et rehabilitation",
          text: "Analyse de pathologies, fissures, deformations et solutions de reparation ou de renforcement.",
          tags: ["Diagnostic", "Renforcement", "Rehabilitation"],
        },
        {
          title: "Assistance a maitre d'ouvrage",
          text: "Aide a la decision, revue technique, cadrage des besoins et accompagnement des phases projet.",
          tags: ["AMO", "Coordination", "Decision"],
        },
        {
          title: "Controle et suivi de chantier",
          text: "Controle structurel, diagnostic sur site, suivi technique et appui aux entreprises pendant l'execution.",
          tags: ["Chantier", "Controle", "Suivi"],
        },
      ],
    },
    sectors: {
      eyebrow: "Secteurs",
      title: "Domaines d'intervention",
      intro:
        "ETS Structure accompagne les projets de batiment, d'ouvrages d'art, d'infrastructures et d'etudes techniques.",
      items: [
        ["Batiments residentiels", "Villas, immeubles residentiels, bureaux, hotels, centres commerciaux, hopitaux et ecoles."],
        ["Batiments commerciaux", "Structures porteuses, transformations, extensions et verification de capacite."],
        ["Ouvrages industriels", "Structures industrielles, supports techniques, plateformes et contraintes d'exploitation."],
        ["Ouvrages d'art", "Ponts, passerelles, dalots, cadres en beton arme et ouvrages speciaux."],
        ["Infrastructures", "Murs de soutenement, fondations, fosses de construction et reprise en sous-oeuvre."],
        ["Etudes techniques", "Calculs, diagnostics, renforcements structurels et projets en cours."],
      ],
    },
    about: {
      title: "EST-Structure",
      intro:
        "Nous accompagnons les maîtres d'ouvrage, architectes, entreprises et investisseurs dans la conception, l'étude et le suivi technique de leurs projets de construction. Spécialisés en ingénierie des structures, nous mettons notre expertise au service de bâtiments et d'infrastructures sûrs, optimisés et conformes aux normes en vigueur.",
      introFooter:
        "Notre engagement repose sur la qualité technique, la rigueur professionnelle et le respect des délais afin de garantir la réussite de chaque projet. Votre projet mérite une structure solide et une expertise fiable.",
      missionTitle: "Notre mission",
      missionText: [
        "Notre mission est de fournir des solutions d'ingénierie innovantes et adaptées aux réalités locales, tout en répondant aux plus hauts standards de qualité et de sécurité.",
        "Nous contribuons au développement durable des infrastructures et des bâtiments en mettant l'ingénierie au service de la performance, de l'économie et de la pérennité des ouvrages.",
        "À travers chaque projet, nous souhaitons participer activement à la modernisation du secteur de la construction et au développement de l'Afrique.",
      ],
      valuesTitle: "Nos valeurs",
      values: [
        ["Qualité des structures", "Nous concevons des ouvrages fiables, durables et sécurisés. Chaque étude est réalisée avec le souci permanent de garantir la stabilité, la résistance et la pérennité des structures."],
        ["Rigueur professionnelle", "La précision est au cœur de notre métier. Nos analyses, calculs et recommandations sont menés avec méthode, discipline et exigence afin de fournir des solutions techniques de haute qualité."],
        ["Respect des délais", "Nous comprenons l'importance du temps dans un projet de construction. Nous nous engageons à respecter les échéances convenues tout en maintenant un niveau d'excellence élevé dans nos prestations."],
        ["Innovation pour l'Afrique", "Nous croyons au potentiel du continent africain et à l'importance de développer des solutions adaptées à ses besoins. Nous intégrons l'innovation, les nouvelles technologies et les meilleures pratiques internationales afin de contribuer à la construction de l'Afrique de demain."],
      ],
      blocks: [
        ["Vision", "Devenir un partenaire technique reconnu pour les projets de batiment, genie civil et rehabilitation."],
        ["Engagement qualite", "Des methodes documentees, des calculs tracables et une communication orientee decision."],
        ["Perspectives de developpement", "La page evoluera naturellement avec la croissance de l'entreprise et de ses references."],
        ["Partenaires", "Collaboration avec maitres d'ouvrage, architectes, entreprises, bureaux techniques et acteurs du chantier."],
      ],
    },
    resources: {
      title: "Actualites et ressources",
      items: [
        "Articles techniques",
        "Conseils de construction",
        "Reglementations",
        "Innovations en genie civil",
        "Etudes de cas",
        "Rejoignez-nous",
        "Candidature spontanee",
      ],
    },
    evaluation: {
      title: "Demande d'evaluation",
      intro: "Decrivez votre besoin pour recevoir un premier retour adapte a votre projet.",
      firstName: "Nom et prenom",
      serviceType: "Type de service",
      address: "Adresse de prestation",
      date: "Date de la prestation",
      details: "Description detaillee du besoin",
      submit: "Envoyer la demande",
      success: "Demande envoyee avec succes.",
    },
    realisations: {
      title: "Realisations",
      intro: "Apercu de projets, chantiers, diagnostics et interventions techniques.",
    },
    whyChoose: {
      title: "Pourquoi nous choisir ?",
      items: [
        ["Expertise technique reconnue", "Une maîtrise solide des études, calculs, diagnostics et recommandations structurelles."],
        ["Approche personnalisée", "Un accompagnement adapté aux contraintes, aux priorités et à la réalité de chaque projet."],
        ["Solutions optimisées et économiques", "Des choix techniques pensés pour la performance, la sécurité et la maîtrise des coûts."],
        ["Respect des normes internationales", "Des études conduites avec rigueur et conformité aux exigences techniques applicables."],
        ["Accompagnement de la conception à la réalisation", "Un suivi professionnel depuis les premières hypothèses jusqu'aux décisions d'exécution."],
      ],
    },
  },
  en: {
    cta: "Request an assessment",
    home: {
      ctaTitle: "Do you have a construction, rehabilitation or technical assessment project?",
      ctaText:
        "Contact us today to discuss your needs and receive professional support tailored to your project. Our team puts its expertise at your service to turn your ideas into durable, high-performing structures.",
    },
    services: {
      eyebrow: "Services",
      title: "Structural engineering services",
      intro: "Each assignment is tailored to the project stage, available documents and applicable technical requirements.",
      items: [
        { title: "Structural studies", text: "Reinforced concrete, steel and load-bearing systems for new or existing buildings.", tags: ["Concrete", "Steel", "Timber"] },
        { title: "Design and structural calculations", text: "Preliminary design, load assumptions, calculation notes and structural justification.", tags: ["Eurocodes", "Foundations", "Connections"] },
        { title: "Technical expertise", text: "Independent advice, feasibility analysis, document review and practical recommendations.", tags: ["Review", "Feasibility", "Advice"] },
        { title: "Diagnosis and rehabilitation", text: "Analysis of defects, cracking, deformation and repair or strengthening solutions.", tags: ["Diagnosis", "Strengthening", "Rehabilitation"] },
        { title: "Client-side technical assistance", text: "Decision support, technical review, requirement framing and project-phase assistance.", tags: ["Assistance", "Coordination", "Decision"] },
        { title: "Control and site monitoring", text: "Structural control, on-site diagnosis, technical monitoring and support during execution.", tags: ["Site", "Control", "Monitoring"] },
      ],
    },
    sectors: {
      eyebrow: "Sectors",
      title: "Fields of intervention",
      intro: "ETS Structure supports building, civil engineering, infrastructure and technical study projects.",
      items: [
        ["Residential buildings", "Villas, apartment buildings, offices, hotels, shopping centers, hospitals and schools."],
        ["Commercial buildings", "Load-bearing structures, transformations, extensions and capacity checks."],
        ["Industrial works", "Industrial structures, technical supports, platforms and operating constraints."],
        ["Engineering structures", "Bridges, footbridges, culverts, reinforced concrete frames and special structures."],
        ["Infrastructure", "Retaining walls, foundations, excavations and underpinning."],
        ["Technical studies", "Calculations, diagnosis, structural strengthening and ongoing projects."],
      ],
    },
    about: {
      title: "EST-Structure",
      intro: "We support project owners, architects, contractors and investors in the design, study and technical monitoring of construction projects. Specialized in structural engineering, we put our expertise at the service of safe, optimized buildings and infrastructure that comply with current standards.",
      introFooter: "Our commitment is based on technical quality, professional rigor and respect for deadlines to help every project succeed. Your project deserves a solid structure and reliable expertise.",
      missionTitle: "Our mission",
      missionText: [
        "Our mission is to provide innovative engineering solutions adapted to local realities while meeting the highest standards of quality and safety.",
        "We contribute to the sustainable development of infrastructure and buildings by putting engineering at the service of performance, economy and long-term durability.",
        "Through every project, we aim to actively contribute to the modernization of the construction sector and to Africa's development.",
      ],
      valuesTitle: "Our values",
      values: [
        ["Structural quality", "We design reliable, durable and safe structures. Every study is carried out with constant attention to stability, resistance and long-term performance."],
        ["Professional rigor", "Precision is at the heart of our work. Our analyses, calculations and recommendations are conducted with method, discipline and high standards."],
        ["Respect for deadlines", "We understand the importance of time in construction projects. We commit to agreed deadlines while maintaining a high level of excellence."],
        ["Innovation for Africa", "We believe in Africa's potential and in solutions adapted to its needs. We integrate innovation, new technologies and international best practices to help build tomorrow's Africa."],
      ],
      blocks: [
        ["Vision", "Become a trusted technical partner for building, civil engineering and rehabilitation projects."],
        ["Quality commitment", "Documented methods, traceable calculations and decision-oriented communication."],
        ["Development outlook", "This page will naturally evolve as the company grows and expands its references."],
        ["Partners", "Collaboration with clients, architects, contractors, technical offices and site stakeholders."],
      ],
    },
    resources: {
      title: "News and resources",
      items: ["Technical articles", "Construction advice", "Regulations", "Civil engineering innovations", "Case studies", "Join us", "Spontaneous application"],
    },
    evaluation: {
      title: "Assessment request",
      intro: "Describe your need to receive an initial response tailored to your project.",
      firstName: "Full name",
      serviceType: "Service type",
      address: "Service address",
      date: "Preferred date",
      details: "Detailed description",
      submit: "Send request",
      success: "Request sent successfully.",
    },
    realisations: {
      title: "Projects",
      intro: "Overview of projects, worksites, diagnoses and technical interventions.",
    },
    whyChoose: {
      title: "Why choose us?",
      items: [
        ["Recognized technical expertise", "Strong command of structural studies, calculations, diagnostics and recommendations."],
        ["Personalized approach", "Support tailored to the constraints, priorities and reality of each project."],
        ["Optimized and economical solutions", "Technical choices designed for performance, safety and cost control."],
        ["Respect for international standards", "Studies carried out rigorously and in line with applicable technical requirements."],
        ["Support from design to completion", "Professional guidance from the first assumptions through to execution decisions."],
      ],
    },
  },
  de: {
    cta: "Bewertung anfragen",
    home: {
      ctaTitle: "Haben Sie ein Bau-, Sanierungs- oder technisches Gutachtenprojekt?",
      ctaText:
        "Kontaktieren Sie uns noch heute, um Ihre Anforderungen zu besprechen und eine professionelle, auf Ihr Projekt zugeschnittene Begleitung zu erhalten. Unser Team setzt sein Know-how ein, um Ihre Ideen in dauerhafte und leistungsfähige Bauwerke zu verwandeln.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Tragwerksplanung und technische Leistungen",
      intro: "Jede Leistung wird an Projektphase, verfuegbare Unterlagen und technische Anforderungen angepasst.",
      items: [
        { title: "Tragwerksplanung", text: "Stahlbeton, Stahlbau und tragende Systeme fuer Neubauten und Bestandsgebaeude.", tags: ["Stahlbeton", "Stahl", "Holz"] },
        { title: "Entwurf und Berechnung", text: "Vorbemessung, Lastannahmen, statische Berechnungen und Nachweise.", tags: ["Eurocodes", "Fundamente", "Anschluesse"] },
        { title: "Technische Expertise", text: "Unabhaengige Stellungnahmen, Machbarkeitsanalysen, Pruefung von Unterlagen und Empfehlungen.", tags: ["Gutachten", "Machbarkeit", "Beratung"] },
        { title: "Diagnose und Sanierung", text: "Analyse von Schaeden, Rissen, Verformungen sowie Reparatur- und Verstaerkungskonzepte.", tags: ["Diagnose", "Verstaerkung", "Sanierung"] },
        { title: "Bauherrenberatung", text: "Entscheidungsunterstuetzung, technische Pruefung, Bedarfsklaerung und Projektbegleitung.", tags: ["Beratung", "Koordination", "Entscheidung"] },
        { title: "Kontrolle und Baustellenbegleitung", text: "Tragwerkskontrolle, Vor-Ort-Diagnose, technische Begleitung und Unterstuetzung in der Ausfuehrung.", tags: ["Baustelle", "Kontrolle", "Begleitung"] },
      ],
    },
    sectors: {
      eyebrow: "Sektoren",
      title: "Einsatzbereiche",
      intro: "ETS Structure begleitet Hochbau-, Ingenieurbau-, Infrastruktur- und technische Studienprojekte.",
      items: [
        ["Wohngebaeude", "Villen, Mehrfamilienhaeuser, Bueros, Hotels, Einkaufszentren, Krankenhaeuser und Schulen."],
        ["Gewerbebauten", "Tragwerke, Umbauten, Erweiterungen und Tragfaehigkeitspruefungen."],
        ["Industriebau", "Industriestrukturen, technische Traeger, Plattformen und Nutzungsanforderungen."],
        ["Ingenieurbauwerke", "Bruecken, Stege, Durchlaesse, Stahlbetonrahmen und Sonderbauwerke."],
        ["Infrastruktur", "Stuetzwaende, Fundamente, Baugruben und Unterfangungen."],
        ["Technische Studien", "Berechnungen, Diagnosen, strukturelle Verstaerkungen und laufende Projekte."],
      ],
    },
    about: {
      title: "EST-Structure",
      intro: "Wir begleiten Bauherren, Architekten, Unternehmen und Investoren bei der Planung, Untersuchung und technischen Begleitung ihrer Bauprojekte. Als Spezialisten für Tragwerksplanung stellen wir unser Know-how in den Dienst sicherer, optimierter und normgerechter Gebäude und Infrastrukturen.",
      introFooter: "Unser Engagement beruht auf technischer Qualität, professioneller Sorgfalt und der Einhaltung von Fristen, um den Erfolg jedes Projekts zu sichern. Ihr Projekt verdient eine solide Struktur und verlässliche Expertise.",
      missionTitle: "Unsere Mission",
      missionText: [
        "Unsere Mission ist es, innovative Ingenieurlösungen bereitzustellen, die an lokale Realitäten angepasst sind und gleichzeitig höchste Qualitäts- und Sicherheitsstandards erfüllen.",
        "Wir tragen zur nachhaltigen Entwicklung von Infrastrukturen und Gebäuden bei, indem wir Ingenieurwesen in den Dienst von Leistung, Wirtschaftlichkeit und Dauerhaftigkeit stellen.",
        "Mit jedem Projekt möchten wir aktiv zur Modernisierung des Bausektors und zur Entwicklung Afrikas beitragen.",
      ],
      valuesTitle: "Unsere Werte",
      values: [
        ["Qualität der Tragwerke", "Wir planen zuverlässige, dauerhafte und sichere Bauwerke. Jede Studie wird mit dem Ziel durchgeführt, Stabilität, Widerstandsfähigkeit und Langlebigkeit zu gewährleisten."],
        ["Professionelle Sorgfalt", "Präzision steht im Mittelpunkt unserer Arbeit. Unsere Analysen, Berechnungen und Empfehlungen erfolgen methodisch, diszipliniert und mit hohem Anspruch."],
        ["Einhaltung von Fristen", "Wir wissen, wie wichtig Zeit in Bauprojekten ist. Wir verpflichten uns, vereinbarte Termine einzuhalten und zugleich ein hohes Qualitätsniveau zu sichern."],
        ["Innovation für Afrika", "Wir glauben an das Potenzial Afrikas und an Lösungen, die auf seine Bedürfnisse zugeschnitten sind. Wir verbinden Innovation, neue Technologien und internationale Best Practices, um zum Afrika von morgen beizutragen."],
      ],
      blocks: [
        ["Vision", "Ein anerkannter technischer Partner fuer Hochbau, Ingenieurbau und Sanierung werden."],
        ["Qualitaetsanspruch", "Dokumentierte Methoden, nachvollziehbare Berechnungen und entscheidungsorientierte Kommunikation."],
        ["Entwicklungsperspektiven", "Diese Seite waechst natuerlich mit dem Unternehmen und seinen Referenzen."],
        ["Partner", "Zusammenarbeit mit Bauherren, Architekten, Unternehmen, Fachplanern und Projektbeteiligten."],
      ],
    },
    resources: {
      title: "Aktuelles und Ressourcen",
      items: ["Technische Artikel", "Bautipps", "Vorschriften", "Innovationen im Bauingenieurwesen", "Fallstudien", "Mitmachen", "Initiativbewerbung"],
    },
    evaluation: {
      title: "Bewertungsanfrage",
      intro: "Beschreiben Sie Ihr Anliegen, um eine erste projektbezogene Rueckmeldung zu erhalten.",
      firstName: "Name und Vorname",
      serviceType: "Leistungsart",
      address: "Adresse der Leistung",
      date: "Gewuenschtes Datum",
      details: "Detaillierte Beschreibung",
      submit: "Anfrage senden",
      success: "Anfrage erfolgreich gesendet.",
    },
    realisations: {
      title: "Referenzen",
      intro: "Einblick in Projekte, Baustellen, Diagnosen und technische Einsaetze.",
    },
    whyChoose: {
      title: "Warum wir?",
      items: [
        ["Anerkannte technische Expertise", "Fundierte Kompetenz in Studien, Berechnungen, Diagnosen und Tragwerksempfehlungen."],
        ["Individueller Ansatz", "Eine Begleitung, die an die Zwänge, Prioritäten und Realitäten jedes Projekts angepasst ist."],
        ["Optimierte und wirtschaftliche Lösungen", "Technische Entscheidungen für Leistung, Sicherheit und Kostenkontrolle."],
        ["Einhaltung internationaler Normen", "Studien mit Sorgfalt und Konformität zu den geltenden technischen Anforderungen."],
        ["Begleitung von der Planung bis zur Umsetzung", "Professionelle Unterstützung von den ersten Annahmen bis zu Ausführungsentscheidungen."],
      ],
    },
  },
} as const;
