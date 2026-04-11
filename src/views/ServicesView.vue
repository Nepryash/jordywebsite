<script setup lang="ts">
import { computed } from "vue";
import SectionIntro from "../components/SectionIntro.vue";
import { getUiCopy, useLocale } from "../i18n";
import type { SiteContent } from "../types";

const servicesHero =
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80";
const allServicesBackground =
  "https://www.figma.com/api/mcp/asset/8d19752c-d073-447e-a554-601c5f4caaf6";

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
</script>

<template>
  <main>
    <section class="page-hero">
      <div class="site-frame">
        <div
          class="page-hero-box interior-hero"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(${servicesHero})`
          }"
        >
          <h1>{{ ui.services.title }}</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="site-frame">
        <div class="breadcrumbs">Home &gt; <span>{{ ui.services.breadcrumb }}</span></div>
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

    <section class="section">
      <div class="site-frame">
        <SectionIntro
          label=""
          :title="ui.home.weOffer"
          :copy="ui.services.weOfferCopy"
        />
        <div class="offer-card-grid" data-node-id="19:1028">
          <article v-for="offer in offerCards" :key="offer.title" class="offer-card" :data-node-id="offer.nodeId">
            <img class="offer-card-icon" :src="offer.icon" alt="" aria-hidden="true" />
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section brochure-band-section">
      <div class="site-frame brochure-band">
        <div class="download-block">
          <div class="download-icon">&#8681;</div>
          <div>
            <strong>{{ ui.services.brochure }}</strong>
            <p>{{ ui.services.brochureCopy }}</p>
          </div>
          <button class="download-button" type="button">{{ ui.services.download }}</button>
        </div>
        <div class="download-block">
          <div class="download-icon">&#164;</div>
          <div>
            <strong>{{ ui.services.priceList }}</strong>
            <p>{{ ui.services.priceListCopy }}</p>
          </div>
          <button class="download-button" type="button">{{ ui.services.download }}</button>
        </div>
      </div>
    </section>

    <section class="section all-services-section">
      <div class="all-services-shell" :style="{ backgroundImage: `url(${allServicesBackground})` }">
        <div class="site-frame all-services-box">
          <div class="all-services-header">
            <h2>{{ ui.services.allServices }}</h2>
          </div>
          <div class="all-services-grid">
            <div class="service-column">
              <h3>{{ ui.services.residentialTitle }}</h3>
              <ul class="service-columns service-columns-plain">
                <li v-for="service in ui.services.residentialList" :key="service">{{ service }}</li>
              </ul>
            </div>
            <div class="service-column">
              <h3>{{ ui.services.commercialTitle }}</h3>
              <ul class="service-columns service-columns-plain">
                <li v-for="service in ui.services.commercialList" :key="service">{{ service }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
