<template>
  <UModal title="Privacy Policy">
    <UButton
      v-if="content"
      variant="link"
      color="neutral"
      class="hover:underline"
    >
      Privacy Policy
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

import { onMounted, ref } from '#imports'

const content = ref<null | string>(null)

onMounted(async () => {
  content.value = await $fetch('/api/dev-base/content?file=privacy-policy')
})

</script>
