<template>
  <footer class="pt-[80px] pb-[48px]">
    <div class="container">
      
      <div class="grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-4">
        
        
        <div class="col-span-1 md:col-span-1 flex justify-center md:justify-start">
          <NuxtLink to="/" class="mx-auto md:mx-0">
            <Icon
              name="app-icon:logo"
              mode="svg"
              color="#3F3F46"
              height="56px"
            />
          </NuxtLink>
        </div>

        
        <div
          class="flex flex-col col-span-1 md:col-span-2 items-center md:items-start text-center md:text-left"
        >
          <h2 class="text-[#0F0F0F] text-[14px] mb-[20px]">AMORA</h2>
          <p class="text-[#3D3D3D] text-[14px] mb-[20px]">
            Создаем элегантные силуэты из натуральных тканей с уважением к
            каждому человеку
          </p>
          <p class="text-[#3D3D3D] text-[14px] mb-[20px]">
            Запишитесь на примерку или консультацию стилиста.
          </p>
          
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-w-[200px] mx-auto md:mx-0"
            variant="outlined"
            severity="secondary"
          >
            ЗАПИСАТЬСЯ
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
<div class="md:col-span-1"></div>
        
        <div
          class="flex flex-col col-span-1 md:col-span-2 mx-auto md:mx-0 items-center md:items-start text-center md:text-left"
        >
          <h2 class="text-[#3D3D3D] text-[14px] mb-[20px]">СВЯЗАТЬСЯ С НАМИ</h2>
          <p class="text-[#0F0F0F] text-[14px] mb-[16px]">+998(33)-324-44-44</p>
          <p class="text-[#0F0F0F] text-[14px] mb-[16px]">
            ул. Исмаилата, 16А
          </p>
          <p class="text-[#0F0F0F] text-[14px] mb-[16px]">
            ПН-ВС: 10:00 - 22:00
          </p>
          
          <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
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
        </div>

        
        <div class="hidden md:block col-span-1"></div>

        
        <div
          class="flex flex-col col-span-1 md:col-span-1 items-center md:items-start text-center md:text-left"
        >
          <h2 class="text-[#3D3D3D] text-[14px] mb-[20px]">МЕНЮ</h2>
          <div class="flex flex-col gap-4">
            <NuxtLink to="/collections" variant="link" class="!text-[#0F0F0F] !px-0">КОЛЛЕКЦИИ</NuxtLink>
            <NuxtLink to="/catalog" variant="link" class="!text-[#0F0F0F] !px-0">КАТАЛОГ</NuxtLink>
            <NuxtLink to="/atelie" variant="link" class="!text-[#0F0F0F] !px-0">АТЕЛЬЕ</NuxtLink>
            <NuxtLink to="/school" variant="link" class="!text-[#0F0F0F] !px-0">SCHOOL</NuxtLink>
            <NuxtLink to="/brand" variant="link" class="!text-[#0F0F0F] !px-0">О БРЕНДЕ</NuxtLink>
            <NuxtLink to="/contacts" variant="link" class="!text-[#0F0F0F] !px-0">КОНТАКТЫ</NuxtLink>
          </div>
        </div>

      </div>
    </div>

   
    <div
      class="container flex flex-col md:flex-row md:justify-between items-center gap-4 mt-[40px] md:mt-[64px] py-[20px] border-t-[1px] border-[#E5E5E5]"
    >
      <div class="text-center md:text-left">
        <p>(C) 2025 AMORA. ALL RIGHT RESERVED.</p>
      </div>
      
      <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
        <NuxtLink to="/privacy-policy" class="!text-[#0F0F0F]">
          PRIVACY POLICY
        </NuxtLink>
        <NuxtLink to="/terms-of-use" class="!text-[#0F0F0F]">
          TERMS OF USE
        </NuxtLink>
      </div>
    </div>

  </footer>
</template>
