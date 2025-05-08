<template>
  <section class="flex flex-col items-center py-10 gap-5">
      <h1 class="text-3xl font-bold">
          Projects
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <UCard
              v-for="project in sortedProjects"
              :key="project.rank"
              variant="soft"
              class="transition-transform duration-150 hover:scale-[1.03]"
          >
              <template #header>
                  <h3 class="text-xl font-semibold text-center">
                      {{ project.name }}
                  </h3>
              </template>

              <div class="flex flex-col gap-5 h-full w-full">
                  <div class="flex flex-col gap-1">
                      <NuxtImg
                          :src="project.picture"
                          alt="Project preview"
                          loading="lazy"
                          class="w-full h-48 object-cover rounded-lg"
                      />
                      <p v-if="project.company" class="text-xs font-semibold text-right opacity-50">done at {{ project.company }}</p>
                  </div>

                  <div class="grid grid-cols-3 gap-2 uppercase">
                      <UBadge
                          v-for="tool in project.tools.slice(0, 3)"
                          color="neutral" variant="soft" size="md"
                          class="font-bold justify-center py-1.5"
                      >
                          {{ tool }}
                      </UBadge>
                  </div>
                  <div class="flex-1 flex items-end justify-center">
                      <USlideover :title="project.name">
                          <UButton color="neutral" variant="link" class="cursor-pointer justify-center items-center">
                              <UIcon name="lucide:arrow-up" class="size-4"></UIcon>
                              <p class="text-lg font-medium">See more</p>
                              <UIcon name="lucide:arrow-up" class="size-4"></UIcon>
                          </UButton>
                          <template #body>
                              <div class="h-full space-y-5">
                                  <NuxtImg
                                      :src="project.picture"
                                      alt="Project preview"
                                      loading="lazy"
                                      class="w-full h-48 object-cover rounded-lg"
                                  />
                                  <div class="grid grid-cols-3 gap-2 uppercase">
                                      <UBadge
                                      v-for="tool in project.tools"
                                      color="neutral" variant="soft" size="sm"
                                      class="font-bold justify-center py-1.5"
                                      >
                                      {{ tool }}
                                      </UBadge>
                                  </div>

                                  <p aria-describedby="Description of project">
                                      {{ project.description }}
                                  </p>
                                  <div class="flex gap-2.5 items-center justify-end">
                                      <NuxtLink
                                      v-if="project.link"
                                      :key="project.link"
                                      :to="project.link"
                                      target="_blank"
                                      :title="'View project: ' + project.name"
                                      class="flex flex-col items-center group transition-transform duration-150 hover:scale-[1.03]"
                                      
                                      >
                                          <UIcon name="mdi:web" class="size-10 group-hover:text-white/75" />
                                      </NuxtLink>
                                      <NuxtLink
                                      v-if="project.github"
                                      :key="project.github"
                                      :to="project.github"
                                      target="_blank"
                                      :title="'View code: ' + project.name"
                                      class="flex flex-col items-center group transition-transform duration-150 hover:scale-[1.03]"
                                      
                                      >
                                          <UIcon name="mdi:github" class="size-10 group-hover:text-white/75" />
                                      </NuxtLink>
                                  </div>
                              </div>
                          </template>
                      </USlideover>
                  </div>

              </div>
          </UCard>
      </div>
  </section>
</template>

<script lang="ts" setup>
  import projects from '~/data/projects.json'

  const sortedProjects = computed(() => [...projects].sort((a, b) => a.rank - b.rank));
</script>