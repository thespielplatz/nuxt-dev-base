<template>
  <UButton
    v-if="content != null"
    variant="link"
    @click="isOpen = true"
  >
    Legal Notice
  </UButton>
  <slot v-if="content" />
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base text-lg font-semibold leading-6 text-gray-900 dark:text-white">
            Legal Notice
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>
      <template #default>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="content" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">

import { ref, onMounted } from '#imports'

const content = ref<null | string>(null)
const isOpen = ref(false)

onMounted(async () => {
  content.value = await $fetch('api/dev-base/content?file=legal-notice')
})

</script>
