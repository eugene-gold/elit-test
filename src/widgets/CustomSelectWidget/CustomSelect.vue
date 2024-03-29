<template>
  <div class="custom-select">
    <Button
      @button-event="onClickOpen"
      class="select-button"
      role="combobox"
      aria-labelledby="select button"
      aria-haspopup="listbox"
      aria-expanded="false"
      aria-controls="select-dropdown"
    >
      <span ref="selectButtonRef" class="selected-value">
        {{ selectButtonRef.value }}
      </span>
      <span class="arrow" :class="{ active: isOpen }">
        <SvgIcon name="to_down" />
      </span>
    </Button>
    <ul
      ref="optionsRef"
      class="select-dropdown"
      :class="{ active: !isOpen }"
      role="listbox"
      id="select-dropdown"
    >
      <li
        v-for="item in filterArray"
        :key="item.filter"
        role="option"
        @click="handler"
        @keyup.enter="handler"
        class="option"
      >
        <input
          type="radio"
          :id="item.filter"
          name="select-price"
          class="filter__input"
          :checked="item.status"
        />
        <label :for="item.filter">{{ item.filter }}</label>
        <SelectedItem />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SelectedItem from '@/shared/UI/SelectedItem/SelectedItem.vue'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
import Button from '@/shared/UI/Button/Button.vue'

defineProps({
  filterArray: Array
})

const selectButtonRef = ref('press button')
const optionsRef = ref(null)

onMounted(() => {
  selectButtonRef.value.textContent = optionsRef.value.children[0].textContent
})

const isOpen = ref(true)

const onClickOpen = () => {
  isOpen.value ? (isOpen.value = false) : (isOpen.value = true)
}

const handler = (e) => {
  if (e.clientX !== 0 && e.clientY !== 0 && e.target.textContent !== '') {
    selectButtonRef.value.textContent = e.target.textContent
    isOpen.value = true
  }

  if (e.key === 'Enter') {
    selectButtonRef.value.textContent = e.target.nextElementSibling.textContent
    isOpen.value = true
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.custom-select {
  position: relative;
  width: 20rem;
  max-width: 100%;
  padding-top: 0.6rem;
}

.select-button {
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: unset;
  padding: unset;
}

.selected-value {
  text-align: left;
  font-size: 1.4rem;
  color: rgb(12 12 13 / 80%);
  line-height: 1.68rem;
  padding-right: 0.8rem;
}

.arrow {
  transition: transform ease-in-out 0.3s;
}

.select-dropdown {
  position: absolute;
  width: 100%;
  box-shadow: 0 0.4rem 2rem rgb(0 0 0 / 15%);
  background-color: #fff;
  border-radius: 1.2rem;
  padding: 2rem 1.6rem 0.5rem;
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
  transition: 0.5s ease;
  z-index: 3;
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
}

.select-dropdown:focus-within {
  box-shadow: 0 10px 25px rgb(94 108 233 / 60%);
}

.select-dropdown label {
  font-size: 1.4rem;
  color: rgb(12 12 13 / 80%);
}

.select-dropdown li {
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.select-dropdown li label {
  width: 100%;
  cursor: pointer;
  line-height: 1.68rem;
}

.select-dropdown::-webkit-scrollbar {
  width: 7px;
}

.select-dropdown::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

.select-dropdown::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}

.select-dropdown li:hover {
  background-color: #f2f2f2;
}

.select-dropdown input:focus ~ label {
  background-color: #dfdfdf;
}

.select-dropdown input[type='radio'] {
  position: absolute;
  left: 0;
  opacity: 0;
}

.arrow.active {
  transform: rotate(180deg);
}

.select-dropdown.active {
  opacity: 1;
  visibility: visible;
  transform: scaleY(1);
}

/* check */
.option {
  display: block;
  position: relative;
  padding-left: 2.4rem;
  margin-bottom: 1.4rem;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1.68rem;
  user-select: none;
}

.select-dropdown li:hover .filter__input ~ .filter__checkmark {
  background-color: #ccc;
}

.select-dropdown li .filter__input:checked ~ .filter__checkmark {
  background-color: $filter-checked-color;
}

.select-dropdown li .filter__checkmark::after {
  left: 0.5rem;
  top: 0.2rem;
  width: 0.2rem;
  height: 0.6rem;
  border: solid white;
  border-width: 0 0.2rem 0.2rem 0;
  transform: rotate(45deg);
}

.select-dropdown li .filter__input:checked ~ .filter__checkmark::after {
  display: block;
}
</style>
