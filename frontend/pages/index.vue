<template>
  <div v-if="portfolio" class="flex flex-col items-center justify-center gap-5">
      <!-- <SectionNavBar /> -->
      <SectionProfile 
        :name="portfolio.username"
        :position="portfolio.position"
        :description="portfolio.description"
        :avatar="portfolio.avatar.url"
        :socialPlatforms="portfolio.socialPlatforms"
      />
      <SectionSkills 
        v-if="portfolio.skills.length > 0"
        :skills="portfolio.skills"
      />
      <!-- <SectionProjects
        v-if="portfolio.projects.length > 0"
        :projects="portfolio.projects"
      /> -->
  </div>
</template>

<script lang="ts" setup>
  import { usePortfolioStore } from "../stores/portfolioStore";

  const { getPortfolio } = usePortfolioStore();
  const { portfolio } = storeToRefs(usePortfolioStore());

  onMounted(() => {
    getPortfolio();
  });
</script>