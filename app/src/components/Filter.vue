<script setup lang="ts">
// import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
// import { useFuse } from '@vueuse/integrations/useFuse'
import type Brand from '@/interfaces/Brand'
import type Category from '@/interfaces/Category'

// define props
defineProps<{
  brands: Brand[]
  categories: Category[]
}>()

// define emits
const emit = defineEmits<{
  (e: '@close'): void
  (e: 'onSelectedBrands', selectedBrands: string[]): void
  (e: 'onSelectedCategories', selectedCategories: string[]): void
}>()

// brands filter logic
const brandSearchInput = $ref('')
const selectedBrands = $ref<string[]>([])
watchEffect(() => {
  emit('onSelectedBrands', selectedBrands)
})
// fuzzy brands search
// const brandFilterOptions = computed<UseFuseOptions<Brand>>(() => ({
//   fuseOptions: { keys: ['brand_code', 'brand_name'] },
// }))
// const { results: brandSearchResults } = useFuse(brandSearchInput, props.brands, brandFilterOptions)

// category filter logic
const categoryInput = $ref('')
const selectedCategories = $ref<string[]>([])
watchEffect(() => {
  emit('onSelectedCategories', selectedCategories)
})
</script>

<template>
  <div h-screen w-screen>
    <div class="topbar" text-white flex md:hidden justify-center bg-brand-primary p5>
      <div flex items-center h-full w-6xl>
        <i i-carbon-close icon24 @click="emit('@close')" />
      </div>
    </div>
    <div class="filters" flex flex-col text-left text-black p5>
      <p font-bold text-lg mb-3>
        Thương hiệu
      </p>
      <div position-relative>
        <input
          id="brandSearchInput" v-model="brandSearchInput" placeholder="Tìm kiếm thương hiệu"
          aria-label="Tìm kiếm thương hiệu" type="text" autocomplete="false" p="x4 y2" bg="transparent"
          border="~ rounded gray-200 dark:gray-700" outline="none active:none" w-full mb-5
        >
        <div class="search-icon" position-absolute i-aemi-icon-search icon24 />
      </div>
      <label class="hidden" for="brandSearchInput">Tìm kiếm thương hiệu</label>
      <div flex-auto basis-none mb-5 scrollbar="~ w-4px rounded">
        <div
          v-for="brand in brands" :key="brand.brand_code" mb-5 b-rounded
          :class="{ selected: selectedBrands.indexOf(brand.brand_code) !== -1 }"
        >
          <input
            :id="brand.brand_code" v-model="selectedBrands" class="display-none" display-none type="checkbox"
            :value="brand.brand_code"
          >
          <label cursor-pointer px-1 display-block w-full :for="brand.brand_code">{{ brand.brand_name }}</label>
        </div>
      </div>
      <p font-bold text-lg mb-3>
        Danh mục
      </p>
      <div position-relative>
        <input
          id="categoryInput" v-model="categoryInput" placeholder="Tìm kiếm danh mục" aria-label="Tìm kiếm danh mục"
          type="text" autocomplete="false" p="x4 y2" bg="transparent" border="~ rounded gray-200 dark:gray-700"
          outline="none active:none" w-full mb-5
        >
        <div class="search-icon" position-absolute i-aemi-icon-search icon24 />
      </div>
      <label class="hidden" for="categoryInput">Tìm kiếm danh mục</label>
      <div flex-auto basis-none mb-5 scrollbar="~ w-4px rounded">
        <div
          v-for="category in categories" :key="category.category_code" mb-5 b-rounded
          :class="{ selected: selectedCategories.indexOf(category.category_code) !== -1 }"
        >
          <input
            :id="category.category_code" v-model="selectedCategories" class="display-none" display-none type="checkbox"
            :value="category.category_code"
          >
          <label cursor-pointer px-1 display-block w-full :for="category.category_code">{{ category.category_name }}</label>
        </div>
      </div>
    </div>
    <div flex justify-around items-center px-5 md-hidden>
      <button flex-auto basis-none px-4 py-1 rounded inline-block border-1 border-aemi text-aemi cursor-pointer @click="selectedBrands = []; selectedCategories = []; emit('@close')">
        XOÁ TẤT CẢ
      </button>
      <button flex-auto basis-none ml-5 px-4 py-1 rounded bg-aemi inline-block text-white cursor-pointer @click="emit('@close')">
        ÁP DỤNG
      </button>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  height: var(--header-height);
}
.filters {
  height: calc(100vh - var(--header-height) * 2);
}
.selected {
  background-color: #F7F9FD;
}
.search-icon {
  top: 0;
  right: 0;
  height: 42px;
  margin: 0 12px;
}
@media (min-width: 768px) {
  .filters {
    height: 100%;
  }
}
</style>
