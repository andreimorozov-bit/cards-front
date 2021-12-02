<template>
  <div>
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "../components/ProductList.vue";

export default defineComponent({
  components: {
    ProductList,
  },
});
</script>
