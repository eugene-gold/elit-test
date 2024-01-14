<template>
  <div class="side__wrapper">
    <GoodFilter v-for="value in main.data.filters" :key="value.type" :filterType="value.type" :filterArray="value.list"
      name="sidemenu" />


    <div class="range range_margin-bottom">
      <h2 class="range__header">Вес</h2>
      <div class="range__inputs range__inputs_margin-top">
        <label for="" class="range__label">
          <span class="range__text">от</span>
          <input :value="sliderMinValue" type="number" class="range__input" min="0" max="1000" placeholder="140">
          <span class="range__text">г</span>
        </label>
        <label class="range__label">
          <span class="range__text">до</span>
          <input :value="sliderMaxValue" type="number" class="range__input" min="0" max="1000" placeholder="480">
          <span class="range__text">г</span>
        </label>
      </div>
      <Slider v-model="sliderValue" showTooltip="drag"></Slider>

    </div>

    <div class="range range_margin-bottom">
      <h2 class="range__header">Цена</h2>
      <div class="range__inputs range__inputs_margin-top">
        <label for="" class="range__label">
          <span class="range__text">от</span>
          <input :value="sliderMinValue" type="number" class="range__input" min="0" max="1000" placeholder="140">
          <span class="range__text">₽</span>
        </label>
        <label class="range__label">
          <span class="range__text">до</span>
          <input :value="sliderMaxValue" type="number" class="range__input" min="0" max="1000" placeholder="480">
          <span class="range__text">₽</span>
        </label>
      </div>
      <Slider v-model="sliderValue" showTooltip="drag"></Slider>

    </div>
    <Button class="filter-menu__button">Очистить фильтр</Button>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import GoodFilter from './GoodFilter.vue'
import { useMainStore } from '@/stores/mainStore';
import Slider from '@vueform/slider'
const main = useMainStore()
import { ref } from 'vue';

const sliderMinValue = ref(140)
const sliderMaxValue = ref(480)
const sliderValue = ref([sliderMinValue.value, sliderMaxValue.value])



</script>

<style lang="scss" scoped >
@import '@/assets/variables.scss';

.side__wrapper {
  width: 27rem;
}

.filter-menu__button {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  color: $light-font-color;
  background: $bg-transparent;
}



input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.range {
  display: flex;
  flex-direction: column;
}

.range_margin-bottom {
  margin-bottom: 3rem;
}

.range__inputs {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.range__inputs_margin-top {
  margin-top: 2rem;
}

.range__label {
  display: flex;
  align-items: center;
  min-height: 3.7rem;
  border-radius: 0.6rem;
  padding: 1rem;
  width: 10.7rem;
  justify-content: space-between;
}

.range__label {
  background: rgba(93, 136, 150, 0.08);
}

.range__input {
  background: rgb(232 232 232 / 8%);
  width: 3rem;
}

.range__text,
.range__input {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  color: rgba(133, 133, 133, 1);
}

.range__slider {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.slider-target {
  margin-top: 2rem;
}
</style>