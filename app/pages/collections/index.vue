<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Collection,
  type CollectionsResponse,
  type StrapiCollectionAttributes,
  mapCollectionsResponse,
} from "@/utils/catalogMappers";

definePageMeta({
  layout: "default",
});

const router = useRouter();
const { normalizeMediaCollection } = useStrapi();

const {
  data,
  isLoading: isCollectionsLoading,
  isError: isCollectionsError,
} = useStrapiQuery<
  StrapiListResponse<StrapiCollectionAttributes>,
  Error,
  CollectionsResponse
>(
  ["collections"],
  () => ({
    path: "/collections",
    query: {
      filters: {
        isActive: { $eq: true },
      },
      populate: {
        images: { populate: "*" },
        cover: { populate: "*" },
      },
      sort: ["publishedAt:desc"],
    },
  }),
  {
    select: (response: StrapiListResponse<StrapiCollectionAttributes>) =>
      mapCollectionsResponse(response, normalizeMediaCollection),
  }
);

const collections = computed(() => data.value?.items ?? []);
const placeholderCollectionImage = "/images/collections/Collection-product-1.png";

const getCollectionImage = (collection: Collection): string => {
  if (!collection.images?.length) {
    return placeholderCollectionImage;
  }
  const [first] = collection.images;
  return first?.url ?? first?.path ?? placeholderCollectionImage;
};

const goToCollection = (collection: Collection) => {
  const slug = collection.slug || String(collection.id);
  router.push(`/collections/${slug}`);
};
</script>

<template>
  <div class="">

    <section v-if="isCollectionsLoading" class="py-20 text-center text-[#0F0F0F]">
      Загрузка коллекций…
    </section>
    <section
      v-else-if="isCollectionsError"
      class="py-20 text-center text-[#C16371]"
    >
      Не удалось загрузить коллекции. Попробуйте позже.
    </section>
    <section
      v-else-if="collections.length === 0"
      class="py-20 text-center text-[#0F0F0F]"
    >
      Пока нет доступных коллекций.
    </section>

    <section v-else class="">
      <article
        v-for="collection in collections"
        :key="collection.id"
        class="collection-hero"
        role="button"
        tabindex="0"
        @click="goToCollection(collection)"
        @keyup.enter="goToCollection(collection)"
      >
        <div class="collection-hero__content">
          <img
            v-if="getCollectionImage(collection)"
            :src="getCollectionImage(collection)"
            :alt="collection.name"
            class=" inset-0 w-full h-full object-cover z-0"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.collection-hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.collection-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
}

.collection-hero__content {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;
  gap: 12px;
}

.collection-hero__eyebrow {
  letter-spacing: 0.3em;
  font-size: 12px;
  text-transform: uppercase;
}

.collection-hero__title {
  font-size: 48px;
  line-height: 1.1;
}

.collection-hero__description {
  max-width: 640px;
  color: rgba(255, 255, 255, 0.85);
}

.collection-hero__button {
  align-self: flex-start;
  margin-top: 8px;
  padding: 14px 32px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 12px;
  background: transparent;
  color: #ffffff;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.collection-hero__button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .collection-hero {
    min-height: 70vh;
    border-radius: 0;
  }

  .collection-hero__title {
    font-size: 34px;
  }
}
</style>
