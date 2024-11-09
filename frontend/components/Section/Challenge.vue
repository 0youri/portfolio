<template>
    <section id="challenge" class="text-white py-10">
      <!-- Section Title -->
      <h2
        ref="titleRef"
        class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
      >
        1 app in 1 week
      </h2>
      <hr
        ref="lineRef"
        class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
      />
  
      <!-- Project Cards Container with Arrows -->
      <div
        ref="containerRef"
        class="relative flex items-center justify-center space-x-4 opacity-0 transition-opacity duration-700 delay-300"
      >
        <!-- Arrow Left -->
        <button @click="scrollLeft" aria-label="Scroll Left">
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
  
        <!-- Projects List -->
        <div ref="projectContainer" class="flex space-x-10 overflow-x-auto pb-6">
          <div v-for="(project, index) in projects" :key="index" class="min-w-64 h-40 bg-gray-400 rounded-lg flex items-center justify-center">
            <span class="text-gray-700 font-bold">{{ project }}</span>
          </div>
        </div>
  
        <!-- Arrow Right -->
        <button @click="scrollRight" aria-label="Scroll Right">
          <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // List of project names to iterate over
  const projects = ref([
    "Project 1", "Project 2", "Project 3", "Project 4",
    "Project 5", "Project 6", "Project 7", "Project 8"
  ])
  
  // References for each element
  const titleRef = ref(null)
  const lineRef = ref(null)
  const containerRef = ref(null)
  
  const projectContainer = ref(null) // For scrolling
  
  // Scroll functions
  const scrollLeft = () => {
    if (projectContainer.value) {
      projectContainer.value.scrollBy({ left: -250, behavior: 'smooth' })
    }
  }
  
  const scrollRight = () => {
    if (projectContainer.value) {
      projectContainer.value.scrollBy({ left: 250, behavior: 'smooth' })
    }
  }
  
  // IntersectionObserver to trigger animations on scroll
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === lineRef.value) {
            // Remove w-0 and add responsive width classes for smooth transition
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
    if (containerRef.value) observer.observe(containerRef.value)
  })
  </script>