<script setup lang="ts">
const features = [
  {
    title: "Идеальная посадка",
    description: "Лекала строятся индивидуально под ваши мерки и желания.",
    icon: "ri:ruler-line",
  },
  {
    title: "Эксклюзивный дизайн",
    description: "Возможность создать уникальную вещь, которой не будет ни у кого.",
    icon: "ri:sparkling-2-line",
  },
  {
    title: "Безупречное качество",
    description: "Ручная работа, премиальная обработка, шёлк и витонченность.",
    icon: "ri:scissors-2-line",
  }
]

const steps = [
  {
    title: "Режем ткани",
    description: "Тон-определение и выбор материи.",
  },
  {
    title: "Примерка",
    description: "Поиск идеальной формы и силуэта.",
  },
  {
    title: "Драпировка",
    description: "Сборка и формирование ткани.",
  },
  {
    title: "Детали",
    description: "Съёмка всех швов и оформление.",
  },
  {
    title: "Готово",
    description: "Ваш уникальный образ.",
  },
]

const faqs = [
  {
    question: "Сколько времени занимает пошив?",
    answer:
      "Сроки пошива зависят от сложности изделия и загруженности ателье. В среднем процесс длится от 2 до 4 недель, однако мы всегда согласуем желаемые сроки лично.",
  },
  {
    question: "Как формируется стоимость?",
    answer:
      "Стоимость складывается из сложности работы, лекал, технологии обработки и стоимости материалов. На очной встрече мы можем назвать точную конечную сумму.",
  },
  {
    question: "Можно ли принести свою ткань?",
    answer:
      "Да, мы работаем как с нашими материалами, так и с тканью заказчика. Наш специалист предложит лучшее решение и подберёт ткань из внутренней коллекции при необходимости.",
  },
  {
    question: "Сколько примерок потребуется?",
    answer:
      "Обычно требуется 2-3 примерки. Первая для макета, вторая для изделия в ткани и финальная перед выдачей. Мы подстраиваемся под ваш график и можем проводить примерки онлайн.",
  },
]

const contacts = [
  {
    label: "Адрес",
    value: "Урда, 4-я Буюк Турон, дом 2",
  },
  {
    label: "Телефон",
    value: "+998 93 034-44-44",
  },
  {
    label: "График",
    value: "Пн–Вс 10:00 – 22:00",
  },
]

const menuLinks = [
  { label: "Коллекции", to: "/collections" },
  { label: "Каталог", to: "/catalog" },
  { label: "Ателье", to: "/atelie" },
  { label: "School", to: "/school" },
  { label: "O бренде", to: "/brand" },
  { label: "Контакты", to: "/contacts" },
]
</script>

<template>
  <div class="bg-[#F6F5F2] pb-20 pt-[104px]">
    <section class="container mx-auto px-4">
      <div
        class="rounded-[60px] bg-white px-[48px] py-[298px] text-center max-md:px-[32px]"
      >
        <p class="text-xs uppercase tracking-[0.4em] text-[#7F7C77]">
          • Ателье AMORA •
        </p>
        <h1 class="mt-4 font-[masvol] text-[72px] leading-tight text-[#0F0F0F] max-md:text-[52px]">
          Индивидуальный пошив
        </h1>
        <p class="mx-auto mt-4 max-w-[520px] text-sm uppercase tracking-[0.2em] text-[#7F7C77]">
          Создаём вещи, отражающие ваш характер и мечты.
        </p>
        <button
          type="button"
          class="mt-10 rounded-[36px] border border-[#0F0F0F] px-[40px] py-[16px] text-[13px] uppercase tracking-[0.25em] text-[#0F0F0F] transition hover:bg-[#0F0F0F] hover:text-white"
        >
          Записаться на консультацию
        </button>
      </div>
    </section>

    <section class="container mx-auto mt-24 px-4">
      <div class="text-center">
        <h2 class="mt-3 font-[masvol] text-[56px] text-[#0F0F0F]">Искусство быть собой</h2>
        <p class="mx-auto mt-5 max-w-[560px] text-sm uppercase tracking-[0.2em] text-[#7F7C77]">
          Индивидуальный пошив в AMORA — это не просто создание одежды, это процесс воплощения вашей индивидуальности в ткани.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-[40px] bg-white px-[40px] h-[320px] py-[48px] text-center shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between"
        >
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#0F0F0F]">
            <Icon :name="feature.icon" size="28" class="text-[#0F0F0F]" />
          </div>
          <div class="">
            <h3 class="mt-6 text-lg font-semibold uppercase tracking-[0.15em] text-[#0F0F0F]">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-sm text-[#7F7C77]">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-24 flex flex-col gap-12 px-4 lg:flex-row">
      <div class="lg:w-1/3">
        <p class="text-xs uppercase tracking-[0.02em] text-[#7F7C77]">• Процесс пошива •</p>
        <h3 class="mt-4 font-[masvol] text-[48px] leading-snug text-[#0F0F0F]">
          История каждого изделия начинается с рук мастера.
        </h3>
      </div>

      <div class="lg:w-2/3 space-y-4">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="flex font-[masvol] items-center gap-8 rounded-[32px] bg-white px-10 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div class="text-[52px] w-[72px] text-center font-[0] text-[#0F0F0F]">{{ index + 1 }}</div>
          <div>
            <p class="text-lg font-semibold uppercase tracking-[0.2em] text-[#0F0F0F]">
              {{ step.title }}
            </p>
            <p class="mt-1 text-sm text-[#7A7874]">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-24 px-4">
      <div
        class="rounded-[60px] bg-[#0F0F0F] px-[48px] py-[72px] text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] max-md:px-[32px]"
      >
        <h3 class="mt-6 font-[masvol] text-[52px] leading-tight">Готовы создать мечту?</h3>
        <p class="mx-auto mt-4 max-w-[520px] text-sm uppercase tracking-[0.2em] text-[#D0CDC6]">
          Запишитесь на бесплатную консультацию со стилистом, чтобы обсудить ваши желания и мечты.
        </p>
        <button
          type="button"
          class="mx-auto mt-10 rounded-[36px] border border-white px-[40px] py-[16px] text-[13px] uppercase tracking-[0.25em] transition hover:bg-white hover:text-[#0F0F0F]"
        >
          Записаться сейчас
        </button>
      </div>
    </section>

    <section class="container flex flex-col items-center mx-auto mt-24 px-4">
      <div class="text-center">
        <h3 class="font-[masvol] text-[48px] text-[#0F0F0F]">Вопросы и ответы</h3>
      </div>

      <div class="mt-12 w-[910px] space-y-4">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="rounded-[28px] bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        >
          <summary class="flex text-[24px] font-zero font-[masvol] cursor-pointer items-center justify-between text-left text-lg text-[#0F0F0F]">
            {{ faq.question }}
            <span class="faq-toggle ml-4 text-2xl transition-transform duration-200">
              <!-- arrow icon -->
               <Icon name="ph:arrow-up" size="24" />
              <!-- <Icon name="ph:plus" size="24" /> -->
            </span>
          </summary>
          <p class="mt-4 font-[masvol] text-sm text-[#7A7874]">
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped>
details summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}

details[open] .faq-toggle {
  transform: rotate(180deg);
}
</style>
