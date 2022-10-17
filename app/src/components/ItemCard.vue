<script setup lang="ts">
import ProductDetail from '@/interfaces/productDetail';

defineProps<{
  product: ProductDetail
}>()

const formatCurrency = (current: number) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(current)
}
</script>

<template>
  <div class="product-card cursor-pointer">
    <div class="medal-star d-flex flex-center">
      <img class="icon" src="@/assets/svg/medal-star.svg" alt="icon medal star" />
      <span class="medal-star__explain">Tem nhà phân phối</span>
    </div>
    <div class="product-image-wrapper d-flex flex-center">
      <div class="product-image" :style="{ 'background-image': 'url(' + product.thumbnail + ')' }"></div>
    </div>
    <div class="product-detail">
      <div class="product-name m-b-10">{{ product.brand }}</div>
      <div class="product-des m-b-10">{{ product.product_name }}</div>
      <div class="product-tags d-flex m-b-20">
        <div class="d-flex flex-center">{{ product.category_name }}</div>
        <div class="d-flex flex-center">{{ product.size }}</div>
      </div>
      <div class="stock-detail d-flex m-b-20">
        <div class="seller d-flex flex-center">
          <img src="@/assets/svg/shop-icon.svg" alt="shop icon" />
          {{ product.supplier_name }}
        </div>
        <span class="grow-1"></span>
        <span class="stock">Còn {{ product.stock_quantity }}</span>
      </div>
      <div class="product-price d-flex">
        <span class="price">{{ formatCurrency(product.discounted_price) }}</span>
        <span class="grow-1" />
        <span class="discount d-flex flex-center" v-if="product.discount_percentage">- {{ product.discount_percentage
        }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  flex-basis: 270px;
  border-radius: 4px;
  background-color: #fff;
}

.product-card:hover,
.product-card:hover>.product-detail {
  background-color: #F5F6F7;
}

@media (min-width: 768px) {
  .product-card:hover>.product-image-wrapper>.product-image {
    width: 242px;
    height: 222px;
  }

  .product-image-wrapper {
    width: 270px;
    height: 255px;
  }
}

.product-card:hover>.medal-star>.medal-star__explain {
  display: block;
}


.medal-star {
  height: 26px;
  min-width: 30px;
  background-color: #97660C;
  border-radius: 4px 0 4px 0;
  position: absolute;
}

.icon {
  margin: 5px;
}

.medal-star__explain {
  color: #fff;
  font-size: 12px;
  display: none;
  margin-right: 5px;
}

.product-image {
  width: 100%;
  height: 255px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.product-detail {
  padding: 20px;
  border-radius: 4px;
}

.product-name {
  color: var(--color-main);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.product-des {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px
}

.product-tags>div {
  height: 24px;
  padding: 0 12px;
  font-size: 12px;
  color: var(--color-main);
  background-color: var(--color-main-background);
  border-radius: 4px;
}

.stock-detail {
  font-size: 12px;
}

.stock {
  color: #A1A5AB;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-main)
}

.discount {
  height: 24px;
  font-size: 10px;
  border-radius: 4px;
  padding: 0 8px;

  letter-spacing: 0.3px;
  background-color: #D81D1D;
  color: #fff;
}

@media (max-width: 768px) {
  .product-card {
    flex: 0 0 161px;
    width: 161px;
  }

  .product-detail {
    padding: 5px 0;
  }

  .product-image {
    height: 141px;
  }

  .product-name {
    font-size: 12px;
    font-weight: 500;
  }

  .product-des {
    font-size: 12px;
  }

  .product-tags>div {
    padding: 0 6px;
    font-size: 10px;
  }

  .price {
    font-size: 16px;
    font-weight: 500;
  }

  .discount {
    height: 24px;
    font-size: 10px;
    border-radius: 4px;
    padding: 0 8px;

    letter-spacing: 0.3px;
    background-color: #D81D1D;
    color: #fff;
  }
}
</style>
