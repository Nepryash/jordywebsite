<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getUiCopy, useLocale } from "../i18n";
import type { SiteContent } from "../types";

const locationIcon = "https://www.figma.com/api/mcp/asset/d4ec733e-fbed-4382-af09-f8e41bbb7b24";
const phoneIcon = "https://www.figma.com/api/mcp/asset/c3be41e6-0e43-4b11-a8fd-56ad65713afa";

const props = defineProps<{
  content: SiteContent;
}>();

const route = useRoute();
const activePath = computed(() => route.path);
const { locale } = useLocale();
const ui = computed(() => getUiCopy(locale.value));
const addressParts = computed(() => props.content.brand.address.split(",").map((part) => part.trim()));
const addressLineOne = computed(() => addressParts.value.slice(0, -2).join(", ") || addressParts.value[0] || "");
const addressLineTwo = computed(() => addressParts.value.slice(-2).join(", ") || props.content.brand.address);
</script>

<template>
  <header class="site-header">
    <div class="site-frame header-main">
      <RouterLink class="header-brand" to="/" data-node-id="8:506">
        <svg
          class="header-brand-icon"
          viewBox="0 0 100 100"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="100" height="100" rx="12" fill="#1d36a7" />
          <path
            d="M10 18 L46 48 C48 50 47 54 43 54 H36 C32 54 31 59 35 61 L92 98 L58 26 C56 21 53 14 50 8 H10 Z"
            fill="#000000"
          />
        </svg>
        <span class="header-brand-name" data-node-id="1:4">{{ props.content.brand.name.toUpperCase() }}</span>
      </RouterLink>
      <div class="header-contact" data-node-id="1:5">
        <img class="header-contact-icon" :src="locationIcon" alt="" aria-hidden="true" />
        <div>
          <small>{{ addressLineOne }}</small>
          <strong class="header-contact-location">{{ addressLineTwo }}</strong>
        </div>
      </div>
      <div class="header-contact" data-node-id="2:9">
        <img class="header-contact-icon header-contact-icon-phone" :src="phoneIcon" alt="" aria-hidden="true" />
        <div>
          <small>{{ ui.header.callUs }}</small>
          <a :href="`tel:${props.content.brand.phone}`">{{ props.content.brand.phone }}</a>
        </div>
      </div>
      <div class="header-actions">
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
        <div class="menu-search" aria-hidden="true">&#8981;</div>
      </div>
    </div>
  </header>
</template>
