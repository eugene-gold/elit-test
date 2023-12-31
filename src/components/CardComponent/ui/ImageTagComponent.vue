<template>
  <div class="tags_wrapper tags_wrapper_btm">
    <div class="image__tags image__tags_margin_btm">
      <Tag tag-name="хит">Хит</Tag>
      <Tag tag-name="новинка">Новинка</Tag>
      <Tag tag-name="заморозка">Заморозка</Tag>
    </div>

    <div class="image__state">
      <span class="image__bar"></span>
      <span class="image__bar image__bar_dark"></span>
      <span class="image__bar"></span>
      <span class="image__bar"></span>
    </div>
  </div>
</template>

<script setup>
import Tag from './Tag.vue'
</script>

<style lang="scss" scoped>
.tags_wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 87.4%;
}

.tags_wrapper_btm {
  bottom: 0.4rem;
}

.image__tags {
  display: flex;
  justify-content: space-between;
}

.image__tags_margin_btm {
  margin-bottom: 0.4rem;
}

.image__state {
  display: flex;
  justify-content: space-between;
}

.image__bar {
  height: 0.2rem;
  background: rgba(244, 244, 244, 1);
  border-radius: 0.6rem;
  width: 4.9rem;
}

.image__bar_dark {
  background: rgba(133, 133, 133, 1);
}
</style>