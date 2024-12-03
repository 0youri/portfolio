<template>
  <section id="challenge" class="text-white py-10">
    <!-- Projects Title -->
    <div
      ref="titleRef"
      @click="navigateTo('1app1week')"
      class="text-3xl font-bold text-left cursor-pointer opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
    >
      1 app in 1 week
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
        class="bg-gray-500/85 rounded-3xl hover:bg-gray-500 cursor-pointer"
      >
        <div 
          class="w-full text-white font-bold text-2xl"
          target="_blank"
        >
          {{ project.title }}
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

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted } from 'vue'

// List of project names to iterate over
const projects = ref([
  {
    title: 'Swit 🏋️‍♂️',
    link: 'swit'
  },
  {
    title: 'Rask 🎲',
    link: 'rask'
  },
])

const openLink = (link) => {
  if (link)
    navigateTo(`https://0youri.com/1app1week/${link}/`, { external: true })
}

// Config Carousel
const config = {
  itemsToShow: 1.25,
  wrapAround: true,
  gap: 50,
  height: 130,
  breakpointMode: 'carousel',
  breakpoints: {
    400: {
      itemsToShow: 2,
    },
    600: {
      itemsToShow: 3,
    },
    800: {
      itemsToShow: 4,
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