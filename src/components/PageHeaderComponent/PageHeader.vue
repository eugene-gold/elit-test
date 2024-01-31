<template>
  <div class="page-header">
    <div class="page-header__container">
      <h1>Мясо. Птица. Фарш</h1>
      <h4 class="page-header__info page-header__info_margin-left">
        60 товаров
      </h4>
    </div>

    <CustomSelect :filterArray="filtersArray" />
  </div>
</template>

<script setup>
import CustomSelect from '@/widgets/CustomSelectWidget/CustomSelect.vue'
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
</style>
