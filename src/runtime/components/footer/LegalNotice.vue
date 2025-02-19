<template>
  <UModal title="Legal Notice">
    <UButton
      v-if="content != null"
      variant="link"
      color="neutral"
      class="hover:underline"
    >
      Legal Notice
    </UButton>
    <template #body>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="content" />
      <!-- eslint-enable-next-line vue/no-v-html -->
    </template>
  </UModal>
  <slot v-if="content" />
</template>

<script setup lang="ts">

import { ref, onMounted } from '#imports'

const content = ref<null | string>(null)

onMounted(async () => {
  content.value = await $fetch<string>('/api/dev-base/content?file=legal-notice')
})

</script>
