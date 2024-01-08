<template>
  <Transition name="modal">
    <div class="modal" v-if="show" @click="$emit('close')">
      <div @click.stop class="modal__content" @click="$emit('close')">
        <span class="modal__close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </span>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<script setup>

defineProps({
  show: Boolean
})


</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.modal {
  position: fixed;
  z-index: 9998;
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