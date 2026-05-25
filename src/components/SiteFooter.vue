<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getUiCopy } from "../i18n";
import { headerAssets } from "../localAssets";
import { footerAssets } from "../localAssets";
import type { SiteContent } from "../types";

const { logo } = headerAssets;
const { worldMap, socialIcons: footerSocialIcons } = footerAssets;

const socialIcons = [
  { name: "Instagram", icon: footerSocialIcons.instagram, href: "#" },
  { name: "Facebook", icon: footerSocialIcons.facebook, href: "#" }
] as const;

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/services" },
  { label: "Over Strumpen", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

const businessDetails = [
  "KVK: 91700027",
  "BTW: NL004909654B82"
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
              <img class="footer-brand-logo" :src="logo" alt="" aria-hidden="true" />
              <strong>STRUMPEN</strong>
            </div>
            <p class="footer-copy footer-copy-figma">{{ ui.footer.lead }}</p>
            <div class="footer-contact-lines">
              <span>{{ content.brand.address }}</span>
              <a :href="`mailto:${content.brand.email}`">{{ content.brand.email }}</a>
              <a :href="`tel:${content.brand.phone}`">{{ content.brand.phone }}</a>
              <span v-for="detail in businessDetails" :key="detail">{{ detail }}</span>
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
            <strong class="footer-heading footer-social-heading">{{ ui.footer.socials }}</strong>
            <p class="footer-social-copy">Volg updates en recente werkzaamheden via de sociale kanalen.</p>
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
        <div class="footer-bottom">
          <p class="footer-copyright">Strumpen &copy; 2026</p>
        </div>
      </div>
    </div>
  </footer>
</template>
