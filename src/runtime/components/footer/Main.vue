<template>
  <UDivider class="mt-auto pt-2" />
  <UContainer class="w-full flex justify-end py-2 gap-">
    <FooterGithubLink v-if="githubLink" />
    <UDivider
      v-if="githubLink"
      orientation="vertical"
      class="h-7 mt-1"
    />
    <FooterVersionBadge />
  </UContainer>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const githubLink = ref(runtimeConfig.public.githubLink || '')

</script>
