<template>
  <label class="filter">{{ filterName }}
    <input @click="user.addToUserFilters(filterName)" class="filter__input" :type="type || 'checkbox'"
      :checked="isChecked" :name="name" />
    <span class="filter__checkmark"></span>
  </label>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
const user = useUserStore()

defineProps({
  filterName: String,
  isChecked: Boolean,
  name: String,
  type: String
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.filter__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.filter__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  background-color: $bg-transparent;
}

.filter:hover .filter__input~.filter__checkmark {
  background-color: #ccc;
}

.filter .filter__input:checked~.filter__checkmark {
  background-color: $filter-checked-color;
}

.filter__checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.filter .filter__input:checked~.filter__checkmark:after {
  display: block;
}

.filter .filter__checkmark:after {
  left: 0.5rem;
  top: 0.2rem;
  width: 0.2rem;
  height: 0.6rem;
  border: solid white;
  border-width: 0 0.2rem 0.2rem 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>