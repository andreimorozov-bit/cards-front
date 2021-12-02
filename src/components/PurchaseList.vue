<template>
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th class="table__product">Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total Price</th>
        <th></th>
      </tr>
      <tr class="purchase-list-row" v-for="item in purchaseList" :key="item.id">
        <td>{{ formatDate(item.created) }}</td>
        <td v-if="item.product">{{ item.product?.title || "hz" }}</td>
        <td v-if="!item.product">hz</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price * item.quantity }}</td>
        <td>
          <button
            @click="deletePurchaseHandler(item.id)"
            class="btn-small btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { PurchaseInterface } from "@/types";
import { defineComponent, PropType } from "vue";
import { formatDate } from "../common/formatDate";

export default defineComponent({
  props: {
    purchaseList: {
      type: Object as PropType<PurchaseInterface[]>,
      required: false,
    },
  },
  setup(_, context) {
    const deletePurchaseHandler = (id: string): void => {
      context.emit("on-delete", id);
    };
    return {
      deletePurchaseHandler,
      formatDate,
    };
  },
});
</script>

<style scoped>
table {
  text-align: left;
  width: 100%;
}
th {
  padding: 0.5rem 0.5rem;
}
.table__product {
  width: 20rem;
  max-width: 20rem;
}
.purchase-list-row:hover {
  background-color: #afa;
}
</style>
