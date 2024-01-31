<template>
  <div
    class="category__container category__container_margin-right"
    :class="{
      'category__container_margin-bottom': quantity,
      category_green_theme: !quantity
    }"
  >
    {{ category }}
    <span class="category__quantity category__quantity_margin-left">{{
      quantity
    }}</span>
    <span
      class="category__close"
      v-if="!quantity"
      @click="user.removeFilter(category)"
    >
      <SvgIcon name="cross" />
    </span>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
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
  cursor: pointer;
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
