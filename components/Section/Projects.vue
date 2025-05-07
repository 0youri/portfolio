<template>
  <section class="text-white py-10  text-center">
    <UCarousel
      v-slot="{ item }"
      class-names
      arrows
      loop
      :items="projects"
      :ui="{
        item: 'basis-full'
      }"
      class="mx-auto w-md sm:w-sm" 
    >
      <div
        class="relative bg-cover bg-center group min-h-52 rounded-3xl"
        :style="{ backgroundImage: `url('${item.picture}')` }"
      >
        <div class="absolute inset-0 bg-black/80 z-0 rounded-3xl"></div>
          <div class="absolute inset-0 z-10 flex flex-col items-center text-white text-center w-full h-full py-2">
            <div class="flex-1">
              <p v-if="item.company" class="text-xs font-semibold pt-1 opacity-50">{{ item.company }}</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="font-bold text-2xl truncate w-xs">{{ item.name }}</p>
              
              <div
                :class="`grid gap-2 mt-2 uppercase grid-cols-${Math.min(item.tools.length, 3)}`"
              >
                <UBadge
                  v-for="tool in item.tools.slice(0, 3)"
                  color="neutral" variant="soft" size="sm"
                  class="font-bold justify-center py-1.5"
                >
                  {{ tool }}
                </UBadge>
              </div>
            </div>
            <div class="flex-1 flex items-end justify-center">
              <USlideover class="" :title="item.name">
                <UButton color="neutral" variant="link" class="cursor-pointer">
                  <UIcon name="lucide:arrow-up" class="size-4"></UIcon>
                  <p class="text-sm font-medium">See more</p>
                  <UIcon name="lucide:arrow-up" class="size-4"></UIcon>
                </UButton>
                <template #body>
                  <div class="h-full space-y-5">
                    <NuxtImg :src="item.picture" alt="Project picture" loading="lazy" class="rounded-lg w-full h-52 object-cover" />
                    <div class="grid grid-cols-3 gap-2 uppercase">
                      <UBadge
                        v-for="tool in item.tools"
                        color="neutral" variant="soft" size="sm"
                        class="font-bold justify-center py-1.5"
                      >
                        {{ tool }}
                      </UBadge>
                    </div>

                    <p>
                      {{ item.description }}
                    </p>
                    <div class="flex gap-2.5 items-center justify-end">
                      <NuxtLink
                        v-if="item.link"
                        :key="item.link"
                        :to="item.link"
                        :title="'View project: ' + item.name" 
                        target="_blank"
                        class="flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03]"
                        
                      >
                        <UIcon name="mdi:web" class="size-10 group-hover:text-white/75" />
                      </NuxtLink>
                      <NuxtLink
                        v-if="item.github"
                        :key="item.github"
                        :to="item.github"
                        :title="'View code: ' + item.name" 
                        target="_blank"
                        class="flex flex-col items-center group transition-transform duration-300 hover:scale-[1.03]"
                        
                      >
                        <UIcon name="mdi:github" class="size-10 group-hover:text-white/75" />
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </USlideover>
            </div>
          </div>
      </div>
    </UCarousel>
    <UButton
      color="neutral" variant="link" size="lg"
      class="mx-auto mt-5 text-sm font-medium transition-transform duration-150 hover:scale-[1.03]"
      to="/projects"
    >
      <UIcon name="lucide:arrow-right" class="size-4"></UIcon>
      View all projects
      <UIcon name="lucide:arrow-left" class="size-4"></UIcon>
    </UButton>
  </section>
</template>

<script lang="ts" setup>

  import type { Project } from '~/types/project'
  defineProps<{
    projects: Project[]
  }>();

</script>