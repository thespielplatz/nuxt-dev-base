<template>
  <UButton
    v-if="tagLink"
    :to="tagLink"
    target="_blank"
    variant="link"
  >
    <UBadge
      variant="outline"
      color="neutral"
      class="px-2 rounded-full bg-transparent"
    >
      {{ version }}
    </UBadge>
  </UButton>
  <UBadge
    v-else
    class="px-2"
  >
    {{ version }}
  </UBadge>
</template>

<script setup lang="ts">

import { ref, useRuntimeConfig } from '#imports'

const runtimeConfig = useRuntimeConfig()

const version = ref(runtimeConfig.public.devBase.version ? `v${runtimeConfig.public.devBase.version}` : 'undefined')
const releasedVersion = ref(runtimeConfig.public.devBase.releasedVersion ? `v${runtimeConfig.public.devBase.releasedVersion}` : 'undefined')
const tagLink = ref(runtimeConfig.public.devBase.githubLink ? `${runtimeConfig.public.devBase.githubLink}/releases/tag/${releasedVersion.value}` : '')

</script>
