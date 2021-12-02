<template>
  <div class="purchase-item"></div>
</template>

<script lang="ts">
import { PurchaseInterface } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    purchaseItem: {
      type: Object as PropType<PurchaseInterface>,
      required: false,
    },
  },
});
</script>

<style scoped></style>
