<template>
  <div class="prices__bonus">
    +<slot></slot>
    <span class="prices__logo">
      <SvgIcon name="bonus" />
    </span>
  </div>
</template>

<script setup>
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
defineProps({
  bonus: Number
})
</script>

<style lang="scss" scoped>
.prices__bonus {
  height: 2.2rem;
  max-width: 6rem;
  padding: 0.4rem 0.6rem;
  background: linear-gradient(80.8deg, #ff782d 4.95%, #f32254 72.54%);
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.44rem;
  color: #ffffff;
}

.prices__logo {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.6rem;
}
</style>
