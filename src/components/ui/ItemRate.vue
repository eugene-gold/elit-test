<template>
  <div class="image__info">
    <SvgIcon name="star" class="image__star" />
    <span class="image__rate image__rate_margin-left">{{ rate }}</span>
  </div>
</template>

<script setup>
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
defineProps({
  rate: Number
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.image__info {
  display: flex;
  align-items: center;
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
  z-index: 1;
}

.image__star {
  fill: #ffcb20;
}

.image__rate {
  color: $grey-rate-color;
  line-height: 1.68rem;
  font-size: 1.4rem;
  font-weight: 500;
}

.image__rate_margin-left {
  margin-left: 0.4rem;
}
</style>
