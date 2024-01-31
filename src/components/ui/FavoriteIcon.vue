<template>
  <div class="image__favorite" @click="main.toggleFavorite(id)">
    <SvgIcon name="heart2" class="image__like" :class="{ added: isFavorite }" />
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
const main = useMainStore()

defineProps({
  isFavorite: Boolean,
  id: Number
})
</script>

<style lang="scss" scoped>
.image__favorite {
  display: flex;
  position: absolute;
  right: 1.45rem;
  top: 1.85rem;
  z-index: 1;
}

.image__like {
  fill: #858585;
}

.added {
  stroke: red;
  fill-opacity: 0.1;
}
</style>
