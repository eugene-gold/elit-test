<template>
  <Transition name="modal">
    <div class="modal" v-if="show" @click.self="$emit('close')">
      <div class="modal__content">
        <span class="modal__close" @click="$emit('close')">         
          <SvgIcon name="grey_cross" />
        </span>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue' 
defineProps({
  show: Boolean
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.modal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 136, 150, 0.4);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal__close {
  display: flex;
  align-items: center;
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  z-index: 100;
}

.modal__content {
  margin: auto;
  background: white;
  border-radius: 1.2rem;
  min-height: 10rem;
  min-width: 75rem;
  padding: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  position: relative;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
