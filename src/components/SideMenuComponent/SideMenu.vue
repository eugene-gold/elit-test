<template>
  <div class="side__wrapper">
    <GoodFilter v-for="value in main.data.filters" :key="value.type" :filterType="value.type" :filterArray="value.list" />
    <Button class="filter-menu__button">Очистить фильтр</Button>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import GoodFilter from './GoodFilter.vue'
import { useMainStore } from '@/stores/mainStore';
const main = useMainStore()

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