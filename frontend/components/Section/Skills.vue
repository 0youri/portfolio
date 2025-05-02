<template>
    <section class="w-full sm:w-auto">
      <!-- Skills Content -->       
      <div class="grid grid-cols-1 gap-5 lg:gap-10">
        <UCard
          v-for="(section, index) in skills"
          :key="section.id"
          variant="soft"
          class="transition-transform duration-300 hover:scale-[1.03]"
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
              color="neutral" variant="soft" size="xl"
              class="flex flex-col justify-center items-center gap-0 px-5 transition-transform duration-300 hover:scale-[1.03]"  
            >
            
              <span class="text-md font-medium ">
                {{ typeof subSection === 'string' ? subSection : subSection.name }}
              </span>
              <span v-if="subSection.level" class="text-xs text-gray-500">{{ subSection.level }}</span>
            </UButton>
          </div>
        </UCard>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
  
  defineProps({
    skills: Array
  })
   
</script>