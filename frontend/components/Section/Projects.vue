<template>
  <section id="challenge" class="text-white py-10">
    <!-- Projects Title -->
    <div
      ref="titleRef"
      @click="navigateTo('projects')"
      class="text-3xl font-bold text-left cursor-pointer opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
    >
      Projects
    </div>
    <hr
      ref="lineRef"
      class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
    />
    <!-- Project's Carousel -->
    <Carousel v-bind="config">
      <Slide
        v-for="(project,index) in projects"
        :key="index"
        @click="openLink(project.link)"
        class="relative bg-cover bg-start rounded-3xl group"
        :class="!project.link || 'cursor-pointer'"
        :style="project.background ? `background-image: url('${getImgUrl(project.background)}')` : ''"
      >
        <div v-if="project.background" class="absolute inset-0 bg-[#0C0C06] bg-opacity-80 group-hover:bg-opacity-70 rounded-3xl filter backdrop-blur-xs"></div>
        <div v-else class="absolute inset-0 bg-[#6b7280d9]/50 group-hover:bg-[#6b7280d9] rounded-3xl"></div>

        <div 
            class="relative z-10 text-white text-center"
            target="_blank"
        >
            <span v-if="!project.link" class="text-sm uppercase">No longer available</span>
            <p class="font-bold text-3xl">{{ project.name }}</p>
            <p class="font-medium text-md">{{ project.tools }}</p>
            <p v-if="project.company" class="text-xs italic">Created while at {{ project.company }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation>
          <template #next >
            <svg class="w-20 h-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </template>
          <template #prev>
            <svg class="w-20 h-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </template>
        </Navigation>
        <Pagination class="" />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts" setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { ref, onMounted } from 'vue'

  defineProps({
    projects: Array
  })

  const openLink = (link) => {
    if (link)
      navigateTo(link, { external: true, open: { target: '_blank' } })
  }
  const getImgUrl = (el: object) => {
    return useStrapiUrl().split("/api")[0] + el.url
  }
  // Config Carousel
  const config = {
    itemsToShow: 1.25,
    wrapAround: true,
    gap: 50,
    height: 200,
    breakpointMode: 'carousel',
    breakpoints: {
      400: {
        itemsToShow: 1.5,
      },
      600: {
        itemsToShow: 2,
      },
      800: {
        itemsToShow: 2.5,
      },
    },

  }

  // References for each element
  const titleRef = ref(null)
  const lineRef = ref(null)
  

  // IntersectionObserver to trigger animations on scroll
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Intersecting: ${entry.target}`) // Debugging output

          if (entry.target === lineRef.value) {
            entry.target.classList.remove('w-0')
            entry.target.classList.add('w-1/2', 'lg:w-1/3', 'opacity-100')
          } else {
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0')
          }
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    // Observe each element only if it's not null
    if (titleRef.value) observer.observe(titleRef.value)
    if (lineRef.value) observer.observe(lineRef.value)
  })
</script>