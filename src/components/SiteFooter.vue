<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getUiCopy } from "../i18n";
import { footerAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { brandMark, worldMap, socialIcons: footerSocialIcons } = footerAssets;

const socialIcons = [
  { name: "Facebook", icon: footerSocialIcons.facebook, href: "#" },
  { name: "Twitter", icon: footerSocialIcons.twitter, href: "#" },
  { name: "Instagram", icon: footerSocialIcons.instagram, href: "#" },
  { name: "Google Plus", icon: footerSocialIcons.google, href: "#" }
] as const;

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Over ons", href: "/about" },
  { label: "Projecten", href: "/" },
  { label: "Reviews", href: "/" },
  { label: "FAQ", href: "/" }
] as const;

defineProps<{
  content: SiteContent;
}>();

const ui = computed(() => getUiCopy());
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
              <RouterLink v-for="item in exploreLinks" :key="item.label" :to="item.href">
                {{ item.label }}
              </RouterLink>
            </div>
          </div>

          <div class="footer-newsletter">
            <strong class="footer-heading">{{ ui.footer.newsletter }}</strong>
            <form class="footer-subscribe" @submit.prevent>
              <input type="email" :aria-label="ui.common.emailAddress" />
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
