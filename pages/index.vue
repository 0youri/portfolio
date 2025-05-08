<template>
  <div class="flex flex-col items-center justify-center gap-5">
      <SectionProfile 
        :name="profile.name"
        :position="profile.position"
        :description="profile.description"
        :avatar="profile.avatar"
        :socials="profile.socials"
      />
      <SectionSkills 
        :skills="skills"
      />
      <SectionProjects
      />
  </div>
</template>

<script lang="ts" setup>
  import profile from '~/data/profile.json'
  import skills from '~/data/skills.json'  
</script>