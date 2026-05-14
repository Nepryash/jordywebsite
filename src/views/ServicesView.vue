<script setup lang="ts">
import { computed } from "vue";
import SectionIntro from "../components/SectionIntro.vue";
import { getUiCopy } from "../i18n";
import { homeAssets, servicesAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { servicesHero, allServicesBackground } = servicesAssets;

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
    title: "Beveiligingssystemen",
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
        <div class="breadcrumbs">{{ ui.common.home }} &gt; <span>{{ ui.services.breadcrumb }}</span></div>
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
