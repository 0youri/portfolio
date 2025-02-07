<template>
  <section id="profile" class="flex flex-col items-start text-white py-10">
    <!-- Title: Slide in from the left -->
    <h2
      :ref="sections.title"
      class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
    >
      Profile
    </h2>
    
    <!-- Horizontal Line: Left-to-right fade-in -->
    <hr
      :ref="sections.line"
      class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
    />
    
    <!-- Profile Details -->
    <div :ref="sections.details" class="flex items-center space-x-6 opacity-0 transition-opacity duration-700 delay-300">
      <!-- Profile Image -->
      <img
        src="/img/avatar.png"
        alt="Youri Novikov"
        class="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-yellow-500"
      />

      <!-- Name and Role -->
      <div>
        <h1 class="text-2xl lg:text-3xl font-bold">{{ name }}</h1>
        <h2 class="text-xl text-gray-300">{{ position }}</h2>
      </div>
    </div>

    <!-- Profile Description -->
    <p
      :ref="sections.description"
      class="mt-6 max-w-2xl text-left text-gray-300 text-pretty lg:pr-20 opacity-0 transition-opacity duration-700 delay-450"
    >
      {{ description }}
    </p>
    <!-- Social Links -->
    <div
      :ref="sections.socialLinks"
      class="mt-8 flex space-x-5 items-center opacity-0 transition-opacity duration-700 delay-600"
    >
      <NuxtLink v-for="social in socialPlatforms" :key="social.name" :to="social.link" target="_blank" class="flex flex-col gap-1 items-center group">
        <NuxtImg provider="strapi" class="group-hover:opacity-75" :src="getImgUrl(social.logo)" alt="LinkedIn" width="50" height="50" />
        <span class="text-sm text-white group-hover:text-white/75">{{ social.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
  import { NuxtImg } from '#components';
  import { onMounted, ref } from 'vue'

  defineProps({
    name: String,
    position: String,
    description: String,
    socialPlatforms: Array
  })

  const sections = {
    title: ref(null),
    line: ref(null),
    details: ref(null),
    description: ref(null),
    socialLinks: ref(null)
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply a different class for the line element to animate width
          if (entry.target === sections.line.value) {
            entry.target.classList.remove('w-0')
            entry.target.classList.add('w-1/2', 'lg:w-1/3', 'opacity-100')
          } else {
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0')
          }
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    // Observe each element in the sections object
    Object.values(sections).forEach((el) => observer.observe(el.value))
  })

  const getImgUrl = (el) => {
    return el.hash + el.ext
  }
</script>