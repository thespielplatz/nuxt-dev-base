<template>
  <UDivider class="mt-auto pt-2" />
  <UContainer class="w-full flex justify-end py-2 gap-">
    <FooterLegalNotice v-if="legalNotice" />
    <UDivider
      v-if="legalNotice"
      orientation="vertical"
      class="h-7 mt-1"
    />
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
const legalNotice = ref(runtimeConfig.public.legalNotice || '')

</script>
