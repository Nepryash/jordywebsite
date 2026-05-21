<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getUiCopy } from "../i18n";
import { headerAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { logo, logoFallback, locationIcon, phoneIcon } = headerAssets;

const props = defineProps<{
  content: SiteContent;
}>();

const route = useRoute();
const activePath = computed(() => route.path);
const ui = computed(() => getUiCopy());
const addressParts = computed(() => props.content.brand.address.split(",").map((part) => part.trim()));
const addressLineOne = computed(() => addressParts.value.slice(0, -2).join(", ") || addressParts.value[0] || "");
const addressLineTwo = computed(() => addressParts.value.slice(-2).join(", ") || props.content.brand.address);
const whatsappHref = "https://wa.me/31681046041";
const headerLogoSrc = ref<string>(logo);

function handleHeaderLogoError() {
  if (headerLogoSrc.value !== logoFallback) {
    headerLogoSrc.value = logoFallback;
  }
}
</script>

<template>
  <header class="site-header">
    <div class="site-frame header-main">
      <RouterLink class="header-brand" to="/" data-node-id="8:506">
        <img
          class="header-brand-icon"
          :src="headerLogoSrc"
          :alt="`${props.content.brand.name} logo`"
          @error="handleHeaderLogoError"
        />
        <span class="header-brand-copy">
          <span class="header-brand-name" data-node-id="1:4">{{ props.content.brand.name.toUpperCase() }}</span>
          <span class="header-brand-subtitle">Elektrotechniek</span>
        </span>
      </RouterLink>
      <div class="header-contact header-contact-address" data-node-id="1:5">
        <img class="header-contact-icon" :src="locationIcon" alt="" aria-hidden="true" />
        <div>
          <small>{{ addressLineOne }}</small>
          <strong class="header-contact-location">{{ addressLineTwo }}</strong>
        </div>
      </div>
      <div class="header-contact header-contact-phone-link" data-node-id="2:9">
        <img class="header-contact-icon header-contact-icon-phone" :src="phoneIcon" alt="" aria-hidden="true" />
        <div>
          <small>{{ ui.header.callUs }}</small>
          <a :href="`tel:${props.content.brand.phone}`">{{ props.content.brand.phone }}</a>
        </div>
      </div>
      <div class="header-actions">
        <a class="button whatsapp-button" :href="whatsappHref" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <svg class="whatsapp-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9c0 1.74.45 3.44 1.31 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9a9.84 9.84 0 0 0-2.89-7m-7.02 15.23h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18l-3.14.82l.84-3.06l-.2-.31a8.25 8.25 0 0 1-1.27-4.36c0-4.56 3.71-8.27 8.28-8.27a8.2 8.2 0 0 1 5.85 2.43a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.27-8.27 8.27m4.53-6.18c-.25-.13-1.47-.72-1.7-.8s-.39-.13-.56.13s-.64.8-.79.96s-.29.2-.54.07a6.7 6.7 0 0 1-1.99-1.23a7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.1-.51c.11-.11.25-.29.38-.43s.17-.25.25-.42s.04-.31-.02-.43s-.56-1.34-.77-1.84c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31s-.86.84-.86 2.05s.88 2.38 1 2.54s1.72 2.63 4.16 3.69c.58.25 1.03.4 1.38.51c.58.18 1.11.15 1.53.09c.47-.07 1.47-.6 1.68-1.18s.21-1.09.15-1.18c-.05-.1-.22-.16-.47-.28"
            />
          </svg>
          <span>WhatsApp</span>
        </a>
        <RouterLink class="button request-button" to="/contact">{{ ui.header.requestService }}</RouterLink>
      </div>
    </div>
    <div class="menu-bar">
      <div class="site-frame menu-inner">
        <nav class="nav-links">
          <RouterLink
            v-for="item in content.navigation"
            :key="item.href"
            class="nav-link"
            :class="{ active: activePath === item.href }"
            :to="item.href"
          >
            <span>{{ item.label }}</span>
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
