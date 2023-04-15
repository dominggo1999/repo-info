<script setup lang="ts">
import Button from "./Button.vue";

const handleClick = () => {
  console.log("Test");
};
</script>

<template>
  <Story>
    <Variant title="Variants">
      <div class="flex flex-col">
        <Button>Test</Button>
        <Button full-width>Test</Button>
        <Button @click="handleClick">Click</Button>
      </div>
    </Variant>
  </Story>
</template>
