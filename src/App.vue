<template>
  <header>
    <NavigationMenu />
  </header>

  <main>
    <BreadCrumbs />
    <div class="main__content">
      <SideMenu />
      <CardsList />
    </div>
  </main>
</template>

<script setup>
import CardsList from '@/components/CardsList.vue'
import SideMenu from '@/components/SideMenuComponent/SideMenu.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import BreadCrumbs from '@/components/ui/BreadCrumbs.vue'
</script>


<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 0.5rem 1rem 0rem rgba(12, 12, 13, 0.15);
}

main {
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  max-width: 128rem;
  margin: 3rem auto 0;
}

.main__content {
  display: flex;
  margin-top: 3rem;
}
</style>
