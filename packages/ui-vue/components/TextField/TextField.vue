<script setup lang="ts">
import { InputHTMLAttributes } from "vue";

interface TextFieldProps extends InputHTMLAttributes {
  label?: string;
}

defineProps<TextFieldProps>();
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="mb-2 font-medium text-primary-500">
      {{ label }}
    </label>
    <input
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :id="id"
      :type="type"
      class="dark:primary-400/20 rounded-md border border-slate-500 bg-transparent px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
    />
  </div>
</template>
