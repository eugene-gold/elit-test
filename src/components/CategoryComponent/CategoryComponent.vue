<template>
  <div class="categories categories_margin-top">
    <div class="categories__all">
      <CategoryInfo v-for="item in main.data.categories" :key="item.category" :category="item.category"
        :quantity="item.quantity" />
    </div>
    <div class="categories__chosen">
      <CategoryInfo v-for="item in user.userData.filters" :key="item" :category="item" />
    </div>
  </div>
</template>

<script setup>
import CategoryInfo from './ui/CategoryInfo.vue'
import { ref } from 'vue'
import { useMainStore } from '@/stores/mainStore';
import { useUserStore } from '@/stores/userStore';
const main = useMainStore()
const user = useUserStore()

const chosenArray = ref(['Bonefesto', 'Сметанковый'])
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
}

.categories_margin-top {
  margin-top: 3rem;
}

.categories__all,
.categories__chosen {
  display: flex;
  flex-wrap: wrap;
}
</style>