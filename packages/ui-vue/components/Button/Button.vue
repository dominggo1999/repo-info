<script setup lang="ts">
import clsx from "clsx";

interface ButtonProps {
  size?: "primary" | "secondary" | "danger" | "transparent";
  fullWidth?: boolean;
}

defineProps<ButtonProps>();
</script>

<template>
  <button
    :class="
      clsx(
        'inline-flex select-none items-center justify-center gap-x-2 rounded bg-primary-500 px-3 py-2 text-base font-medium outline-none hover:bg-primary-400 enabled:active:bg-primary-400/90 dark:text-white',
        fullWidth ? 'w-full self-stretch' : 'w-auto self-start',
      )
    "
  >
    <slot></slot>
  </button>
</template>
