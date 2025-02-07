<template>
    <section id="profile" class="flex flex-col items-start text-white py-10">
      <h2
          :ref="sections.title"
          class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
      >
        Projects
      </h2>
      <!-- Horizontal Line: Left-to-right fade-in -->
      <hr
        :ref="sections.line"
        class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
      />
      <div v-if="projects" class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full items-center">
        <NuxtLink
            v-for="(project,index) in projects"
            :key="index"
            :to="project.link || undefined"
            disabled
            class="relative disabled bg-cover bg-start w-full h-52 flex group justify-center items-center rounded-3xl"
            :style="project.background ? `background-image: url('${getImgUrl(project.background)}')` : ''"
            target="_blank"
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
          </NuxtLink>
      </div>
    </section>
</template>
  
<script lang="ts" setup>
    import { usePortfolioStore } from "../stores/portfolioStore";

    const { getProjects } = usePortfolioStore();
    const { projects } = storeToRefs(usePortfolioStore());

    const sections = {
        title: ref(null),
        line: ref(null),
    }

    const getImgUrl = (el: object) => {
        return useStrapiUrl().split("/api")[0] + el.url
    }

    onMounted(() => {
        getProjects();
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
</script>