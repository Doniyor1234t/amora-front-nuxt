<script setup lang="ts">
const values = [
  {
    title: "Сложный крой",
    description: "Уникальные лекала, создающие идеальный силуэт и мягкую пластику линий.",
    icon: "ri:scissors-line",
  },
  {
    title: "Индивидуальный пошив",
    description: "Каждый образ адаптируем под параметры и историю женщины.",
    icon: "ri:ruler-line",
  },
  {
    title: "Ручная забота",
    description: "Ручные стежки, деликатные драпировки и внимание к деталям.",
    icon: "ri:needle-thread-line",
  },
  {
    title: "Премиум качество",
    description: "Лучшие ткани Европы и авторские отделки от мастеров AMORA.",
    icon: "ri:sparkling-2-line",
  },
];


const features = [
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8281 10.8281L16.0015 16.0015"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6681 5.33203L10.8281 21.172"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.7344 19.7344L26.6677 26.6677"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Сложный крой",
    description: "Уникальные лекала, создающие идеальный силуэт.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3997 20.3997C28.6981 20.697 28.9348 21.0503 29.0963 21.4393C29.2578 21.8282 29.3409 22.2452 29.3409 22.6664C29.3409 23.0876 29.2578 23.5046 29.0963 23.8936C28.9348 24.2825 28.6981 24.6358 28.3997 24.9331L24.9331 28.3997C24.6358 28.6981 24.2825 28.9348 23.8936 29.0963C23.5046 29.2578 23.0876 29.3409 22.6664 29.3409C22.2452 29.3409 21.8282 29.2578 21.4393 29.0963C21.0503 28.9348 20.697 28.6981 20.3997 28.3997L3.59974 11.5997C3.00048 10.9976 2.66406 10.1826 2.66406 9.33307C2.66406 8.48353 3.00048 7.66857 3.59974 7.0664L7.0664 3.59974C7.66857 3.00048 8.48353 2.66406 9.33307 2.66406C10.1826 2.66406 10.9976 3.00048 11.5997 3.59974L28.3997 20.3997Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.3359 16.6667L22.0026 14"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3359 12.6667L18.0026 10"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3359 8.66667L14.0026 6"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.3359 20.6667L26.0026 18"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Индивидуальный пошив",
    description: "Адаптация моделей под ваши параметры.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6899 3.75259C14.7471 3.44673 14.9094 3.17048 15.1487 2.97168C15.3881 2.77288 15.6894 2.66406 16.0006 2.66406C16.3117 2.66406 16.6131 2.77288 16.8525 2.97168C17.0918 3.17048 17.2541 3.44673 17.3113 3.75259L18.7126 11.1633C18.8121 11.6901 19.0682 12.1747 19.4473 12.5539C19.8264 12.933 20.3111 13.1891 20.8379 13.2886L28.2486 14.6899C28.5545 14.7471 28.8307 14.9094 29.0295 15.1487C29.2283 15.3881 29.3371 15.6894 29.3371 16.0006C29.3371 16.3117 29.2283 16.6131 29.0295 16.8525C28.8307 17.0918 28.5545 17.2541 28.2486 17.3113L20.8379 18.7126C20.3111 18.8121 19.8264 19.0682 19.4473 19.4473C19.0682 19.8264 18.8121 20.3111 18.7126 20.8379L17.3113 28.2486C17.2541 28.5545 17.0918 28.8307 16.8525 29.0295C16.6131 29.2283 16.3117 29.3371 16.0006 29.3371C15.6894 29.3371 15.3881 29.2283 15.1487 29.0295C14.9094 28.8307 14.7471 28.5545 14.6899 28.2486L13.2886 20.8379C13.1891 20.3111 12.933 19.8264 12.5539 19.4473C12.1747 19.0682 11.6901 18.8121 11.1633 18.7126L3.75259 17.3113C3.44673 17.2541 3.17048 17.0918 2.97168 16.8525C2.77288 16.6131 2.66406 16.3117 2.66406 16.0006C2.66406 15.6894 2.77288 15.3881 2.97168 15.1487C3.17048 14.9094 3.44673 14.7471 3.75259 14.6899L11.1633 13.2886C11.6901 13.1891 12.1747 12.933 12.5539 12.5539C12.933 12.1747 13.1891 11.6901 13.2886 11.1633L14.6899 3.75259Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6641 2.66797V8.0013"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3333 5.33203H24"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33073 29.3333C6.80349 29.3333 7.9974 28.1394 7.9974 26.6667C7.9974 25.1939 6.80349 24 5.33073 24C3.85797 24 2.66406 25.1939 2.66406 26.6667C2.66406 28.1394 3.85797 29.3333 5.33073 29.3333Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Ручная работа",
    description: "Внимание к деталям и ручная отделка.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9974 4L10.6641 12L15.9974 29.3333L21.3307 12L17.9974 4"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.6645 4C23.0785 4 23.4868 4.09639 23.8571 4.28153C24.2274 4.46667 24.5494 4.73548 24.7978 5.06667L28.7978 10.4C29.1409 10.8576 29.3278 11.4133 29.3309 11.9851C29.334 12.557 29.1532 13.1147 28.8152 13.576L18.1618 28.224C17.9148 28.5673 17.5897 28.847 17.2134 29.0398C16.837 29.2327 16.4201 29.3333 15.9972 29.3333C15.5742 29.3333 15.1574 29.2327 14.781 29.0398C14.4046 28.847 14.0795 28.5673 13.8325 28.224L3.17917 13.576C2.84132 13.1146 2.66075 12.5568 2.66411 11.9849C2.66747 11.413 2.85458 10.8574 3.19784 10.4L7.19517 5.07067C7.44342 4.73838 7.76575 4.46858 8.13655 4.28272C8.50735 4.09686 8.9164 4.00005 9.33117 4H22.6645Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66406 12H29.3307"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Премиум качество",
    description: "Только лучшие натуральные ткани мира.",
  }
]

