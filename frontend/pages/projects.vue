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
            class="relative disabled bg-cover bg-center w-full h-52 flex group justify-center items-center rounded-3xl"
            :style="project.background ? `background-image: url('${getImgUrl(project.background)}')` : ''"
            target="_blank"
        >
            <div v-if="project.background" class="absolute inset-0 bg-[#0C0C06] bg-opacity-80 group-hover:bg-opacity-70 rounded-3xl filter backdrop-blur-xs"></div>
            <div v-else class="absolute inset-0 bg-[#6b7280d9]/50 group-hover:bg-[#6b7280d9] rounded-3xl"></div>
            <div 
                class="relative z-10 text-white text-center"
                target="_blank"
            >
                <span v-if="!project.link" class="text-sm uppercase">No available</span>
                <p class="font-bold text-3xl">{{ project.name }}</p>
                <p class="font-medium text-md">{{ project.tools }}</p>
                <p v-if="project.company" class="text-xs italic">Created while at {{ project.company }}</p>
            </div>

            <!-- GitHub Link -->
            <NuxtLink
                v-if="project.github"
                :to="project.github"
                target="_blank"
                class="absolute bottom-0 right-0 bg-opacity-50 px-2.5 md:px-5 py-3 rounded-br-3xl text-white text-xs group-hover:bg-opacity-80 transition"
            >
                <div class="flex flex-col gap-1 items-center">
                    <svg class="w-14 h-14 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.49.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.465-2.38 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.007-.323 3.3 1.23.958-.266 1.98-.398 3-.403 1.02.005 2.042.137 3 .403 2.29-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.841 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.922.43.37.81 1.103.81 2.223 0 1.605-.015 2.898-.015 3.293 0 .32.192.694.8.577C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    <span>GitHub</span>
                </div>
            </NuxtLink>
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