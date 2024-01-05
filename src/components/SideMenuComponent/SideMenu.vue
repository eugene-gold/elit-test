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
      { filter: 'Россия', status: false },
      { filter: 'Сербия', status: false }
    ]
  },
  {
    type: 'Направления меню',
    list: [
      { filter: 'Банкетное меню', status: false },
      { filter: 'Бургеры', status: true },
      { filter: 'Воки', status: false },
      { filter: 'Денер, шаурма, хот-дог', status: false },
      { filter: 'Закуски для бара', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Итальянская кухня', status: false },
      { filter: 'Суши и роллы', status: false }
    ]
  },
  {
    type: 'Вид сыра',
    list: [
      { filter: 'Москарпоне', status: false },
      { filter: 'Сулугуни', status: false },
      { filter: 'Плавленный', status: false },
      { filter: 'Сметанковый', status: false },
      { filter: 'С белой плесенью', status: false },
      { filter: 'Прочее', status: false }
    ]
  },
  {
    type: 'Вкус сыра',
    list: [
      { filter: 'Сливочный', status: false },
      { filter: 'Копченый', status: false }
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