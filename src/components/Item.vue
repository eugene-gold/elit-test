<template>
  <div class="item-wrapper">

    <span class="item-wrapper__close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L1 13M1 1L13 13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </span>

    <div class="item-main">
      <div class="item-main__image">
        <div class="item-main__tags">
          <Tag tag-name="хит">Хит</Tag>
          <Tag tag-name="новинка">Новинка</Tag>
        </div>
        <img class="item-main__image" :alt="name" :src="imageUrl" />
        <FavoriteIcon :on-click-favorite="onClickFavorite" :is-favorite="isFavorite"
          class="item-main__favorite_position" />
      </div>

      <div class="item-main__info">
        <div class="item-main__header">

          <h3>{{ name }}</h3>

          <div class="item-main__company item-main__company_margin-top">
            <span class="item-main_name item-main_name_margin-rigth">{{ company }}</span>
            <span class="item-main_country">{{ country }} {{ weight }} кг</span>
            <ItemRate :rate="rate" class="item-main__rate" />
          </div>
        </div>

        <div class="item-main__prices">
          <MyBonus v-if="bonus">{{ bonus }}</MyBonus>
          <Price :price="price" :measure="measure" class="item-main_price-kg" :style-object="{
            fontSize: '2rem',
            letterSpacing: '-0.15rem'
          }" />
          <Price :price="2456" measure="кор" class="item-main_price-pack" :style-object="{
            fontSize: '1.3rem',
            lineHeight: '1.56rem'
          }" />
          <Button class="item-main__button item-main__button_margin-top">Добавить в корзину</Button>
          <span class="in_stock in_stock_margin-top">В наличии много</span>
          <a class="to-cart_link to-cart_link_margin-top">Перейти в карточку товара</a>
        </div>
      </div>
    </div>
    <div class="item-main__additional item-main__additional_margin-top">
      <h3 class="item-main__header_line-h">Характеристики</h3>
      <div class="item-main_additional-wrapper item-main_additional-wrapper_margin-top">
        <div class="item-main__block item-main__block_margin-right">
          <span class="item-main__additional-name">Срок хранения</span>
          <span class="item-main__additional-quantity">1 год</span>
        </div>
        <div class="item-main__block item-main__block_margin-right">
          <span class="item-main__additional-name">Количество в транспортной упаковке</span>
          <span class="item-main__additional-quantity">10</span>
        </div>
        <div class="item-main__block item-main__block_margin-right">
          <span class="item-main__additional-name">Тип транспортной упаковки</span>
          <span class="item-main__additional-quantity">Коробка</span>
        </div>
        <div class="item-main__block item-main__block_margin-right">
          <span class="item-main__additional-name">Количество в транспортной упаковке на паллете</span>
          <span class="item-main__additional-quantity">40</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemRate from './ui/ItemRate.vue';
import FavoriteIcon from './ui/FavoriteIcon.vue';
import Button from './ui/Button.vue';
import Tag from './CardComponent/ui/Tag.vue';
import MyBonus from './CardComponent/ui/MyBonus.vue';
import Price from './ui/Price.vue';
defineProps({

  imageUrl: String,
  id: String,
  name: String,
  company: String,
  country: String,
  weight: Number,
  rate: Number,
  bonus: Number,
  price: Number,
  measure: String,
  isFavorite: Boolean,
  onClickFavorite: Function
})
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.item-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 75rem;
  padding: 3rem;
  background: #ffffff;
}

.item-wrapper__close {
  display: flex;
  align-items: center;
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  right: 3rem;
  top: 3rem;
  cursor: pointer;
}

.item-main {
  display: flex;
}

.item-main__favorite_position {
  top: 1.6rem;
  right: 1.6rem
}

.item-main__image {
  display: flex;
  width: 33.5rem;
  height: 33.5rem;
  border-radius: 0.9rem;
  border: 1px solid $bg-transparent;
  position: relative;
}

.item-main__tags {
  display: flex;
  justify-content: space-between;
  min-width: 11.1rem;
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
  z-index: 1;
}

.item-main__info {
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-main__header {
  display: flex;
  max-width: 30rem;
  flex-direction: column;
}

.item-main__company {
  display: flex;
  position: relative;
}

.item-main__company_margin-top {
  margin-top: 1.6rem;
}

.item-main_name,
.item-main_country {
  font-size: 1.3rem;
  line-height: 1.56rem;
}

.item-main_name_margin-rigth {
  margin-right: 2rem;
}

.item-main_country {
  color: $light-font-color;
}

.item-main__rate {
  color: $light-font-color;
  font-size: 1.3rem;
  line-height: 1.56rem;
  right: -3.5rem;
  top: unset;
  left: unset;
}

.item-main__prices {
  display: flex;
  flex-direction: column;
}

.item-main_price-kg {
  font-size: 2.4rem;
  line-height: 2.88rem;
}

.item-main_price-pack {
  font-size: 1.3rem;
  line-height: 1.56rem;
  color: $light-font-color;
  font-weight: 400;
}

.item-main__button {
  width: 20rem;
  height: 4.6rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;
}

.item-main__button_margin-top {
  margin-top: 1.5rem;
}

.in_stock {
  color: $light-font-color;
  font-size: 1.3rem;
  line-height: 1.69rem;
}

.in_stock_margin-top {
  margin-top: 0.6rem
}

.to-cart_link {
  color: $main-color;
  line-height: 1.68rem;
  font-size: 1.4rem;
  cursor: pointer;
}

.to-cart_link_margin-top {
  margin-top: 2.6rem;

}

.item-main__additional {
  display: flex;
  flex-direction: column;
  max-width: 59.3rem;
}

.item-main__additional_margin-top {
  margin-top: 3rem;
}

.item-main_additional-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.item-main_additional-wrapper_margin-top {
  margin-top: 1rem;
}

.item-main__block {
  display: flex;
  flex-direction: column;
  min-width: 18.1rem;
}

.item-main__block_margin-right {
  margin-right: 4.4rem;
}

.item-main__additional-name {
  color: $light-font-color;
}

.item-main__additional-name,
.item-main__additional-quantity {
  font-weight: 500;
  line-height: 1.69rem;
  font-size: 1.3rem;
}
</style>