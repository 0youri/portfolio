<template>
  <header
    ref="headerRef"
    class="flex flex-col gap-5 items-center pt-10 lg:pt-20 text-white opacity-0 transition-opacity duration-700"
  >
    <NuxtLink v-if="portfolio" to="/" class="text-2xl text-center lg:text-xl">
      <span>{{ portfolio.header }}</span> 
    </NuxtLink>
    <nav  class="flex gap-5 text-lg w-full text-center text-clip overflow-hidden">
        <NuxtLink to="/" class="hover:underline">home/</NuxtLink>
        <NuxtLink to="/projects" class="hover:underline">projects/</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)
const { getPortfolio } = usePortfolioStore();
const { portfolio } = storeToRefs(usePortfolioStore());
onMounted(() => {
  getPortfolio();
  // Add opacity-100 class to trigger fade-in effect immediately after mounting
  setTimeout(() => {
    if (headerRef.value) {
      headerRef.value.classList.add('opacity-100')
    }
  }, 0)
})
</script>