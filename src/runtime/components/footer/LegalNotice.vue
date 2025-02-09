<template>
  <UButton
    v-if="legalNoticeContent != null"
    variant="link"
    @click="isOpen = true"
  >
    Legal Notice
  </UButton>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
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
        <div v-html="legalNoticeContent" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'

const legalNoticeContent = ref<null | string>(null)
const isOpen = ref(false)

const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  if (runtimeConfig.public.legalNotice) {
    legalNoticeContent.value = runtimeConfig.public.legalNotice
  }
})

</script>
