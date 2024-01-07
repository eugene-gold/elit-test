<template>
  <div class="content-page content-page_padding-left">
    <PageHeader />
    <CategoryComponent />
    <CardsList />
    <NavigationComponent />
  </div>
</template>

<script setup>
import CardsList from '@/components/CardsList.vue'
import PageHeader from '@/components/PageHeaderComponent/PageHeader.vue'
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