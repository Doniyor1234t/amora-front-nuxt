<script setup lang="ts">
import AppCallBackModal from "@/components/ui/AppCallBackModal.vue";

const services = [
  {
    title: "Примерка с выездом",
    description: "Персональная примерка в удобном для вас месте",
    icon: "app-icon:ruller-icon",
  },
  {
    title: "Экспресс пошив за 2 дня",
    description: "Ускоренный пошив изделия с сохранением качества",
    icon: "app-icon:star-icon",
  },
  {
    title: "Онлайн заказ",
    description: "Возможность заказа онлайн, без визита на примерку",
    icon: "app-icon:scissors-icon",
  },
]

const priceList = [
  { title: "Легкие платья ", 
  price: "170$" },
  { title: "Сарафаны", 
  price: "130$" },
  { title: "Жакеты по фигуре", 
  price: "250$" },
  { title: "Пиджаки", 
  price: "350$" },
  { title: "Брюки ,  Юбки , Блузки", 
  price: "130$" },
  { title: "Двойки", 
  price: "220$" },
  { title: "Корсет", 
  price: "300$" },
  { title: "Нарядное платье", 
  price: "350$" },
  { title: "Авторское платье", 
  price: "500$" },
  { title: "Корсетное платье", 
  price: "700$" },
  { title: "Драпированное платье", 
  price: "1 200$" },
  { title: "Платье от Дизайнера ", 
  price: "1 500$" },
]

const faqs = [
  {
    question: "Сколько времени занимает пошив?",
    answer:
      "Сроки пошива зависят от сложности изделия и загруженности ателье. В среднем процесс занимает от 2 до 4 недель. Срочный пошив возможен за дополнительную плату.",
  },
  {
    question: "Как формируется стоимость?",
    answer:
      "Стоимость складывается из сложности работы (фасон, технология обработки) и стоимости материалов. Точную цену мы можем назвать только после обсуждения эскиза.",
  },
  {
    question: "Можно ли прийти со своей тканью?",
    answer:
      "Да, мы работаем как с нашими материалами, так и с тканью заказчика. Наш специалист проконсультирует вас по пригодности ткани для выбранной модели.",
  },
  {
    question: "Сколько примерок потребуется?",
    answer:
      "Обычно требуется 2-3 примерки: первая для макета, вторая для изделия в ткани и финальная перед сдачей. Для сложных изделий может потребоваться больше встреч.",
  },
]

const isCallBackVisible = ref(false);
</script>

<template>
  <div class="bg-[#FBFAF9] pb-24">
    <section class="relative isolate mx-auto flex min-h-[100vh] w-full items-end overflow-hidden bg-black/60">
      <img
        src="https://cms.amora-brand.uz/uploads/2_Banner_18ee12192d.png"
        alt="Ателье AMORA"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </section>

    <section class="container mx-auto mt-16 px-4 md:hidden">
      <h2 class="mb-6 text-[30px] font-light text-center leading-tight text-[#14120F] max-md:text-[30px]">
        Индивидуальный пошив в ателье
      </h2>
      <div class="bg-white px-5 py-5 max-md:px-6 lg:px-14">
        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="item in priceList"
            :key="item.title"
            class="flex items-center justify-between pb-4 text-[#14120F]"
          >
            <p class="text-sm tracking-[0.05em]">{{ item.title }}</p>
            <span class="font-light tracking-[0.15em]">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-16 px-4">
      <div class="text-center">
        <h3 class="mt-4 text-[52px] font-light text-[#0F0F0F] max-md:text-[30px]">
          Дополнительные услуги:
        </h3>
      </div>
      <div class="mt-12 max-md:mt-6 grid gap-6 md:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class=" bg-[#fff] p-8 text-center"
        >
          <span class="flex mx-auto h-18 w-18 items-center justify-center rounded-full border border-[#D0CBC4] text-[#14120F]">
            <Icon :name="service.icon" size="28" />
          </span>
          <h4 class="mt-24 text-2xl text-[#0F0F0F]">{{ service.title }}</h4>
          <p class="mt-2 text-sm text-[#3D3D3D]">
            {{ service.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="container mx-auto mt-20 px-4">
      <div class="flex flex-col items-center text-center">
        <h3 class="mt-3 text-[52px] text-[#0F0F0F] max-md:text-[30px]">
          Вопросы и ответы
        </h3>
      </div>
      <div class="mx-auto mt-10 max-w-[640px] space-y-4">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="bg-white px-6 py-5 max-md:px-4 max-md:py-4"
        >
          <summary class="flex cursor-pointer items-center justify-between text-left text-lg text-[#0F0F0F]">
            <span class="text-[26px] font-light max-md:text-[18px]">{{ faq.question }}</span>
            <span class="faq-toggle ml-4 text-2xl text-[#B86F62] transition-transform duration-200">
              <Icon name="app-icon:arrow-bottom" size="12"/>
            </span>
          </summary>
          <p class="mt-3 text-sm max-md:text-[12px] text-[#3D3D3D]">
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </section>

    <section class="container mx-auto mt-20 px-4">
      <div class="bg-[#CF998D] px-8 py-24 text-center text-white max-md:px-6">
        <h3 class="mt-4 text-[52px] leading-tight max-md:text-[36px]">
          Готовы создать мечту?
        </h3>
        <p class="mx-auto max-w-[662px] mt-3 font-light text-[18px] tracking-[0.05em] text-white/80">
          Запишитесь на бесплатную консультацию со стилистом, чтобы обсудить ваш будущий наряд
        </p>
        <button
          type="button"
          class="mx-auto mt-8 border border-white px-10 py-3 text-[13px] uppercase tracking-[0.3em] transition hover:bg-white hover:text-[#B86F62]"
          @click="isCallBackVisible = true"
        >
          Записаться сейчас
        </button>
      </div>
    </section>
  </div>

  <AppCallBackModal
    v-model:visible="isCallBackVisible"
    service-type="tailoring"
    title="Записаться на пошив"
  />
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
