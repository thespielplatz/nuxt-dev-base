<template>
  <UButton
    v-if="githubLink"
    variant="link"
    :to="githubLink"
    target="_blank"
    class="flex items-center gap-1"
  >
    <UIcon name="i-grommet-icons-github" /> Github
  </UButton>
  <slot v-if="githubLink" />
</template>

<script setup lang="ts">

import { ref, useRuntimeConfig } from '#imports'

const runtimeConfig = useRuntimeConfig()
const githubLink = ref(runtimeConfig.public.githubLink || '')

</script>
