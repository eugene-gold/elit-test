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
      const res = await fetch('go/somewhere')
      res //here parseJson
      this.isLoading = true
      setTimeout((() => {
        this.isLoading = false
        this.data = db
      }), 1000)


    },

    toggleFavorite(id) {
      const user = useUserStore()
      const el = this.data.items.find((el) => el.id === id)
      if (!el.isFavorite) {
        el.isFavorite = true
        user.userData.favorite.push(el)
        console.log(user.userData.favorite);
      } else {
        el.isFavorite = false
        user.userData.favorite = user.userData.favorite.filter((el) => el.id !== id)
        console.log(user.userData.favorite);


      }

    },

    addOnClick(id) {
      const user = useUserStore()
      const el = this.data.items.find((el) => el.id === id)
      el.isAdded = !el.isAdded
      user.userData.userCart.push(el)
      console.log(user.userData.userCart)
    }


  },
})