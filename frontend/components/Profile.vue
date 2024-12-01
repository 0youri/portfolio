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
        src="../assets/img/avatar.png"
        alt="Youri Novikov"
        class="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-yellow-500"
      />

      <!-- Name and Role -->
      <div>
        <h1 class="text-2xl lg:text-3xl font-bold">Youri Novikov</h1>
        <h2 class="text-xl text-gray-300">Front-End Web Developer</h2>
      </div>
    </div>

    <!-- Profile Description -->
    <p
      :ref="sections.description"
      class="mt-6 max-w-2xl text-left text-gray-300 text-pretty lg:pr-20 opacity-0 transition-opacity duration-700 delay-450"
    >
      Versatile profile with technical expertise in web development and experience in project management.
      Able to design and develop end-to-end web applications in Agile environments,
      I collaborate effectively with cross-functional teams to deliver optimized, user-centered solutions.
    </p>

    <!-- Social Links -->
    <div
      :ref="sections.socialLinks"
      class="mt-8 flex space-x-5 items-center opacity-0 transition-opacity duration-700 delay-600"
    >
      <NuxtLink to="https://linkedin.com/in/0youri" target="_blank" class="flex flex-col gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg>
        <span class="text-sm text-white/75">LinkedIn</span>
      </NuxtLink>
      <NuxtLink to="https://github.com/0youri" target="_blank" class="flex flex-col gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g></svg>
        <span class="text-sm text-white/75">GitHub</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

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
</script>