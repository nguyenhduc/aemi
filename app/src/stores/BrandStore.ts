import { defineStore } from 'pinia'
import type Brand from '@/interfaces/Brand'
export const useBrandStore = defineStore('BrandStore', {
  state: () => {
    return {
      brands: [] as Brand[],
    }
  },
  actions: {
    async fetchBrands() {
      this.brands = (await import('@/data/brands.json')).default
    },
  },
  // getters
})
