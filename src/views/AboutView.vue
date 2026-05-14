<script setup lang="ts">
import { computed } from "vue";
import { getUiCopy } from "../i18n";
import { aboutAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { aboutHero, aboutPhoto, teamPhoto, featureIcons: offerIcons, emailIcon, phoneIcon } =
  aboutAssets;

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

    <section class="about-figma-team">
      <div class="site-frame">
        <div class="about-figma-team-head">
          <h2 data-node-id="8:590">{{ ui.about.teamTitle }}</h2>
          <p data-node-id="8:592">{{ ui.about.teamCopy }}</p>
        </div>
        <div class="about-figma-team-card-wrap">
          <article class="about-figma-team-card" data-node-id="8:618">
            <div class="about-figma-team-image-wrap">
              <img class="about-figma-team-image" :src="teamPhoto" :alt="ui.about.teamName" data-node-id="8:593" />
              <div class="about-figma-team-role" data-node-id="8:602">{{ ui.about.teamRole }}</div>
            </div>
            <h3 data-node-id="8:605">{{ ui.about.teamName }}</h3>
            <div class="about-figma-team-contact">
              <img :src="emailIcon" alt="" aria-hidden="true" />
              <span>service@strumpfenelectro.nl</span>
            </div>
            <div class="about-figma-team-contact">
              <img :src="phoneIcon" alt="" aria-hidden="true" />
              <span>+31 77 123 4567</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
