<template>
  <div class="content-page content-page_padding-left">
    <PageHeaderComponent />
    <CategoryComponent />
    <CardsListComponent />
    <NavigationComponent />
  </div>
</template>

<script setup>
import CardsListComponent from '@/components/CardsListComponent/CardsListComponent.vue'
import PageHeaderComponent from '@/components/PageHeaderComponent/PageHeaderComponent.vue'
import CategoryComponent from '@/components/CategoryComponent/CategoryComponent.vue'
import NavigationComponent from '@/components/NavigationComponent/NavigationComponent.vue'
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
