<template>
  <div class="navigation navigation_margin">
    <Button class="navigation__button"> Загрузить еще </Button>
    <div class="navigation__pages navigation__pages_margin_top">
      <span class="navigation__page navigation_font navigation__page_margin-left">
        1
      </span>
      <span class="navigation__page navigation_font navigation__page_margin-left">
        2
      </span>
      <span class="navigation__page navigation_font navigation__page_margin-left">
        3
      </span>
      <Button class="navigation__next navigation_font navigation__next_margin-left">
        Дальше
        <span class="navigation__next_margin-left">
          <SvgIcon name="to_right" />
        </span>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/shared/UI/Button/Button.vue'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.navigation {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.navigation_margin {
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  padding-left: 6.5rem;
  align-items: center;
}

.navigation__pages_margin_top {
  margin-top: 2rem;
}

.navigation__page {
  width: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
}

.navigation__page:hover {
  transform: scale(1.3);
  color: #0c0c0d;
}

.navigation__next {
  background: none;
  width: 7.7rem;
  padding: 0;
  height: 2rem;
}

.navigation__next_margin-left {
  margin-left: 1.4rem;
}

.navigation_font {
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  color: $light-font-color;
}

.navigation__page_margin-left {
  margin-left: 1.5rem;
}
</style>
