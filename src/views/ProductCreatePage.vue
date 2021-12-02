<template>
  <div>
    <ProductCreate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCreate from "@/components/ProductCreate.vue";

export default defineComponent({
  components: {
    ProductCreate,
  },
});
</script>
