<template>
  <div class="card-detail">
    <div class="page-controls">
      <button @click.prevent="handleBack" class="btn-small">Back</button>
    </div>
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
import { useRouter } from "vue-router";
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
    const router = useRouter();
    const state = reactive({
      cardItem: {} as CardInterface,
      purchaseList: [] as PurchaseInterface[],
    });
    const hz = "lol";
    onMounted(async () => {
      await getPurchases();
    });

    const getPurchases = async (): Promise<void> => {
      state.purchaseList = await getPurchaseList(props.id);
    };

    const handleBack = () => {
      router.back();
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
      handleBack,
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
.page-controls {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}
.purchases {
  margin: 1rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
