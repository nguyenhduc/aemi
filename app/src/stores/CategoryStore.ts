import { defineStore } from 'pinia'
import type Category from '@/interfaces/Category'
export const useCategoryStore = defineStore('CategoryStore', {
  state: () => {
    return {
      categories: [] as Category[],
    }
  },
  actions: {
    async fetchCategories() {
      this.categories = (await import('@/data/categories.json')).default
    },
  },
  // getters
})
