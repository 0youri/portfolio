<template>
  <section class="flex flex-col items-center text-white py-10 gap-6">    
    <!-- Profile Details -->
    <div class="flex flex-col justify-center items-center gap-5">
      <!-- Profile Image -->
      <NuxtImg
        provider="strapi"
        :src="avatar"
        alt="Avatar"
        class="w-36 h-36 lg:w-32 lg:h-32 rounded-full border-4 border-slate-700"
      />

      <!-- Name and Role -->
      <div class="text-center space-y-1">
        <h1 class="text-3xl lg:text-4xl font-bold">{{ name }}</h1>
        <h2 class="text-xl lg:text-2xl font-semibold text-gray-300">{{ position }}</h2>
      </div>
    </div>

    <!-- Profile Description -->
    <p
      class="max-w-5xl text-center text-lg font-medium text-gray-300 text-pretty"
    >
      {{ description }}
    </p>
    <!-- Social Links -->
    <div
      class="flex space-x-5 items-center"
    >
    <!-- <UButton
    :avatar="{
      src: 'https://github.com/nuxt.png'
    }"
    size="md"
    color="neutral"
    variant="outline"
  /> -->
      <NuxtLink
        v-for="social in socialPlatforms"
        :key="social.name"
        :to="social.link"
        target="_blank"
        class="flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03]"
        
      >
        <!-- <UIcon :name="social.icon" class="size-15 group-hover:text-white/75" /> -->
        <UIcon :name="social.name === 'LinkedIn' ?'mdi:linkedin' : 'mdi:github-box'" class="size-15 group-hover:text-white/75" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { NuxtImg } from '#components';

  defineProps({
    name: String,
    position: String,
    description: String,
    avatar: String,
    socialPlatforms: Array
  })

</script>