<template>
  <div class="categories categories_margin-top">
    <div class="categories__all">
      <CategoryInfo
        v-for="item in categoriesArray"
        :key="item.category"
        :category="item.category"
        :quantity="item.quantity"
      />
    </div>
    <div class="categories__chosen">
      <CategoryInfo v-for="item in chosenArray" :key="item" :category="item" />
    </div>
  </div>
</template>

<script setup>
import CategoryInfo from './ui/CategoryInfo.vue'
import { ref } from 'vue'

const categoriesArray = ref([
  { category: 'Говядина', quantity: 6 },
  { category: 'Свинина', quantity: 47 },
  { category: 'Птица', quantity: 3 },
  { category: 'Крольчатина', quantity: 5 },
  { category: 'Баранина', quantity: 5 },
  { category: 'Телятина', quantity: 5 },
  { category: 'Шашлык', quantity: 5 },
  { category: 'Курица', quantity: 5 },
  { category: 'Гусь, утка, индейка, перепелка', quantity: 5 }
])

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