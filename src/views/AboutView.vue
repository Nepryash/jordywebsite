<script setup lang="ts">
import { computed } from "vue";
import { getUiCopy, useLocale } from "../i18n";
import type { SiteContent } from "../types";

const aboutHero = "https://www.figma.com/api/mcp/asset/a2e45287-f020-4374-8292-eb97b1c5e8e8";
const aboutPhoto = "https://www.figma.com/api/mcp/asset/6486991a-487b-48c3-9e41-bb04df5b6436";
const teamPhoto = "https://www.figma.com/api/mcp/asset/9da02164-4231-4e04-b935-2399e36a3b6b";
const offerIcons = [
  "https://www.figma.com/api/mcp/asset/0606edf4-d412-435d-b00c-fc68720a41b3",
  "https://www.figma.com/api/mcp/asset/99f74162-43dd-4777-b5ef-92d6ef9e7f63",
  "https://www.figma.com/api/mcp/asset/49d74707-5bec-4f82-b1f7-8273b5c44a2a"
] as const;
const emailIcon = "https://www.figma.com/api/mcp/asset/11854474-f044-4a43-bf15-033eeeaec136";
const phoneIcon = "https://www.figma.com/api/mcp/asset/93a46698-293b-41a1-a418-f56774f51bf8";

defineProps<{
  content: SiteContent;
}>();

const { locale } = useLocale();
const ui = computed(() => getUiCopy(locale.value));

const featureCards = computed(() =>
  ui.value.about.featureTitles.map((title, index) => ({
    title,
    icon: offerIcons[index]
  }))
);

const aboutParagraphs = computed(() => {
  if (locale.value === "nl") {
    return [
      "Met meer dan 8 jaar ervaring in de sector leveren wij veilige installaties, snelle storingsoplossingen en duidelijke communicatie van begin tot eind.",
      "Wij combineren technisch vakmanschap met een zorgvuldige planning zodat projecten voor woningen en bedrijfsruimtes zonder onnodige vertraging worden uitgevoerd.",
      "Van inspectie en montage tot onderhoud en noodhulp: ons team werkt netjes, transparant en met aandacht voor langdurige betrouwbaarheid."
    ];
  }

  return [
    "With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat ac velit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuereWith over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie."
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
            <img :src="aboutPhoto" alt="Electro team at work" data-node-id="8:558" />
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
              <span>electrician1@electro.com</span>
            </div>
            <div class="about-figma-team-contact">
              <img :src="phoneIcon" alt="" aria-hidden="true" />
              <span>+2340011887711</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
