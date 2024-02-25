<template>
  <div class="prices__actual prices__actual_margin-top">
    {{ price }} &#8381;
    <span class="prices__measure" :style="styleObject"> / {{ measure }} </span>
  </div>
</template>

<script setup>
defineProps({
  price: Number,
  measure: String,
  styleObject: Object
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.prices__actual {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.16rem;
}

.prices__actual_margin-top {
  margin-top: 0.4rem;
}

.prices__measure {
  font-weight: inherit;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: $light-font-color;
}
</style>
