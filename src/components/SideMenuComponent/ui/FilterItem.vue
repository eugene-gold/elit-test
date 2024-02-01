<template>
  <label class="filter"
    >{{ item.filter }}
    <input
      @click="user.addToUserFilters(item.filter)"
      class="filter__input"
      :type="type || 'checkbox'"
      :checked="item.status"
      :name="name"
    />
    <SelectedItem />
  </label>
</template>

<script setup>
import SelectedItem from '@/shared/UI/SelectedItem/SelectedItem.vue'
import { useUserStore } from '@/stores/userStore'
const user = useUserStore()

defineProps({
  //for input radio
  name: String,
  //cnange type
  type: String,
  item: {
    type: Object,
    requred: true,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.filter {
  display: block;
  position: relative;
  padding-left: 2.2rem;
  margin-bottom: 1.4rem;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1.68rem;
  user-select: none;
}

.filter__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.filter:hover .filter__input ~ .filter__checkmark {
  background-color: #ccc;
}

.filter .filter__input:checked ~ .filter__checkmark {
  background-color: $filter-checked-color;
}

.filter .filter__checkmark::after {
  left: 0.5rem;
  top: 0.2rem;
  width: 0.2rem;
  height: 0.6rem;
  border: solid white;
  border-width: 0 0.2rem 0.2rem 0;
  transform: rotate(45deg);
}

.filter .filter__input:checked ~ .filter__checkmark::after {
  display: block;
}
</style>
