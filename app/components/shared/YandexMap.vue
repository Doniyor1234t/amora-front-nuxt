<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import type { PropType } from "vue";

type Coordinates = [number, number];

const props = defineProps({
  center: {
    type: Array as unknown as PropType<Coordinates>,
    required: true,
  },
  zoom: {
    type: Number,
    default: 16,
  },
  marker: {
    type: Object as PropType<{
      coordinates: Coordinates;
      hint?: string;
      description?: string;
    }>,
    default: () => undefined,
  },
  height: {
    type: String,
    default: "600px",
  },
});

const mapContainer = ref<HTMLElement | null>(null);
let mapInstance: any = null;

declare global {
  interface Window {
    ymaps?: any;
  }
}

let scriptPromise: Promise<void> | null = null;

const loadYandexMaps = () => {
  if (window.ymaps) {
    return Promise.resolve();
  }

  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = () => {
      window.ymaps?.ready(() => resolve());
    };
    script.onerror = () => reject(new Error("Yandex Maps failed to load"));
    document.head.appendChild(script);
  });

  return scriptPromise;
};

const initMap = async () => {
  if (!mapContainer.value) return;

  await loadYandexMaps();

  mapInstance = new window.ymaps.Map(
    mapContainer.value,
    {
      center: props.center,
      zoom: props.zoom,
      controls: ["zoomControl"],
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  if (props.marker) {
    const { coordinates, hint, description } = props.marker;
    const placemark = new window.ymaps.Placemark(
      coordinates,
      {
        hintContent: hint,
        balloonContent: description,
      },
      {
        preset: "islands#blackIcon",
      }
    );
    mapInstance.geoObjects.add(placemark);
  }
};

onMounted(() => {
  if (import.meta.client) {
    initMap();
  }
});

onBeforeUnmount(() => {
  if (mapInstance) {
    mapInstance.destroy();
    mapInstance = null;
  }
});
</script>

<template>
  <div
    ref="mapContainer"
    class="w-full rounded-[40px] overflow-hidden border border-[#DCD6CE]"
    :style="{ minHeight: height }"
  ></div>
</template>
