<template>
  <section>
    <Card
      imageUrl="./img/Preview.png"
      title='Индейка, филе грудки на подложке замороженное "Индилайт"'
      :price="496"
      :priceOld="110"
      :bonus="null"
      :rate="4.6"
      country="Германия"
      :weight="300"
      :isAdded="true"
      :isFavorite="true"
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
  </section>
</template>

<script setup>
import Card from './CardComponent/Card.vue'

const onClickFavorite = (e) => {
  e.target.classList.toggle('added')
}

const onClickAdd = () => {
  console.log('+')
}
</script>

<style lang="scss" scoped>
</style>