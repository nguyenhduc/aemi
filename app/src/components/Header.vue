<template>
  <header flex justify-center fixed bg-brand-primary w-full p5>
    <div flex items-center h-full w-6xl>
      <i i-aemi-icon-menu icon24 md:hidden />
      <img class="brand" src="../assets/svg/brand.svg">
      <i cursor-pointer i-aemi-icon-notification icon28 ml-a mr-2 hidden md:block />
      <i cursor-pointer i-aemi-icon-account icon28 mr-2 hidden md:block />
      <i cursor-pointer i-aemi-icon-cart icon28 ml-a md:ml-0 />
    </div>
  </header>
</template>

<style scoped>
header {
  height: var(--header-height);
  top: 0;
  z-index: 1000;
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
</style>
