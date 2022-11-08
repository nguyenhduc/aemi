import { defineStore } from 'pinia'
import type ProductDetail from '@/interfaces/ProductDetail'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: [] as ProductDetail[],
    }
  },
  actions: {
    async fetchProducts(brands: string[], categories: string[]) {
      const products = (await import('@/data/products.json')).default
      const filteredProducts: ProductDetail[] = []

      if (!brands.length && !categories.length) { this.products = products }
      else {
        products.forEach((item) => {
          for (const brand of brands) {
            if (item.brand_code === brand)
              filteredProducts.push(item)
          }
          for (const category of categories) {
            if (item.category_code === category)
              filteredProducts.push(item)
          }
        })
        this.products = filteredProducts
      }
    },
  },
  // getters
})
