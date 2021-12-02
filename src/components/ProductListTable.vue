<template>
  <div class="product-list-table">
    <table>
      <tr>
        <th class="title">Title</th>
        <th class="description">Description</th>
        <th>Price</th>
        <th>Inventory</th>
      </tr>
      <tr v-for="item in productList" :key="item.id">
        <td>{{ cropString(item.title, 30) }}</td>
        <td>{{ cropString(item.description, 30) }}</td>
        <td class="price">{{ item.price }}</td>
        <td class="inventory">{{ item.inventory }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { ProductInterface } from "@/types";
import { defineComponent, PropType } from "vue";
import { cropString } from "@/common/cropString";

export default defineComponent({
  props: {
    productList: {
      type: Object as PropType<ProductInterface[]>,
      required: true,
    },
  },
  setup() {
    return {
      cropString,
    };
  },
});
</script>

<style scoped>
.title {
  width: 15rem;
}
.description {
  width: 25rem;
}

th,
td {
  text-align: left;
}
.inventory,
.price {
  text-align: right;
}
</style>
