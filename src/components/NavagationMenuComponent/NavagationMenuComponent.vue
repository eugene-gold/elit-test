<template>
  <nav class="navigation">
    <div class="logo">
      <img src="/logo.png" alt="company_name" />
    </div>
    <div class="search search_margin">
      <Button @button-event="openCatalog" class="search__catalog">
        <SvgIcon name="foursquare" />
        <span class="search__name">Каталог</span>
      </Button>
      <span class="search__icon">
        <SvgIcon name="search" />
      </span>
      <input
        class="search__input"
        v-model="inputData"
        @keyup.enter="console.log('hi!')"
        placeholder="Поиск по товарам"
      />
    </div>
    <ul class="navbar navbar_margin">
      <li class="navbar__item">
        <span class="navbar__icon">
          <SvgIcon name="customer" />
        </span>
        <span class="navbar__name">Войти</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <SvgIcon name="bag" />
        </span>
        <span class="navbar__name">Заказы</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <SvgIcon name="heart" />
        </span>
        <span class="navbar__badge" v-if="user.userData.favorite.length > 0">
          {{ user.userData.favorite.length }}
        </span>
        <span class="navbar__name">Избранное</span>
      </li>
      <li class="navbar__item navbar__item_margin-left">
        <span class="navbar__icon">
          <SvgIcon name="cart" />
        </span>
        <span class="navbar__badge" v-if="user.userData.userCart.length > 0">
          {{ user.userData.userCart.length }}
        </span>
        <span class="navbar__name">Корзина</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/shared/UI/Button/Button.vue'
import { useUserStore } from '@/stores/userStore'
import SvgIcon from '@/shared/UI/Icon/SvgIcon.vue'
const user = useUserStore()
const inputData = ref('')

const openCatalog = () => {
  console.log('notning in catalog yet...')
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.navigation {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.6rem 0;
  max-width: 128rem;
  margin: 0 auto;
}

.logo {
  width: 20.2rem;
  height: 4.2rem;
}

.search {
  display: flex;
  height: 4.2rem;
  position: relative;
  width: 48.8281%;
}

.search_margin {
  margin-left: 0.5rem;
}

.search__catalog {
  width: 12rem;
  height: 4.2rem;
  position: absolute;
}

.search__name {
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  padding-left: 1.2rem;
}

.search__icon {
  display: flex;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translate(0, -50%);
}

.navbar {
  display: flex;
}

.navbar_margin {
  margin-left: 0.5rem;
}

.navbar__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.navbar__item_margin-left {
  margin-left: 3rem;
}

.navbar__icon {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
}

.navbar__name {
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.44rem;
}

.navbar__badge {
  color: #fff;
  border-radius: 4.4rem;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.32rem;
  background: #f3223c;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  position: absolute;
  top: -0.3rem;
  left: 55%;
}

.search__input {
  color: $light-font-color;
  background: $bg-transparent;
  border-radius: 0.9rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: 100%;
  padding-left: 13.6rem;
}
</style>
