<template>
  <LayoutCenterContainer>
    <div class="flex flex-col gap-2">
      <div>
        <TypographyHeadlineDefault>Components</TypographyHeadlineDefault>
      </div>
      <div>
        <TypographyHeadlineDefault>TypographyHeadlineDefault</TypographyHeadlineDefault>
      </div>
      <div>
        <TypographyButtonDefault>TypographyButtonDefault</TypographyButtonDefault>
      </div>
      <div>
        <TypographyButtonDefault disabled>Disabled TypographyButtonDefault</TypographyButtonDefault>
      </div>
      <div class="flex gap-2">
        <TypographyBadge>TypographyBadge</TypographyBadge>
        <TypographyBadge state="success">Success</TypographyBadge>
        <TypographyBadge state="error">Error</TypographyBadge>
      </div>
      <div>
        <TypographyInputDefault />
      </div>
      <div>
        <TypographyInputDefault label="With Label" />
      </div>
    </div>
  </LayoutCenterContainer>
</template>

<script setup lang="ts">
</script>
