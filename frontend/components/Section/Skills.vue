<template>
    <section id="skills" class="text-white py-10">
      <!-- Skills Title -->
      <h2
        ref="titleRef"
        class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
      >
        Skills
      </h2>
      <hr
        ref="lineRef"
        class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5 mt-2"
      />
  
      <!-- Skills Content -->
      <div ref="contentRef" class="flex flex-col space-y-8 opacity-0 transition-opacity duration-700 delay-300">
        <div v-for="section in sections" :key="section.id" class="text-left">
          <h3 class="text-xl font-semibold mb-2">{{ section.title }}</h3>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-0 cursor-default">
            <div
              v-for="(subSection, index) in section.data"
              :key="index"
              class="flex items-center space-x-2"
            >
              <span class="text-lg font-medium text-gray-300 hover:text-gray-200 hover:underline">
                {{ typeof subSection === 'string' ? subSection : subSection.name }}
              </span>
              <span v-if="subSection.level" class="text-sm text-gray-500">{{ subSection.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
  
  const sections = ref([
    {
      id: 'prog',
      title: 'Programming languages',
      data: [
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      data: [
        { name: "Nuxt", level: "Intermediate" },
        { name: "Vue", level: "Intermediate" },
        { name: "React", level: "Junior" },
        { name: "Next.js", level: "Junior" },
        { name: "Node.js", level: "Junior" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Strapi", level: "Intermediate" },
        { name: "Supabase", level: "Junior" },
      ]
    },
    {
      id: 'techTools',
      title: 'Technical Tools',
      data: [
        { name: "Git", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Jira", level: "Intermediate" },
        { name: "Trello", level: "Intermediate" },
      ]
    },
    {
      id: 'languages',
      title: 'Languages',
      data: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "Proficient" },
        { name: "French", level: "Fluent" },
        { name: "Russian", level: "Fluent" },
      ]
    }
  ])
  
  // References to each element
  const titleRef = ref(null)
  const lineRef = ref(null)
  const contentRef = ref(null)
  
  onMounted(() => {
    // Ensure all elements are defined
    if (titleRef.value && lineRef.value && contentRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  
      // Observe each element individually
      observer.observe(titleRef.value)
      observer.observe(lineRef.value)
      observer.observe(contentRef.value)
    } else {
      console.warn("One or more elements are not defined.")
    }
  })
  </script>