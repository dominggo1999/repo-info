<script setup lang="ts">
import clsx from "clsx";

export interface LoadingProps {
  size?: "button" | "normal";
  color?: "white" | "primary";
}

defineProps<LoadingProps>();

const sizeClass = {
  button: "border-[3px] w-[28px] h-[28px]",
  normal: "border-[5px] w-[48px] h-[48px]",
};

const colorClass = {
  white: "border-white",
  primary: "border-primary-500",
};

const baseClass =
  "relative animate-rotate-360 inline-block rounded-full line-normal flex border-b-transparent";
</script>

<template>
  <div
    data-cy="loading-indicator"
    :class="
      clsx(
        baseClass,
        size ? sizeClass[size] : sizeClass['normal'],
        color ? colorClass[color] : colorClass['primary'],
      )
    "
  />
</template>
