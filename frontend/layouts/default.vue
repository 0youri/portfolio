<template>
  <div>
    <Header />
    <Transition
      appear
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <UContainer class="min-h-dvh">
        <slot />
      </UContainer>
    </Transition>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>