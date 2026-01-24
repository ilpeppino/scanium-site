export const locales = [
  { code: "en", label: "EN", name: "English" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
  { code: "pt-br", label: "PT-BR", name: "Português (BR)" },
];

export const defaultLocale = "en";

export const translations = {
  en: {
    meta: {
      title: "Scanium - AI Scanning for Resellers",
      description: "AI-powered object detection and pricing in your pocket.",
    },
    header: {
      download: "Download",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "AI-powered resale toolkit",
      titleLines: ["Scan it.", "Select it.", "Sell it."],
      description:
        "AI-powered object detection and pricing in your pocket. Turn piles of inventory into clean, ready-to-list data in minutes.",
      ctaPrimary: "Get the app",
      ctaGithub: "GitHub",
      liveScan: "Live Scan",
      detected: "Detected: Mid-century chair",
    },
    features: {
      eyebrow: "Features",
      title: "Intelligent Scanning, Instant Results",
      items: [
        {
          code: "RT",
          title: "Real-Time Detection",
          text: "Point your camera and watch objects get identified instantly.",
        },
        {
          code: "PF",
          title: "Privacy First",
          text: "All processing happens on-device. Your data never leaves your phone.",
        },
        {
          code: "SP",
          title: "Smart Pricing",
          text: "Get instant price estimates based on market data.",
        },
        {
          code: "AI",
          title: "AI Assistant",
          text: "Generate product descriptions and marketplace listings automatically.",
        },
        {
          code: "EX",
          title: "Export Anywhere",
          text: "CSV, ZIP bundles, or direct to eBay and marketplace apps.",
        },
        {
          code: "23",
          title: "23 Categories",
          text: "Furniture, electronics, fashion, and more - trained to recognize what matters.",
        },
      ],
    },
    how: {
      eyebrow: "Workflow",
      title: "From Camera to Cash in Seconds",
      steps: [
        { code: "PT", title: "Point", text: "Open Scanium and point at any item." },
        { code: "ID", title: "Detect", text: "AI identifies the object in real-time." },
        { code: "PR", title: "Price", text: "Get an instant market value estimate." },
        { code: "EX", title: "Export", text: "Export to CSV or list on marketplaces." },
      ],
    },
    useCases: {
      eyebrow: "Use Cases",
      title: "Built for People Who Sell",
      items: [
        {
          title: "Resellers",
          text: "Photograph 50 items, get prices, export listings - in one session.",
        },
        {
          title: "Estate Sales",
          text: "Sort an entire household by value in minutes, not days.",
        },
        {
          title: "Downsizers",
          text: "Know what your stuff is worth before you post it.",
        },
      ],
    },
    download: {
      eyebrow: "Get Started",
      title: "Ready to start scanning?",
      text: "Download Scanium free on Google Play.",
      githubLabel: "GitHub",
      footer: "Available on Android. No account required.",
    },
    footer: {
      privacy: "Privacy Policy",
      tos: "Terms of Service",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Privacy Policy",
      description: "Privacy Policy for the Scanium mobile application.",
      updated: "Last updated: 2026-01-13",
      intro: {
        title: "1. Introduction",
        text:
          'Scanium ("we", "our", "the app") respects your privacy. This policy describes what data we collect, why we collect it, and how it is processed.',
        contact: "Contact: contact@scanium.app",
      },
      collect: {
        title: "2. Information We Collect",
        cameraTitle: "2.1 Camera and Images",
        cameraBullets: [
          "Images are captured only when you actively use the scan feature.",
          "Images are used solely to identify and analyze items.",
          "Images are not used for advertising.",
        ],
        cameraNote:
          "Processing may happen on the device, or images may be sent securely to Scanium's backend services for analysis. Some analyses may involve third-party services (see section 4).",
        userTitle: "2.2 User-Provided Data",
        userText:
          "Scanium may store information you explicitly provide, such as item names, descriptions, prices, and condition. This data is stored so you can manage your scanned items.",
        accountTitle: "2.3 Account Information (Optional)",
        accountText:
          "If you sign in with Google, we collect and store your Google account ID, email address, display name, profile picture URL, and session tokens for authentication and syncing.",
        autoTitle: "2.4 Automatically Collected Information",
        autoText:
          "We may collect app version, device type, OS version, and IP address for security, rate limiting, and performance.",
      },
      use: {
        title: "3. How We Use Information",
        bullets: [
          "Provide and operate Scanium's features.",
          "Analyze scanned items and improve reliability.",
          "Fix bugs and technical issues.",
        ],
        note: "We do not sell user data.",
      },
      thirdParty: {
        title: "4. Third-Party Services",
        text:
          "Third-party services may be used only for core functionality, such as image recognition, and they process data according to their own policies.",
      },
      retention: {
        title: "5. Data Retention",
        bullets: [
          "Scanned item data is retained as long as it is needed for app functionality.",
          "You can remove items within the app.",
          "Images are not retained longer than necessary for processing.",
          "Account data is retained until you delete your account.",
        ],
      },
      deletion: {
        title: "6. Account Deletion and Your Data",
        text1: "You can delete your account in-app or request deletion via the web form.",
        link: "Request Account Deletion",
        text2:
          "Account deletion is immediate and cannot be undone. All your data is permanently removed from our systems within 30 days.",
      },
      security: {
        title: "7. Data Security",
        text:
          "We take reasonable measures to protect your data, but no method of transmission or storage is 100% secure.",
      },
      children: {
        title: "8. Children's Privacy",
        text: "Scanium is not intended for children under the age of 13.",
      },
      rights: {
        title: "9. Your Rights",
        text:
          "Depending on your location, you may have rights under applicable data protection laws. Contact us to exercise these rights.",
      },
      changes: {
        title: "10. Changes to This Policy",
        text:
          "We may update this policy from time to time. Changes will be reflected on this page with an updated revision date.",
      },
      contact: {
        title: "11. Contact",
        text: "Questions? Contact contact@scanium.app.",
      },
    },
    tos: {
      title: "Terms of Service",
      description: "Scanium Terms of Service",
      updated: "Last updated: January 13, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          items: [
            "By using Scanium, you agree to these Terms.",
            "If you do not agree, you must not use the App.",
            "These Terms apply to all users.",
          ],
        },
        {
          title: "2. Description of the Service",
          items: [
            "Scanium is an Android app that detects objects, estimates price ranges, and supports scanning tools.",
            "The App is offline-first and privacy-focused. Cloud classification is optional and only enabled when configured.",
          ],
        },
        {
          title: "3. No Professional Advice",
          items: [
            "Price estimates are informational only and not professional advice.",
            "Scanium does not guarantee accuracy.",
            "You are responsible for verifying prices and listings.",
          ],
        },
        {
          title: "4. Mock Marketplace Disclaimer",
          items: [
            "Marketplace flows are simulated and do not create real listings.",
            "No real transactions are performed through the App at this time.",
            "Future integrations may be subject to additional terms.",
          ],
        },
        {
          title: "5. User Responsibilities",
          items: [
            "Use the App for lawful purposes and comply with applicable laws.",
            "Do not reverse engineer, bypass security, or misuse pricing output.",
          ],
        },
        {
          title: "6. Permissions and Device Access",
          items: [
            "Camera access is required for detection and scanning.",
            "Denying permissions may limit functionality.",
          ],
        },
        {
          title: "7. Data Processing and Privacy",
          items: [
            "On-device processing is the default.",
            "Cloud classification is optional and only enabled when configured.",
            "For details, see our Privacy Policy.",
          ],
        },
        {
          title: "8. Intellectual Property",
          items: [
            "The App and its components are protected by intellectual property laws.",
            "These Terms do not grant ownership rights.",
          ],
        },
        {
          title: "9. Availability and Modifications",
          items: [
            'The App is provided "as is" and "as available."',
            "We may modify, suspend, or discontinue any part of the App.",
          ],
        },
        {
          title: "10. Limitation of Liability",
          items: ["We are not liable for damages arising from use of the App."],
        },
        {
          title: "11. Indemnification",
          items: ["You agree to indemnify and hold harmless the developers from claims arising from misuse."],
        },
        {
          title: "12. Governing Law",
          items: [
            "These Terms are governed by the laws of the Netherlands, with exclusive jurisdiction in the Netherlands.",
          ],
        },
        {
          title: "13. Changes to These Terms",
          items: ["We may update these Terms from time to time. Continued use constitutes acceptance."],
        },
        {
          title: "14. Contact Information",
          items: ["Email: contact@scanium.app"],
        },
      ],
    },
  },
  it: {
    meta: {
      title: "Scanium - Scansione AI per Rivenditori",
      description: "Riconoscimento oggetti e prezzi con IA, sempre in tasca.",
    },
    header: {
      download: "Scarica",
      languageLabel: "Lingua",
    },
    hero: {
      eyebrow: "Toolkit di rivendita con IA",
      titleLines: ["Scansiona.", "Seleziona.", "Vendi."],
      description:
        "Riconoscimento oggetti e prezzi con IA, sempre in tasca. Trasforma pile di inventario in dati pronti per la vendita in pochi minuti.",
      ctaPrimary: "Ottieni l'app",
      ctaGithub: "GitHub",
      liveScan: "Scansione live",
      detected: "Rilevato: sedia mid-century",
    },
    features: {
      eyebrow: "Funzionalita",
      title: "Scansione intelligente, risultati immediati",
      items: [
        {
          code: "RT",
          title: "Rilevamento in tempo reale",
          text: "Inquadra con la fotocamera e identifica subito gli oggetti.",
        },
        {
          code: "PF",
          title: "Privacy prima di tutto",
          text: "Elaborazione solo sul dispositivo. I tuoi dati non lasciano il telefono.",
        },
        {
          code: "SP",
          title: "Prezzi intelligenti",
          text: "Stime immediate basate sui dati di mercato.",
        },
        {
          code: "AI",
          title: "Assistente IA",
          text: "Genera descrizioni prodotto e inserzioni automaticamente.",
        },
        {
          code: "EX",
          title: "Esporta ovunque",
          text: "CSV, pacchetti ZIP o invio diretto a marketplace.",
        },
        {
          code: "23",
          title: "23 categorie",
          text: "Arredi, elettronica, moda e altro - addestrato su cio che conta.",
        },
      ],
    },
    how: {
      eyebrow: "Workflow",
      title: "Dalla fotocamera alla vendita in pochi secondi",
      steps: [
        { code: "PT", title: "Inquadra", text: "Apri Scanium e inquadra un oggetto." },
        { code: "ID", title: "Rileva", text: "L'IA identifica l'oggetto in tempo reale." },
        { code: "PR", title: "Prezzo", text: "Ottieni una stima di valore immediata." },
        { code: "EX", title: "Esporta", text: "Esporta in CSV o pubblica sui marketplace." },
      ],
    },
    useCases: {
      eyebrow: "Casi d'uso",
      title: "Pensato per chi vende",
      items: [
        {
          title: "Rivenditori",
          text: "Fotografa 50 articoli, ottieni i prezzi ed esporta le inserzioni in una sola sessione.",
        },
        {
          title: "Vendite immobiliari",
          text: "Valuta una casa intera in minuti, non in giorni.",
        },
        {
          title: "Ridimensionamento",
          text: "Scopri il valore delle tue cose prima di pubblicarle.",
        },
      ],
    },
    download: {
      eyebrow: "Inizia",
      title: "Pronto per iniziare a scansionare?",
      text: "Scarica Scanium gratis su Google Play.",
      githubLabel: "GitHub",
      footer: "Disponibile su Android. Nessun account richiesto.",
    },
    footer: {
      privacy: "Informativa sulla privacy",
      tos: "Termini di servizio",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Informativa sulla privacy",
      description: "Informativa sulla privacy per l'app Scanium.",
      updated: "Ultimo aggiornamento: 2026-01-13",
      intro: {
        title: "1. Introduzione",
        text:
          'Scanium ("noi", "nostro", "l\'app") rispetta la tua privacy. Questa politica descrive quali dati raccogliamo, perche e come vengono trattati.',
        contact: "Contatto: contact@scanium.app",
      },
      collect: {
        title: "2. Informazioni che raccogliamo",
        cameraTitle: "2.1 Fotocamera e immagini",
        cameraBullets: [
          "Le immagini vengono acquisite solo quando usi attivamente la scansione.",
          "Le immagini servono solo per identificare e analizzare gli oggetti.",
          "Le immagini non sono usate per pubblicita.",
        ],
        cameraNote:
          "L'elaborazione puo avvenire sul dispositivo o tramite servizi backend di Scanium in modo sicuro. Alcune analisi possono usare servizi di terze parti (vedi sezione 4).",
        userTitle: "2.2 Dati forniti dall'utente",
        userText:
          "Scanium puo conservare le informazioni fornite, come nomi degli articoli, descrizioni, prezzi e condizioni. Questi dati servono per gestire gli articoli scansionati.",
        accountTitle: "2.3 Informazioni account (opzionale)",
        accountText:
          "Se accedi con Google, raccogliamo e memorizziamo ID account Google, email, nome visualizzato, URL foto profilo e token di sessione per autenticazione e sincronizzazione.",
        autoTitle: "2.4 Informazioni raccolte automaticamente",
        autoText:
          "Possiamo raccogliere versione app, tipo di dispositivo, versione OS e indirizzo IP per sicurezza, rate limiting e performance.",
      },
      use: {
        title: "3. Come usiamo le informazioni",
        bullets: [
          "Fornire e gestire le funzionalita di Scanium.",
          "Analizzare gli oggetti scansionati e migliorare l'affidabilita.",
          "Risolvere bug e problemi tecnici.",
        ],
        note: "Non vendiamo i dati degli utenti.",
      },
      thirdParty: {
        title: "4. Servizi di terze parti",
        text:
          "I servizi di terze parti possono essere usati solo per funzioni core, come il riconoscimento immagini, e trattano i dati secondo le proprie policy.",
      },
      retention: {
        title: "5. Conservazione dei dati",
        bullets: [
          "I dati degli articoli scansionati sono conservati finche necessari per l'app.",
          "Puoi rimuovere gli articoli nell'app.",
          "Le immagini non sono conservate oltre il necessario per l'elaborazione.",
          "I dati account sono conservati finche non elimini l'account.",
        ],
      },
      deletion: {
        title: "6. Eliminazione account e dati",
        text1: "Puoi eliminare l'account nell'app o richiedere la cancellazione tramite il modulo web.",
        link: "Richiedi eliminazione account",
        text2:
          "L'eliminazione e immediata e non reversibile. Tutti i dati vengono rimossi dai nostri sistemi entro 30 giorni.",
      },
      security: {
        title: "7. Sicurezza dei dati",
        text:
          "Adottiamo misure ragionevoli per proteggere i dati, ma nessun metodo di trasmissione o archiviazione e sicuro al 100%.",
      },
      children: {
        title: "8. Privacy dei minori",
        text: "Scanium non e destinata ai minori di 13 anni.",
      },
      rights: {
        title: "9. I tuoi diritti",
        text:
          "A seconda della tua posizione, potresti avere diritti previsti dalle leggi sulla protezione dei dati. Contattaci per esercitarli.",
      },
      changes: {
        title: "10. Modifiche a questa informativa",
        text:
          "Possiamo aggiornare questa informativa. Le modifiche saranno riportate su questa pagina con una nuova data.",
      },
      contact: {
        title: "11. Contatto",
        text: "Domande? Scrivi a contact@scanium.app.",
      },
    },
    tos: {
      title: "Termini di servizio",
      description: "Termini di servizio Scanium",
      updated: "Ultimo aggiornamento: 13 gennaio 2026",
      sections: [
        {
          title: "1. Accettazione dei termini",
          items: [
            "Usando Scanium accetti questi Termini.",
            "Se non accetti, non usare l'app.",
            "Questi Termini si applicano a tutti gli utenti.",
          ],
        },
        {
          title: "2. Descrizione del servizio",
          items: [
            "Scanium e un'app Android che rileva oggetti, stima prezzi e supporta strumenti di scansione.",
            "L'app e offline-first e focalizzata sulla privacy. La classificazione cloud e opzionale.",
          ],
        },
        {
          title: "3. Nessun parere professionale",
          items: [
            "Le stime di prezzo sono solo informative.",
            "Scanium non garantisce accuratezza.",
            "Sei responsabile della verifica di prezzi e inserzioni.",
          ],
        },
        {
          title: "4. Disclaimer marketplace simulato",
          items: [
            "I flussi marketplace sono simulati e non creano inserzioni reali.",
            "Al momento non vengono effettuate transazioni reali.",
            "Integrazioni future possono essere soggette a termini aggiuntivi.",
          ],
        },
        {
          title: "5. Responsabilita dell'utente",
          items: [
            "Usa l'app per scopi leciti e in conformita alle leggi.",
            "Non aggirare la sicurezza o usare in modo improprio i risultati.",
          ],
        },
        {
          title: "6. Permessi e accesso al dispositivo",
          items: [
            "L'accesso alla fotocamera e necessario per scansione e rilevamento.",
            "Negare i permessi puo limitare le funzionalita.",
          ],
        },
        {
          title: "7. Trattamento dati e privacy",
          items: [
            "L'elaborazione sul dispositivo e l'impostazione predefinita.",
            "La classificazione cloud e opzionale.",
            "Per dettagli, vedi l'informativa sulla privacy.",
          ],
        },
        {
          title: "8. Proprieta intellettuale",
          items: [
            "L'app e i suoi componenti sono protetti da leggi sulla PI.",
            "Questi Termini non concedono diritti di proprieta.",
          ],
        },
        {
          title: "9. Disponibilita e modifiche",
          items: [
            "L'app e fornita \"cosi com'e\" e \"come disponibile.\"",
            "Possiamo modificare, sospendere o interrompere parti dell'app.",
          ],
        },
        {
          title: "10. Limitazione di responsabilita",
          items: ["Non siamo responsabili per danni derivanti dall'uso dell'app."],
        },
        {
          title: "11. Indennizzo",
          items: [
            "Accetti di manlevare gli sviluppatori da reclami derivanti da uso improprio.",
          ],
        },
        {
          title: "12. Legge applicabile",
          items: [
            "Questi Termini sono regolati dalle leggi dei Paesi Bassi, con giurisdizione esclusiva nei Paesi Bassi.",
          ],
        },
        {
          title: "13. Modifiche ai Termini",
          items: [
            "Possiamo aggiornare questi Termini. L'uso continuato implica accettazione.",
          ],
        },
        {
          title: "14. Contatti",
          items: ["Email: contact@scanium.app"],
        },
      ],
    },
  },
  de: {
    meta: {
      title: "Scanium - KI-Scanning fur Wiederverkaufer",
      description: "KI-gestutzte Objekterkennung und Preise in deiner Tasche.",
    },
    header: {
      download: "Download",
      languageLabel: "Sprache",
    },
    hero: {
      eyebrow: "KI-gestutztes Reseller-Toolkit",
      titleLines: ["Scannen.", "Auswahlen.", "Verkaufen."],
      description:
        "KI-gestutzte Objekterkennung und Preise in deiner Tasche. Verwandle Inventar in Minuten in verkaufsfertige Daten.",
      ctaPrimary: "App holen",
      ctaGithub: "GitHub",
      liveScan: "Live-Scan",
      detected: "Erkannt: Mid-Century-Stuhl",
    },
    features: {
      eyebrow: "Funktionen",
      title: "Intelligentes Scannen, sofortige Ergebnisse",
      items: [
        {
          code: "RT",
          title: "Echtzeit-Erkennung",
          text: "Kamera ausrichten und Objekte sofort erkennen.",
        },
        {
          code: "PF",
          title: "Privacy First",
          text: "Verarbeitung erfolgt auf dem Gerat. Daten verlassen dein Telefon nicht.",
        },
        {
          code: "SP",
          title: "Smartes Pricing",
          text: "Sofortige Preisabschatzungen auf Basis von Marktdaten.",
        },
        {
          code: "AI",
          title: "KI-Assistent",
          text: "Produktbeschreibungen und Listings automatisch erstellen.",
        },
        {
          code: "EX",
          title: "Uberall exportieren",
          text: "CSV, ZIP-Pakete oder direkt zu Marketplace-Apps.",
        },
        {
          code: "23",
          title: "23 Kategorien",
          text: "Mobel, Elektronik, Mode und mehr - auf das Wesentliche trainiert.",
        },
      ],
    },
    how: {
      eyebrow: "Ablauf",
      title: "Von der Kamera zum Cash in Sekunden",
      steps: [
        { code: "PT", title: "Anpeilen", text: "Scanium offnen und auf ein Objekt richten." },
        { code: "ID", title: "Erkennen", text: "KI erkennt das Objekt in Echtzeit." },
        { code: "PR", title: "Preis", text: "Sofortige Marktwert-Schatzen erhalten." },
        { code: "EX", title: "Export", text: "Als CSV exportieren oder auf Marktplatze stellen." },
      ],
    },
    useCases: {
      eyebrow: "Use Cases",
      title: "Fur alle, die verkaufen",
      items: [
        {
          title: "Reseller",
          text: "50 Artikel fotografieren, Preise erhalten, Listings exportieren - in einer Session.",
        },
        {
          title: "Nachlassverkauf",
          text: "Einen ganzen Haushalt in Minuten bewerten, nicht in Tagen.",
        },
        {
          title: "Downsizing",
          text: "Den Wert deiner Sachen kennen, bevor du postest.",
        },
      ],
    },
    download: {
      eyebrow: "Loslegen",
      title: "Bereit zum Scannen?",
      text: "Lade Scanium kostenlos bei Google Play herunter.",
      githubLabel: "GitHub",
      footer: "Verfugbar fur Android. Kein Konto erforderlich.",
    },
    footer: {
      privacy: "Datenschutz",
      tos: "Nutzungsbedingungen",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Datenschutzerklarung",
      description: "Datenschutzerklarung fur die Scanium-App.",
      updated: "Stand: 2026-01-13",
      intro: {
        title: "1. Einleitung",
        text:
          'Scanium ("wir", "unser", "die App") respektiert deine Privatsphare. Diese Richtlinie beschreibt, welche Daten wir erfassen, warum und wie sie verarbeitet werden.',
        contact: "Kontakt: contact@scanium.app",
      },
      collect: {
        title: "2. Welche Daten wir erfassen",
        cameraTitle: "2.1 Kamera und Bilder",
        cameraBullets: [
          "Bilder werden nur erfasst, wenn du die Scan-Funktion aktiv nutzt.",
          "Bilder dienen ausschliesslich zur Identifikation und Analyse.",
          "Bilder werden nicht fur Werbung genutzt.",
        ],
        cameraNote:
          "Die Verarbeitung kann auf dem Gerat erfolgen oder sicher an Backend-Services gesendet werden. Einige Analysen konnen Drittanbieter nutzen (siehe Abschnitt 4).",
        userTitle: "2.2 Vom Nutzer bereitgestellte Daten",
        userText:
          "Scanium kann von dir bereitgestellte Angaben speichern, z. B. Namen, Beschreibungen, Preise und Zustand. Diese Daten helfen dir bei der Verwaltung deiner Scans.",
        accountTitle: "2.3 Kontoinformationen (optional)",
        accountText:
          "Wenn du dich mit Google anmeldest, speichern wir Google-ID, E-Mail, Anzeigenamen, Profilbild-URL und Session-Tokens fur Authentifizierung und Sync.",
        autoTitle: "2.4 Automatisch erfasste Informationen",
        autoText:
          "Wir konnen App-Version, Geratetyp, OS-Version und IP-Adresse fur Sicherheit und Performance erfassen.",
      },
      use: {
        title: "3. Wie wir Informationen nutzen",
        bullets: [
          "Bereitstellung und Betrieb der Scanium-Funktionen.",
          "Analyse von Scans und Verbesserung der Zuverlassigkeit.",
          "Behebung von Bugs und technischen Problemen.",
        ],
        note: "Wir verkaufen keine Nutzerdaten.",
      },
      thirdParty: {
        title: "4. Drittanbieter",
        text:
          "Drittanbieter konnen fur Kernfunktionen wie Bilderkennung eingesetzt werden und verarbeiten Daten nach ihren Richtlinien.",
      },
      retention: {
        title: "5. Aufbewahrung",
        bullets: [
          "Scan-Daten bleiben so lange erhalten, wie sie fur die App-Funktion benotigt werden.",
          "Du kannst Artikel in der App entfernen.",
          "Bilder werden nicht langer als notwendig gespeichert.",
          "Kontodaten bleiben bis zur Loschung erhalten.",
        ],
      },
      deletion: {
        title: "6. Kontoloschung und Daten",
        text1: "Du kannst dein Konto in der App loschen oder per Webformular beantragen.",
        link: "Kontoloschung anfordern",
        text2:
          "Die Loschung ist sofort und kann nicht ruckgangig gemacht werden. Alle Daten werden innerhalb von 30 Tagen entfernt.",
      },
      security: {
        title: "7. Datensicherheit",
        text:
          "Wir ergreifen angemessene Schutzmassnahmen, aber kein System ist zu 100% sicher.",
      },
      children: {
        title: "8. Datenschutz fur Kinder",
        text: "Scanium richtet sich nicht an Kinder unter 13 Jahren.",
      },
      rights: {
        title: "9. Deine Rechte",
        text:
          "Je nach Standort hast du Rechte nach Datenschutzgesetzen. Kontaktiere uns zur Ausubung.",
      },
      changes: {
        title: "10. Anderungen dieser Richtlinie",
        text: "Diese Richtlinie kann aktualisiert werden. Anderungen werden auf dieser Seite angezeigt.",
      },
      contact: {
        title: "11. Kontakt",
        text: "Fragen? Kontakt: contact@scanium.app.",
      },
    },
    tos: {
      title: "Nutzungsbedingungen",
      description: "Scanium Nutzungsbedingungen",
      updated: "Stand: 13. Januar 2026",
      sections: [
        {
          title: "1. Annahme der Bedingungen",
          items: [
            "Durch die Nutzung von Scanium stimmst du diesen Bedingungen zu.",
            "Wenn du nicht zustimmst, darfst du die App nicht nutzen.",
            "Diese Bedingungen gelten fur alle Nutzer.",
          ],
        },
        {
          title: "2. Beschreibung des Dienstes",
          items: [
            "Scanium ist eine Android-App fur Objekterkennung, Preisabschatzung und Scan-Tools.",
            "Die App ist offline-first und datenschutzorientiert. Cloud-Klassifikation ist optional.",
          ],
        },
        {
          title: "3. Kein professioneller Rat",
          items: [
            "Preisangaben sind nur informativ.",
            "Scanium garantiert keine Genauigkeit.",
            "Du bist fur die Uberprufung von Preisen und Listings verantwortlich.",
          ],
        },
        {
          title: "4. Simulierter Marketplace",
          items: [
            "Marketplace-Flows sind simuliert und erzeugen keine echten Listings.",
            "Es werden derzeit keine echten Transaktionen durchgefuhrt.",
            "Zukunftige Integrationen konnen zusatzlichen Bedingungen unterliegen.",
          ],
        },
        {
          title: "5. Pflichten der Nutzer",
          items: [
            "Nutze die App rechtmassig und im Einklang mit Gesetzen.",
            "Keine Umgehung von Sicherheit oder Missbrauch der Preisangaben.",
          ],
        },
        {
          title: "6. Berechtigungen und Geratezugriff",
          items: [
            "Kamerazugriff ist fur Scan und Erkennung erforderlich.",
            "Verweigerung kann Funktionen einschranken.",
          ],
        },
        {
          title: "7. Datenverarbeitung und Datenschutz",
          items: [
            "Standard ist Verarbeitung auf dem Gerat.",
            "Cloud-Klassifikation ist optional.",
            "Details siehe Datenschutzerklarung.",
          ],
        },
        {
          title: "8. Geistiges Eigentum",
          items: [
            "Die App und ihre Komponenten sind urheberrechtlich geschutzt.",
            "Diese Bedingungen gewahren keine Eigentumsrechte.",
          ],
        },
        {
          title: "9. Verfugbarkeit und Anderungen",
          items: [
            'Die App wird "wie besehen" und "wie verfugbar" bereitgestellt.',
            "Wir konnen Teile der App andern, aussetzen oder einstellen.",
          ],
        },
        {
          title: "10. Haftungsbeschrankung",
          items: ["Wir haften nicht fur Schaden aus der Nutzung der App."],
        },
        {
          title: "11. Freistellung",
          items: ["Du stellst die Entwickler von Anspruchen aus Missbrauch frei."],
        },
        {
          title: "12. Anwendbares Recht",
          items: [
            "Diese Bedingungen unterliegen dem Recht der Niederlande mit ausschliesslicher Gerichtsbarkeit.",
          ],
        },
        {
          title: "13. Anderungen dieser Bedingungen",
          items: [
            "Wir konnen diese Bedingungen aktualisieren. Weitere Nutzung gilt als Zustimmung.",
          ],
        },
        {
          title: "14. Kontakt",
          items: ["E-Mail: contact@scanium.app"],
        },
      ],
    },
  },
  fr: {
    meta: {
      title: "Scanium - Scanner IA pour revendeurs",
      description: "Detection d'objets et estimation des prix par IA, dans votre poche.",
    },
    header: {
      download: "Telecharger",
      languageLabel: "Langue",
    },
    hero: {
      eyebrow: "Outil de revente alimente par l'IA",
      titleLines: ["Scanner.", "Selectionner.", "Vendre."],
      description:
        "Detection d'objets et estimation des prix par IA, dans votre poche. Transformez des piles d'inventaire en donnees pretes a vendre en quelques minutes.",
      ctaPrimary: "Obtenir l'app",
      ctaGithub: "GitHub",
      liveScan: "Scan en direct",
      detected: "Detecte : chaise mid-century",
    },
    features: {
      eyebrow: "Fonctionnalites",
      title: "Scan intelligent, resultats immediats",
      items: [
        {
          code: "RT",
          title: "Detection en temps reel",
          text: "Cadrez avec la camera et identifiez instantanement les objets.",
        },
        {
          code: "PF",
          title: "Confidentialite d'abord",
          text: "Traitement sur l'appareil. Vos donnees ne quittent pas le telephone.",
        },
        {
          code: "SP",
          title: "Prix intelligents",
          text: "Estimations immediates basees sur les donnees du marche.",
        },
        {
          code: "AI",
          title: "Assistant IA",
          text: "Generez automatiquement des descriptions et des annonces.",
        },
        {
          code: "EX",
          title: "Exporter partout",
          text: "CSV, ZIP ou export vers les marketplaces.",
        },
        {
          code: "23",
          title: "23 categories",
          text: "Meubles, electronique, mode et plus - entraine sur l'essentiel.",
        },
      ],
    },
    how: {
      eyebrow: "Workflow",
      title: "De la camera a la vente en quelques secondes",
      steps: [
        { code: "PT", title: "Pointer", text: "Ouvrez Scanium et visez un objet." },
        { code: "ID", title: "Detecter", text: "L'IA identifie l'objet en temps reel." },
        { code: "PR", title: "Prix", text: "Obtenez une estimation immediate de valeur." },
        { code: "EX", title: "Exporter", text: "Exportez en CSV ou publiez sur des marketplaces." },
      ],
    },
    useCases: {
      eyebrow: "Cas d'usage",
      title: "Concu pour ceux qui vendent",
      items: [
        {
          title: "Revendeurs",
          text: "Photographiez 50 articles, obtenez les prix et exportez les annonces en une session.",
        },
        {
          title: "Ventes de succession",
          text: "Trier une maison entiere par valeur en minutes, pas en jours.",
        },
        {
          title: "Rationalisation",
          text: "Connaitre la valeur de vos objets avant de publier.",
        },
      ],
    },
    download: {
      eyebrow: "Demarrer",
      title: "Pret a scanner ?",
      text: "Telechargez Scanium gratuitement sur Google Play.",
      githubLabel: "GitHub",
      footer: "Disponible sur Android. Aucun compte requis.",
    },
    footer: {
      privacy: "Politique de confidentialite",
      tos: "Conditions d'utilisation",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Politique de confidentialite",
      description: "Politique de confidentialite pour l'application Scanium.",
      updated: "Derniere mise a jour : 2026-01-13",
      intro: {
        title: "1. Introduction",
        text:
          'Scanium ("nous", "notre", "l\'app") respecte votre vie privee. Cette politique explique les donnees collectees, pourquoi et comment elles sont traitees.',
        contact: "Contact : contact@scanium.app",
      },
      collect: {
        title: "2. Informations collectees",
        cameraTitle: "2.1 Camera et images",
        cameraBullets: [
          "Les images sont capturees uniquement lors de l'utilisation du scan.",
          "Les images servent uniquement a identifier et analyser les objets.",
          "Les images ne sont pas utilisees pour la publicite.",
        ],
        cameraNote:
          "Le traitement peut se faire sur l'appareil ou via des services backend securises. Certaines analyses peuvent impliquer des services tiers (voir section 4).",
        userTitle: "2.2 Donnees fournies par l'utilisateur",
        userText:
          "Scanium peut enregistrer les informations que vous fournissez, comme noms, descriptions, prix et etat. Ces donnees servent a gerer vos objets.",
        accountTitle: "2.3 Informations de compte (optionnel)",
        accountText:
          "Si vous vous connectez avec Google, nous stockons ID, email, nom d'affichage, URL de photo de profil et jetons de session.",
        autoTitle: "2.4 Informations collecteess automatiquement",
        autoText:
          "Nous pouvons collecter version de l'app, type d'appareil, version OS et IP pour securite et performance.",
      },
      use: {
        title: "3. Utilisation des informations",
        bullets: [
          "Fournir et exploiter les fonctionnalites de Scanium.",
          "Analyser les objets scannes et ameliorer la fiabilite.",
          "Corriger les bugs et problemes techniques.",
        ],
        note: "Nous ne vendons pas les donnees des utilisateurs.",
      },
      thirdParty: {
        title: "4. Services tiers",
        text:
          "Des services tiers peuvent etre utilises pour les fonctions principales comme la reconnaissance d'images.",
      },
      retention: {
        title: "5. Conservation des donnees",
        bullets: [
          "Les donnees scannees sont conservees tant que necessaire pour l'app.",
          "Vous pouvez supprimer des elements dans l'app.",
          "Les images ne sont pas conservees plus longtemps que necessaire.",
          "Les donnees de compte sont conservees jusqu'a suppression.",
        ],
      },
      deletion: {
        title: "6. Suppression du compte et donnees",
        text1: "Vous pouvez supprimer votre compte dans l'app ou via le formulaire web.",
        link: "Demander la suppression du compte",
        text2:
          "La suppression est immediate et irreversible. Toutes les donnees sont supprimees sous 30 jours.",
      },
      security: {
        title: "7. Securite des donnees",
        text:
          "Nous prenons des mesures raisonnables, mais aucun systeme n'est securise a 100%.",
      },
      children: {
        title: "8. Confidentialite des enfants",
        text: "Scanium n'est pas destine aux enfants de moins de 13 ans.",
      },
      rights: {
        title: "9. Vos droits",
        text:
          "Selon votre pays, vous pouvez disposer de droits en matiere de protection des donnees. Contactez-nous pour les exercer.",
      },
      changes: {
        title: "10. Modifications de cette politique",
        text:
          "Nous pouvons mettre a jour cette politique. Les changements seront indiques avec une nouvelle date.",
      },
      contact: {
        title: "11. Contact",
        text: "Questions ? Contactez contact@scanium.app.",
      },
    },
    tos: {
      title: "Conditions d'utilisation",
      description: "Conditions d'utilisation Scanium",
      updated: "Derniere mise a jour : 13 janvier 2026",
      sections: [
        {
          title: "1. Acceptation des conditions",
          items: [
            "En utilisant Scanium, vous acceptez ces conditions.",
            "Si vous n'acceptez pas, n'utilisez pas l'app.",
            "Ces conditions s'appliquent a tous les utilisateurs.",
          ],
        },
        {
          title: "2. Description du service",
          items: [
            "Scanium est une application Android qui detecte les objets et estime les prix.",
            "L'app est offline-first et axee sur la confidentialite. La classification cloud est optionnelle.",
          ],
        },
        {
          title: "3. Aucun conseil professionnel",
          items: [
            "Les estimations de prix sont informatives uniquement.",
            "Scanium ne garantit pas l'exactitude.",
            "Vous etes responsable de verifier les prix et annonces.",
          ],
        },
        {
          title: "4. Marketplace simule",
          items: [
            "Les flux marketplace sont simules et ne creent pas d'annonces reelles.",
            "Aucune transaction reelle n'est effectuee pour l'instant.",
            "Les integrations futures peuvent etre soumises a des conditions additionnelles.",
          ],
        },
        {
          title: "5. Responsabilites de l'utilisateur",
          items: [
            "Utilisez l'app legalement et conformement aux lois.",
            "Ne contournez pas la securite ni n'abusez des estimations.",
          ],
        },
        {
          title: "6. Autorisations et acces a l'appareil",
          items: [
            "L'acces a la camera est requis pour la detection.",
            "Refuser les permissions peut limiter les fonctionnalites.",
          ],
        },
        {
          title: "7. Traitement des donnees et confidentialite",
          items: [
            "Le traitement sur l'appareil est le comportement par defaut.",
            "La classification cloud est optionnelle.",
            "Pour plus de details, voir la politique de confidentialite.",
          ],
        },
        {
          title: "8. Propriete intellectuelle",
          items: [
            "L'app et ses composants sont proteges par des lois de PI.",
            "Ces conditions ne conferent aucun droit de propriete.",
          ],
        },
        {
          title: "9. Disponibilite et modifications",
          items: [
            "L'app est fournie \"telle quelle\" et \"selon disponibilite.\"",
            "Nous pouvons modifier, suspendre ou arreter des parties de l'app.",
          ],
        },
        {
          title: "10. Limitation de responsabilite",
          items: ["Nous ne sommes pas responsables des dommages lies a l'utilisation de l'app."],
        },
        {
          title: "11. Indemnisation",
          items: ["Vous acceptez d'indemniser les developpeurs en cas d'usage abusif."],
        },
        {
          title: "12. Droit applicable",
          items: [
            "Ces conditions sont regies par les lois des Pays-Bas, avec juridiction exclusive aux Pays-Bas.",
          ],
        },
        {
          title: "13. Modifications des conditions",
          items: ["Nous pouvons mettre a jour ces conditions. L'usage continu vaut acceptation."],
        },
        {
          title: "14. Contact",
          items: ["Email : contact@scanium.app"],
        },
      ],
    },
  },
  es: {
    meta: {
      title: "Scanium - Escaneo IA para revendedores",
      description: "Deteccion de objetos y precios con IA en tu bolsillo.",
    },
    header: {
      download: "Descargar",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Kit de reventa con IA",
      titleLines: ["Escanea.", "Selecciona.", "Vende."],
      description:
        "Deteccion de objetos y precios con IA en tu bolsillo. Convierte inventario en datos listos para publicar en minutos.",
      ctaPrimary: "Obtener la app",
      ctaGithub: "GitHub",
      liveScan: "Escaneo en vivo",
      detected: "Detectado: silla mid-century",
    },
    features: {
      eyebrow: "Funciones",
      title: "Escaneo inteligente, resultados instantaneos",
      items: [
        {
          code: "RT",
          title: "Deteccion en tiempo real",
          text: "Apunta la camara y reconoce objetos al instante.",
        },
        {
          code: "PF",
          title: "Privacidad primero",
          text: "Procesamiento en el dispositivo. Tus datos no salen del telefono.",
        },
        {
          code: "SP",
          title: "Precios inteligentes",
          text: "Estimaciones al instante basadas en datos de mercado.",
        },
        {
          code: "AI",
          title: "Asistente IA",
          text: "Genera descripciones y anuncios automaticamente.",
        },
        {
          code: "EX",
          title: "Exporta a cualquier lugar",
          text: "CSV, paquetes ZIP o directo a marketplaces.",
        },
        {
          code: "23",
          title: "23 categorias",
          text: "Muebles, electronica, moda y mas - entrenado en lo que importa.",
        },
      ],
    },
    how: {
      eyebrow: "Flujo",
      title: "De la camara al dinero en segundos",
      steps: [
        { code: "PT", title: "Apunta", text: "Abre Scanium y apunta a un articulo." },
        { code: "ID", title: "Detecta", text: "La IA identifica el objeto en tiempo real." },
        { code: "PR", title: "Precio", text: "Obten una estimacion de valor inmediata." },
        { code: "EX", title: "Exporta", text: "Exporta a CSV o publica en marketplaces." },
      ],
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Hecho para quienes venden",
      items: [
        {
          title: "Revendedores",
          text: "Fotografia 50 articulos, obten precios y exporta anuncios en una sola sesion.",
        },
        {
          title: "Ventas de herencia",
          text: "Clasifica una casa completa por valor en minutos, no en dias.",
        },
        {
          title: "Reduccion",
          text: "Conoce el valor de tus cosas antes de publicar.",
        },
      ],
    },
    download: {
      eyebrow: "Comenzar",
      title: "Listo para escanear?",
      text: "Descarga Scanium gratis en Google Play.",
      githubLabel: "GitHub",
      footer: "Disponible en Android. No se requiere cuenta.",
    },
    footer: {
      privacy: "Politica de privacidad",
      tos: "Terminos del servicio",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Politica de privacidad",
      description: "Politica de privacidad para la aplicacion Scanium.",
      updated: "Ultima actualizacion: 2026-01-13",
      intro: {
        title: "1. Introduccion",
        text:
          'Scanium ("nosotros", "nuestro", "la app") respeta tu privacidad. Esta politica describe que datos recopilamos y como se procesan.',
        contact: "Contacto: contact@scanium.app",
      },
      collect: {
        title: "2. Informacion que recopilamos",
        cameraTitle: "2.1 Camara e imagenes",
        cameraBullets: [
          "Las imagenes se capturan solo cuando usas la funcion de escaneo.",
          "Las imagenes se usan solo para identificar y analizar articulos.",
          "Las imagenes no se usan para publicidad.",
        ],
        cameraNote:
          "El procesamiento puede ocurrir en el dispositivo o en servicios backend seguros. Algunas analisis pueden usar terceros (ver seccion 4).",
        userTitle: "2.2 Datos proporcionados por el usuario",
        userText:
          "Scanium puede almacenar informacion proporcionada, como nombres, descripciones, precios y condicion. Esto ayuda a gestionar tus articulos.",
        accountTitle: "2.3 Informacion de cuenta (opcional)",
        accountText:
          "Si inicias sesion con Google, almacenamos ID, email, nombre mostrado, URL de foto y tokens de sesion.",
        autoTitle: "2.4 Informacion recopilada automaticamente",
        autoText:
          "Podemos recopilar version de la app, tipo de dispositivo, version del SO e IP por seguridad y rendimiento.",
      },
      use: {
        title: "3. Como usamos la informacion",
        bullets: [
          "Proveer y operar las funciones de Scanium.",
          "Analizar articulos escaneados y mejorar la fiabilidad.",
          "Corregir errores y problemas tecnicos.",
        ],
        note: "No vendemos datos de usuarios.",
      },
      thirdParty: {
        title: "4. Servicios de terceros",
        text:
          "Se pueden usar servicios de terceros para funciones centrales como reconocimiento de imagenes.",
      },
      retention: {
        title: "5. Retencion de datos",
        bullets: [
          "Los datos escaneados se mantienen mientras sean necesarios.",
          "Puedes eliminar articulos en la app.",
          "Las imagenes no se guardan mas de lo necesario.",
          "Los datos de cuenta se conservan hasta su eliminacion.",
        ],
      },
      deletion: {
        title: "6. Eliminacion de cuenta y datos",
        text1: "Puedes eliminar tu cuenta en la app o solicitarlo por formulario web.",
        link: "Solicitar eliminacion de cuenta",
        text2:
          "La eliminacion es inmediata e irreversible. Todos los datos se eliminan en 30 dias.",
      },
      security: {
        title: "7. Seguridad de datos",
        text:
          "Tomamos medidas razonables, pero ningun metodo es 100% seguro.",
      },
      children: {
        title: "8. Privacidad infantil",
        text: "Scanium no esta destinada a menores de 13 anos.",
      },
      rights: {
        title: "9. Tus derechos",
        text:
          "Segun tu ubicacion, puedes tener derechos de proteccion de datos. Contactanos para ejercerlos.",
      },
      changes: {
        title: "10. Cambios en esta politica",
        text:
          "Podemos actualizar esta politica. Los cambios se reflejaran en esta pagina.",
      },
      contact: {
        title: "11. Contacto",
        text: "Preguntas? Contacta a contact@scanium.app.",
      },
    },
    tos: {
      title: "Terminos del servicio",
      description: "Terminos del servicio de Scanium",
      updated: "Ultima actualizacion: 13 de enero de 2026",
      sections: [
        {
          title: "1. Aceptacion de terminos",
          items: [
            "Al usar Scanium, aceptas estos Terminos.",
            "Si no aceptas, no debes usar la app.",
            "Estos Terminos aplican a todos los usuarios.",
          ],
        },
        {
          title: "2. Descripcion del servicio",
          items: [
            "Scanium es una app Android que detecta objetos, estima precios y admite herramientas de escaneo.",
            "La app es offline-first y centrada en privacidad. La clasificacion en la nube es opcional.",
          ],
        },
        {
          title: "3. Sin asesoramiento profesional",
          items: [
            "Las estimaciones de precio son solo informativas.",
            "Scanium no garantiza exactitud.",
            "Eres responsable de verificar precios y anuncios.",
          ],
        },
        {
          title: "4. Aviso de marketplace simulado",
          items: [
            "Los flujos de marketplace son simulados y no crean anuncios reales.",
            "No se realizan transacciones reales por ahora.",
            "Las integraciones futuras pueden estar sujetas a terminos adicionales.",
          ],
        },
        {
          title: "5. Responsabilidades del usuario",
          items: [
            "Usa la app legalmente y conforme a las leyes.",
            "No abuses ni eludas la seguridad ni el resultado de precios.",
          ],
        },
        {
          title: "6. Permisos y acceso al dispositivo",
          items: [
            "Se requiere acceso a la camara para deteccion y escaneo.",
            "Negar permisos puede limitar funciones.",
          ],
        },
        {
          title: "7. Procesamiento de datos y privacidad",
          items: [
            "El procesamiento en el dispositivo es el predeterminado.",
            "La clasificacion en la nube es opcional.",
            "Para detalles, consulta la politica de privacidad.",
          ],
        },
        {
          title: "8. Propiedad intelectual",
          items: [
            "La app y sus componentes estan protegidos por leyes de PI.",
            "Estos terminos no otorgan derechos de propiedad.",
          ],
        },
        {
          title: "9. Disponibilidad y modificaciones",
          items: [
            'La app se ofrece "tal cual" y "segun disponibilidad."',
            "Podemos modificar, suspender o discontinuar partes de la app.",
          ],
        },
        {
          title: "10. Limitacion de responsabilidad",
          items: ["No somos responsables de danos por el uso de la app."],
        },
        {
          title: "11. Indemnizacion",
          items: [
            "Aceptas indemnizar a los desarrolladores por reclamos derivados del uso indebido.",
          ],
        },
        {
          title: "12. Ley aplicable",
          items: [
            "Estos Terminos se rigen por las leyes de los Paises Bajos, con jurisdiccion exclusiva en los Paises Bajos.",
          ],
        },
        {
          title: "13. Cambios en los terminos",
          items: ["Podemos actualizar estos Terminos. El uso continuo implica aceptacion."],
        },
        {
          title: "14. Contacto",
          items: ["Correo: contact@scanium.app"],
        },
      ],
    },
  },
  "pt-br": {
    meta: {
      title: "Scanium - Escaneamento IA para revendedores",
      description: "Deteccao de objetos e precos com IA no seu bolso.",
    },
    header: {
      download: "Baixar",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Kit de revenda com IA",
      titleLines: ["Escaneie.", "Selecione.", "Venda."],
      description:
        "Deteccao de objetos e precos com IA no seu bolso. Transforme inventario em dados prontos para listar em minutos.",
      ctaPrimary: "Baixar app",
      ctaGithub: "GitHub",
      liveScan: "Escaneamento ao vivo",
      detected: "Detectado: cadeira mid-century",
    },
    features: {
      eyebrow: "Recursos",
      title: "Escaneamento inteligente, resultados imediatos",
      items: [
        {
          code: "RT",
          title: "Deteccao em tempo real",
          text: "Aponte a camera e identifique objetos na hora.",
        },
        {
          code: "PF",
          title: "Privacidade em primeiro lugar",
          text: "Processamento no dispositivo. Seus dados nao saem do telefone.",
        },
        {
          code: "SP",
          title: "Preco inteligente",
          text: "Estimativas imediatas baseadas em dados de mercado.",
        },
        {
          code: "AI",
          title: "Assistente de IA",
          text: "Gere descricoes de produto e anuncios automaticamente.",
        },
        {
          code: "EX",
          title: "Exporte para qualquer lugar",
          text: "CSV, pacotes ZIP ou envio para marketplaces.",
        },
        {
          code: "23",
          title: "23 categorias",
          text: "Moveis, eletronicos, moda e mais - treinado no que importa.",
        },
      ],
    },
    how: {
      eyebrow: "Fluxo",
      title: "Da camera ao dinheiro em segundos",
      steps: [
        { code: "PT", title: "Aponte", text: "Abra o Scanium e aponte para um item." },
        { code: "ID", title: "Detecte", text: "A IA identifica o objeto em tempo real." },
        { code: "PR", title: "Preco", text: "Receba uma estimativa de valor imediata." },
        { code: "EX", title: "Exporte", text: "Exporte para CSV ou publique em marketplaces." },
      ],
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Feito para quem vende",
      items: [
        {
          title: "Revendedores",
          text: "Fotografe 50 itens, obtenha precos e exporte anuncios em uma sessao.",
        },
        {
          title: "Vendas de espolio",
          text: "Classifique uma casa inteira por valor em minutos, nao em dias.",
        },
        {
          title: "Desapego",
          text: "Saiba o valor das suas coisas antes de publicar.",
        },
      ],
    },
    download: {
      eyebrow: "Comecar",
      title: "Pronto para escanear?",
      text: "Baixe o Scanium gratuitamente no Google Play.",
      githubLabel: "GitHub",
      footer: "Disponivel no Android. Nao e necessario conta.",
    },
    footer: {
      privacy: "Politica de privacidade",
      tos: "Termos de uso",
      copyright: "(c) 2026 Scanium",
    },
    privacy: {
      title: "Politica de privacidade",
      description: "Politica de privacidade do aplicativo Scanium.",
      updated: "Ultima atualizacao: 2026-01-13",
      intro: {
        title: "1. Introducao",
        text:
          'Scanium ("nos", "nosso", "o app") respeita sua privacidade. Esta politica descreve quais dados coletamos e como sao processados.',
        contact: "Contato: contact@scanium.app",
      },
      collect: {
        title: "2. Informacoes que coletamos",
        cameraTitle: "2.1 Camera e imagens",
        cameraBullets: [
          "As imagens sao capturadas apenas quando voce usa o scan.",
          "As imagens sao usadas apenas para identificar e analisar itens.",
          "As imagens nao sao usadas para publicidade.",
        ],
        cameraNote:
          "O processamento pode ocorrer no dispositivo ou em servicos backend seguros. Algumas analises podem envolver terceiros (ver secao 4).",
        userTitle: "2.2 Dados fornecidos pelo usuario",
        userText:
          "O Scanium pode armazenar informacoes fornecidas, como nomes, descricoes, precos e condicao. Isso ajuda a gerenciar itens escaneados.",
        accountTitle: "2.3 Informacoes de conta (opcional)",
        accountText:
          "Ao entrar com Google, armazenamos ID, email, nome exibido, URL da foto e tokens de sessao.",
        autoTitle: "2.4 Informacoes coletadas automaticamente",
        autoText:
          "Podemos coletar versao do app, tipo de dispositivo, versao do SO e IP por seguranca e desempenho.",
      },
      use: {
        title: "3. Como usamos as informacoes",
        bullets: [
          "Fornecer e operar as funcionalidades do Scanium.",
          "Analisar itens escaneados e melhorar a confiabilidade.",
          "Corrigir bugs e problemas tecnicos.",
        ],
        note: "Nao vendemos dados de usuarios.",
      },
      thirdParty: {
        title: "4. Servicos de terceiros",
        text:
          "Servicos de terceiros podem ser usados para funcoes principais, como reconhecimento de imagens.",
      },
      retention: {
        title: "5. Retencao de dados",
        bullets: [
          "Dados escaneados sao mantidos enquanto forem necessarios para o app.",
          "Voce pode remover itens no app.",
          "Imagens nao sao mantidas alem do necessario.",
          "Dados de conta sao mantidos ate a exclusao.",
        ],
      },
      deletion: {
        title: "6. Exclusao de conta e dados",
        text1: "Voce pode excluir a conta no app ou solicitar pelo formulario web.",
        link: "Solicitar exclusao de conta",
        text2:
          "A exclusao e imediata e irreversivel. Todos os dados sao removidos em ate 30 dias.",
      },
      security: {
        title: "7. Seguranca de dados",
        text:
          "Adotamos medidas razoaveis, mas nenhum metodo e 100% seguro.",
      },
      children: {
        title: "8. Privacidade infantil",
        text: "Scanium nao e destinado a menores de 13 anos.",
      },
      rights: {
        title: "9. Seus direitos",
        text:
          "Dependendo da sua localizacao, voce pode ter direitos de protecao de dados. Fale conosco para exercer.",
      },
      changes: {
        title: "10. Mudancas nesta politica",
        text:
          "Podemos atualizar esta politica. As mudancas serao refletidas nesta pagina.",
      },
      contact: {
        title: "11. Contato",
        text: "Duvidas? Contate contact@scanium.app.",
      },
    },
    tos: {
      title: "Termos de uso",
      description: "Termos de uso do Scanium",
      updated: "Ultima atualizacao: 13 de janeiro de 2026",
      sections: [
        {
          title: "1. Aceite dos termos",
          items: [
            "Ao usar o Scanium, voce concorda com estes Termos.",
            "Se nao concordar, nao use o app.",
            "Estes Termos se aplicam a todos os usuarios.",
          ],
        },
        {
          title: "2. Descricao do servico",
          items: [
            "Scanium e um app Android que detecta objetos e estima precos.",
            "O app e offline-first e focado em privacidade. A classificacao na nuvem e opcional.",
          ],
        },
        {
          title: "3. Sem aconselhamento profissional",
          items: [
            "Estimativas de preco sao apenas informativas.",
            "O Scanium nao garante precisao.",
            "Voce e responsavel por verificar precos e anuncios.",
          ],
        },
        {
          title: "4. Aviso de marketplace simulado",
          items: [
            "Fluxos de marketplace sao simulados e nao criam anuncios reais.",
            "Nenhuma transacao real e realizada no momento.",
            "Integracoes futuras podem exigir termos adicionais.",
          ],
        },
        {
          title: "5. Responsabilidades do usuario",
          items: [
            "Use o app legalmente e em conformidade com as leis.",
            "Nao burlar seguranca nem usar precos indevidamente.",
          ],
        },
        {
          title: "6. Permissoes e acesso ao dispositivo",
          items: [
            "Acesso a camera e necessario para deteccao e escaneamento.",
            "Negar permissoes pode limitar funcionalidades.",
          ],
        },
        {
          title: "7. Processamento de dados e privacidade",
          items: [
            "O processamento no dispositivo e o padrao.",
            "A classificacao na nuvem e opcional.",
            "Para detalhes, veja a politica de privacidade.",
          ],
        },
        {
          title: "8. Propriedade intelectual",
          items: [
            "O app e seus componentes sao protegidos por leis de PI.",
            "Estes Termos nao concedem direitos de propriedade.",
          ],
        },
        {
          title: "9. Disponibilidade e modificacoes",
          items: [
            'O app e fornecido "como esta" e "conforme disponibilidade."',
            "Podemos modificar, suspender ou encerrar partes do app.",
          ],
        },
        {
          title: "10. Limitacao de responsabilidade",
          items: ["Nao somos responsaveis por danos decorrentes do uso do app."],
        },
        {
          title: "11. Indenizacao",
          items: ["Voce concorda em indenizar os desenvolvedores por uso indevido."],
        },
        {
          title: "12. Lei aplicavel",
          items: [
            "Estes Termos sao regidos pelas leis dos Paises Baixos, com jurisdicao exclusiva nos Paises Baixos.",
          ],
        },
        {
          title: "13. Mudancas nos Termos",
          items: ["Podemos atualizar estes Termos. O uso continuo implica aceitacao."],
        },
        {
          title: "14. Contato",
          items: ["Email: contact@scanium.app"],
        },
      ],
    },
  },
};
