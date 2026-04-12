<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { submitContact } from "../api";
import { getUiCopy, useLocale } from "../i18n";
import type { ContactPayload, SiteContent } from "../types";

const contactHero = "https://www.figma.com/api/mcp/asset/1dc84bd6-7c70-43f3-9e10-4f0f5bfbec14";
const contactMap = "https://www.figma.com/api/mcp/asset/dcc1e36c-181a-4bb4-bcce-555ae4089beb";

const socialIcons = [
  { label: "Facebook", icon: "https://www.figma.com/api/mcp/asset/f55c4550-db81-479b-976f-bdb6be0731da" },
  { label: "Twitter", icon: "https://www.figma.com/api/mcp/asset/b4696002-e2ed-4342-bf79-55e520a857dc" },
  { label: "Instagram", icon: "https://www.figma.com/api/mcp/asset/22307d1b-2e42-45e7-959e-8d00863efc0d" },
  { label: "Google Plus", icon: "https://www.figma.com/api/mcp/asset/384fd89f-4ce4-4469-9dcc-83ce3d059284" }
] as const;

defineProps<{
  content: SiteContent;
}>();

const form = reactive<ContactPayload>({
  name: "",
  email: "",
  subject: "Website enquiry",
  message: ""
});

const { locale } = useLocale();
const ui = computed(() => getUiCopy(locale.value));
const sending = ref(false);
const statusText = ref("");
const statusType = ref<"idle" | "success" | "error">("idle");

async function handleSubmit() {
  sending.value = true;
  statusType.value = "idle";
  statusText.value = ui.value.contact.sendingStatus;

  try {
    const result = await submitContact(form);
    form.name = "";
    form.email = "";
    form.subject = "Website enquiry";
    form.message = "";
    statusType.value = "success";
    statusText.value = result.message || ui.value.contact.sent;
  } catch (error) {
    statusType.value = "error";
    statusText.value = error instanceof Error ? error.message : ui.value.contact.failed;
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <main>
    <section class="page-hero contact-hero-page">
      <div class="contact-hero-shell">
        <div
          class="page-hero-box interior-hero contact-hero-box"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.41)), url(${contactHero})`
          }"
        >
          <h1>{{ ui.contact.title }}</h1>
        </div>
      </div>
    </section>

    <section class="section contact-breadcrumb-section">
      <div class="site-frame">
        <div class="breadcrumbs">{{ ui.common.home }} &gt; <span>{{ ui.contact.breadcrumb }}</span></div>
      </div>
    </section>

    <section class="contact-map-section">
      <div class="contact-map-shell" :style="{ backgroundImage: `url(${contactMap})` }">
      </div>
    </section>

    <section class="section contact-main-section">
      <div class="site-frame contact-layout contact-layout-figma">
        <div class="contact-panel contact-panel-figma reveal">
          <strong>{{ ui.contact.info }}</strong>
          <p>
            {{ ui.contact.infoCopy }}
            <br />
            0012, Chiranci Street Kano, Nigeria
            <br />
            electro@mailservice.com
            <br />
            +2348100112233
          </p>
          <div class="contact-socials contact-socials-figma">
            <a
              v-for="social in socialIcons"
              :key="social.label"
              class="contact-social-link"
              href="#"
              :aria-label="social.label"
            >
              <img :src="social.icon" :alt="social.label" />
            </a>
          </div>
        </div>

        <form
          class="contact-form contact-form-figma reveal"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <strong>{{ ui.contact.message }}</strong>
          <div class="field">
            <label for="name">{{ ui.contact.fullName }}</label>
            <input id="name" v-model.trim="form.name" name="name" :placeholder="ui.contact.fullName" required />
          </div>
          <div class="field">
            <label for="email">{{ ui.contact.email }}</label>
            <input
              id="email"
              v-model.trim="form.email"
              name="email"
              type="email"
              :placeholder="ui.contact.email"
              required
            />
          </div>
          <input v-model.trim="form.subject" type="hidden" name="subject" />
          <div class="field">
            <label for="message">{{ ui.contact.messageLabel }}</label>
            <textarea
              id="message"
              v-model.trim="form.message"
              name="message"
              rows="6"
              :placeholder="ui.contact.messageLabel"
              required
            ></textarea>
          </div>
          <button class="button contact-send-button" type="submit" :disabled="sending">
            <span>{{ sending ? ui.contact.sending : ui.contact.send }}</span>
          </button>
          <div class="status" :class="statusType" aria-live="polite">{{ statusText }}</div>
        </form>
      </div>
    </section>
  </main>
</template>
