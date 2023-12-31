<template>
  <header>
    <NavigationMenu />
    <BreadCrumbs />
  </header>

  <main>
    <GoodsFilter />

    <CardsList />
  </main>
</template>

<script setup>
import CardsList from './components/CardsList.vue'
import GoodsFilter from './components/GoodsFilter.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import BreadCrumbs from './components/ui/BreadCrumbs.vue'
</script>


<style lang="scss">
body {
  max-width: 128rem;
  margin: 0 auto;
}

main {
  display: flex;
}
</style>
