<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getUiCopy, useLocale } from "../i18n";
import type { SiteContent } from "../types";

const brandMark = "https://www.figma.com/api/mcp/asset/2b9d5c5e-ff1a-424d-bd3e-0b2b44ad4309";
const worldMap = "https://www.figma.com/api/mcp/asset/00d1f07b-385c-4cfa-a073-d14b883cea12";

const socialIcons = [
  { name: "Facebook", icon: "https://www.figma.com/api/mcp/asset/38a5aea4-30b5-4b0f-9fc1-831da53ad362", href: "#" },
  { name: "Twitter", icon: "https://www.figma.com/api/mcp/asset/5113e76e-0e02-43fc-8dd9-ccb5ea803804", href: "#" },
  { name: "Instagram", icon: "https://www.figma.com/api/mcp/asset/b3353516-6222-407c-b654-551c9f680dff", href: "#" },
  { name: "Google Plus", icon: "https://www.figma.com/api/mcp/asset/7decf4ec-2eb1-4f6c-b2f1-0fdc2ce666e8", href: "#" }
] as const;

const exploreLinks = [
  { label: { en: "Home", nl: "Home" }, href: "/" },
  { label: { en: "Services", nl: "Diensten" }, href: "/services" },
  { label: { en: "Contact Us", nl: "Contact" }, href: "/contact" },
  { label: { en: "About Us", nl: "Over ons" }, href: "/about" },
  { label: { en: "Projects", nl: "Projecten" }, href: "/" },
  { label: { en: "Testimonial", nl: "Reviews" }, href: "/" },
  { label: { en: "FAQ", nl: "FAQ" }, href: "/" }
] as const;

defineProps<{
  content: SiteContent;
}>();

const { locale } = useLocale();
const ui = computed(() => getUiCopy(locale.value));
</script>

<template>
  <footer class="footer">
    <div class="footer-shell figma-footer-shell">
      <div class="site-frame footer-inner">
        <img class="footer-map" :src="worldMap" alt="" aria-hidden="true" />
        <div class="footer-grid">
          <div class="footer-lead">
            <div class="footer-brand">
              <img class="footer-brand-mark" :src="brandMark" alt="" aria-hidden="true" />
              <strong>ELECTRO</strong>
            </div>
            <p class="footer-copy footer-copy-figma">{{ ui.footer.lead }}</p>
            <div class="footer-contact-lines">
              <span>{{ content.brand.address }}</span>
              <a :href="`mailto:${content.brand.email}`">{{ content.brand.email }}</a>
              <a :href="`tel:${content.brand.phone}`">{{ content.brand.phone }}</a>
            </div>
          </div>
          <div class="footer-explore">
            <strong class="footer-heading">{{ ui.footer.explore }}</strong>
            <div class="footer-links">
              <RouterLink v-for="item in exploreLinks" :key="item.label.en" :to="item.href">
                {{ item.label[locale] }}
              </RouterLink>
            </div>
          </div>

          <div class="footer-newsletter">
            <strong class="footer-heading">{{ ui.footer.newsletter }}</strong>
            <form class="footer-subscribe" @submit.prevent>
              <input type="email" aria-label="Email address" />
              <button type="submit">{{ ui.footer.subscribe }}</button>
            </form>

            <strong class="footer-heading footer-social-heading">{{ ui.footer.socials }}</strong>
            <div class="footer-socials">
              <a
                v-for="social in socialIcons"
                :key="social.name"
                class="footer-social-link"
                :href="social.href"
                :aria-label="social.name"
              >
                <img :src="social.icon" :alt="social.name" />
              </a>
            </div>
          </div>
        </div>
        <p class="footer-copyright">Strumpen © 2022</p>
      </div>
    </div>
  </footer>
</template>
