<template>
  <svg class="triangle-up-small" height="16px" width="16px" viewBox="0 0 16 16">
    <rect width="16" height="16" id="icon-bound" fill="none" />
    <polygon :fill="color" points="8,5 13,10 3,10" />
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
.triangle-up-small {
  display: inline-block;
  vertical-align: middle;
}
</style>
