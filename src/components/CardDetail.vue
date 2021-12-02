<template>
  <div class="card-detail">
    <div class="card-detail-info">
      <CardInfo :id="id" />
    </div>
    <div class="purchases">
      <PurchaseList
        @on-delete="handlePurchaseDelete"
        :purchaseList="state.purchaseList"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { CardInterface, PurchaseInterface } from "../types";
import { getPurchaseList, deletePurchase } from "../api/purchases";
import { formatDate } from "../common/formatDate";
import CardInfo from "./CardInfo.vue";
import PurchaseList from "./PurchaseList.vue";

export default defineComponent({
  components: {
    CardInfo,
    PurchaseList,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      cardItem: {} as CardInterface,
      purchaseList: [] as PurchaseInterface[],
    });
    const hz = "lol";
    console.log(`id from setup: ${props.id}`);
    onMounted(async () => {
      await getPurchases();
    });

    const getPurchases = async (): Promise<void> => {
      state.purchaseList = await getPurchaseList(props.id);
      console.log(state.purchaseList);
    };

    const handlePurchaseDelete = async (id: string): Promise<void> => {
      await deletePurchase(id);
      await getPurchases();
    };

    return {
      hz,
      state,
      formatDate,
      handlePurchaseDelete,
    };
  },
});
</script>

<style scoped>
.card-detail {
  font-family: "Roboto", sans-serif;
  margin: 1rem auto;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
}
.purchases {
  margin: 1rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
