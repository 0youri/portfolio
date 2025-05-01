<template>
  <header
    class="pt-5 pb-3 top-0 sticky border-b-2 backdrop-blur-xs z-10 xl:px-52 
      bg-slate-900/25 border-slate-800"
  >
    <UContainer class="flex flex-col items-center justify-between gap-2">
      <NuxtLink v-if="portfolio" to="/" class="text-2xl text-center lg:text-xl hover:opacity-75 transition-transform duration-300 hover:scale-[1.03]">
        <span>{{ portfolio.header }}</span> 
      </NuxtLink>
      <nav class="flex gap-5 text-lg w-full justify-center text-clip overflow-hidden container">
          <NuxtLink to="/" class="hover:opacity-75 transition-transform duration-300 hover:scale-[1.03]">home/</NuxtLink>
          <NuxtLink to="/projects" class="hover:opacity-75 transition-transform duration-300 hover:scale-[1.03]">projects/</NuxtLink>
      </nav>
    </UContainer>
  </header>
</template>

<script setup lang="ts">

const { getPortfolio } = usePortfolioStore();
const { portfolio } = storeToRefs(usePortfolioStore());
onMounted(() => {
  getPortfolio();
})
</script>