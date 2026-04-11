import { computed, readonly, ref } from "vue";
import type { SiteContent } from "./types";

export type Locale = "en" | "nl";

type UiCopy = {
  loading: string;
  header: {
    city: string;
    callUs: string;
    requestService: string;
    languages: string;
  };
  home: {
    readMore: string;
    ourServices: string;
    weOffer: string;
    weOfferIntro: string;
    recentProjects: string;
    customersSay: string;
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
    allServicesCopy: string;
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

const uiCopy: Record<Locale, UiCopy> = {
  en: {
    loading: "Loading website content...",
    header: {
      city: "Venlo, Netherlands",
      callUs: "Call Us Anytime",
      requestService: "Request A Service",
      languages: "Language"
    },
    home: {
      readMore: "Read More...",
      ourServices: "OUR SERVICES",
      weOffer: "WE OFFER",
      weOfferIntro:
        "We offer a comprehensive range of cost effective services for residential and commercial properties.",
      recentProjects: "RECENT PROJECTS",
      customersSay: "OUR CUSTOMERS SAY",
      serviceDescriptions: Array(6).fill(
        "With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere"
      ),
      offerTitles: ["Safety Maintainance", "Electrical Installation", "Service Maintainance"],
      offerDescriptions: Array(3).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
      ),
      customerNames: ["Merry Jean", "Omari Zayn", "David Mark"],
      customerLocations: ["Northampton, UK.", "Leeds, UK.", "Glasgow, UK."],
      customerQuotes: Array(3).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
      )
    },
    about: {
      title: "ABOUT US",
      welcome: "Welcome to Electro",
      breadcrumb: "About",
      featureTitles: ["Free Estimation", "24/7 Available", "Affordable Prices"],
      featureDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere.",
      teamTitle: "Our Team",
      teamCopy:
        "Meet our professional team members who are ever ready and up to the task of assisting you.",
      teamName: "Jack Wilshere",
      teamRole: "Electrician"
    },
    services: {
      title: "SERVICES",
      breadcrumb: "Services",
      weOfferCopy:
        "We offer a comprehensive range of cost effective services for residential and commercial properties.",
      brochure: "Our Brochure",
      brochureCopy: "Download our brochure to know more about our services.",
      priceList: "Price List",
      priceListCopy: "Download our list to know more about our affordable prices.",
      download: "Download",
      allServices: "ALL SERVICES",
      allServicesCopy: "Here a a detailed list of all services we offer",
      residentialTitle: "Residential Buildings",
      commercialTitle: "Commercial Buildings",
      residentialList: [
        "Panel Upgrades",
        "Breakers and Fuses",
        "Code Corrections",
        "Outlets, Circuits and Rewiring",
        "Indoor and Outdoor Lighting",
        "Data/Communication Lines",
        "Landscape Lighting",
        "Exhaust Fans",
        "Smoke Detectors",
        "Home Theater Installation"
      ],
      commercialList: [
        "Telecom Installation and Repair",
        "Hosted PBX Solutions",
        "Outdoor/Parking Lot Lighting",
        "Outlets, Circuits and Rewiring",
        "HID Lighting and Control",
        "Lighting Design",
        "Motors and Transformers",
        "Isolated Computer Circuits",
        "Data/Communications Cabling",
        "Ballast/Lamp Replacing"
      ]
    },
    contact: {
      title: "CONTACT US",
      breadcrumb: "Contact",
      info: "Contact Info",
      message: "Send Us a Message",
      fullName: "Full Name",
      email: "Email Address",
      messageLabel: "Message",
      send: "Send",
      sending: "Sending...",
      sendingStatus: "Sending your request...",
      sent: "Your request has been sent.",
      failed: "Unable to send your request.",
      infoCopy:
        "With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere."
    },
    footer: {
      explore: "Explore",
      newsletter: "Newsletter",
      socials: "Socials",
      subscribe: "Subscribe",
      lead:
        "With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere"
    }
  },
  nl: {
    loading: "Website-inhoud laden...",
    header: {
      city: "Venlo, Nederland",
      callUs: "Bel ons altijd",
      requestService: "Vraag service aan",
      languages: "Taal"
    },
    home: {
      readMore: "Lees meer...",
      ourServices: "ONZE DIENSTEN",
      weOffer: "WAT WIJ BIEDEN",
      weOfferIntro:
        "Wij bieden een uitgebreid pakket aan kosteneffectieve diensten voor woningen en bedrijfsruimtes.",
      recentProjects: "RECENTE PROJECTEN",
      customersSay: "WAT KLANTEN ZEGGEN",
      serviceDescriptions: Array(6).fill(
        "Met meer dan 8 jaar ervaring in de sector leveren wij betrouwbare service en een zorgvuldige afwerking."
      ),
      offerTitles: ["Veilig onderhoud", "Elektrische installatie", "Service & onderhoud"],
      offerDescriptions: Array(3).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
      ),
      customerNames: ["Merry Jean", "Omari Zayn", "David Mark"],
      customerLocations: ["Northampton, VK.", "Leeds, VK.", "Glasgow, VK."],
      customerQuotes: Array(3).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
      )
    },
    about: {
      title: "OVER ONS",
      welcome: "Welkom bij Electro",
      breadcrumb: "Over ons",
      featureTitles: ["Gratis offerte", "24/7 beschikbaar", "Betaalbare prijzen"],
      featureDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere.",
      teamTitle: "Ons team",
      teamCopy:
        "Maak kennis met onze professionele teamleden die altijd klaarstaan om u te helpen.",
      teamName: "Jack Wilshere",
      teamRole: "Elektricien"
    },
    services: {
      title: "DIENSTEN",
      breadcrumb: "Diensten",
      weOfferCopy:
        "Wij bieden een uitgebreid pakket aan kosteneffectieve diensten voor woningen en bedrijfsruimtes.",
      brochure: "Onze brochure",
      brochureCopy: "Download onze brochure om meer te weten over onze diensten.",
      priceList: "Prijslijst",
      priceListCopy: "Download onze lijst om meer te weten over onze voordelige prijzen.",
      download: "Downloaden",
      allServices: "ALLE DIENSTEN",
      allServicesCopy: "Hier vindt u een gedetailleerd overzicht van alle diensten die wij aanbieden",
      residentialTitle: "Woningbouw",
      commercialTitle: "Utiliteitsbouw",
      residentialList: [
        "Groepenkast upgrades",
        "Zekeringen en groepen",
        "Normcorrecties",
        "Stopcontacten, groepen en herbedrading",
        "Binnen- en buitenverlichting",
        "Data- en communicatielijnen",
        "Tuinverlichting",
        "Afzuigventilatoren",
        "Rookmelders",
        "Home cinema installatie"
      ],
      commercialList: [
        "Telecom-installatie en reparatie",
        "Hosted PBX-oplossingen",
        "Buiten- en parkeerplaatsverlichting",
        "Stopcontacten, groepen en herbedrading",
        "HID-verlichting en regeling",
        "Lichtontwerp",
        "Motoren en transformatoren",
        "Geisoleerde computercircuits",
        "Data- en communicatiebekabeling",
        "Vervangen van ballasten en lampen"
      ]
    },
    contact: {
      title: "CONTACT",
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
        "Met meer dan 8 jaar ervaring in de sector leveren wij betrouwbare service en een zorgvuldige afwerking."
    },
    footer: {
      explore: "Ontdek",
      newsletter: "Nieuwsbrief",
      socials: "Socials",
      subscribe: "Abonneren",
      lead:
        "Met meer dan 8 jaar ervaring in de sector leveren wij betrouwbare service en een zorgvuldige afwerking."
    }
  }
};

