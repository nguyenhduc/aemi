<script setup lang="ts">
import type ProductDetail from '@/interfaces/ProductDetail'

defineProps<{
  product: ProductDetail
}>()
</script>

<template>
  <div class="product-item" text-left text-sm b-rounded mb-1 cursor-pointer>
    <div class="medal-star" flex items-center justify-center p-2>
      <i i-aemi-icon-medal-star icon20 />
      <span class="medal-explanation" text-white hidden>Tem nhà phân phối</span>
    </div>
    <div class="thumbnail-wrapper">
      <div class="thumbnail" :style="{ 'background-image': `url(${product.thumbnail})` }" />
    </div>
    <div p-2>
      <div color-aemi md:text-lg mb-1>
        {{ product.brand }}
      </div>
      <div class="product-name" text-sm mb-1>
        {{ product.product_name }}
      </div>
      <div color-aemi flex mb-1 text-xs truncate>
        <div class="tag" px-2 md:px-3 flex items-center justify-center b-rounded mr-1>
          {{ product.category_name }}
        </div>
        <div class="tag" px-2 md:px-3 flex items-center justify-center b-rounded>
          {{ product.size }}
        </div>
      </div>
      <div flex items-center case-capital mb-1>
        <div i-aemi-icon-shop-icon inline-block mr-1 /> {{ product.supplier_name.toLowerCase() }}
      </div>
      <div flex justify-between items-center>
        <span color-aemi text-lg>{{ product.discounted_price }}đ</span>
        <span v-if="product.discount_percentage" bg-red-600 b-rounded p-1 text-white>- {{ product.discount_percentage
        }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  width: 161px;
  transition: padding 0.5s linear;
}

.thumbnail {
  height: 141px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.25rem 0.25rem 0 0;
}

.tag {
  height: 24px;
  font-size: 12px;
  color: var(--color-main);
  background-color: var(--color-main-background);
  border-radius: 4px;
}

.product-name {
  height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.medal-star {
  height: 26px;
  min-width: 30px;
  background-color: #97660C;
  border-radius: 4px 0 4px 0;
  position: absolute;
}

.medal-explanation {
  transform: scaleX(0);
  transform-origin: left;
}

@media screen and (min-width: 768px) {
  .product-item:hover {
    background-color: #F5F6F7;
  }

  .product-item:hover .thumbnail-wrapper .thumbnail {
    border-radius: 0.25rem;
    border: solid 13px #F5F6F7;
    transition: border-width 200ms linear;
  }

  .product-item:hover>.medal-star>.medal-explanation {
    display: block;
    transition-delay: 1s;
    transform: scaleX(1);
  }

  .product-item {
    width: 270px;
  }

  .thumbnail {
    height: 255px;
  }
}
</style>
