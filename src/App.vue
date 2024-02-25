<template>
  <header>
    <NavagationMenuComponent />
  </header>
  <main>
    <BreadCrumbs />
    <div class="main__content" v-if="!data.isLoading">
      <SideMenuComponent />
      <ContentPage />
    </div>
    <h1 v-else>...Loading</h1>
  </main>
</template>

<script setup>
import SideMenuComponent from '@/components/SideMenuComponent/SideMenuComponent.vue'
import NavagationMenuComponent from '@/components/NavagationMenuComponent/NavagationMenuComponent.vue'
import BreadCrumbs from '@/shared/UI/BreadCrumbs/BreadCrumbs.vue'
import ContentPage from './pages/ContentPage.vue'
import { useMainStore } from './stores/mainStore'
import { onMounted } from 'vue'
const data = useMainStore()

onMounted(() => {
  data.getData()
})
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
  margin: 3rem auto 0;
  margin-top: 3rem;
  flex-direction: column;
  max-width: 128rem;
}

.main__content {
  display: flex;
  margin-top: 3rem;
}
</style>
