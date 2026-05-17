<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { submitContact } from "../api";
import { getUiCopy } from "../i18n";
import { contactAssets } from "../localAssets";
import type { ContactPayload, SiteContent } from "../types";

const { contactHero, contactMap, socialIcons } = contactAssets;

const props = defineProps<{
  content: SiteContent;
}>();

const form = reactive<ContactPayload>({
  name: "",
  email: "",
  subject: "Websiteaanvraag",
  message: ""
});

const ui = computed(() => getUiCopy());
const sending = ref(false);
const statusText = ref("");
const statusType = ref<"idle" | "success" | "error">("idle");
const whatsappNumber = "31681046041";
const contactDetails = computed(() => [
  {
    label: "Adres",
    value: props.content.brand.address
  },
  {
    label: "E-mail",
    value: props.content.brand.email,
    href: `mailto:${props.content.brand.email}`
  },
  {
    label: "Telefoon",
    value: props.content.brand.phone,
    href: `tel:${props.content.brand.phone}`
  }
]);

function buildWhatsappHref(payload: ContactPayload) {
  const text = [
    "Nieuwe aanvraag via de website:",
    `Naam: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Onderwerp: ${payload.subject}`,
    `Bericht: ${payload.message}`
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

async function handleSubmit() {
  sending.value = true;
  statusType.value = "idle";
  statusText.value = ui.value.contact.sendingStatus;

  try {
    const submission = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    };
    const result = await submitContact(submission);
    form.name = "";
    form.email = "";
    form.subject = "Websiteaanvraag";
    form.message = "";
    statusType.value = "success";
    statusText.value = result.message || ui.value.contact.sent;

    if (typeof window !== "undefined") {
      window.open(buildWhatsappHref(submission), "_blank", "noopener,noreferrer");
    }
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
          <div class="contact-hero-copy">
            <h1>{{ ui.contact.title }}</h1>
            <p>{{ props.content.contact.intro }}</p>
          </div>
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
          <span class="contact-section-label">{{ props.content.brand.name }}</span>
          <strong>{{ ui.contact.info }}</strong>
          <p>{{ ui.contact.infoCopy }}</p>
          <div class="contact-detail-list">
            <div v-for="detail in contactDetails" :key="detail.label" class="contact-detail-item">
              <span class="contact-detail-label">{{ detail.label }}</span>
              <a v-if="detail.href" class="contact-detail-value" :href="detail.href">{{ detail.value }}</a>
              <span v-else class="contact-detail-value">{{ detail.value }}</span>
            </div>
          </div>
          <div class="contact-meta-chips" aria-label="Servicegegevens">
            <span>{{ props.content.contact.officeHours }}</span>
            <span>{{ props.content.contact.responseTime }}</span>
          </div>
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
          <span class="contact-section-label">Aanvraag</span>
          <strong>{{ ui.contact.message }}</strong>
          <p class="contact-form-intro">Laat kort weten waar u hulp bij nodig heeft. Wij reageren met de vervolgstappen.</p>
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
