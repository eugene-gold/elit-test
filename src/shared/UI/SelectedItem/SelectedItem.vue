<template>
  <span class="filter__checkmark"></span>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.filter__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  background-color: $bg-transparent;
}

.filter__checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
</style>
