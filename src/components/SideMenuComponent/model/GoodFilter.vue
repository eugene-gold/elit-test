<template>
  <section class="filter-menu filter-menu_margin-btm">
    <div class="filter-menu__header">
      <h2 v-if="filterType">{{ filterType }}</h2>
      <slot></slot>
      <span class="filter-menu__opener" @click="onClickOpen">
        <SvgIcon name="check" :class="{ opened: isOpen }" />
      </span>
    </div>
    <div
      class="filter-menu__wrapper"
      :class="{
        'filter-menu__wrapper_filters_visibility': !isOpen,
        'filter-menu__wrapper_margin-top': isOpen,
        'filter-menu__wrapper_absolute_container': isSorted
      }"
    >
      <FilterItem
        v-for="item in filterArray"
        :key="item.filter"
        :name="name"
        :type="type"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
import FilterItem from '../ui/FilterItem.vue'
import { ref } from 'vue'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
const isOpen = ref(true)

defineProps({
  filterType: String,
  filterArray: Array,
  name: String,
  type: String,
  isSorted: Boolean
})

const onClickOpen = () => {
  isOpen.value ? (isOpen.value = false) : (isOpen.value = true)
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.filter-menu {
  display: flex;
  flex-direction: column;
  max-height: 26.2rem;
}

.filter-menu_margin-btm {
  margin-bottom: 3rem;
}

.filter-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-menu__opener {
  display: flex;
  height: 100%;
  align-items: center;
}

.opened {
  transform: rotate(180deg);
}

.filter-menu__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
}

.filter-menu__wrapper_filters_visibility {
  height: 0;
}

.filter-menu__wrapper_absolute_container {
  position: absolute;
  width: 19.2rem;
  padding: 2rem 1.6rem 0.5rem;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgb(0 0 0 / 15%);
  right: 0;
  top: 1rem;
  background: #fff;
}

.filter-menu__wrapper_margin-top {
  margin-top: 2rem;
}
</style>
