<template>
  <UButton
    v-if="tagLink"
    :to="tagLink"
    target="_blank"
    variant="link"
    class="text-white"
  >
    <UBadge
      :ui="{ rounded: 'rounded-full' }"
      class="px-2"
    >
      {{ version }}
    </UBadge>
  </UButton>
  <UBadge
    v-else
    :ui="{ rounded: 'rounded-full' }"
    class="px-2"
  >
    {{ version }}
  </UBadge>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()

const version = ref(runtimeConfig.public.version ? `v${runtimeConfig.public.version}` : 'undefined')
const releasedVersion = ref(runtimeConfig.public.releasedVersion ? `v${runtimeConfig.public.releasedVersion}` : 'undefined')
const tagLink = ref(runtimeConfig.public.githubLink ? `${runtimeConfig.public.githubLink}/releases/tag/${releasedVersion.value}` : '')

</script>
