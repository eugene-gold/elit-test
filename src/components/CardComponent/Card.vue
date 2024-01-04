<template>
  <div class="card">
    <div class="image__info">
      <svg
        class="image__star"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6823 5.39006L11.3044 4.89221C11.1262 4.85727 10.973 4.74372 10.9005 4.59524L9.38034 1.38541C9.37827 1.38104 9.37412 1.37668 9.37412 1.37012C9.22915 1.08845 9.0034 0.852623 8.71967 0.688856C8.3593 0.485785 7.94509 0.446481 7.54745 0.570944C7.14773 0.701957 6.82258 0.988004 6.62375 1.38541L5.10359 4.58651C5.02697 4.74372 4.87578 4.85727 4.71838 4.89002L1.29698 5.39442C0.955258 5.46211 0.654954 5.62806 0.427138 5.87699C0.141331 6.18487 -0.00985657 6.5932 0.000498741 7.02554C0.00878299 7.4557 0.176539 7.85092 0.462346 8.13479L2.93105 10.6546C3.04703 10.7682 3.09881 10.9297 3.06981 11.1001L2.48784 14.6221C2.43607 14.9584 2.49199 15.3165 2.64732 15.6397C2.83992 16.024 3.16094 16.3035 3.55237 16.4279C3.70149 16.476 3.85267 16.5 4.00179 16.5C4.25239 16.5 4.49884 16.4345 4.72252 16.3078L7.75041 14.6549C7.90781 14.5719 8.09421 14.5741 8.23918 14.6483L11.2774 16.3078C11.5902 16.4782 11.9257 16.5328 12.2343 16.4716C12.6402 16.4061 12.9964 16.1812 13.2387 15.834C13.481 15.4846 13.5784 15.0545 13.5121 14.6156L12.9322 11.1022C12.9053 10.9319 12.955 10.766 13.0751 10.6481L15.5189 8.15226C15.7778 7.90988 15.9456 7.57143 15.987 7.20241C16.0947 6.32025 15.5231 5.52544 14.6823 5.39006Z"
        />
      </svg>
      <span class="image__rate image__rate_margin-left">{{ rate }}</span>
    </div>
    <span class="image__favorite" @click="onClickFavorite">
      <svg
        class="image__like"
        :class="{ added: isFavorite }"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.1545 4.34007C9.21077 2.57099 7.29989 2.06997 5.83342 2.5278C2.94329 3.44011 1.76653 6.57433 2.73334 9.53525C3.52553 11.9447 5.32866 13.9908 7.15274 15.4513C8.05852 16.1765 8.94663 16.7387 9.67609 17.1149C10.0413 17.3031 10.3555 17.439 10.6034 17.5254C10.7271 17.5685 10.8261 17.5965 10.9007 17.613C10.9617 17.6265 10.9933 17.6294 11.0006 17.63C11.0076 17.6294 11.0388 17.6264 11.0992 17.6129C11.174 17.5962 11.2735 17.5677 11.398 17.5239C11.6475 17.436 11.9639 17.2981 12.3317 17.1073C13.0662 16.7263 13.9602 16.1581 14.87 15.4288C16.7038 13.9586 18.503 11.9139 19.2658 9.54024L19.2672 9.5358C20.2343 6.57808 19.0514 3.44238 16.1604 2.52846C14.6894 2.07748 12.8153 2.54475 11.8454 4.34369C11.6798 4.65096 11.3537 4.84294 10.9988 4.84218C10.6439 4.84142 10.3188 4.64804 10.1545 4.34007ZM11.0011 2.27633C9.45134 0.59418 7.12196 0.162192 5.25137 0.746923L5.24901 0.747664C1.06865 2.06613 -0.27359 6.46852 0.914482 10.1056L0.915007 10.1072C1.86019 12.9829 3.95765 15.3086 5.94366 16.8987C6.94303 17.6989 7.93744 18.3317 8.78615 18.7693C9.21002 18.9878 9.60882 19.1635 9.96259 19.2869C10.2949 19.4028 10.6636 19.5 11.0009 19.5C11.3404 19.5 11.7115 19.4006 12.0444 19.2834C12.3995 19.1583 12.8001 18.9805 13.2258 18.7596C14.0783 18.3174 15.0775 17.6791 16.08 16.8754C18.07 15.28 20.1704 12.9534 21.0869 10.1036C22.2757 6.46425 20.92 2.06517 16.7427 0.747664L16.7362 0.745623C14.868 0.170935 12.5596 0.576452 11.0011 2.27633Z"
        />
      </svg>
    </span>
    <div class="image image_padding" :class="{ image_height: isAdded }">
      <ImageTagComponent />

      <img class="image_pic" alt="Img_name" :src="imageUrl" />
    </div>
    <div class="info-wrapper info-wrapper_padding">
      <div class="info">
        <p class="info__description">{{ title }}</p>
        <p class="info__data info__data_margin-top">
          <span class="info__weigth"> {{ weight }} г &middot; </span>
          <span class="info__country"> {{ country }}</span>
        </p>
      </div>
      <div class="price-block price-block_margin">
        <div class="prices">
          <span v-if="priceOld" class="prices__old">{{ priceOld }} &#8381;</span>
          <MyBonus v-if="bonus">{{ bonus }}</MyBonus>
          <div class="prices__actual prices__actual_margin-top">
            {{ price }} &#8381; <span class="prices__measure">/кг</span>
          </div>
        </div>
        <Button @click="onClickAdd" v-if="!isAdded">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.909091C0 0.407014 0.407014 0 0.909091 0H4.21487C4.65117 0 5.02594 0.30995 5.10781 0.738493L5.79379 4.329H19.0909C19.3605 4.329 19.6162 4.44867 19.7889 4.65567C19.9616 4.86267 20.0336 5.13566 19.9853 5.40091L18.6618 12.6715C18.5484 13.2695 18.2363 13.8153 17.7699 14.2086C17.3051 14.6007 16.7171 14.815 16.1076 14.8052H8.09075C7.48121 14.815 6.89328 14.6007 6.42842 14.2086C5.96214 13.8154 5.65014 13.2699 5.53667 12.672L4.15618 5.44629C4.15053 5.42215 4.14583 5.39765 4.14214 5.37282L3.46302 1.81818H0.909091C0.407014 1.81818 0 1.41117 0 0.909091ZM6.14115 6.14719L7.32293 12.3328C7.3607 12.532 7.46264 12.7024 7.60057 12.8187C7.7375 12.9342 7.90184 12.9905 8.06439 12.9872L8.08264 12.987H16.1157L16.1339 12.9872C16.2965 12.9905 16.4608 12.9342 16.5978 12.8187C16.7351 12.7029 16.8368 12.5335 16.8749 12.3354L16.8754 12.3328L18.0014 6.14719H6.14115Z"
              fill="white"
            />
            <path
              d="M10 18.1818C10 19.186 9.18597 20 8.18182 20C7.17766 20 6.36363 19.186 6.36363 18.1818C6.36363 17.1777 7.17766 16.3636 8.18182 16.3636C9.18597 16.3636 10 17.1777 10 18.1818Z"
              fill="white"
            />
            <path
              d="M16.3636 20C17.3678 20 18.1818 19.186 18.1818 18.1818C18.1818 17.1777 17.3678 16.3636 16.3636 16.3636C15.3595 16.3636 14.5454 17.1777 14.5454 18.1818C14.5454 19.186 15.3595 20 16.3636 20Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
      <div class="counter counter_margin-t" v-if="isAdded">
        <Button class="counter__button">
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.875 0.875H1.5C0.87868 0.875 0.375 1.37868 0.375 2C0.375 2.62132 0.87868 3.125 1.5 3.125H7.875H10.125H16.5C17.1213 3.125 17.625 2.62132 17.625 2C17.625 1.37868 17.1213 0.875 16.5 0.875H10.125H7.875Z"
              fill="#0C0C0D"
            />
          </svg>
        </Button>
        <span class="counter__quantity">2.5кг</span>
        <Button class="counter__button">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.125 1.5C10.125 0.87868 9.62132 0.375 9 0.375C8.37868 0.375 7.875 0.87868 7.875 1.5V7.875H1.5C0.87868 7.875 0.375 8.37868 0.375 9C0.375 9.62132 0.87868 10.125 1.5 10.125H7.875V16.5C7.875 17.1213 8.37868 17.625 9 17.625C9.62132 17.625 10.125 17.1213 10.125 16.5V10.125H16.5C17.1213 10.125 17.625 9.62132 17.625 9C17.625 8.37868 17.1213 7.875 16.5 7.875H10.125V1.5Z"
              fill="#0C0C0D"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import MyBonus from './ui/MyBonus.vue'
import ImageTagComponent from './ui/ImageTagComponent.vue'

defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  priceOld: Number,
  bonus: Number,
  rate: Number,
  country: String,
  weight: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
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
  box-shadow: 0 0.2rem 20rem rgba(12, 12, 13, 0.15);
}

.image {
  display: flex;
  width: 100%;
  position: relative;
}

.image_height {
  height: 42%;
}

.image__info {
  display: flex;
  align-items: center;
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
  z-index: 1;
}

.image_padding {
  padding: 1.6rem;
}

.image__star {
  fill: #ffcb20;
}

.image__rate {
  color: $grey-rate-color;
  line-height: 1.68rem;
  font-size: 1.4rem;
  font-weight: 500;
}

.image__rate_margin-left {
  margin-left: 0.4rem;
}

.image__favorite {
  display: flex;
  position: absolute;
  right: 1.45rem;
  top: 1.85rem;
  z-index: 1;
}

.image__like {
  fill: #858585;
}

.image_pic {
  object-fit: cover;
  width: 100%;
  height: 100%;
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

.added {
  fill: red;
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
.prices__actual {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.16rem;
}

.prices__actual_margin-top {
  margin-top: 0.4rem;
}
.prices__measure {
  font-weight: inherit;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: $light-font-color;
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