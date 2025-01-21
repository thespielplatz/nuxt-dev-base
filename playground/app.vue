<template>
  <LayoutCenterContainer>
    <div class="flex flex-col gap-2">
      <div>
        <UiHeadlineDefault>Components</UiHeadlineDefault>
      </div>
      <div>
        <UiHeadlineDefault>UiHeadlineDefault</UiHeadlineDefault>
      </div>
      <div>
        <UiButtonDefault>UiButtonDefault</UiButtonDefault>
      </div>
      <div>
        <UiButtonDefault disabled>Disabled UiButtonDefault</UiButtonDefault>
      </div>
      <div class="flex gap-2">
        <UiBadge>UiBadge</UiBadge>
        <UiBadge state="success">Success</UiBadge>
        <UiBadge state="error">Error</UiBadge>
      </div>
      <div>
        <UiInputDefault />
      </div>
      <div>
        <UiInputDefault label="With Label" />
      </div>
    </div>
  </LayoutCenterContainer>
</template>

<script setup lang="ts">
</script>
