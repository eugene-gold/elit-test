import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loader: false,
    userData: {
      filters: [],
      favorite: [],
      userCart: []
    }
  }),
  actions: {
    addToUserCart(object) {
      this.userData.userCart.push(object)
      console.log(this.userData.userCart);
    },

    addToUserFilters(filter) {
      this.userData.filters.includes(filter) ? this.userData.filters.pop(filter) : this.userData.filters.push(filter)
      console.log(this.userData.filters);

    },

    incrementWeight(id) {
      const el = this.userData.userCart.find((elem) => elem.id === id)
      el.userSelected = el.userSelected + el.weight
    },

    decrementWeight(id) {
      const el = this.userData.userCart.find((elem) => elem.id === id)
      if (el.userSelected > 0) {
        el.userSelected = el.userSelected - el.weight
      } else if (el.userSelected === 0) {
        el.isAdded = false
        this.userData.userCart = this.userData.userCart.filter((elem) => elem.id !== id)
      }
    }


  }


})
