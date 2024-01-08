<template>
  <section class="cards__wrapper cards__wrapper_margin-top">
    <CardComponent v-for="item in main.data.items" :key="item.id" :item="item" />
  </section>
</template>

<script setup>
import CardComponent from './CardComponent/CardComponent.vue';
import { useMainStore } from '@/stores/mainStore';

const main = useMainStore()

</script>

<style lang="scss" scoped>
.cards__wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
}

.cards__wrapper_margin-top {
  margin-top: 2rem;
}
</style>