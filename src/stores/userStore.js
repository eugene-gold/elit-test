import { defineStore } from 'pinia'
import { useMainStore } from './mainStore';


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
    },

    addToUserFilters(filter) {
      const main = useMainStore()
      if (this.userData.filters.includes(filter)) {
        this.userData.filters = this.userData.filters.filter((el) => el !== filter)
        //вынести в computed
        main.data.filters.forEach((element) => {
          if (element.list) {
            element.list.forEach((el) => {
              el.filter === filter ? el.status = false : null
            })
          }
        });
      }
      else if (!this.userData.filters.includes(filter)) {
        this.userData.filters.push(filter)
        //вынести в computed
        main.data.filters.forEach((element) => {
          if (element.list) {
            element.list.forEach((el) => {
              el.filter === filter ? el.status = !el.status : null
            })
          }
        });

      }

    },

    removeFilter(filter) {
      const main = useMainStore()
      if (this.userData.filters.includes(filter)) {
        this.userData.filters = this.userData.filters.filter((el) => el !== filter)
        //вынести в computed
        main.data.filters.forEach((element) => {
          if (element.list) {
            element.list.forEach((el) => {
              el.filter === filter ? el.status = !el.status : null
            })
          }
        });

      }
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
