<template>
  <div class="crumbs">
    <h4 class="crumbs__path">Главная</h4>
    <span class="crumbs__next">
      <SvgIcon name="to_right" />
    </span>
    <h4 class="crumbs__path">Каталог</h4>
    <span class="crumbs__next">
      <SvgIcon name="to_right" />
    </span>
    <h4 class="crumbs__path">Мясо. Птица. Фарш</h4>
  </div>
</template>

<script setup>
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.crumbs {
  display: flex;
}

.crumbs__path {
  color: $light-font-color;
}

.crumbs__next {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
}
</style>
