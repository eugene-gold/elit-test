<template>
    <div class="range range_margin-bottom">
        <h2 class="range__header">{{ name }}</h2>

        <div class="minmax-inputs range__inputs range__inputs_margin-top">
            <label for="" class="range__label">
                <span class="range__text">от</span>
                <input class="range__input" type="number" :min="min" :max="max" :step="step" v-model="sliderMinValue"
                    :placeholder="sliderMinValue">
                <span class="range__text">{{ measure }}</span>
            </label>
            <label class="range__label">
                <span class="range__text">до</span>
                <input class="range__input" type="number" :min="min" :max="max" :step="step" v-model="sliderMaxValue"
                    :placeholder="sliderMaxValue">
                <span class="range__text">{{ measure }}</span>
            </label>
        </div>

        <div ref="slider" class="custom-slider minmax">
            <div class="minmax-indicator"></div>
            <input ref="inputMin" type="range" name="min" id="min" :min="min" :max="max" :value="minValue" :step="step"
                @input="onInput" />
            <input ref="inputMax" type="range" name="max" id="max" :min="min" :max="max" :value="maxValue" :step="step"
                @input="onInput" />
        </div>

    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const { min, max, step, minValue, maxValue } = defineProps({
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1,
    },
    minValue: {
        type: Number,
        default: 50,
    },
    maxValue: {
        type: Number,
        default: 80,
    },
    name: {
        type: String,
        default: 'Вес',
    },
    measure: {
        type: String,
        default: 'г',
    },
});

const emit = defineEmits(["update:minValue", "update:maxValue"]);

const slider = ref(null);
const inputMin = ref(null);
const inputMax = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

const getPercent = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
};



const setCSSProps = (left, right) => {
    slider.value.style.setProperty("--progressLeft", `${left}%`);
    slider.value.style.setProperty("--progressRight", `${right}%`);
};

watchEffect(() => {
    if (slider.value) {
        // emit slidet values when updated
        emit("update:minValue", sliderMinValue.value);
        emit("update:maxValue", sliderMaxValue.value);

        // calculate values in percentages
        const leftPercent = getPercent(sliderMinValue.value, min, max);
        const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

        // set the CSS variables
        setCSSProps(leftPercent, rightPercent);
    }
});

const onInput = ({ target }) => {
    if (target.name === 'min') {
        target.value > sliderMaxValue.value
            ? target.value = sliderMaxValue.value
            : sliderMinValue.value = parseFloat(target.value);
    }

    if (target.name === 'max') {
        target.value < sliderMinValue.value
            ? target.value = sliderMinValue.value
            : sliderMaxValue.value = parseFloat(target.value);
    }
};

</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.custom-slider {
    --trackHeight: 0.3rem;
    --thumbRadius: 1.9rem;
}

.custom-slider input[type="range"] {
    position: relative;
    appearance: none;
    background: none;
    border-radius: 999px;
    z-index: 0;
    height: 100%;
    pointer-events: none;
}

.custom-slider input[type="range"]::before {
    content: "";
    display: block;
    position: absolute;
    width: var(--ProgressPercent, 100%);
    height: 100%;
    background: #00865a;
    border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-runnable-track {
    appearance: none;
    background: #005a3c;
    height: var(--trackHeight);
    border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
    position: relative;
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #ffffff;
    pointer-events: all;
    appearance: none;
    z-index: 1;
    cursor: pointer;
    box-shadow: 0 0.2rem 1.1rem rgba(12, 12, 13, 0.2);
    border-radius: 50%;
    ;
}

.custom-slider.default input[type="range"]::-moz-range-track {
    appearance: none;
    background: #005a3c;
    height: var(--trackHeight);
    border-radius: 999px;
}

.custom-slider input[type="range"]::-moz-range-thumb {
    position: relative;
    box-sizing: border-box;
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #005a3c;
    border: 1px solid #00865a;
    border-radius: 999px;
    pointer-events: all;
    appearance: none;
    z-index: 1;
}

.custom-slider.minmax {
    position: relative;
    height: var(--trackHeight);
    background: rgba(189, 189, 189, 1);
    border-radius: 999px;
    margin: 0.5rem 0;
    --progressLeft: 0%;
    --progressRight: 0%;
}

.minmax-indicator {
    position: absolute;
    height: 100%;
    pointer-events: none;
    left: var(--thumbRadius);
    right: var(--thumbRadius);
}

.minmax-indicator::before {
    content: "";
    position: absolute;
    background: rgba(70, 161, 117, 0.7);
    height: 100%;
    left: var(--progressLeft);
    right: var(--progressRight);
}

.custom-slider.minmax input[type="range"] {
    position: absolute;
    width: calc(100% - var(--thumbRadius));
}

.custom-slider.minmax input[type="range"][name="max"] {
    left: var(--thumbRadius);
}

.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
    background: none;
}

.custom-slider.minmax input[type="range"]::before {
    display: none;
}

.minmax-inputs {
    display: flex;
    justify-content: space-between;
}

.minmax-inputs input {
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

.range {
    display: flex;
    flex-direction: column;
}

.range_margin-bottom {
    margin-bottom: 3rem;
}
</style>