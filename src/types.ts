export type NavItem = Readonly<{
  label: string;
  href: string;
}>;

export type ContentStat = Readonly<{
  value: string;
  label: string;
}>;

export type Cta = Readonly<{
  label: string;
  href: string;
}>;

export type ContentCard = Readonly<{
  title: string;
  description: string;
}>;

export type Testimonial = Readonly<{
  name: string;
  role: string;
  quote: string;
}>;

export type TeamMember = Readonly<{
  name: string;
  role: string;
}>;

export type SiteContent = Readonly<{
  brand: Readonly<{
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
  }>;
  navigation: readonly NavItem[];
  hero: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    stats: readonly ContentStat[];
  }>;
  about: Readonly<{
    title: string;
    description: string;
    highlights: readonly string[];
  }>;
  services: readonly ContentCard[];
  offers: readonly ContentCard[];
  projects: readonly ContentCard[];
  testimonials: readonly Testimonial[];
  team: readonly TeamMember[];
  contact: Readonly<{
    intro: string;
    officeHours: string;
    responseTime: string;
  }>;
}>;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResponse = {
  ok: boolean;
  message?: string;
  errors?: string[];
};
