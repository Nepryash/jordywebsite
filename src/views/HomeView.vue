<script setup lang="ts">
import { computed } from "vue";
import SectionIntro from "../components/SectionIntro.vue";
import { getUiCopy } from "../i18n";
import { homeAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { heroImage, aboutImage } = homeAssets;

const serviceCards = [
  {
    title: "Woningbouw",
    image: homeAssets.serviceCards[0].image,
    icon: homeAssets.serviceCards[0].icon,
    nodeId: "3:20"
  },
  {
    title: "Utiliteitsbouw",
    image: homeAssets.serviceCards[1].image,
    icon: homeAssets.serviceCards[1].icon,
    nodeId: "3:21"
  },
  {
    title: "Storingsservice",
    image: homeAssets.serviceCards[2].image,
    icon: homeAssets.serviceCards[2].icon,
    nodeId: "102:169"
  },
  {
    title: "EV-laadpalen",
    image: homeAssets.serviceCards[3].image,
    icon: homeAssets.serviceCards[3].icon,
    nodeId: "102:210"
  },
  {
    title: "Onderhoud",
    image: homeAssets.serviceCards[4].image,
    icon: homeAssets.serviceCards[4].icon,
    nodeId: "102:218"
  },
  {
    title: "Installaties",
    image: homeAssets.serviceCards[5].image,
    icon: homeAssets.serviceCards[5].icon,
    nodeId: "102:223"
  }
] as const;

const recentProjects = [
  {
    image: homeAssets.projectImages[0],
    alt: "Monteur werkt aan een elektrische verdeelkast",
    nodeId: "4:44"
  },
  {
    image: homeAssets.projectImages[1],
    alt: "Nieuwe kabelgoot langs een betonnen plafond",
    nodeId: "4:46"
  },
  {
    image: homeAssets.projectImages[2],
    alt: "Meters en elektrische verdeelapparatuur",
    nodeId: "4:45"
  }
] as const;

defineProps<{
  content: SiteContent;
}>();

const ui = computed(() => getUiCopy());

const localizedServices = computed(() =>
  serviceCards.map((card, index) => ({
    ...card,
    title: ui.value.home.serviceTitles[index],
    description: ui.value.home.serviceDescriptions[index]
  }))
);

const offerCards = computed(() => [
  {
    title: ui.value.home.offerTitles[0],
    description: ui.value.home.offerDescriptions[0],
    icon: homeAssets.offerIcons[0],
    nodeId: "4:96"
  },
  {
    title: ui.value.home.offerTitles[1],
    description: ui.value.home.offerDescriptions[1],
    icon: homeAssets.offerIcons[1],
    nodeId: "4:97"
  },
  {
    title: ui.value.home.offerTitles[2],
    description: ui.value.home.offerDescriptions[2],
    icon: homeAssets.offerIcons[2],
    nodeId: "4:98"
  }
]);

const testimonials = computed(() => [
  {
    quote: ui.value.home.customerQuotes[0],
    name: ui.value.home.customerNames[0],
    location: ui.value.home.customerLocations[0],
    image: homeAssets.testimonialImages[0],
    nodeId: "4:99"
  },
  {
    quote: ui.value.home.customerQuotes[1],
    name: ui.value.home.customerNames[1],
    location: ui.value.home.customerLocations[1],
    image: homeAssets.testimonialImages[1],
    nodeId: "4:100"
  },
  {
    quote: ui.value.home.customerQuotes[2],
    name: ui.value.home.customerNames[2],
    location: ui.value.home.customerLocations[2],
    image: homeAssets.testimonialImages[2],
    nodeId: "4:101"
  }
]);
</script>

<template>
  <main>
    <section
      class="figma-hero"
      :style="{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.41) 31.5%, rgba(0, 0, 0, 0.389) 67.3%, rgba(0, 0, 0, 0) 99.9%), url(${heroImage})` }"
    >
      <div class="site-frame figma-hero-inner">
        <div class="figma-hero-copy">
          <div class="figma-hero-kicker">{{ content.brand.name }}</div>
          <h1>{{ content.hero.title }}</h1>
          <p>{{ content.hero.description }}</p>
          <div class="hero-service-pills" aria-label="Werkgebieden">
            <span>{{ localizedServices[0].title }}</span>
            <span>{{ localizedServices[1].title }}</span>
            <span>{{ localizedServices[2].title }}</span>
          </div>
          <RouterLink class="hero-contact-link" :to="content.hero.primaryCta.href">
            {{ content.hero.primaryCta.label }}
          </RouterLink>
        </div>
        <div class="hero-installation-scene" aria-hidden="true">
          <span class="installation-panel">
            <span class="installation-panel-label"></span>
            <span class="installation-lamp">
              <span class="installation-lamp-glow"></span>
              <span class="installation-lamp-bulb"></span>
              <span class="installation-lamp-base"></span>
            </span>
            <span class="installation-path installation-path-top"></span>
            <span class="installation-path installation-path-bottom"></span>
            <span class="installation-current installation-current-a"></span>
            <span class="installation-current installation-current-b"></span>
          </span>
        </div>
      </div>
    </section>

    <section class="home-about">
      <div class="site-frame home-about-grid">
        <div class="home-about-copy">
          <h2>{{ content.about.title }}</h2>
          <p>{{ content.about.description }}</p>
          <RouterLink class="about-button" to="/about">{{ ui.home.readMore }}</RouterLink>
        </div>
        <div class="home-about-visual">
          <img :src="aboutImage" alt="Elektromonteur werkt aan technische infrastructuur" />
        </div>
      </div>
    </section>

    <section class="home-services">
      <div class="site-frame">
        <SectionIntro label="" :title="ui.home.ourServices" />
        <div class="figma-services-grid">
          <article
            v-for="(card, index) in localizedServices"
            :key="card.title"
            class="figma-service-card figma-service-card-flip"
            :data-node-id="card.nodeId"
            :style="{ '--service-delay': `${index * 90}ms` }"
          >
            <div class="figma-service-card-inner">
              <div class="figma-service-face figma-service-face-front">
                <img class="figma-service-image-front" :src="card.image" :alt="card.title" />
                <div class="figma-service-bar-front">
                  <img class="figma-service-icon-front" :src="card.icon" alt="" aria-hidden="true" />
                  <h3>{{ card.title }}</h3>
                </div>
              </div>
              <div class="figma-service-face figma-service-face-back">
                <img class="figma-service-image-back" :src="card.image" :alt="card.title" />
                <div class="figma-service-back-layer"></div>
                <div class="figma-service-content">
                  <img class="figma-service-icon-overlay" :src="card.icon" alt="" aria-hidden="true" />
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.description }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="home-offers">
      <div class="site-frame">
        <div class="figma-section-title">
          <h2 data-node-id="4:14">{{ ui.home.weOffer }}</h2>
          <p data-node-id="4:17">{{ ui.home.weOfferIntro }}</p>
        </div>
        <div class="offer-card-grid" data-node-id="19:1028">
          <article v-for="offer in offerCards" :key="offer.title" class="offer-card" :data-node-id="offer.nodeId">
            <img class="offer-card-icon" :src="offer.icon" alt="" aria-hidden="true" />
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="home-projects">
      <div class="site-frame">
        <div class="figma-section-title figma-section-title-tight">
          <span class="figma-section-eyebrow">Recente projecten</span>
          <h2 data-node-id="4:43">{{ ui.home.recentProjects }}</h2>
        </div>
        <div class="recent-project-grid" data-node-id="4:42">
          <article
            v-for="project in recentProjects"
            :key="project.image"
            class="recent-project-card"
            :data-node-id="project.nodeId"
          >
            <img :src="project.image" :alt="project.alt" />
          </article>
        </div>
      </div>
    </section>

    <section class="home-testimonials">
      <div class="site-frame">
        <div class="figma-section-title figma-section-title-tight">
          <span class="figma-section-eyebrow">Klanten</span>
          <h2 data-node-id="4:47">{{ ui.home.customersSay }}</h2>
        </div>
        <div class="testimonial-grid">
          <article
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="figma-testimonial-card"
            :data-node-id="testimonial.nodeId"
          >
            <p class="figma-testimonial-quote">{{ testimonial.quote }}</p>
            <div class="figma-testimonial-person">
              <img :src="testimonial.image" :alt="testimonial.name" />
              <div>
                <h3>{{ testimonial.name }}</h3>
                <span>{{ testimonial.location }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
