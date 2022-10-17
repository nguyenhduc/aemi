<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
import ItemCard from './components/ItemCard.vue';
import { useProductStore } from '@/stores/ProductStore';
import { useBrandStore } from '@/stores/BrandStore';
import { useCategoryStore } from '@/stores/CategoryStore';
import { ref } from 'vue';

const productStore = useProductStore();
const brandStore = useBrandStore();
const categoryStore = useCategoryStore();
productStore.fetchProducts();
brandStore.fetchBrands();
categoryStore.fetchCategories();

</script>

<template>
  <Header />
  <Banner class="banner-wrapper" />
  <main class="d-flex flex-center">
    <div class="container d-flex margin-30">
      <div class="left-col mobile-hide">
        <div class="brands">
          <div class="title">
            Thương hiệu
          </div>
          <input class="app-input" placeholder="Tìm kiếm thương hiệu" type="text" />
          <div class="filter-wrapper">
            <div class="filter-item cursor-pointer" v-for="brand in brandStore.brands">
              {{brand.brand_name}}
            </div>
          </div>
        </div>
        <div class="categories">
          <div class="title">
            Danh mục
          </div>
          <input class="app-input" placeholder="Tìm kiếm danh mục" type="text" />
          <div class="filter-wrapper styled-scrollbars">
            <div class="filter-item cursor-pointer" v-for="category in categoryStore.categories">
              {{category.category_name}}
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div class="product-wrapper justify-center">
          <ItemCard v-for="product in productStore.products" :product="product" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.banner-wrapper {
  margin-top: var(--header-height)
}

.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.brands,
.categories {
  width: 255px;
}

.title {
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
}

.filter-item {
  border-radius: 4px;
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  margin-bottom: 10px;
}

.filter-item.selected {
  color: #416EC2;
}

.filter-item.selected,
.filter-item:hover {
  background-color: #F7F9FD;
}

@media (max-width: 768px) {
  .product-wrapper {
    gap: 20px;
  }
}

.filter-wrapper {
  max-height: 200px;
  overflow: auto;
}

.left-col {
  width: 270px;
  flex-basis: 270px;
}

.margin-30 {
  margin-top: 30px;
}
</style>
