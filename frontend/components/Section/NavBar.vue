<template>
    <div ref="navbarRef" class="text-white opacity-0 transition-opacity duration-700">
        
        <nav  class="flex gap-5 text-lg w-full text-center text-clip overflow-hidden">
            <span>{</span>
            <NuxtLink to="#profile" class="hover:underline">profile/</NuxtLink>
            <NuxtLink to="#skills" class="hover:underline">skills/</NuxtLink>
            <NuxtLink to="#projects" class="hover:underline">projects/</NuxtLink>
            <span>}</span>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    const navbarRef = ref(null)

    
    onMounted(() => {
    // Add opacity-100 class to trigger fade-in effect immediately after mounting
        setTimeout(() => {
            if (navbarRef.value) {
                navbarRef.value.classList.add('opacity-100')
            }
        }, 0)
    })
</script>

<style>

</style>