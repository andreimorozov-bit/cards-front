<template>
  <svg
    class="triangle-down-small"
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
  >
    <rect width="16" height="16" id="icon-bound" fill="none" />
    <polygon :fill="color" points="8,11 3,6 13,6" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "#000000",
    },
  },
});
</script>

<style scoped>
.triangle-down-small {
  display: inline-block;
  vertical-align: middle;
}
</style>