const localeState = ref<Locale>(
  typeof window !== "undefined" && window.localStorage.getItem("site-locale") === "nl" ? "nl" : "en"
);

function translateNavigation(content: SiteContent, locale: Locale) {
  if (locale === "en") {
    return content.navigation;
  }

  const labelMap: Record<string, string> = {
    Home: "Home",
    About: "Over ons",
    Services: "Diensten",
    Contact: "Contact"
  };

  return content.navigation.map((item) => ({
    ...item,
    label: labelMap[item.label] || item.label
  }));
}

export function translateContent(content: SiteContent, locale: Locale): SiteContent {
  if (locale === "en") {
    return content;
  }

  return {
    ...content,
    brand: {
      ...content.brand,
      tagline: "Veilige en betrouwbare elektrotechnische service waarop u kunt vertrouwen."
    },
    navigation: translateNavigation(content, locale),
    hero: {
      ...content.hero,
      eyebrow: "Betrouwbare elektrotechnische aannemers",
      title: "VEILIG EN ZEKER",
      description: "Een service waarop u kunt vertrouwen",
      primaryCta: { ...content.hero.primaryCta, label: "Neem contact op" },
      secondaryCta: { ...content.hero.secondaryCta, label: "Vraag service aan" },
      stats: [
        { value: "1.200+", label: "Projecten afgerond" },
        { value: "24/7", label: "Storingsdienst" },
        { value: "15 jr", label: "Ervaring in het veld" }
      ]
    },
    about: {
      ...content.about,
      title: "WIJ ZIJN STRUMPEN",
      description:
        "Met meer dan 8 jaar ervaring in de sector verzorgen wij veilige installaties, snelle storingsoplossingen en duidelijke communicatie van begin tot eind.",
      highlights: [
        "Gratis advies vooraf bij grotere projecten",
        "Heldere documentatie bij elke installatie",
        "Ervaren specialisten voor woningen en bedrijfslocaties"
      ]
    },
    offers: [
      {
        title: "Veilig onderhoud",
        description:
          "Regelmatige inspecties en correctief onderhoud om risico's te beperken voordat storingen uitgroeien tot uitval."
      },
      {
        title: "Elektrische installatie",
        description:
          "Nieuwe stroom- en verlichtingssystemen afgestemd op uw indeling, budget en toekomstige groei."
      },
      {
        title: "Service & onderhoud",
        description:
          "Snelle servicepakketten met duidelijke afspraken voor bedrijfscontinuiteit en gemoedsrust."
      }
    ],
    projects: [
      {
        title: "Industriële retrofit",
        description:
          "Modernisering van besturingspanelen voor een logistieke locatie zonder ongeplande stilstand."
      },
      {
        title: "Kantooruitbreiding",
        description:
          "Databekabeling, verlichting en toegangscontrole voor een groeiend hoofdkantoor in Amsterdam."
      },
      {
        title: "Appartementenupgrade",
        description:
          "Groepenkastvervanging en energiezuinige verlichting voor een wooncomplex."
      }
    ],
    testimonials: [
      {
        name: "Mina Verhoeven",
        role: "Facility manager",
        quote:
          "Het team werkte rond onze openingstijden en leverde een nette, goed gedocumenteerde installatie op."
      },
      {
        name: "Ruben de Wit",
        role: "Projectontwikkelaar",
        quote:
          "De communicatie bleef van offerte tot oplevering duidelijk, en de storingsdienst is uitstekend."
      },
      {
        name: "Sophie Kramer",
        role: "Huiseigenaar",
        quote:
          "Ze vonden een hardnekkige storing die twee eerdere aannemers hadden gemist. Professioneel en geruststellend."
      }
    ],
    team: [
      { name: "John Wilson", role: "Lead electrical engineer" },
      { name: "Anika Vos", role: "Projectcoordinator" },
      { name: "Daan Smit", role: "Onderhoudsspecialist" }
    ],
    contact: {
      intro:
        "Laat ons weten waarmee wij u kunnen helpen en wij reageren met de volgende stappen, beschikbaarheid en een indicatieve planning.",
      officeHours: "Ma - Za: 08:00 - 18:00",
      responseTime: "Meestal antwoord binnen 1 werkdag"
    }
  };
}

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}

export function useLocale() {
  function setLocale(nextLocale: Locale) {
    localeState.value = nextLocale;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("site-locale", nextLocale);
    }
  }

  return {
    locale: readonly(localeState),
    isDutch: computed(() => localeState.value === "nl"),
    setLocale
  };
}
