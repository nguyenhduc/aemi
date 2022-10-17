<script setup lang="ts">
</script>

<template>
  <header>
    <div class="container d-flex align-center">
      <img class="screen-hide cursor-pointer" src="@/assets/svg/menu.svg" />
      <img class="brand" src="@/assets/svg/brand.svg" />
      <div class="action-bar">
        <img class="cursor-pointer" src="@/assets/svg/notification.svg" />
        <img class="cursor-pointer" src="@/assets/svg/account.svg" />
        <img class="cursor-pointer" src="@/assets/svg/cart.svg" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  background-color: var(--color-main);
  width: 100%;
  height: var(--header-height);
  top: 0;
  z-index: 1000;
}

.brand {
  height: 36px;
}

@media screen and (max-width: 768px) {
  .brand {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 23px;
  }
}


.action-bar {
  margin-left: auto
}
</style>
