<template>
  <div
    class="tag"
    :class="[
      { orangeTag: tagName === 'хит' },
      { greenTag: tagName === 'новинка' },
      { blueTag: tagName === 'заморозка' }
    ]"
  >
    <slot>{{ tagName }}</slot>
  </div>
</template>

<script setup>
defineProps({
  tagName: String
})
</script>

<style lang="scss" scoped>
.tag {
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.44rem;
}

.greenTag {
  background: rgba(16, 177, 69, 1);
}

.orangeTag {
  background: rgba(255, 140, 34, 1);
}

.blueTag {
  background: rgba(34, 198, 234, 1);
}
</style>