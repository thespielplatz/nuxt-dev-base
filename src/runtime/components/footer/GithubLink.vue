<template>
  <UButton
    v-if="runtimeConfig.public.devBase.githubLink"
    variant="link"
    :to="runtimeConfig.public.devBase.githubLink"
    target="_blank"
    class="flex items-center gap-1"
  >
    <UIcon name="i-grommet-icons-github" /> Github
  </UButton>
  <slot v-if="runtimeConfig.public.devBase.githubLink" />
</template>

<script setup lang="ts">

import { useRuntimeConfig } from '#imports'

const runtimeConfig = useRuntimeConfig()

</script>
