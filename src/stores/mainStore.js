import { defineStore } from 'pinia'
import db from '@/db/db'

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
      const el = this.data.items.find((el) => el.id === id)
      console.log(el);
    },

    addOnClick(id) {
      const el = this.data.items.find((el) => el.id === id)
      el.isAdded = !el.isAdded
    }


  },
})