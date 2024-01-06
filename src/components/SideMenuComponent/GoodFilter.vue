<template>
  <section class="filter-menu filter-menu_margin-btm">
    <div class="filter-menu__header">
      <h2 class="filter-menu__name" v-if="filterType">{{ filterType }}</h2>
      <slot></slot>
      <span class="filter-menu__opener" @click="onClickOpen">
        <svg
          :class="{ opened: isOpen }"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7843 0.728309C11.4916 0.424174 11.0168 0.423857 10.7237 0.7276L6.00136 5.62171L1.28013 0.727662C0.987076 0.423886 0.512202 0.424148 0.219465 0.72825C-0.0732708 1.03235 -0.0730171 1.52513 0.220033 1.82891L5.47126 7.27234C5.76406 7.57586 6.23845 7.57589 6.53129 7.2724L11.7837 1.82897C12.0767 1.52522 12.077 1.03244 11.7843 0.728309Z"
            fill="#858585"
          />
        </svg>
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
        :filterName="item.filter"
        :isChecked="item.status"
        :key="item.filter"
        :name="name"
        :type="type"
      />
    </div>
  </section>
</template>

<script setup>
import FilterItem from './ui/FilterItem.vue'
import { ref } from 'vue'

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
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
  right: 0;
  top: 1rem;
  background: #ffffff;
}

.filter-menu__wrapper_margin-top {
  margin-top: 2rem;
}
</style>