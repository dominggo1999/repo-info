<script setup lang="ts">
import Loading from "./Loading.vue";
import LoadingWithMessage from "./LoadingWithMessage.vue";
</script>

<template>
  <Story>
    <Variant title="Variants">
      <div className="flex flex-wrap gap-3">
        <Loading />
        <Loading size="button" />
      </div>
      <div className="flex flex-wrap gap-3 bg-black">
        <Loading color="white" />
        <Loading color="white" size="button" />
      </div>
      <div className="flex flex-wrap gap-3">
        <LoadingWithMessage />
      </div>
      <div className="flex flex-wrap gap-3">
        <LoadingWithMessage
          message="This will continue loading indefinitely, please refrain from waiting."
        />
      </div>
    </Variant>
  </Story>
</template>
