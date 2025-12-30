<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <Icon name="app-icon:logo" mode="svg" height="64px" />
          </NuxtLink>
          <div class="footer-brand__text">
            <h2>AMORA</h2>
            <p>Создаем элегантные силуэты из натуральных тканей.</p>
            <p>Запишитесь на примерку или консультацию стилиста.</p>
          </div>
          <Button class="footer-button" variant="outlined" severity="secondary">
            ЗАПИСАТЬСЯ
            <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="#0F0F0F" />
            </svg>
          </Button>
        </div>

        <div class="footer-contact">
          <h3>СВЯЗАТЬСЯ С НАМИ</h3>
          <p class="footer-contact__item">+998(33)-324-44-44</p>
          <p class="footer-contact__item">ул. Исмаилата, 16А</p>
          <p class="footer-contact__item">ПН-ВС: 10:00 - 22:00</p>

          <div class="footer-socials">
            <a href="https://www.youtube.com/@brandAmora" target="_blank" class="footer-socials__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4985 6.18725C23.2225 5.14794 22.4093 4.32945 21.3766 4.05162C19.505 3.54687 12 3.54688 12 3.54688C12 3.54688 4.49498 3.54687 2.62336 4.05162C1.59075 4.32941 0.777516 5.14794 0.501516 6.18725C0 8.07106 0 12.0014 0 12.0014C0 12.0014 0 15.9318 0.501516 17.8156C0.777516 18.8549 1.59075 19.6734 2.62336 19.9513C4.49498 20.456 12 20.456 12 20.456C12 20.456 19.505 20.456 21.3766 19.9513C22.4093 19.6734 23.2225 18.8549 23.4985 17.8156C24 15.9318 24 12.0014 24 12.0014C24 12.0014 24 8.07106 23.4985 6.18725Z" fill="white" />
                <path d="M9.54688 15.5667L15.8196 11.9983L9.54688 8.42969V15.5667Z" fill="#0F0F0F" />
              </svg>
            </a>
            <a href="https://t.me/Brand_Amora" target="_blank" class="footer-socials__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4678 2.74065C18.4598 3.98625 5.56296 9.32841 1.99944 10.7845C-0.390483 11.7171 1.00848 12.5914 1.00848 12.5914C1.00848 12.5914 3.04848 13.2908 4.79712 13.8154C6.54576 14.3401 7.4784 13.7571 7.4784 13.7571L15.697 8.21961C18.6113 6.23793 17.9119 7.86993 17.2126 8.56929C15.697 10.0849 13.1906 12.4746 11.0923 14.3982C10.1597 15.2142 10.626 15.9138 11.034 16.2634C12.5496 17.5458 16.6879 20.1687 16.9212 20.3437C18.1526 21.2154 20.5747 22.4703 20.9431 19.819L22.4004 10.6678C22.8667 7.57857 23.333 4.72233 23.3914 3.90633C23.5661 1.92465 21.4678 2.74065 21.4678 2.74065Z" fill="white" />
              </svg>
            </a>
            <a href="https://www.instagram.com/brand.amora" target="_blank" class="footer-socials__item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM17.35 7.62C16.8 7.62 16.35 7.17 16.35 6.62C16.35 6.07 16.8 5.62 17.35 5.62C17.9 5.62 18.35 6.07 18.35 6.62C18.35 7.17 17.9 7.62 17.35 7.62Z" fill="white" />
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h3>МЕНЮ</h3>
          <div class="footer-links__list">
            <NuxtLink to="/collections">КОЛЛЕКЦИИ</NuxtLink>
            <NuxtLink to="/catalog">КАТАЛОГ</NuxtLink>
            <NuxtLink to="/atelie">АТЕЛЬЕ</NuxtLink>
            <NuxtLink to="/school">SCHOOL</NuxtLink>
            <NuxtLink to="/brand">О БРЕНДЕ</NuxtLink>
            <NuxtLink to="/contacts">КОНТАКТЫ</NuxtLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 AMORA. ALL RIGHTS RESERVED.</p>
        <div class="footer-bottom__links">
          <NuxtLink to="/privacy-policy">PRIVACY POLICY</NuxtLink>
          <NuxtLink to="/terms-of-use">TERMS OF USE</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #f8f7f4;
  color: #0f0f0f;
  padding: 72px 0 48px;
}

.footer-top {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-brand,
.footer-contact,
.footer-links {
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  margin-bottom: 16px;
  display: inline-flex;
}

.footer-brand__text h2 {
  font-size: 14px;
  letter-spacing: 0.15em;
  color: #080808;
}

.footer-brand__text p {
  color: #1f1f1f;
  line-height: 1.6;
}

.footer-button {
  margin-top: 12px;
  border-color: rgba(0, 0, 0, 0.25);
  color: #0f0f0f;
  border-radius: 80px;
  padding: 14px 32px;
  width: fit-content;
  background: transparent;
}

.footer-contact h3,
.footer-links h3 {
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #4c4c4c;
}

.footer-contact__item {
  margin: 0;
  color: #0f0f0f;
  letter-spacing: 0.05em;
}

.footer-socials {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.footer-socials__item {
  background: #0f0f0f;
  border-radius: 999px;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.footer-links__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links__list a {
  color: #0f0f0f;
  letter-spacing: 0.08em;
}

.footer-bottom {
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  color: #1f1f1f;
}

.footer-bottom__links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-bottom__links a {
  color: #0f0f0f;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }

  .footer-brand,
  .footer-contact,
  .footer-links {
    text-align: left;
    align-items: flex-start;
  }

  .footer-button {
    /* width: 100%; */
    justify-content: flex-start;
    /* font-size: 9px; */
    /* padding: 10px 20px; */
  }

  .footer-links__list {
    align-items: flex-start;
  }
}
</style>
