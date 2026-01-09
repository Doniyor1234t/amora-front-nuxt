<script setup lang="ts">
import { ref } from "vue";
import AppCallBackModal from "@/components/ui/AppCallBackModal.vue";

const isCallBackVisible = ref(false);

const hero = {
  badge: "G.T. Factory",
  title: "G.T. Factory",
  description: "Премиальное обучение по конструированию и моделированию одежды.",
  cta: "Оставить заявку",
  image: "https://cms.amora-brand.uz/uploads/2_Banner_18ee12192d.png",
};

const courses = [
  {
    title: "Конструирование и моделирование",
    description: [
      "Полный цикл создания изделий: от эскиза до посадки по фигуре.",
      "Изучение премиальной обработки, авторских техник и построения сложных форм.",
      "Практика на базе Ателье AMORA с реальными тканями.",
      "Подходит для будущих дизайнеров и владельцев брендов.",
    ],
    note: "Подходит для будущих дизайнеров и владельцев брендов.",
    imageDesktop: "https://cms.amora-brand.uz/uploads/Image_89b9b69e47.png",
    imageMobile: "https://cms.amora-brand.uz/uploads/Image_2_c052a9824e.png",
  },
  {
    title: "Gerber - цифровое моделирование",
    description: [
      "Быстрое и точное создание лекал в профессиональной среде Gerber.",
      "Моделирование, градация размеров, оптимизация производства.",
      "Полный разбор инструментария с нуля до PRO.",
      "Для технологов, конструкторов и тех, кто хочет открыть свое производство.",
    ],
    note: "Полный разбор инструментов с нуля до PRO. Для технологов, конструкторов и тех, кто хочет открыть своё производство.",
    imageDesktop: "https://cms.amora-brand.uz/uploads/Image_1_6c5e136ef3.png",
    imageMobile: "https://cms.amora-brand.uz/uploads/Image_3_b504b9e40c.png",
  },
];
</script>

<template>
  <div class="bg-[#FBFAF9] text-[#1F1B16]">
    <section class="relative isolate flex min-h-[100vh] w-full items-end overflow-hidden bg-black/40">
      <img
        :src="hero.image"
        alt="G.T. Factory"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </section>

    <section
      v-for="(course, index) in courses"
      :key="course.title"
      class="mx-auto grid gap-0 lg:grid-cols-2"
    >
      <div
        :class="[
          'order-2 flex flex-col justify-center items-center bg-[#FBFAF9] max-md:py-[64px] max-md:px-[16px] text-center lg:px-16 lg:py-20 lg:text-left',
          index % 2 === 0 ? 'lg:order-1 max-md:order-1' : 'lg:order-2 max-md:order-1',
        ]"
      >
        <h2 class="mt-6 text-[48px] text-center leading-tight text-[#0F0F0F] max-md:text-[32px]">
          {{ course.title }}
        </h2>
        <div class="mt-6 space-y-4">
          <p
            v-for="(paragraph, pIndex) in course.description"
            :key="pIndex"
            class="text-sm leading-relaxed max-md:text-[14px] text-center"
          >
            {{ paragraph }}
          </p>
        </div>
        <button
          type="button"
          class="mt-8 w-fit border border-[#0F0F0F] px-10 py-3 text-[12px] uppercase tracking-[0.3em] text-[#0F0F0F] transition hover:bg-[#0F0F0F] hover:text-white lg:w-auto"
          @click="isCallBackVisible = true"
        >
          Оставить заявку
        </button>
      </div>
      <div
        :class="[
          'relative order-1 h-[420px] overflow-hidden lg:h-full',
          index % 2 === 0 ? 'lg:order-2' : 'lg:order-1',
        ]"
      >
        <picture>
          <source :srcset="course.imageMobile" media="(max-width: 768px)" />
          <img
            :src="course.imageDesktop"
            :alt="course.title"
            class="h-full w-full object-cover"
          />
        </picture>
        <div class="absolute inset-0 bg-black/25" />
      </div>
    </section>
  </div>

  <AppCallBackModal
    v-model:visible="isCallBackVisible"
    service-type="training"
    title="Записаться на обучение"
  />
</template>
