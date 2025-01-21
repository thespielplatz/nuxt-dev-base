<template>
  <div
    v-if="label"
    class="text-sm font-bold"
  >
    {{ label }}
  </div>
  <input
    v-bind="attrs"
    v-model="localValue"
    :type="type"
    class="border border-gray-300 rounded-md p-2 w-full"
  >
</template>

<script setup lang="ts">
import { toRefs, computed } from '#imports'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const { type, label, ...attrs } = toRefs(props)
</script>
