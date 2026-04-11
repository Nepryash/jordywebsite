<script setup lang="ts">
import { computed, onMounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { getUiCopy, translateContent, useLocale } from "./i18n";
import { useSiteStore } from "./store";

const { state, ensureLoaded } = useSiteStore();
const { locale } = useLocale();

onMounted(() => {
  void ensureLoaded();
});

const ready = computed(() => !state.loading && !!state.content);
const content = computed(() =>
  state.content ? translateContent(state.content, locale.value) : null
);
const ui = computed(() => getUiCopy(locale.value));
</script>

<template>
  <div v-if="state.loading" class="screen-state">
    <div class="screen-card">{{ ui.loading }}</div>
  </div>
  <div v-else-if="state.error" class="screen-state">
    <div class="screen-card">{{ state.error }}</div>
  </div>
  <div v-else-if="ready && content" class="site-shell">
    <SiteHeader :content="content" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :content="content" />
    </RouterView>
    <SiteFooter :content="content" />
  </div>
</template>
