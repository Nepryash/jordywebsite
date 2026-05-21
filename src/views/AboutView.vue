<script setup lang="ts">
import { computed } from "vue";
import { getUiCopy } from "../i18n";
import { aboutAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { aboutHero, aboutPhoto, featureIcons: offerIcons } = aboutAssets;

defineProps<{
  content: SiteContent;
}>();

const ui = computed(() => getUiCopy());

const featureCards = computed(() =>
  ui.value.about.featureTitles.map((title, index) => ({
    title,
    icon: offerIcons[index]
  }))
);

const aboutParagraphs = computed(() => {
  return [
    "Met meer dan 8 jaar ervaring in de sector leveren wij veilige installaties, snelle storingsoplossingen en duidelijke communicatie van begin tot eind.",
    "Wij combineren technisch vakmanschap met een zorgvuldige planning, zodat werkzaamheden in woningen en bedrijfsruimtes zonder onnodige vertraging worden uitgevoerd.",
    "Van inspectie en montage tot onderhoud en noodhulp: ons team werkt netjes, transparant en met aandacht voor langdurige betrouwbaarheid."
  ];
});
</script>

<template>
  <main>
    <section
      class="about-figma-hero"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.41) 31.5%, rgba(0, 0, 0, 0.389) 67.3%, rgba(0, 0, 0, 0) 99.9%), url(${aboutHero})`
      }"
    >
      <div class="site-frame about-figma-hero-inner">
        <h1 data-node-id="8:388">{{ ui.about.title }}</h1>
      </div>
    </section>

    <section class="about-figma-intro">
      <div class="site-frame">
        <div class="breadcrumbs about-figma-breadcrumbs" data-node-id="8:554">{{ ui.common.home }} &gt; <span data-node-id="8:555">{{ ui.about.breadcrumb }}</span></div>
        <div class="about-figma-layout">
          <div class="about-figma-photo">
            <img :src="aboutPhoto" alt="Elektromonteur aan het werk" data-node-id="8:558" />
          </div>
          <div class="about-figma-copy">
            <h2 data-node-id="8:556">{{ ui.about.welcome }}</h2>
            <p v-for="(paragraph, index) in aboutParagraphs" :key="index">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-figma-offers">
      <div class="site-frame about-figma-offer-grid">
        <article
          v-for="feature in featureCards"
          :key="feature.title"
          class="about-figma-offer-card"
        >
          <img class="about-figma-offer-icon" :src="feature.icon" alt="" aria-hidden="true" />
          <h3>{{ feature.title }}</h3>
          <p>{{ ui.about.featureDescription }}</p>
        </article>
      </div>
    </section>
  </main>
</template>
