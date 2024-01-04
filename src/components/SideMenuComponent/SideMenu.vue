<template>
  <div class="side__wrapper">
    <GoodFilter
      v-for="value in goodsData"
      :key="value.type"
      :filterType="value.type"
      :filterArray="value.list"
    />
    <Button class="filter-menu__button">Очистить фильтр</Button>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import GoodFilter from './GoodFilter.vue'
import { ref } from 'vue'

const goodsData = ref([
  { type: 'Бренд', list: null },
  {
    type: 'Страна',
    list: [
      { country: 'Россия', status: false },
      { country: 'Сербия', status: false }
    ]
  },
  {
    type: 'Направления меню',
    list: [
      { country: 'Банкетное меню', status: false },
      { country: 'Бургеры', status: true },
      { country: 'Воки', status: false },
      { country: 'Денер, шаурма, хот-дог', status: false },
      { country: 'Закуски для бара', status: false },
      { country: 'Итальянская кухня', status: false },
      { country: 'Суши и роллы', status: false }
    ]
  },
  {
    type: 'Вид сыра',
    list: [
      { country: 'Москарпоне', status: false },
      { country: 'Сулугуни', status: false },
      { country: 'Плавленный', status: false },
      { country: 'Сметанковый', status: false },
      { country: 'С белой плесенью', status: false },
      { country: 'Прочее', status: false }
    ]
  },
  {
    type: 'Вкус сыра',
    list: [
      { country: 'Сливочный', status: false },
      { country: 'Копченый', status: false }
    ]
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.side__wrapper {
  width: 22rem;
}
.filter-menu__button {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  color: $light-font-color;
  background: $bg-transparent;
}
</style>