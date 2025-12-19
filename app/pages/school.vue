<script setup lang="ts">
import { ref } from "vue";

const isCallBackVisible = ref(false);

const hero = {
  badge: "C.T. Factory",
  title: "Школа дизайна",
  description: "Освойте профессию дизайнера одежды и создавайте уникальные коллекции под руководством экспертов.",
  cta: "Выбрать курс",
};

const courses = [
  {
    badge: "Конструирование и моделирование",
    title: "Art of Fashion",
    description:
      "Полный цикл создания изделия: от эскиза до посадки по фигуре. Изучение премиальной обработки, авторских техник и построения сложных форм. Практика на базе ателье AMORA с реальными тканями.",
    note: "Подходит для будущих дизайнеров и владельцев брендов.",
    button: "Оставить заявку",
    image: "/images/Collection-bg-3.jpg",
  },
  {
    badge: "Gerber цифровое моделирование",
    title: "Digital Fashion",
    description:
      "Быстрое и точное создание лекал в профессиональной среде Gerber. Моделирование, градация размеров, оптимизация производства.",
    note: "Полный разбор инструментов с нуля до Pro. Для технологов, конструкторов и тех, кто хочет открыть своё производство.",
    button: "Оставить заявку",
    image: "/images/Collection-bg-2.jpg",
  },
];

const contactInfo = [
  { label: "Телефон", value: "+998 (33) 324-44-44" },
  { label: "Адрес", value: "ул. Исмаилата, 16А" },
  { label: "График", value: "Пн–Вс: 10:00 — 22:00" },
];

const socials = [
  { icon: "ri:instagram-line", href: "https://instagram.com" },
  { icon: "ri:youtube-line", href: "https://youtube.com" },
  { icon: "ri:telegram-line", href: "https://t.me" },
];

const menuLinks = [
  { label: "Коллекции", href: "/collections" },
  { label: "Каталог", href: "/catalog" },
  { label: "Ателье", href: "/atelie" },
  { label: "School", href: "/school" },
  { label: "О бренде", href: "/brand" },
  { label: "Контакты", href: "/webform" },
];
</script>

<template>
  <div class="bg-[#F6F4F1] pb-20 pt-[88px] text-[#1F1B16]">
    <section class="container mx-auto px-4">
      <div class="rounded-[60px] bg-white px-6 py-67 text-center shadow-[0_40px_120px_rgba(35,31,27,0.08)]">
        <p class="text-xs uppercase tracking-[0.5em] text-[#C79D9B]">• {{ hero.badge }} •</p>
        <h1 class="mt-6 font-[masvol] text-[68px] text-[#1F1B16] max-md:text-[48px]">
          {{ hero.title }}
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.2em] text-[#8F8982]">
          {{ hero.description }}
        </p>
        <button
          type="button"
          class="mx-auto mt-8 inline-flex items-center gap-3 rounded-[80px] border border-[#1F1B16] px-10 py-3 text-[12px] tracking-[0.3em] text-[#1F1B16] transition hover:bg-[#1F1B16] hover:text-white"
        >
          {{ hero.cta }}
          <span class="text-lg">→</span>
        </button>
      </div>
    </section>



    <div class="grid mt-[64px] grid-cols-2 max-sm:mt-[300px] max-sm:grid-cols-1" v-for="value in courses.slice(0, 1)">
      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center max-w-[440px]">
          <h4
            class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] "
          >
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
            {{ value.badge }}
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
          </h4>

          <h2
            class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]"
          >
            {{ value.title }}
          </h2>
          <p>{{ value.description }}</p>
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6"
            variant="outlined"
            severity="secondary"
            @click="isCallBackVisible = true"
          >
            ПОДРОБНЕЕ
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="#0F0F0F"
              />
            </svg>
          </Button>

          <!-- модальное окно -->
          <AppCallBackModal v-model:visible="isCallBackVisible" />
        </div>
      </div>

      <div class="relative">
        <img
          src="/images/Request-bg-1.png"
          class="w-full max-h-[100vh] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-2 max-sm:grid-cols-1" v-for="value in courses.slice(1, 2)">
      <div class="relative">
        <img
          src="/images/Request-bg-2.jpg"
          class="w-full max-h-[100vh] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>

      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center max-w-[440px]">
          <h4
            class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] max-sm:mt-6"
          >
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
            {{ value.badge }}
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
          </h4>

          <h2
            class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]"
          >
            {{ value.title }}
          </h2>
          <p>{{ value.description }}</p>
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6"
            variant="outlined"
            severity="secondary"
          >
            ПОДРОБНЕЕ
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="#0F0F0F"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
