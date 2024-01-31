<template>
  <div class="side__wrapper">
    <GoodFilter
      v-for="value in main.data.filters"
      :key="value.type"
      :filterType="value.type"
      :filterArray="value.list"
      name="sidemenu"
    />
    <CustomMinMaxSlider
      :step="10"
      :max="1000"
      v-model:min-value="sliderMin"
      v-model:max-value="sliderMax"
    />
    <CustomMinMaxSlider
      name="Цена"
      measure="₽"
      :step="10"
      :max="1000"
      v-model:min-value="sliderMinValue"
      v-model:max-value="sliderMaxValue"
    />
    <Button class="filter-menu__button">Очистить фильтр</Button>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import GoodFilter from './GoodFilter.vue'
import { useMainStore } from '@/stores/mainStore'
import CustomMinMaxSlider from '@/widgets/SideMenuWidget/CustomMinMaxSlider/CustomMinMaxSlider.vue'
const main = useMainStore()
import { ref } from 'vue'

const sliderMinValue = ref(140)
const sliderMaxValue = ref(480)

const sliderMin = ref(140)
const sliderMax = ref(480)
</script>

<style lang="scss" scoped>
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

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
