<template>
  <section id="profile" class="flex flex-col items-start text-white py-10">
    <h2
        :ref="sections.title"
        class="text-3xl font-bold text-left opacity-0 -translate-x-10 transition-opacity transition-transform duration-700"
    >
      1 app in 1 week
    </h2>
    <!-- Horizontal Line: Left-to-right fade-in -->
    <hr
      :ref="sections.line"
      class="border-white w-0 opacity-0 transition-all duration-700 delay-150 mb-5"
    />
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 w-full items-center">
        <div
            v-for="(project,index) in projects"
            :key="index"
            @click="openLink(project.link)"
            class="bg-gray-500/85 w-full h-24 flex justify-center items-center rounded-3xl hover:bg-gray-500 cursor-pointer"
        >
            <div 
                class="text-white font-bold text-2xl"
                target="_blank"
            >
            {{ project.title }}
            </div>
        </div>
    </div>

  </section>
</template>

<script lang="ts" setup>


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
        {
            title: 'Flick 🎬',
            link: 'flick'
        },
    ])

    const openLink = (link: string) => {
        if (link)
            navigateTo(`https://0youri.com/1app1week/${link}/`, { external: true, open: { target: '_blank' } })
    }
    const sections = {
        title: ref(null),
        line: ref(null),
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
</script>

<style>

</style>