<template>
  <div class="range range_margin-bottom">
    <h2>{{ name }}</h2>
    <div class="minmax__inputs range__inputs range__inputs_margin-top">
      <label for="" class="range__label">
        <span class="range__text">от</span>
        <input
          class="range__input"
          type="number"
          :min="min"
          :max="max"
          :step="step"
          v-model="sliderMinValue"
          :placeholder="sliderMinValue"
        />
        <span class="range__text">{{ measure }}</span>
      </label>
      <label class="range__label">
        <span class="range__text">до</span>
        <input
          class="range__input"
          type="number"
          :min="min"
          :max="max"
          :step="step"
          v-model="sliderMaxValue"
          :placeholder="sliderMaxValue"
        />
        <span class="range__text">{{ measure }}</span>
      </label>
    </div>
    <div ref="slider" class="custom__slider minmax">
      <div class="minmax-indicator"></div>
      <input
        ref="inputMin"
        type="range"
        name="min"
        id="min"
        :min="min"
        :max="max"
        :value="minValue"
        :step="step"
        @input="onInput"
      />
      <input
        ref="inputMax"
        type="range"
        name="max"
        id="max"
        :min="min"
        :max="max"
        :value="maxValue"
        :step="step"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const { min, max, step, minValue, maxValue } = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  minValue: {
    type: Number,
    default: 50
  },
  maxValue: {
    type: Number,
    default: 80
  },
  name: {
    type: String,
    default: 'Вес'
  },
  measure: {
    type: String,
    default: 'г'
  }
})

const emit = defineEmits(['update:minValue', 'update:maxValue'])

const slider = ref(null)
const inputMin = ref(null)
const inputMax = ref(null)
const sliderMinValue = ref(minValue)
const sliderMaxValue = ref(maxValue)

const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100
}

const setCSSProps = (left, right) => {
  slider.value.style.setProperty('--progressLeft', `${left}%`)
  slider.value.style.setProperty('--progressRight', `${right}%`)
}

watchEffect(() => {
  if (slider.value) {
    emit('update:minValue', sliderMinValue.value)
    emit('update:maxValue', sliderMaxValue.value)

    const leftPercent = getPercent(sliderMinValue.value, min, max)
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max)

    setCSSProps(leftPercent, rightPercent)
  }
})

const onInput = ({ target }) => {
  if (target.name === 'min') {
    target.value > sliderMaxValue.value
      ? (target.value = sliderMaxValue.value)
      : (sliderMinValue.value = parseFloat(target.value))
  }

  if (target.name === 'max') {
    target.value < sliderMinValue.value
      ? (target.value = sliderMinValue.value)
      : (sliderMaxValue.value = parseFloat(target.value))
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.custom__slider {
  --trackheight: 0.3rem;
  --thumbradius: 1.9rem;
}

.custom__slider input[type='range'] {
  position: relative;
  appearance: none;
  background: none;
  border-radius: 999px;
  z-index: 0;
  height: 100%;
  pointer-events: none;
}

.custom__slider input[type='range']::before {
  content: '';
  display: block;
  position: absolute;
  width: var(--progresspercent, 100%);
  height: 100%;
  background: #00865a;
  border-radius: 999px;
}

.custom__slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackheight);
  border-radius: 999px;
}

.custom__slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbradius);
  height: var(--thumbradius);
  margin-top: calc((var(--trackheight) - var(--thumbradius)) / 2);
  background: #fff;
  pointer-events: all;
  appearance: none;
  z-index: 1;
  cursor: pointer;
  box-shadow: 0 0.2rem 1.1rem rgb(12 12 13 / 20%);
  border-radius: 50%;
}

.custom__slider.default input[type='range']::-moz-range-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackheight);
  border-radius: 999px;
}

.custom__slider input[type='range']::-moz-range-thumb {
  position: relative;
  box-sizing: border-box;
  width: var(--thumbradius);
  height: var(--thumbradius);
  margin-top: calc((var(--trackheight) - var(--thumbradius)) / 2);
  background: #005a3c;
  border: 1px solid #00865a;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom__slider.minmax {
  position: relative;
  height: var(--trackheight);
  background: rgb(189 189 189 / 100%);
  border-radius: 999px;
  margin-top: 2.3rem;

  --progressleft: 0%;
  --progressright: 0%;
}

.minmax-indicator {
  position: absolute;
  height: 100%;
  pointer-events: none;
  left: var(--thumbradius);
  right: var(--thumbradius);
}

.minmax-indicator::before {
  content: '';
  position: absolute;
  background: rgb(70 161 117 / 70%);
  height: 100%;
  left: var(--progressleft);
  right: var(--progressright);
}

.custom__slider.minmax input[type='range'] {
  position: absolute;
  width: calc(100% - var(--thumbradius));
}

.custom__slider.minmax input[type='range'][name='max'] {
  left: var(--thumbradius);
}

.custom__slider.minmax input[type='range']::-webkit-slider-runnable-track {
  background: none;
}

.custom__slider.minmax input[type='range']::before {
  display: none;
}

.minmax__inputs {
  display: flex;
  justify-content: space-between;
}

.minmax__inputs input {
  width: 50px;
  color: black;
}

/* inputs */
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
  background: rgb(93 136 150 / 8%);
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
  color: rgb(133 133 133 / 100%);
}

.range {
  display: flex;
  flex-direction: column;
}

.range_margin-bottom {
  margin-bottom: 3rem;
}
</style>
