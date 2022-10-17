import { defineStore } from "pinia";
export const useBrandStore = defineStore("BrandStore", {
  state: () => {
    return {
      brands: [],
      selectedBrands: []
    };
  },
  actions: {
    async fetchBrands() {
      this.brands = (await import('@/data/brands.json')).default;
    },
  },
  // getters
});
