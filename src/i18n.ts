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
    callUs: "Telephone",
    requestService: "Neem contact op"
  },
  home: {
    readMore: "Lees meer",
    ourServices: "Diensten van Strumpen Elektrotechniek",
    weOffer: "Zekerheid in elektrotechniek",
    weOfferIntro:
      "Strumpen Elektrotechniek verzorgt werkzaamheden voor woningen en bedrijfspanden met heldere afspraken en een nette oplevering.",
    recentProjects: "Recente projecten",
    customersSay: "Ervaringen van klanten",
    serviceTitles: [
      "Woningbouw",
      "Utiliteitsbouw",
      "Storingsservice",
      "EV-laadpalen",
      "Onderhoud",
      "Renovatie"
    ],
    serviceDescriptions: [
      "Veilige elektra voor woningen, appartementen en renovaties, van groepenkast tot verlichting.",
      "Installaties voor kantoren, winkels en bedrijfsruimtes, afgestemd op dagelijks gebruik.",
      "Snelle diagnose en herstel bij storingen, met duidelijke uitleg over de oorzaak.",
      "Plaatsing en uitbreiding van EV-laadpalen voor woningen en bedrijfslocaties, netjes aangesloten en gebruiksklaar.",
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
      "De storing was snel verholpen en Strumpen Elektrotechniek gaf direct praktisch advies om herhaling te voorkomen.",
      "Professionele uitvoering, duidelijke afspraken en zorgvuldig advies over veilige oplossingen."
    ]
  },
  about: {
    title: "Over Strumpen Elektrotechniek",
    welcome: "Strumpen Elektrotechniek",
    breadcrumb: "Over Strumpen",
    featureTitles: ["Vrijblijvende offerte", "Bereikbaar voor storingen", "Transparante tarieven"],
    featureDescription:
      "Vooraf is er duidelijkheid over aanpak, planning en kosten, zodat elke opdracht overzichtelijk start.",
    teamTitle: "Specialist in elektrotechniek",
    teamCopy:
      "Vakmanschap, nette uitvoering en zorg voor woning of werkplek vormen de basis van iedere opdracht.",
    teamName: "Strumpen Elektrotechniek",
    teamRole: "Elektrotechnisch specialist"
  },
  services: {
    title: "Diensten",
    breadcrumb: "Diensten",
    weOfferCopy:
      "Van advies en installatie tot onderhoud en storingshulp: Strumpen Elektrotechniek houdt elektrische voorzieningen veilig en bruikbaar.",
    brochure: "Brochure",
    brochureCopy: "Download de brochure voor een compact overzicht van de diensten.",
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
    message: "Bericht aan Strumpen Elektrotechniek",
    fullName: "Volledige naam",
    email: "E-mailadres",
    messageLabel: "Bericht",
    send: "Verzenden",
    sending: "Bezig met verzenden...",
    sendingStatus: "Uw aanvraag wordt verzonden...",
    sent: "Uw aanvraag is verzonden.",
    failed: "Uw aanvraag kon niet worden verzonden.",
    infoCopy:
      "Beschrijf kort waarvoor elektrotechnische ondersteuning nodig is. Strumpen Elektrotechniek reageert met vervolgstappen, beschikbaarheid en een indicatieve planning."
  },
  footer: {
    explore: "Ontdek",
    newsletter: "Nieuwsbrief",
    socials: "Socials",
    subscribe: "Aanmelden",
    lead:
      "Strumpen Elektrotechniek helpt woningen en bedrijven met veilige elektrotechniek, helder advies en service waarop u kunt rekenen."
  }
};

export function getUiCopy() {
  return uiCopy;
}
