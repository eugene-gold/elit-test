<template>
  <Transition name="modal">
    <div class="modal" v-if="show" @click="$emit('close')">
      <div @click.stop class="modal__content">
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

.modal__content {
  margin: auto;
  background: white;
  border-radius: 1.2rem;
  min-height: 10rem;
  min-width: 30rem;
  padding: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

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