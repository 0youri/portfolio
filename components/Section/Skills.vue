<template>
    <section class="w-full sm:w-auto space-y-5">
      <h1 class="text-3xl font-bold text-center">
        Skills
      </h1>
      <!-- Skills Content -->       
      <div class="grid grid-cols-1 gap-5 lg:gap-10">
        <UCard
          v-for="(section, index) in skills"
          :key="section.name"
          :title="section.name"
          variant="soft"
          class="transition-transform duration-150 hover:scale-[1.03]"
        >
          <template #header>
            <h3
              class="text-lg items-center flex gap-2"
              :class="index === 0 ? 'font-extrabold' : 'font-semibold'"
            >
              <UIcon :name="section.icon" class="size-5" />
              <span>{{ section.name }}</span>
            </h3>
          </template>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 lg:gap-5 justify-center "
          >
            <UButton
              v-for="(subSection, index) in section.data"
              :key="index"
              :title="subSection.name"
              color="neutral" variant="soft" size="xl"
              class="flex flex-col justify-center items-center gap-0"  
            >
              <span class="text-md font-medium ">
                {{ subSection.name }}
              </span>
              <span v-if="subSection.level" ari class="text-xs text-gray-500">{{ subSection.level }}</span>
            </UButton>
          </div>
        </UCard>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
  import type { Skills } from '~/types/skills'
  
  defineProps<{
    skills: Skills[]
  }>();
   
</script>