const galleryImages = [
  "/images/Collection-bg-6.jpg",
  "/images/Collection-bg-5.jpg",
  "/images/Collection-bg-4.jpg",
  "/images/Collection-bg-3.jpg",
];

const founder = {
  name: "Имя Фамилия",
  description: [
    "Имя прошла путь от выпускницы художественного университета до создателя собственного couture-ателье. В каждом изделии она стремится сохранить лёгкую жесткость силуэта и подчеркнуть природную элегантность женщины.",
    "AMORA стала продолжением её творческого почерка — это история о смелости слушать себя, о женственности, которая проявляется в каждом движении. Бренд вырос из мечты подарить женщинам уверенность и возможность раскрывать свою внутреннюю красоту.",
  ],
};

const contactInfo = [
  { label: "Телефон", value: "+998 (33) 324-44-44" },
  { label: "Адрес", value: "Signature Atelier, г. Ташкент" },
  { label: "График", value: "Пн–Сб 10:00 — 20:00" },
];

const socials = [
  { icon: "ri:instagram-line", label: "Instagram", href: "https://instagram.com" },
  { icon: "ri:youtube-line", label: "YouTube", href: "https://youtube.com" },
  { icon: "ri:telegram-line", label: "Telegram", href: "https://t.me" },
];

const quickLinks = [
  { label: "Коллекции", href: "/collections" },
  { label: "Каталог", href: "/catalog" },
  { label: "Ателье", href: "/atelie" },
  { label: "О бренде", href: "/brand" },
  { label: "Контакты", href: "/webform" },
];
</script>

