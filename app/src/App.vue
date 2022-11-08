<template>
  <Header />
  <main class="main-wrapper text-center">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
.main-wrapper {
  margin-top: var(--header-height);
}
</style>
