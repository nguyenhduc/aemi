import { defineStore } from "pinia";
export const useCategoryStore = defineStore("CategoryStore", {
  state: () => {
    return {
      categories: [],
    };
  },
  actions: {
    async fetchCategories() {
      this.categories = (await import('@/data/categories.json')).default;
    },
  },
  // getters
});
