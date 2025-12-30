<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import "vue-yandex-maps/css";
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  type YandexMapSettings,
} from "vue-yandex-maps";

type Coordinates = [number, number];

const props = withDefaults(
  defineProps<{
    center: Coordinates;
    zoom?: number;
    marker?: {
      coordinates: Coordinates;
      hint?: string;
      description?: string;
    };
    height?: string;
  }>(),
  {
    zoom: 16,
    height: "600px",
  }
);

const mapSettings = computed<YandexMapSettings>(() => ({
  location: {
    center: props.center,
    zoom: props.zoom,
  },
  behaviors: ["drag", "scrollZoom", "touch"] as const,
}));

const mapStyle = computed(() => ({
  minHeight: props.height,
  height: props.height,
}));
</script>

<template>
  <ClientOnly>
    <YandexMap
      :settings="mapSettings"
      class="w-full overflow-hidden rounded-[40px] border border-[#DCD6CE]"
      :style="mapStyle"
    >
      <YandexMapDefaultSchemeLayer />
      <YandexMapDefaultFeaturesLayer />

      <YandexMapMarker
        v-if="marker"
        :settings="{ coordinates: marker.coordinates }"
      >
        <div
          class="rounded-full bg-[#0F0F0F] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white shadow-lg"
        >
          {{ marker.hint || "AMORA" }}
        </div>
      </YandexMapMarker>
    </YandexMap>
  </ClientOnly>
</template>
