<template>
  <div class="product-list">
    <ProductListTable :productList="state.productList" />
  </div>
</template>

<script lang="ts">
import { ProductInterface } from "@/types";
import { defineComponent, onMounted, reactive } from "vue";
import ProductListTable from "../components/ProductListTable.vue";
import { getProducts } from "@/api/products";

export default defineComponent({
  components: {
    ProductListTable,
  },
  setup() {
    const state = reactive({
      productList: [] as ProductInterface[],
    });

    onMounted(async () => {
      await getProductList();
    });

    const getProductList = async () => {
      state.productList = await getProducts();
    };

    return {
      state,
    };
  },
});
</script>

<style scoped>
.product-list {
  margin: 1rem auto;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
}
</style>
