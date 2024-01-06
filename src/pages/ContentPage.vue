<template>
  <div class="content-page content-page_padding-left">
    <PageHeader />
    <CategoryComponent />
    <CardsList />
    <Item name='Корейка свиная на кости без хребта "СК Короча" "Мираторг" 5,42 кг' company='Fish & More' country='Россия'
      :weight="12" :rate="4.6" :onClickFavorite="onClickFavorite" :isFavorite="true" imageUrl="./img/modal.png"
      :bonus="18" :price="366" measure="кг" />
    <NavigationComponent />
  </div>
</template>

<script setup>
import CardsList from '@/components/CardsList.vue'
import PageHeader from '@/components/PageHeaderComponent/PageHeader.vue'
import CategoryComponent from '@/components/CategoryComponent/CategoryComponent.vue'
import NavigationComponent from '@/components/NavigationComponent/NavigationComponent.vue'
import Item from '@/components/Item.vue'

const onClickFavorite = (e) => {
  e.target.classList.toggle('added')
}

</script>

<style lang="scss" scoped>
.content-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content-page_padding-left {
  padding-left: 4rem;
}
</style>