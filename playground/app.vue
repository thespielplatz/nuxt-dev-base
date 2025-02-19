<template>
  <UApp>
    <div class="flex flex-col min-h-svh">
      <UContainer class="mt-8 flex-grow px-0 w-full">
        <TypographyHeader>TSP Dev Base</TypographyHeader>
        <UFormField label="Local Storage Text">
          <UInput v-model="localStorageText" />
        </UFormField>
        <UFormField label="Local Storage Text for FooBar">
          <UInput v-model="fooBar" />
        </UFormField>
      </UContainer>
      <FooterMain />
    </div>
  </UApp>
</template>

<script setup lang="ts">

const localStorageText = ref('')
const fooBar = ref('')
const LOCALSTORAGE_KEY = 'nuxt-dev-base'
const FOOBAR_KEY = 'fooBar'
const { $localStorage } = useNuxtApp()

const localStorageForFooBar = $localStorage.create('with-prefix')

onMounted(() => {
  localStorageText.value = $localStorage.getItem(LOCALSTORAGE_KEY) || ''
  fooBar.value = localStorageForFooBar.getItem(FOOBAR_KEY) || ''
})

watch(localStorageText, (value) => {
  $localStorage.setItem(LOCALSTORAGE_KEY, value)
})

watch(fooBar, (value) => {
  localStorageForFooBar.setItem(FOOBAR_KEY, value)
})

</script>
