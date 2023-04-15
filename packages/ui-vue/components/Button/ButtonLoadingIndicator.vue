<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 22,
  },
  height: {
    type: Number,
    default: 22,
  },
  isIndeterminate: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Number,
    default: 0,
  },
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 100,
  },
});

const center = ref(16);
const strokeWidth = ref(4);
const r = ref(16 - strokeWidth.value);
const c = ref(2 * r.value * Math.PI);
const percentage = computed(() =>
  props.isIndeterminate
    ? 0.8
    : (props.value - props.minValue) / (props.maxValue - props.minValue),
);
const offset = computed(() => c.value - percentage.value * c.value);
</script>

<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 32 32"
      fill="none"
      :stroke-width="strokeWidth"
    >
      <circle role="presentation" :cx="center" :cy="center" :r="r" />
      <circle
        role="presentation"
        :cx="center"
        :cy="center"
        :r="r"
        stroke="currentColor"
        :stroke-dasharray="`${c} ${c}`"
        :stroke-dashoffset="offset"
        transform="rotate(-90 16 16)"
      >
        <template v-if="isIndeterminate">
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="0s"
            dur="1s"
            from="0 16 16"
            to="360 16 16"
            repeatCount="indefinite"
          />
        </template>
      </circle>
    </svg>
  </div>
</template>
