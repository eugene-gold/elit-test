<template>
  <div
    class="tag tag_margin-rigth"
    :class="[
      { orangeTag: tagName.toLowerCase() === 'хит' },
      { greenTag: tagName.toLowerCase() === 'новинка' },
      { blueTag: tagName.toLowerCase() === 'заморозка' },
      { redTag: tagName.toLowerCase() === 'ликвидация' },
      { plusTag: tagName === '9+1' }
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
@import '@/assets/variables.scss';

.tag {
  padding: 0.6rem 0.8rem;
  border-radius: 0.6rem;
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.44rem;
}

.tag_margin-rigth {
  margin-right: 0.6rem;
}

.greenTag {
  background: rgb(16 177 69 / 100%);
}

.orangeTag {
  background: rgb(255 140 34 / 100%);
}

.blueTag {
  background: rgb(34 198 234 / 100%);
}

.redTag {
  background: $main-color;
}

.plusTag {
  background: rgb(145 139 198 / 100%);
}
</style>
