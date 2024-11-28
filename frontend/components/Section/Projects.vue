<template>
    <section id="projects" class="text-white py-10">
      <!-- Projects Title -->
      <h2
        ref="titleRef"
        class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
      >
        Projects
      </h2>
      <hr
        ref="lineRef"
        class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
      />
  
      <!-- Project's Carousel -->
      <Carousel v-bind="config">
        <Slide
          v-for="(project,index) in projects"
          :key="index"
          class="bg-gray-400 rounded-lg"
        >
          <NuxtLink to="https://0youri.com/1app1week/rask/" class=" text-gray-700 font-bold carousel__item">{{ project }}</NuxtLink>
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
    "Project 1", "Project 2", "Project 3", "Project 4",
    "Project 5", "Project 6", "Project 7", "Project 8"
  ])

  // Config Carousel
  const config = {
    itemsToShow: 2.5,
    wrapAround: true,
    gap: 50,
    height: 200,
    breakpointMode: 'carousel',


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