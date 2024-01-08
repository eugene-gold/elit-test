<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">

    <ItemRate :rate="item.rate" />

    <FavoriteIcon :is-favorite="item.isFavorite" />

    <div class="image image_padding" :class="{ image_height: item.isAdded }">

      <ImageTagComponent :tags="item.tags" />

      <img class="image_pic" :alt="item.title" :src="item.imageUrl" />

      <Button class="image__button" :class="{ image__button_active: hover }" @click="isVisible = true">
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
          <span v-if="item.priceOld" class="prices__old">{{ item.priceOld }} &#8381;</span>
          <BonusElement v-if="item.bonus">{{ item.bonus }}</BonusElement>
          <PriceElement :price="item.price" :measure="item.measure" />
        </div>
        <Button @click="main.addOnClick(item.id)" v-if="!item.isAdded">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0 0.909091C0 0.407014 0.407014 0 0.909091 0H4.21487C4.65117 0 5.02594 0.30995 5.10781 0.738493L5.79379 4.329H19.0909C19.3605 4.329 19.6162 4.44867 19.7889 4.65567C19.9616 4.86267 20.0336 5.13566 19.9853 5.40091L18.6618 12.6715C18.5484 13.2695 18.2363 13.8153 17.7699 14.2086C17.3051 14.6007 16.7171 14.815 16.1076 14.8052H8.09075C7.48121 14.815 6.89328 14.6007 6.42842 14.2086C5.96214 13.8154 5.65014 13.2699 5.53667 12.672L4.15618 5.44629C4.15053 5.42215 4.14583 5.39765 4.14214 5.37282L3.46302 1.81818H0.909091C0.407014 1.81818 0 1.41117 0 0.909091ZM6.14115 6.14719L7.32293 12.3328C7.3607 12.532 7.46264 12.7024 7.60057 12.8187C7.7375 12.9342 7.90184 12.9905 8.06439 12.9872L8.08264 12.987H16.1157L16.1339 12.9872C16.2965 12.9905 16.4608 12.9342 16.5978 12.8187C16.7351 12.7029 16.8368 12.5335 16.8749 12.3354L16.8754 12.3328L18.0014 6.14719H6.14115Z"
              fill="white" />
            <path
              d="M10 18.1818C10 19.186 9.18597 20 8.18182 20C7.17766 20 6.36363 19.186 6.36363 18.1818C6.36363 17.1777 7.17766 16.3636 8.18182 16.3636C9.18597 16.3636 10 17.1777 10 18.1818Z"
              fill="white" />
            <path
              d="M16.3636 20C17.3678 20 18.1818 19.186 18.1818 18.1818C18.1818 17.1777 17.3678 16.3636 16.3636 16.3636C15.3595 16.3636 14.5454 17.1777 14.5454 18.1818C14.5454 19.186 15.3595 20 16.3636 20Z"
              fill="white" />
          </svg>
        </Button>
      </div>
      <div class="counter counter_margin-t" v-if="item.isAdded">
        <Button class="counter__button">
          <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.875 0.875H1.5C0.87868 0.875 0.375 1.37868 0.375 2C0.375 2.62132 0.87868 3.125 1.5 3.125H7.875H10.125H16.5C17.1213 3.125 17.625 2.62132 17.625 2C17.625 1.37868 17.1213 0.875 16.5 0.875H10.125H7.875Z"
              fill="#0C0C0D" />
          </svg>
        </Button>
        <span class="counter__quantity">2.5кг</span>
        <Button class="counter__button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.125 1.5C10.125 0.87868 9.62132 0.375 9 0.375C8.37868 0.375 7.875 0.87868 7.875 1.5V7.875H1.5C0.87868 7.875 0.375 8.37868 0.375 9C0.375 9.62132 0.87868 10.125 1.5 10.125H7.875V16.5C7.875 17.1213 8.37868 17.625 9 17.625C9.62132 17.625 10.125 17.1213 10.125 16.5V10.125H16.5C17.1213 10.125 17.625 9.62132 17.625 9C17.625 8.37868 17.1213 7.875 16.5 7.875H10.125V1.5Z"
              fill="#0C0C0D" />
          </svg>
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
import Button from '@/components/ui/Button.vue'
import BonusElement from '@/components/ui/BonusElement.vue';
import ImageTagComponent from './ui/ImageTagComponent.vue'
import { ref } from 'vue';
import ItemRate from '../ui/ItemRate.vue';
import FavoriteIcon from '../ui/FavoriteIcon.vue';
import PriceElement from '@/components/ui/PriceElement.vue';
import Modal from '@/components/ui/Modal.vue';
import ItemComponent from '@/components/ItemComponent/ItemComponent.vue';
import { useMainStore } from '@/stores/mainStore';
const main = useMainStore()

const hover = ref(false);
const isVisible = ref(false);


defineProps({
  item: {
    type: Object,
    requred: true,
    default: () => { },
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
  width: 100%;
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
  background: #FEEDEF;
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
}

.counter__button {
  background: $bg-transparent;
}
</style>