<template>
  <div class="bg-[#F4F1EC] pb-20 pt-[72px] text-[#1F1B16]">



    <div class="w-full">
      <img
        src="/images/About-bg.png"
        alt=""
        class="w-full object-cover h-[560px]"
      />
    </div>
    <div class="container py-[52px] max-sm:py-[20px]">
      <div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[20px]">
        <div>
          <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[32px]">
            AMORA - бренд, рождённый эстетикой женственности
          </h2>
        </div>
        <div>
          <p class="text-[#3D3D3D] font-sans font-light tracking-[0.05em] leading-[20px] text-[14px] max-sm:text-[12px]">
            AMORA — это премиальный fashion-бренд и ателье, основанное на идее мягкой женственности, натуральных тканей и утончённых силуэтов. Каждое изделие создаётся вручную нашими мастерами — от первых эскизов до финальной драпировки, сохраняя couture-подход и европейское качество.
          </p>
          <p class="text-[#3D3D3D] text-[14px] mt-[20px]">
            Мы создаём одежду, в которой сочетаются ручная работа, сложный крой и современная элегантность
          </p>
        </div>
      </div>
    </div>
    <div class="container pb-[64px]">
      <div class="flex flex-col items-center py-[64px] w-[448px] items-center text-center mx-auto max-sm:w-full">
        <h4 class="text-[#3D3D3D] leading-[16px] text-[14px] flex items-center gap-2">
          Почему мы?
        </h4>

        <h1 class="text-[#0F0F0F] text-[52px] leading-[56px]  mt-[12px]  max-sm:text-center  font-[masvol] max-sm:text-[32px]">
          Мы создаём одежду, а не просто вещи
        </h1>
      </div>

      <div class="grid grid-cols-4 gap-4 h-[400px] max-sm:grid-cols-2 max-sm:gap-2">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-[8px] sm:rounded-[8px] flex flex-col justify-between items-center pt-[48px] pb-[32px]"
        >
          <div
            class="rounded-[8px] border-[1px] border-[#0F0F0F] p-[20px] w-[72px] h-[72px] flex justify-center items-center"
            v-html="feature.svg"
          >
          </div>
          <div class="flex flex-col items-center text-center mt-4">
            <h2 class="text-[#0F0F0F] text-[24px] max-md:text-[18px] font-[masvol]">
              {{ feature.title }}
            </h2>
            <p class="text-[#3D3D3D] text-[14px] max-md:text-[12px] mt-2">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div> 
    <!-- <div class="relative overflow-hidden rounded-[0]">
      <img
        src="/images/About-bg.png"
        alt="Atelier facade"
        class="h-[520px] w-full object-cover"
      />
    </div>

    <section class="container mx-auto mt-16 px-4">
      <div class="flex gap-12 shadow-[0_30px_100px_rgba(54,48,41,0.08)] max-lg:px-[32px]">
        <div class="">
          <h2 class="mt-4 font-[masvol] text-[64px] leading-tight text-[#1F1B16] max-md:text-[44px]">
            AMORA — бренд, рождённый эстетикой женственности
          </h2>
        </div>
        <div class="space-y-6 text-sm uppercase tracking-[0.2em] text-[#8A837A] max-lg:text-[12px]">
          <p>
            Мы создаём одежду, которая подчёркивает природную грацию и раскрывает внутреннюю уверенность женщины.
            Каждое изделие рождается из эскиза, работы портного и финальной примерки с деликатной ручной отделкой.
          </p>
          <p>
            Для нас одежда — это не просто вещь. Это история, в которой сочетаются характер, культура и движения.
            AMORA объединяет в себе couture-техники и современную эстетику, чтобы вы могли чувствовать себя особенной каждый день.
          </p>
          <button
            type="button"
            class="inline-flex items-center gap-3 rounded-[80px] border border-[#2A2824] px-[32px] py-[14px] text-[11px] tracking-[0.4em] text-[#2A2824] transition hover:bg-[#2A2824] hover:text-white"
          >
            Наша история
            <span class="text-[16px]">→</span>
          </button>
        </div>
      </div>
    </section> -->

    <section class="container py-[260px] max-md:py-[100px] mx-auto mt-20 px-4">
      <div class="w-[700px] max-md:w-full flex flex-col gap-2 items-center content-center mx-auto text-center px-[48px] py-[56px] text-center max-md:px-[32px]">
        <Icon name="ri:double-quotes-l" size="48" class="text-[#C4BBAF]" />
        <p class="text-[42px] font-[masvol] leading-snug text-[#6D6A65] max-md:text-[30px]">
          "Наша миссия — раскрывать внутреннюю красоту женщины через внешний облик, даря ей уверенность в каждом движении."
        </p>
      </div>
    </section>

    <section class="container mx-auto mt-20 px-4">
      <h3 class="text-center font-[masvol] text-[52px] max-md:text-[32px] text-[#1F1B16]">Атмосфера творчества</h3>
      <div class="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="overflow-hidden bg-white">
          <img src="/images/Collection-bg-2.jpg" alt="Sketch large" class="h-full w-full object-cover" />
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="(image, index) in galleryImages"
            :key="image"
            class="overflow-hidden bg-white"
          >
            <img :src="image" :alt="`Атмосфера ${index + 1}`" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-24 px-4">
      <div class="grid gap-12 rounded-[8px] bg-white px-[48px] py-[64px] max-lg:px-[32px]">
        <div class="flex max-md:flex-col items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-[36px] min-h-[500px] bg-[#F4F1EC]">
            <img
              src="/images/Collection-bg-6.jpg"
              alt="Founder portrait"
              class="h-full w-full rounded-[8px] object-cover"
            />
          </div>
          <div class="min-w-[752px] max-md:min-w-full">
            <p class="text-xs uppercase tracking-[0.5em] text-[#B0A79D]">• основательница бренда •</p>
            <h3 class="mt-4 font-[masvol] text-[50px] text-[#1F1B16]">{{ founder.name }}</h3>
            <div class="mt-6 space-y-4 text-sm leading-relaxed text-[#6F6A63]">
              <p v-for="text in founder.description" :key="text">
                {{ text }}
              </p>
            </div>
            <button
              type="button"
              class="mt-8 inline-flex items-center gap-3 rounded-[80px] border border-[#2A2824] px-[32px] py-[14px] text-[11px] tracking-[0.4em] text-[#2A2824] transition hover:bg-[#2A2824] hover:text-white"
            >
              ПОДРОБНЕЕ
              <span class="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
