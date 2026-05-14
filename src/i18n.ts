type UiCopy = {
  loading: string;
  common: {
    home: string;
    emailAddress: string;
  };
  header: {
    callUs: string;
    requestService: string;
  };
  home: {
    readMore: string;
    ourServices: string;
    weOffer: string;
    weOfferIntro: string;
    recentProjects: string;
    customersSay: string;
    serviceTitles: string[];
    serviceDescriptions: string[];
    offerTitles: string[];
    offerDescriptions: string[];
    customerNames: string[];
    customerLocations: string[];
    customerQuotes: string[];
  };
  about: {
    title: string;
    welcome: string;
    breadcrumb: string;
    featureTitles: string[];
    featureDescription: string;
    teamTitle: string;
    teamCopy: string;
    teamName: string;
    teamRole: string;
  };
  services: {
    title: string;
    breadcrumb: string;
    weOfferCopy: string;
    brochure: string;
    brochureCopy: string;
    priceList: string;
    priceListCopy: string;
    download: string;
    allServices: string;
    residentialTitle: string;
    commercialTitle: string;
    residentialList: string[];
    commercialList: string[];
  };
  contact: {
    title: string;
    breadcrumb: string;
    info: string;
    message: string;
    fullName: string;
    email: string;
    messageLabel: string;
    send: string;
    sending: string;
    sendingStatus: string;
    sent: string;
    failed: string;
    infoCopy: string;
  };
  footer: {
    explore: string;
    newsletter: string;
    socials: string;
    subscribe: string;
    lead: string;
  };
};

const uiCopy: UiCopy = {
  loading: "Website-inhoud laden...",
  common: {
    home: "Home",
    emailAddress: "E-mailadres"
  },
  header: {
    callUs: "Bel ons gerust",
    requestService: "Vraag service aan"
  },
  home: {
    readMore: "Lees meer",
    ourServices: "Onze diensten",
    weOffer: "Wat wij bieden",
    weOfferIntro:
      "Wij verzorgen elektrotechnische werkzaamheden voor woningen en bedrijfspanden, met heldere afspraken en een nette oplevering.",
    recentProjects: "Recente projecten",
    customersSay: "Wat klanten zeggen",
    serviceTitles: [
      "Woningbouw",
      "Utiliteitsbouw",
      "Storingsservice",
      "Beveiligingssystemen",
      "Onderhoud",
      "Installaties"
    ],
    serviceDescriptions: [
      "Veilige elektra voor woningen, appartementen en renovaties, van groepenkast tot verlichting.",
      "Installaties voor kantoren, winkels en bedrijfsruimtes, afgestemd op dagelijks gebruik.",
      "Snelle diagnose en herstel bij storingen, met duidelijke uitleg over de oorzaak.",
      "Camerabeveiliging, toegangscontrole en alarminstallaties die passen bij uw locatie.",
      "Periodieke controles en preventief onderhoud om uitval en onveilige situaties te voorkomen.",
      "Nieuwe aansluitingen, laadpunten, verlichting en technische uitbreidingen netjes uitgevoerd."
    ],
    offerTitles: ["Veilig onderhoud", "Elektrische installatie", "Service en onderhoud"],
    offerDescriptions: [
      "Inspecties en onderhoud waarmee risico's vroeg zichtbaar worden en installaties betrouwbaar blijven.",
      "Nieuwe installaties en uitbreidingen die veilig, toekomstbestendig en overzichtelijk worden opgeleverd.",
      "Ondersteuning bij storingen, controles en verbeteringen, met korte lijnen en duidelijke planning."
    ],
    customerNames: ["Mina Verhoeven", "Ruben de Wit", "Sophie Kramer"],
    customerLocations: ["Venlo", "Eindhoven", "Roermond"],
    customerQuotes: [
      "Strakke planning, nette afwerking en duidelijke communicatie vanaf de eerste opname tot de oplevering.",
      "De storing was snel verholpen en we kregen meteen praktisch advies om herhaling te voorkomen.",
      "Professionele monteurs die afspraken nakomen en op locatie meedenken over veilige oplossingen."
    ]
  },
  about: {
    title: "Over ons",
    welcome: "Welkom bij Strumpen",
    breadcrumb: "Over ons",
    featureTitles: ["Gratis offerte", "24/7 bereikbaar", "Eerlijke prijzen"],
    featureDescription:
      "U krijgt vooraf duidelijkheid over aanpak, planning en kosten, zodat u weet waar u aan toe bent.",
    teamTitle: "Ons team",
    teamCopy:
      "Onze monteurs combineren vakkennis met zorg voor uw woning of werkplek. Netjes werken hoort bij het vak.",
    teamName: "Daan Smit",
    teamRole: "Elektricien"
  },
  services: {
    title: "Diensten",
    breadcrumb: "Diensten",
    weOfferCopy:
      "Van advies en installatie tot onderhoud en storingshulp: wij houden uw elektrische voorzieningen veilig en bruikbaar.",
    brochure: "Onze brochure",
    brochureCopy: "Download onze brochure voor een compact overzicht van de diensten.",
    priceList: "Prijslijst",
    priceListCopy: "Download de prijslijst voor een indicatie van veelvoorkomende werkzaamheden.",
    download: "Downloaden",
    allServices: "Alle diensten",
    residentialTitle: "Woningen",
    commercialTitle: "Bedrijfspanden",
    residentialList: [
      "Groepenkast vervangen of uitbreiden",
      "Zekeringen en automaten",
      "NEN-controles en normcorrecties",
      "Stopcontacten, groepen en herbedrading",
      "Binnen- en buitenverlichting",
      "Data- en communicatielijnen",
      "Tuinverlichting",
      "Afzuigventilatoren",
      "Rookmelders",
      "Home-cinemainstallatie"
    ],
    commercialList: [
      "Telecominstallatie en reparatie",
      "Hosted PBX-oplossingen",
      "Buiten- en parkeerplaatsverlichting",
      "Stopcontacten, groepen en herbedrading",
      "HID-verlichting en regeling",
      "Lichtontwerp",
      "Motoren en transformatoren",
      "Geïsoleerde computercircuits",
      "Data- en communicatiebekabeling",
      "Ballasten en lampen vervangen"
    ]
  },
  contact: {
    title: "Contact",
    breadcrumb: "Contact",
    info: "Contactgegevens",
    message: "Stuur ons een bericht",
    fullName: "Volledige naam",
    email: "E-mailadres",
    messageLabel: "Bericht",
    send: "Verzenden",
    sending: "Bezig met verzenden...",
    sendingStatus: "Uw aanvraag wordt verzonden...",
    sent: "Uw aanvraag is verzonden.",
    failed: "Uw aanvraag kon niet worden verzonden.",
    infoCopy:
      "Beschrijf kort waarmee wij kunnen helpen. We reageren met de vervolgstappen, beschikbaarheid en een indicatieve planning."
  },
  footer: {
    explore: "Ontdek",
    newsletter: "Nieuwsbrief",
    socials: "Socials",
    subscribe: "Aanmelden",
    lead:
      "Strumpen helpt woningen en bedrijven met veilige elektrotechniek, helder advies en service waarop u kunt rekenen."
  }
};

export function getUiCopy() {
  return uiCopy;
}
