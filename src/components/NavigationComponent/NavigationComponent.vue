<template>
  <div class="navigation navigation_margin-top">
    <Button class="navigation__button">Загрузить еще</Button>
    <div class="navigation__pages navigation__pages_margin_rigth">
      <span class="navigation__page navigation__page_margin-left navigation__page_active">1</span>
      <span class="navigation__page navigation__page_margin-left">2</span>
      <span class="navigation__page navigation__page_margin-left">3</span>
      <Button>
        Дальше
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.163078 8.83555C-0.0541614 8.61609 -0.0543879 8.26004 0.162571 8.04029L3.65836 4.49962L0.162615 0.959748C-0.0543678 0.740026 -0.0541801 0.383978 0.163035 0.164491C0.38025 -0.0549955 0.732237 -0.0548058 0.94922 0.164916L4.83739 4.10216C5.05419 4.3217 5.05421 4.67738 4.83743 4.89695L0.949263 8.83504C0.732303 9.05479 0.380316 9.05502 0.163078 8.83555Z"
            fill="#858585"
          />
        </svg>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../ui/Button.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.navigation {
  display: flex;
  justify-content: center;
}

.navigation_margin-top {
  margin-top: 3rem;
}

.navigation__button {
  width: 18.1rem;
  height: 4.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
}

.navigation__pages {
  display: flex;
}
.navigation__pages_margin_rigth {
  margin-right: 2.5rem;
}

.navigation__page {
  width: 1rem;
  height: 1rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  color: $light-font-color;
}

.navigation__page_active {
  color: #0c0c0d;
}

.navigation__page_margin-left {
  margin-left: 1.5rem;
}
</style>