<template>
  <div class="cardlist">
    <div class="filters">
      <CardListFilter @update-card-list="updateCards" />
    </div>
    <div class="content">
      <CardListTable
        @card-show-detail="detailHandler"
        @set-ordering="setCardOrdering"
        :cardList="cardList"
        :orderedBy="ordering"
      />
      <Pagination
        v-if="count > limit"
        :count="count"
        :offset="offset"
        :limit="limit"
        @set-page="setCardsOffset"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardListFilter from "@/components/CardListFilter.vue";
import CardListTable from "./CardListTable.vue";
import Pagination from "@/components/Pagination.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CardList",
  components: {
    CardListFilter,
    CardListTable,
    Pagination,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const cardList = computed(() => store.getters["cards/getCards"]);
    const ordering = computed(
      () => store.getters["cardFilter/getCardFilterOrdering"]
    );
    const count = computed(() => store.getters["cards/getCount"]);
    const limit = computed(
      () => store.getters["cardFilter/getCardFilterLimit"]
    );
    const offset = computed(
      () => store.getters["cardFilter/getCardFilterOffset"]
    );

    onMounted(async () => {
      await getCards();
    });

    const getCards = async (): Promise<void> => {
      store.dispatch("cards/setCards");
    };

    const updateCards = async () => {
      store.dispatch("cardFilter/setCardFilterOffset", 0);
      await getCards();
    };

    const setCardOrdering = async (orderBy: string) => {
      store.dispatch("cardFilter/setCardFilterOrdering", orderBy);
      await getCards();
    };

    const setCardsOffset = async (newPage: number) => {
      const newOffset = newPage * Number(limit.value) - Number(limit.value);
      store.dispatch("cardFilter/setCardFilterOffset", newOffset);
      await getCards();
    };

    const detailHandler = (id: string): void => {
      router.push(`/cards/${id}/`);
    };

    return {
      cardList,
      ordering,
      count,
      limit,
      offset,
      detailHandler,
      updateCards,
      setCardOrdering,
      setCardsOffset,
    };
  },
});
</script>

<style scoped>
.cardlist {
  margin: 1rem auto;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.filters {
  display: flex;
  width: 30%;
  background-color: #cde;
  border: 1px solid #777;
  margin-right: 1rem;
}
.content {
  display: flex;
  width: 70%;
  flex-direction: column;
}
</style>
