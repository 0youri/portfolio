<template>
  <header
    ref="headerRef"
    class="flex flex-col gap-5 items-center md:items-start pt-10 pb-5 lg:pt-20 lg:pb-5 text-white opacity-0 transition-opacity duration-700"
  >
    <NuxtLink to="/" class="text-2xl lg:text-xl space-x-2">
      <span>{</span> 
      <span>forge</span>
      <span>}</span> 
    </NuxtLink>
    <nav class="flex gap-10 lg:gap-5 text-lg w-full text-center">
      <NuxtLink to="#profile" class="hover:underline">profile/</NuxtLink>
      <NuxtLink to="#skills" class="hover:underline">skills/</NuxtLink>
      <NuxtLink to="#projects" class="hover:underline">projects/</NuxtLink>
      <NuxtLink to="#challenge" class="hover:underline">challenge/</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerRef = ref(null)

onMounted(() => {
  // Add opacity-100 class to trigger fade-in effect immediately after mounting
  setTimeout(() => {
    if (headerRef.value) {
      headerRef.value.classList.add('opacity-100')
    }
  }, 0)
})
</script>