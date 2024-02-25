<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <ItemRate :rate="item.rate" />

    <FavoriteIcon
      :is-favorite="item.isFavorite"
      @change-favorite="main.toggleFavorite(item.id)"
    />
    <div class="image image_padding" :class="{ image_height: item.isAdded }">
      <ImageTagComponent :tags="item.tags" />

      <img class="image_pic" :alt="item.title" :src="item.imageUrl" />

      <Button
        @button-event="isVisible = true"
        class="image__button"
        :class="{ image__button_active: hover }"
      >
        Подробнее
      </Button>
    </div>
    <div class="info-wrapper info-wrapper_padding">
      <div class="info">
        <p class="info__description">{{ item.title }}</p>
        <p class="info__data info__data_margin-top">
          <span class="info__weigth"> {{ item.weight }} г &middot; </span>
          <span class="info__country"> {{ item.country }}</span>
        </p>
      </div>
      <div class="price-block price-block_margin">
        <div class="prices">
          <span v-if="item.priceOld" class="prices__old">
            {{ item.priceOld }} &#8381;
          </span>
          <BonusElement v-if="item.bonus">
            {{ item.bonus }}
          </BonusElement>
          <PriceElement :price="item.price" :measure="item.measure" />
        </div>
        <Button @button-event="main.addOnClick(item.id)" v-if="!item.isAdded">
          <SvgIcon name="cart_white" />
        </Button>
      </div>
      <div class="counter counter_margin-t" v-if="item.isAdded">
        <Button class="counter__button" @button-event="user.decrementWeight(item.id)">
          <SvgIcon name="minus" />
        </Button>
        <span class="counter__quantity" v-if="item.userSelected"
          >{{ item.userSelected / 1000 }} кг</span
        >
        <span class="counter__quantity" v-if="!item.userSelected">2.5 кг</span>
        <Button class="counter__button" @button-event="user.incrementWeight(item.id)">
          <SvgIcon name="plus" />
        </Button>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Modal :show="isVisible" @close="isVisible = false">
      <ItemComponent :item="item" />
    </Modal>
  </Teleport>
</template>

<script setup>
import Button from '@/shared/UI/Button/Button.vue'
import BonusElement from '@/shared/UI/BonusElement/BonusElement.vue'
import ImageTagComponent from './ui/ImageTagComponent.vue'
import { ref } from 'vue'
import ItemRate from '@/shared/UI/ItemRate/ItemRate.vue'
import FavoriteIcon from '@/shared/UI/FavoriteIcon/FavoriteIcon.vue'
import PriceElement from '@/shared/UI/PriceElement/PriceElement.vue'
import Modal from '@/shared/UI/Modal/Modal.vue'
import ItemComponent from '@/components/ItemComponent/ItemComponent.vue'
import { useMainStore } from '@/stores/mainStore'
import { useUserStore } from '@/stores/userStore'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
const main = useMainStore()
const user = useUserStore()

const hover = ref(false)
const isVisible = ref(false)

defineProps({
  item: {
    type: Object,
    requred: true,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 24rem;
  height: 44.1rem;
  border: 1px solid $bg-transparent;
  border-radius: 0.9rem;
  box-shadow: $element-shadow;
}

.image {
  display: flex;
  width: 23.8rem;
  height: 23.8rem;
  position: relative;
}

.image_height {
  height: 42%;
}

.image_padding {
  padding: 1.6rem;
}

.image_pic {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.image__button {
  position: absolute;
  width: 16rem;
  height: 3.4rem;
  border-radius: 0.9rem;
  background: #feedef;
  color: $main-color;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  left: 4rem;
  bottom: 6rem;
  display: none;
}

.image__button_active {
  display: block;
}

.info-wrapper_padding {
  padding: 2rem 1.6rem;
}

.info__description {
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
}

.info__data_margin-top {
  margin-top: 0.6rem;
}

.info__weigth,
.info__country {
  font-size: 1.3rem;
  line-height: 1.56rem;
  color: $light-font-color;
}

.price-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.price-block_margin {
  margin-top: 4rem;
}

.prices {
  display: flex;
  flex-direction: column;
}

.prices__old {
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: $light-font-color;
  text-decoration: line-through;
}

.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.counter_margin-t {
  margin-top: 1.1rem;
}

.counter__quantity {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.92rem;
  width: 6rem;
  display: flex;
  justify-content: center;
}

.counter__button {
  background: $bg-transparent;
}
</style>
