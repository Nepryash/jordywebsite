export const headerAssets = {
  locationIcon: "/icons/header/location.png",
  phoneIcon: "/icons/header/phone.png"
} as const;

export const footerAssets = {
  brandMark: "/icons/footer/brand-mark.png",
  worldMap: "/icons/footer/world-map.png",
  socialIcons: {
    facebook: "/icons/footer/facebook.png",
    twitter: "/icons/footer/twitter.png",
    instagram: "/icons/footer/instagram.png",
    google: "/icons/footer/google.png"
  }
} as const;

export const homeAssets = {
  heroImage: "/images/home/hero.png",
  aboutImage: "/images/home/about.png",
  serviceCards: [
    { image: "/images/home/service-1.png", icon: "/icons/home/service-1.png" },
    { image: "/images/home/service-2.png", icon: "/icons/home/service-2.png" },
    { image: "/images/home/service-3.png", icon: "/icons/home/service-3.png" },
    { image: "/images/home/service-4.png", icon: "/icons/home/service-4.png" },
    { image: "/images/home/service-5.png", icon: "/icons/home/service-5.png" },
    { image: "/images/home/service-6.png", icon: "/icons/home/service-6.png" }
  ],
  projectImages: [
    "/images/home/project-1.png",
    "/images/home/project-2.png",
    "/images/home/project-3.png"
  ],
  offerIcons: [
    "/icons/home/offer-1.png",
    "/icons/home/offer-2.png",
    "/icons/home/offer-3.png"
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
    "/icons/about/feature-1.png",
    "/icons/about/feature-2.png",
    "/icons/about/feature-3.png"
  ],
  emailIcon: "/icons/about/email.png",
  phoneIcon: "/icons/about/phone.png"
} as const;

export const contactAssets = {
  contactHero: "/images/contact/hero.png",
  contactMap: "/images/contact/map.png",
  socialIcons: [
    { label: "Facebook", icon: "/icons/contact/facebook.png" },
    { label: "Twitter", icon: "/icons/contact/twitter.png" },
    { label: "Instagram", icon: "/icons/contact/instagram.png" },
    { label: "Google Plus", icon: "/icons/contact/google.png" }
  ]
} as const;

export const servicesAssets = {
  servicesHero: "/images/services/hero.png",
  allServicesBackground: "/images/services/all-services.png"
} as const;
