<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <Story>
    <Variant title="Default">
      <Button />
    </Variant>

    <Variant title="Disabled">
      <Button :disabled="true" />
    </Variant>
  </Story>
</template>
