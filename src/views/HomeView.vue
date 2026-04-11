<script setup lang="ts">
import { computed } from "vue";
import SectionIntro from "../components/SectionIntro.vue";
import { getUiCopy, useLocale } from "../i18n";
import type { SiteContent } from "../types";

const heroImage =
  "https://www.figma.com/api/mcp/asset/b7746d9b-4659-45cf-a973-ac42558a811f";
const aboutImage =
  "https://www.figma.com/api/mcp/asset/637dec46-b08c-4509-8d8a-cd5a9ce959fd";

const serviceCards = [
  {
    title: "RESIDENTIAL",
    image: "https://www.figma.com/api/mcp/asset/a03a3b9e-e169-499d-9605-e1a96370aee2",
    icon: "https://www.figma.com/api/mcp/asset/c7686db4-8e4c-46b7-b518-12f5f1b3789f",
    nodeId: "3:20"
  },
  {
    title: "COMMERCIAL",
    image: "https://www.figma.com/api/mcp/asset/92bfe91c-4f1c-4bb9-b27e-9e3bf9a68468",
    icon: "https://www.figma.com/api/mcp/asset/5cfc5fde-23ca-4724-b9f7-c00c9550e435",
    nodeId: "3:21"
  },
  {
    title: "BREAKDOWN SERVICE",
    image: "https://www.figma.com/api/mcp/asset/c6bcab7a-0dcf-4f07-81f9-ec610222d34b",
    icon: "https://www.figma.com/api/mcp/asset/b67ec312-8e31-4056-a404-10fff3f79901",
    nodeId: "102:169"
  },
  {
    title: "SECURITY SYSTEMS",
    image: "https://www.figma.com/api/mcp/asset/1b8e55b0-0b16-4541-8a8e-1eb4e1f41135",
    icon: "https://www.figma.com/api/mcp/asset/4efd98a7-05e1-403a-8a89-70f983832366",
    nodeId: "102:210"
  },
  {
    title: "MAINTENANCE",
    image: "https://www.figma.com/api/mcp/asset/f61b64c4-2325-4f30-bf9e-8d5a54109bf6",
    icon: "https://www.figma.com/api/mcp/asset/328a45d5-0470-4b4b-9e92-517af0810c16",
    nodeId: "102:218"
  },
  {
    title: "INSTALLATIONS",
    image: "https://www.figma.com/api/mcp/asset/d6b4980e-bac1-4a6d-959b-4e33dd9e2fe5",
    icon: "https://www.figma.com/api/mcp/asset/df113130-09f6-474f-ac00-a55ad155cc1f",
    nodeId: "102:223"
  }
] as const;

const recentProjects = [
  {
    image: "https://www.figma.com/api/mcp/asset/ff3c120f-5d4d-41c4-829f-6131b3b366c0",
    alt: "Technician wiring an electrical panel",
    nodeId: "4:44"
  },
  {
    image: "https://www.figma.com/api/mcp/asset/8d5b11b3-8ccc-4ffb-9823-3f0d04661921",
    alt: "Fresh conduit installation across a concrete ceiling",
    nodeId: "4:46"
  },
  {
    image: "https://www.figma.com/api/mcp/asset/ea974cf3-945e-465a-ad21-a4d4bd1c98e0",
    alt: "Meter bank and electrical distribution equipment",
    nodeId: "4:45"
  }
] as const;

defineProps<{
  content: SiteContent;
}>();

const { locale } = useLocale();
const ui = computed(() => getUiCopy(locale.value));

const localizedServices = computed(() =>
  serviceCards.map((card, index) => ({
    ...card,
    description: ui.value.home.serviceDescriptions[index]
  }))
);

const offerCards = computed(() => [
  {
    title: ui.value.home.offerTitles[0],
    description: ui.value.home.offerDescriptions[0],
    icon: "https://www.figma.com/api/mcp/asset/d75d9a50-fa10-4f6d-9096-5671d97ecbd8",
    nodeId: "4:96"
  },
  {
    title: ui.value.home.offerTitles[1],
    description: ui.value.home.offerDescriptions[1],
    icon: "https://www.figma.com/api/mcp/asset/b7c555cd-f1a1-4272-99ce-d9beb6600650",
    nodeId: "4:97"
  },
  {
    title: ui.value.home.offerTitles[2],
    description: ui.value.home.offerDescriptions[2],
    icon: "https://www.figma.com/api/mcp/asset/906f25c6-4f5e-4740-b94f-e5b2f395cede",
    nodeId: "4:98"
  }
]);

const testimonials = computed(() => [
  {
    quote: ui.value.home.customerQuotes[0],
    name: ui.value.home.customerNames[0],
    location: ui.value.home.customerLocations[0],
    image: "https://www.figma.com/api/mcp/asset/f309ffeb-8033-4300-913d-560a015e39c2",
    nodeId: "4:99"
  },
  {
    quote: ui.value.home.customerQuotes[1],
    name: ui.value.home.customerNames[1],
    location: ui.value.home.customerLocations[1],
    image: "https://www.figma.com/api/mcp/asset/0c02c5f8-5227-4762-b987-fefcd3a18512",
    nodeId: "4:100"
  },
  {
    quote: ui.value.home.customerQuotes[2],
    name: ui.value.home.customerNames[2],
    location: ui.value.home.customerLocations[2],
    image: "https://www.figma.com/api/mcp/asset/a1adc5aa-a70c-46ec-b50f-c57ad54454e6",
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
          <h1>{{ content.hero.title }}</h1>
          <p>{{ content.hero.description }}</p>
          <RouterLink class="hero-contact-link" :to="content.hero.primaryCta.href">
            {{ content.hero.primaryCta.label }}
          </RouterLink>
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
          <img :src="aboutImage" alt="Electrical technician working on infrastructure" />
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
