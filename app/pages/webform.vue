<script setup lang="ts">
import { ref, reactive } from "vue";

definePageMeta({
  layout: "blank",
});

const config = useRuntimeConfig();
const isSubmitted = ref(false);
const form = ref({
  name: '',
  phone: ''
});

async function onSubmit() {
  await $fetch('/leads', {
    baseURL: 'https://amora-brand.uz/api',
    method: 'POST',
    body: {
      clientName: form.value.name,
      phone: form.value.phone,
      source: 'SITE',
    }
  })
  // isSubmitted.value = true;
}
</script>

<template>
  <div>
    <div class="flex justify-center items-center h-[calc(90vh-72px)]">
      <div class="p-[40px] bg-white rounded-[60px]">
        <div v-if="!isSubmitted" class="w-[446px]">
          <div>
            <h2 class="text-[52px] font-[masvol] text-center">
              Открытие нового пространства AMORA
            </h2>
            <p class="text-[14px] text-center mt-[16px] uppercase">
              Пройдите регистрацию на мини-лекцию со стилистом в ателье Amora
            </p>
          </div>

          <form
            class="flex flex-col gap-[20px] mt-[32px]"
            @submit.prevent="onSubmit"
          >
            <InputText
              v-model="form.name"
              placeholder="ИМЯ ФАМИЛИЯ"
              class="w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
            />
            <InputText
              v-model="form.phone"
              placeholder="+998  00 000 00 00"
              class="w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
            />

            <Button
              type="submit"
              class="w-full mt-[24px] !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2"
            >
              <span>ОТПРАВИТЬ</span>
              <svg
                width="36"
                height="20"
                viewBox="0 0 36 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 10L36 10" stroke="white" />
                <path
                  d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                  stroke="white"
                />
              </svg>
            </Button>
          </form>
        </div>

        <!-- Состояние ПОСЛЕ отправки -->
        <div v-else class="text-center w-[446px]">
          <div class="flex justify-center mb-6">
            <!-- галочка -->
            <svg
              width="80"
              height="57"
              viewBox="0 0 80 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2668 56.3342L0 29.0674L3.60108 25.4663L27.2668 49.1321L76.3989 0L80 3.60108L27.2668 56.3342Z"
                fill="#C16371"
              />
            </svg>
          </div>

          <h2 class="text-[52px] font-[masvol]">Ваша заявка принята.</h2>

          <p class="mt-4 text-[14px] leading-relaxed">
            Мы будем рады разделить с вами атмосферу новой коллекции и
            пространства бренда
          </p>

          <!-- соц-сети (заглушки, дальше можешь подставить свои иконки/ссылки) -->
          <div class="flex justify-center items-center gap-4 my-6">
            <div class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4985 6.18725C23.2225 5.14794 22.4093 4.32945 21.3766 4.05162C19.505 3.54687 12 3.54688 12 3.54688C12 3.54688 4.49498 3.54687 2.62336 4.05162C1.59075 4.32941 0.777516 5.14794 0.501516 6.18725C0 8.07106 0 12.0014 0 12.0014C0 12.0014 0 15.9318 0.501516 17.8156C0.777516 18.8549 1.59075 19.6734 2.62336 19.9513C4.49498 20.456 12 20.456 12 20.456C12 20.456 19.505 20.456 21.3766 19.9513C22.4093 19.6734 23.2225 18.8549 23.4985 17.8156C24 15.9318 24 12.0014 24 12.0014C24 12.0014 24 8.07106 23.4985 6.18725Z"
                  fill="white"
                />
                <path
                  d="M9.54688 15.5667L15.8196 11.9983L9.54688 8.42969V15.5667Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>

            <div class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4678 2.74065C18.4598 3.98625 5.56296 9.32841 1.99944 10.7845C-0.390483 11.7171 1.00848 12.5914 1.00848 12.5914C1.00848 12.5914 3.04848 13.2908 4.79712 13.8154C6.54576 14.3401 7.4784 13.7571 7.4784 13.7571L15.697 8.21961C18.6113 6.23793 17.9119 7.86993 17.2126 8.56929C15.697 10.0849 13.1906 12.4746 11.0923 14.3982C10.1597 15.2142 10.626 15.9138 11.034 16.2634C12.5496 17.5458 16.6879 20.1687 16.9212 20.3437C18.1526 21.2154 20.5747 22.4703 20.9431 19.819L22.4004 10.6678C22.8667 7.57857 23.333 4.72233 23.3914 3.90633C23.5661 1.92465 21.4678 2.74065 21.4678 2.74065Z"
                  fill="white"
                />
              </svg>
            </div>

            <div class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM17.35 7.62C16.8 7.62 16.35 7.17 16.35 6.62C16.35 6.07 16.8 5.62 17.35 5.62C17.9 5.62 18.35 6.07 18.35 6.62C18.35 7.17 17.9 7.62 17.35 7.62Z"
                  fill="white"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <p class="mt-6 text-[12px] uppercase leading-relaxed">
            на бутик можно найти по адресу:
          </p>
          <p class="mt-2 text-[12px] uppercase leading-relaxed">
            ул. Исмаилата, 16А
          </p>
        </div>
      </div>
    </div>

    <!-- Карта -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.7815620197525!2d69.28589395273634!3d41.31384208318647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef55936150175%3A0x3a43610644438544!2sAmora%20brand!5e0!3m2!1sru!2s!4v1764417057696!5m2!1sru!2s"
      width="100%"
      height="560px"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
