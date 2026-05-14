<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { getUiCopy } from "./i18n";
import { useSiteStore } from "./store";

const { state, ensureLoaded } = useSiteStore();
const route = useRoute();
let revealObserver: IntersectionObserver | null = null;
let removeScrollSceneVars: (() => void) | null = null;

onMounted(() => {
  void ensureLoaded();
  removeScrollSceneVars = setupScrollSceneVars();
});

const ready = computed(() => !state.loading && !!state.content);
const content = computed(() => state.content);
const ui = computed(() => getUiCopy());

function setupScrollSceneVars() {
  if (typeof window === "undefined") {
    return null;
  }

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    root.style.setProperty("--scroll-progress", "0");
    return null;
  }

  let frame = 0;
  const update = () => {
    frame = 0;
    const hero = document.querySelector<HTMLElement>(".figma-hero");
    const heroHeight = hero?.offsetHeight || window.innerHeight;
    const progress = Math.min(Math.max(window.scrollY / Math.max(heroHeight, 1), 0), 1);
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  };

  const schedule = () => {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);

  return () => {
    if (frame) {
      window.cancelAnimationFrame(frame);
    }
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}

function setupScrollReveals() {
  if (typeof window === "undefined") {
    return;
  }

  revealObserver?.disconnect();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll<HTMLElement>(
    "main > section:not(:first-child), .figma-service-card, .offer-card, .recent-project-card, .figma-testimonial-card, .about-figma-offer-card, .about-figma-team-card, .download-block, .service-column, .contact-panel-figma, .contact-form-figma"
  );
  const iconTargets = document.querySelectorAll<HTMLElement>(
    ".figma-service-icon-front, .figma-service-icon-overlay, .offer-card-icon, .about-figma-offer-icon, .download-icon, .footer-social-link img, .contact-social-link img"
  );

  targets.forEach((target, index) => {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);

    if (reduceMotion) {
      target.classList.add("is-visible");
    }
  });

  iconTargets.forEach((target, index) => {
    const section = target.closest<HTMLElement>("section, footer");
    const sectionClass = section?.className || "";
    const direction = index % 3 === 0 ? -14 : index % 3 === 1 ? 0 : 14;
    const rotate = index % 2 === 0 ? -7 : 7;

    target.classList.add("scroll-pop-icon");
    target.classList.toggle("scroll-pop-icon-service", target.classList.contains("figma-service-icon-front") || target.classList.contains("figma-service-icon-overlay"));
    target.classList.toggle("scroll-pop-icon-offer", target.classList.contains("offer-card-icon") || target.classList.contains("about-figma-offer-icon"));
    target.classList.toggle("scroll-pop-icon-social", target.closest(".footer-social-link, .contact-social-link") !== null);
    target.classList.toggle("scroll-pop-icon-download", target.classList.contains("download-icon"));
    target.classList.toggle("scroll-pop-icon-late", sectionClass.includes("home-testimonials") || sectionClass.includes("contact") || section?.tagName.toLowerCase() === "footer");
    target.style.setProperty("--icon-pop-delay", `${Math.min(index % 8, 7) * 55}ms`);
    target.style.setProperty("--icon-pop-x", `${direction}px`);
    target.style.setProperty("--icon-pop-rotate", `${rotate}deg`);

    if (reduceMotion) {
      target.classList.add("is-visible");
    }
  });

  if (reduceMotion) {
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  targets.forEach((target) => revealObserver?.observe(target));
  iconTargets.forEach((target) => revealObserver?.observe(target));
}

watch(
  [() => route.fullPath, ready],
  async () => {
    if (!ready.value) {
      return;
    }

    await nextTick();
    setupScrollReveals();
  },
  { immediate: true }
);

onUnmounted(() => {
  revealObserver?.disconnect();
  removeScrollSceneVars?.();
});

watchEffect(() => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = "nl";
  }
});
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
