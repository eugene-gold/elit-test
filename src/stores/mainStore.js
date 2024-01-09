import { defineStore } from 'pinia'
import db from '@/db/db'
import { useUserStore } from './userStore'

export const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      data: [],
      isLoading: false,
      userData: []
    }
  },

  actions: {
    async getData() {
      const user = useUserStore()
      const res = await fetch('go/somewhere')
      res //here parseJson
      this.isLoading = true
      setTimeout((() => {
        this.isLoading = false
        this.data = db
        this.data.items.map((el) => {
          el.isAdded ? user.userData.userCart.push(el) : null
          el.isFavorite ? user.userData.favorite.push(el) : null
        })




        this.data.filters.map((el) => {
          let filter = el.list
          if (filter) {
            filter.map((element) => {
              if (element.status === true) {
                user.userData.filters.push(element.filter)
              }
            })
          }
        })



      }), 1000)


    },

    toggleFavorite(id) {
      const user = useUserStore()
      const el = this.data.items.find((el) => el.id === id)
      if (!el.isFavorite) {
        el.isFavorite = true
        user.userData.favorite.push(el)
      } else {
        el.isFavorite = false
        user.userData.favorite = user.userData.favorite.filter((el) => el.id !== id)


      }

    },

    addOnClick(id) {
      const user = useUserStore()
      const el = this.data.items.find((el) => el.id === id)
      el.isAdded = !el.isAdded
      user.userData.userCart.push(el)
    }


  },
})