<template>
  <div class="item-wrapper">

    <div class="item-main">
      <div class="item-main__image">
        <div class="item-main__tags">
          <TagElement v-for="tag in item.tags" :key="tag" :tag-name="tag">{{ tag }}</TagElement>
        </div>
        <img class="item-main__image" :alt="item.name" :src="item.imageUrl" />
        <FavoriteIcon :is-favorite="item.isFavorite" class="item-main__favorite_position" />
      </div>

      <div class="item-main__info">
        <div class="item-main__header">

          <h3>{{ item.title }}</h3>

          <div class="item-main__company item-main__company_margin-top">
            <span class="item-main_name item-main_name_margin-rigth">{{ item.company }}</span>
            <span class="item-main_country">{{ item.country }} {{ item.weight }} кг</span>
            <ItemRate :rate="item.rate" class="item-main__rate" />
          </div>
        </div>

        <div class="item-main__prices">
          <BonusElement v-if="item.bonus">{{ item.bonus }}</BonusElement>
          <PriceElement :price="item.price" :measure="item.measure" class="item-main_price-kg" :style-object="{
            fontSize: '2rem',
            letterSpacing: '-0.15rem'
          }" />
          <PriceElement :price="2456" measure="кор" class="item-main_price-pack" :style-object="{
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
import ItemRate from '@/components/ui/ItemRate.vue';
import FavoriteIcon from '@/components/ui/FavoriteIcon.vue';
import Button from '@/components/ui/Button.vue';
import TagElement from '@/components/ui/TagElement.vue'
import BonusElement from '@/components/ui/BonusElement.vue'
import PriceElement from '@/components/ui/PriceElement.vue'
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

.item-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 75rem;
  padding: 2rem;
  background: #ffffff;
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