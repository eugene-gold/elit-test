<template>
  <div class="page-header">
    <div class="page-header__container">
      <h1 class="page-header__text">Мясо. Птица. Фарш</h1>
      <h4 class="page-header__info page-header__info_margin-left">60 товаров</h4>
    </div>

    <GoodFilter
      class="page-header__filter_margin-top"
      :filterArray="filtersArray"
      name="sortitems"
      type="radio"
      :isSorted="true"
    >
      <h4 class="page-header__sort-wrapper page-header__sort-wrapper_margin">Cначала популярные</h4>
    </GoodFilter>
  </div>
</template>

<script setup>
import GoodFilter from '@/components/SideMenuComponent/GoodFilter.vue'
import { ref } from 'vue'

const filtersArray = ref([
  { filter: 'Сначала дешевле', status: false },
  { filter: 'Сначала дороже', status: false },
  { filter: 'По размеру скидки', status: false },
  { filter: 'Высокий рейтинг', status: false },
  { filter: 'Сначала популярные', status: false }
])
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.page-header {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.page-header__container {
  display: flex;
}

.page-header__info {
  color: $light-font-color;
  line-height: 1.89rem;
  align-self: end;
}

.page-header__info_margin-left {
  margin-left: 2.5rem;
}

.page-header__filter_margin-top {
  margin-top: 0.6rem;
}

.page-header__sort-wrapper {
  color: rgba(12, 12, 13, 0.8);
}

.page-header__sort-wrapper_margin {
  margin-right: 0.8rem;
}
</style>