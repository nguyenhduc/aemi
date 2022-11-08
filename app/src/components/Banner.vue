<template>
  <div class="banner cursor-pointer" />
</template>

<style scoped>
.banner {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
}

@media screen and (min-width: 1200px) {
  .banner {
    background-image: url('@/assets/images/banners/1440w.png');
    padding-top: calc(578/1400*100%);
  }
}

@media screen and (min-width: 990px) and (max-width: 1200px) {
  .banner {
    background-image: url('@/assets/images/banners/1200w.png');
    padding-top: calc(600/1200*100%);
  }
}

@media screen and (min-width: 768px) and (max-width: 990px) {
  .banner {
    background-image: url('@/assets/images/banners/1000w.png');
    padding-top: calc(450/1000*100%);
  }
}

@media screen and (min-width: 570px) and (max-width: 768px) {
  .banner {
    background-image: url('@/assets/images/banners/767w.png');
    padding-top: calc(100%*250/767)
  }
}

@media screen and (max-width: 570px) {
  .banner {
    background-image: url('@/assets/images/banners/863w.png');
    ;
    padding-top: calc(525/863*100%);
  }
}
</style>
