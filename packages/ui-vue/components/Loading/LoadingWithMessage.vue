<script setup lang="ts">
import Loading from "./Loading.vue";
import type { LoadingProps } from "./Loading.vue";

interface LoadingWithMessageProps extends LoadingProps {
  message?: string;
}

defineProps<LoadingWithMessageProps>();
</script>

<template>
  <div
    data-cy="loading-indicator-with-message"
    class="flex h-64 w-full flex-col items-center justify-center"
  >
    <Loading v-bind="$props" />
    <span
      data-cy="loading-message"
      class="mt-4 text-center text-lg dark:text-white"
    >
      {{ message || "loading..." }}
    </span>
  </div>
</template>
