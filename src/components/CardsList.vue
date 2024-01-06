<template>
  <section class="cards__wrapper cards__wrapper_margin-top">
    <Card imageUrl="./img/Preview.png" title='Индейка, филе грудки на подложке замороженное "Индилайт"' :price="496"
      :priceOld="110" :bonus="null" :rate="4.6" country="Германия" :weight="300" :isAdded="isAdded" :isFavorite="true"
      :onClickFavorite="onClickFavorite" :onClickAdd="onClickAdd" measure="кг" />
  </section>
</template>

<script setup>
import Card from './CardComponent/Card.vue'
import { ref } from 'vue'

const isAdded = ref(false)

const onClickFavorite = (e) => {
  e.target.classList.toggle('added')
}

const onClickAdd = () => {
  isAdded.value ? (isAdded.value = false) : (isAdded.value = true)
}
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