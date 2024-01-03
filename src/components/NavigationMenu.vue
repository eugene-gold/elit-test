<template>
  <nav class="navigation">
    <div class="logo">
      <img src="/logo.png" alt="company_name" />
    </div>
    <div class="search search_margin">
      <Button class="search__catalog" @click="console.log('notning here...')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="7" height="7" rx="2" fill="white" />
          <rect x="9" width="7" height="7" rx="2" fill="white" />
          <rect y="9" width="7" height="7" rx="2" fill="white" />
          <rect x="9" y="9" width="7" height="7" rx="2" fill="white" />
        </svg>
        <span class="search__name">Каталог</span>
      </Button>

      <span class="search__icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
            stroke="#858585"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 16L13 13"
            stroke="#858585"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <input
        class="search__input"
        v-model="inputData"
        @keyup.enter="console.log('hi!')"
        placeholder="Поиск по товарам"
      />
    </div>

    <ul class="navbar navbar_margin">
      <li class="navbar__item">
        <span class="navbar__icon">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.72222 5.25C4.72222 2.35051 7.08516 0 10 0C12.9148 0 15.2778 2.35051 15.2778 5.25C15.2778 8.14949 12.9148 10.5 10 10.5C7.08516 10.5 4.72222 8.14949 4.72222 5.25Z"
              fill="#BDBDBD"
            />
            <path
              d="M0.5 17.85C0.5 14.9505 2.86294 12.6 5.77778 12.6H14.2222C17.1371 12.6 19.5 14.9505 19.5 17.85C19.5 19.5897 18.0822 21 16.3333 21H3.66667C1.91777 21 0.5 19.5897 0.5 17.85Z"
              fill="#BDBDBD"
            />
          </svg>
        </span>
        <span class="navbar__name">Войти</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <svg
            width="17"
            height="22"
            viewBox="0 0 17 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L5 4.5C5 2.567 6.567 1 8.5 1V1C10.433 1 12 2.567 12 4.5L12 8"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M0.722246 9.76442C0.827507 7.98118 0.880138 7.08955 1.45796 6.54484C2.03577 6.00012 2.92895 6.00012 4.7153 6.00012H12.2847C14.0711 6.00012 14.9642 6.00012 15.542 6.54484C16.1199 7.08955 16.1725 7.98118 16.2778 9.76442L16.875 19.8823C16.9336 20.8754 16.9629 21.372 16.6669 21.6861C16.3708 22.0001 15.8734 22.0001 14.8785 22.0001H2.12154C1.12663 22.0001 0.629179 22.0001 0.333127 21.6861C0.0370745 21.372 0.066387 20.8754 0.125012 19.8823L0.722246 9.76442Z"
              fill="#BDBDBD"
            />
          </svg>
        </span>
        <span class="navbar__badge">5</span>
        <span class="navbar__name">Заказы</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7336 0C18.1944 0 21 2.99858 21 6.69751C21 10.2347 19.7383 12.0275 14.3472 16.509L12.0221 18.4418C11.1268 19.1861 9.87319 19.1861 8.97794 18.4418L6.65277 16.509C1.26173 12.0275 0 10.2347 0 6.69751C0 2.99858 2.80558 0 6.26645 0C7.73126 0 9.07008 0.574158 10.2497 1.6789L10.5 1.92374L10.7503 1.6789C11.9299 0.574158 13.2687 0 14.7336 0Z"
              fill="#BDBDBD"
            />
          </svg>
        </span>
        <span class="navbar__badge">2</span>
        <span class="navbar__name">Избранное</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.16667C0 0.522334 0.522442 0 1.16691 0H1.58745C3.25618 0 4.69293 1.17761 5.02019 2.8136L5.1575 3.5H19.2489C20.3754 3.5 21.2086 4.54856 20.9539 5.64573L19.4334 12.1943C19.1879 13.2516 18.2456 14 17.16 14H6.79117C5.67869 14 4.72085 13.2149 4.50268 12.1243L2.7317 3.2712C2.62261 2.72587 2.14369 2.33333 1.58745 2.33333H1.16691C0.522442 2.33333 0 1.811 0 1.16667Z"
              fill="#BDBDBD"
            />
            <path
              d="M7.00144 21C8.29037 21 9.33526 19.9553 9.33526 18.6667C9.33526 17.378 8.29037 16.3333 7.00144 16.3333C5.71251 16.3333 4.66763 17.378 4.66763 18.6667C4.66763 19.9553 5.71251 21 7.00144 21Z"
              fill="#BDBDBD"
            />
            <path
              d="M16.3367 21C17.6256 21 18.6705 19.9553 18.6705 18.6667C18.6705 17.378 17.6256 16.3333 16.3367 16.3333C15.0478 16.3333 14.0029 17.378 14.0029 18.6667C14.0029 19.9553 15.0478 21 16.3367 21Z"
              fill="#BDBDBD"
            />
          </svg>
        </span>
        <span class="navbar__badge">22</span>
        <span class="navbar__name">Корзина</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const inputData = ref('')
import Button from './ui/Button.vue'
</script>



<style lang="scss" scoped>
@import '@/assets/variables.scss';

.navigation {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.6rem 0;
  max-width: 128rem;
  margin: 0 auto;
}
.logo {
  width: 20.2rem;
  height: 4.2rem;
}

.search {
  display: flex;
  height: 4.2rem;
  position: relative;
  width: 48.828125%;
}

.search_margin {
  margin-left: 0.5rem;
}

.search__catalog {
  width: 12rem;
  height: 4.2rem;
  position: absolute;
}

.search__name {
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  padding-left: 1.2rem;
}

.search__icon {
  display: flex;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translate(0, -50%);
}

.navbar {
  display: flex;
}

.navbar_margin {
  margin-left: 0.5rem;
}

.navbar__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.navbar__item_margin-left {
  margin-left: 3rem;
}

.navbar__icon {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
}
.navbar__name {
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.44rem;
}

.navbar__badge {
  color: #ffffff;
  border-radius: 4.4rem;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.32rem;
  background: #f3223c;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  position: absolute;
  top: -0.3rem;
  left: 55%;
}

.search__input {
  color: $grey-font-color;
  background: $bg-transparent;
  border-radius: 0.9rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: 100%;
  padding-left: 13.6rem;
}
</style>