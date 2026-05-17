export const headerAssets = {
  locationIcon: "/icons/header/location.svg",
  phoneIcon: "/icons/header/phone.svg"
} as const;

export const footerAssets = {
  brandMark: "/icons/footer/brand-mark.svg",
  worldMap: "/icons/footer/world-map.png",
  socialIcons: {
    facebook: "/icons/footer/facebook.svg",
    instagram: "/icons/footer/instagram.svg"
  }
} as const;

export const homeAssets = {
  heroImage: "/images/home/hero.png",
  aboutImage: "/images/home/about.png",
  serviceCards: [
    { image: "/images/home/service-1.png", icon: "/icons/home/service-1.svg" },
    { image: "/images/home/service-2.png", icon: "/icons/home/service-2.svg" },
    { image: "/images/home/service-3.png", icon: "/icons/home/service-3.svg" },
    { image: "/images/services/laadpal.avif", icon: "/icons/home/service-4.svg" },
    { image: "/images/home/service-5.png", icon: "/icons/home/service-5.svg" },
    { image: "/images/home/service-6.png", icon: "/icons/home/service-6.svg" }
  ],
  projectImages: [
    "/images/home/project-1.png",
    "/images/home/project-2.png",
    "/images/home/project-3.png"
  ],
  offerIcons: [
    "/icons/home/offer-1.svg",
    "/icons/home/offer-2.svg",
    "/icons/home/offer-3.svg"
  ],
  testimonialImages: [
    "/images/home/testimonial-1.png",
    "/images/home/testimonial-2.png",
    "/images/home/testimonial-3.png"
  ]
} as const;

export const aboutAssets = {
  aboutHero: "/images/about/hero.png",
  aboutPhoto: "/images/about/photo.png",
  teamPhoto: "/images/about/team.png",
  featureIcons: [
    "/icons/about/feature-1.svg",
    "/icons/about/feature-2.svg",
    "/icons/about/feature-3.svg"
  ],
  emailIcon: "/icons/about/email.svg",
  phoneIcon: "/icons/about/phone.svg"
} as const;

export const contactAssets = {
  contactHero: "/images/contact/hero.png",
  contactMap: "/images/contact/map.png",
  socialIcons: [
    { label: "Instagram", icon: "/icons/contact/instagram.svg" },
    { label: "Facebook", icon: "/icons/contact/facebook.svg" }
  ]
} as const;

export const servicesAssets = {
  servicesHero: "/images/services/hero.png",
  allServicesBackground: "/images/services/all-services.png"
} as const;
