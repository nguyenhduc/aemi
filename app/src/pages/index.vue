<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useBrandStore } from '@/stores/BrandStore'
import { useCategoryStore } from '@/stores/CategoryStore'
import { useProductStore } from '@/stores/ProductStore'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanMd = breakpoints.greaterOrEqual('md')

const productStore = useProductStore()
const brandStore = useBrandStore()
const categoryStore = useCategoryStore()

const brandFilter = $ref<string[]>([])
const categoryFilter = $ref<string[]>([])

const isMobileFilterOpened = $ref(false)

brandStore.fetchBrands()
categoryStore.fetchCategories()

watchEffect(() => {
  productStore.fetchProducts(brandFilter, categoryFilter)
})
</script>

<template>
  <div v-show="!isMobileFilterOpened" display-hidden>
    <Banner />
    <div display-block md:display-flex text-left p5 md:w-6xl md:m-a>
      <button icon-btn mb-3 md:hidden @click="isMobileFilterOpened = !isMobileFilterOpened">
        BỘ LỌC
        <div inline-block i-carbon-chevron-down />
      </button>
      <Filter v-if="largerThanMd" class="desktop-filter" :brands="brandStore.brands"
        :categories="categoryStore.categories" @@close="isMobileFilterOpened = !isMobileFilterOpened"
        @on-selected-brands="(selectedBrands) => brandFilter = selectedBrands"
        @on-selected-categories="(selectedCategories) => categoryFilter = selectedCategories" />
      <div flex flex-auto flex-wrap h-full justify-between>
        <TransitionGroup name="list">
          <Product v-for="product in productStore.products" :key="product.product_id" gap-1 :product="product" />
        </TransitionGroup>
        <div class="item-placeholder" hidden md:block />
      </div>
    </div>
  </div>
  <div v-show="isMobileFilterOpened" display-hidden class="mobile-filter">
    <Filter :brands="brandStore.brands" :categories="categoryStore.categories"
      @@close="isMobileFilterOpened = !isMobileFilterOpened"
      @on-selected-brands="(selectedBrands) => brandFilter = selectedBrands"
      @on-selected-categories="(selectedCategories) => categoryFilter = selectedCategories" />
  </div>
</template>

<style scoped>
.desktop-filter {
  flex: 0 0 270px;
}

.mobile-filter {
  position: fixed;
  top: 0;
  background: white;
  z-index: 1001;
}

.item-placeholder {
  flex-basis: 270px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
