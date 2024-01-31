<template>
  <div class="custom-slider">
    <input
      ref="slider"
      :value="sliderValue"
      @input="({ target }) => (sliderValue = parseFloat(target.value))"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider"
    />
    <br />
    <input
      :value="sliderValue"
      @input="({ target }) => (sliderValue = parseFloat(target.value))"
      :min="min"
      :max="max"
      :step="step"
      type="number"
      class="input"
    />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const { min, max, step, modelValue } = defineProps({
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
  modelValue: {
    type: Number,
    default: 50
  }
})

const emit = defineEmits(['update:modelValue'])

const sliderValue = ref(modelValue)
const slider = ref(null)

const getProgress = (value, min, max) => {
  return ((value - min) / (max - min)) * 100
}

const setCSSProgress = (progress) => {
  slider.value.style.setProperty('--ProgressPercent', `${progress}%`)
}

watchEffect(() => {
  if (slider.value) {
    emit('update:modelValue', sliderValue.value)

    const progress = getProgress(
      sliderValue.value,
      slider.value.min,
      slider.value.max
    )

    let extraWidth = (100 - progress) / 10

    setCSSProgress(progress + extraWidth)
  }
})
</script>

<style lang="scss" scoped>
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

.custom-slider input[type='range'] {
  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;
}

.custom-slider input[type='range']::before {
  content: '';
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: #00865a;
  pointer-events: none;
  border-radius: 999px;
}

.custom-slider input[type='range']::-webkit-slider-runnable-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-moz-range-track {
  appearance: none;
  background: #005a3c;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type='range']::-webkit-slider-thumb {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  background: #00bd7e;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.input {
  color: black;
}
</style>
