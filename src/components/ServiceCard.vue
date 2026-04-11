<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  index: number;
}>();

const labels = ["EL", "FX", "SF", "CM", "NW", "24"];
const badge = computed(() => labels[props.index % labels.length]);
</script>

<template>
  <article class="service-row reveal">
    <div class="service-row-index">{{ badge }}</div>
    <div class="service-row-copy">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>
