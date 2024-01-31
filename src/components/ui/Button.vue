<template>
  <button class="btn">
    <slot> </slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  padding: 0.5rem;
  background: $main-color;
  border-radius: 0.9rem;
  cursor: pointer;
}
</style>
