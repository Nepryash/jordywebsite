<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  copy?: string;
  variant?: "default" | "offer";
}>();
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading-offer': variant === 'offer' }">
    <div>
      <div class="section-label">{{ label }}</div>
      <h2 :data-node-id="variant === 'offer' ? '4:14' : undefined">{{ title }}</h2>
    </div>
    <p v-if="copy" class="section-copy">{{ copy }}</p>
  </div>
</template>
