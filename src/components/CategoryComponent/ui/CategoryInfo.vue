<template>
  <div class="category__container category__container_margin-right"
    :class="{ 'category__container_margin-bottom': quantity, category_green_theme: !quantity }">
    {{ category }}
    <span class="category__quantity category__quantity_margin-left">{{ quantity }}</span>
    <span class="category__close" v-if="!quantity" @click="user.addToUserFilters(category)">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7M1 1L7 7" stroke="#46A175" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
const user = useUserStore()
defineProps({
  category: String,
  quantity: Number
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.category__container {
  display: flex;
  padding: 1.2rem;
  border-radius: 0.6rem;
  background: rgba(242, 243, 245, 1);
}

.category__container,
.category__quantity {
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.68rem;
  color: $light-font-color;
}

.category__close {
  display: flex;
  align-items: center;
}

.category_green_theme {
  background: rgba(70, 161, 117, 0.16);
  color: #46a175;
}

.category__container_margin-right {
  margin-right: 1rem;
}

.category__container_margin-bottom {
  margin-bottom: 1rem;
}

.category__quantity_margin-left {
  margin-left: 0.8rem;
}
</style>