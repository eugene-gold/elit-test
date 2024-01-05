<template>
  <header>
    <NavigationMenu />
  </header>

  <main>
    <BreadCrumbs />
    <div class="main__content">
      <SideMenu />
      <ContentPage />
    </div>
  </main>
</template>

<script setup>
import SideMenu from '@/components/SideMenuComponent/SideMenu.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import BreadCrumbs from '@/components/ui/BreadCrumbs.vue'
import ContentPage from './pages/ContentPage.vue'
</script>


<style lang="scss">
@import '@/assets/variables.scss';

header {
  display: flex;
  flex-direction: column;
  box-shadow: $element-shadow;
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
