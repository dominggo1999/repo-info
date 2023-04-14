<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
}>();
defineEmits<{
  (e: "click", value: string): void;
}>();
</script>

<template>
  <button
    class="rounded-lg bg-primary-500 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>
