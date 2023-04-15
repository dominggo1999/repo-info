<script setup lang="ts">
import TextField from "./TextField.vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <Story>
    <Variant title="Variants">
      <div class="flex flex-col">
        <TextField v-model="value" label="Name" />
      </div>
    </Variant>
  </Story>
</template>
