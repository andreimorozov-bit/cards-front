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
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardListFilter from "@/components/CardListFilter.vue";
import CardListTable from "./CardListTable.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CardList",
  components: {
    CardListFilter,
    CardListTable,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const cardList = computed(() => store.getters["cards/getCards"]);
    const ordering = computed(
      () => store.getters["cardFilter/getCardFilterOrdering"]
    );

    onMounted(async () => {
      await getCards();
    });

    const getCards = async (): Promise<void> => {
      store.dispatch("cards/setCards");
    };

    const updateCards = async () => {
      await getCards();
    };

    const setCardOrdering = async (orderBy: string) => {
      store.dispatch("cardFilter/setCardFilterOrdering", orderBy);
      await getCards();
    };

    const detailHandler = (id: string): void => {
      router.push(`/cards/${id}/`);
    };

    return {
      detailHandler,
      cardList,
      ordering,
      updateCards,
      setCardOrdering,
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
}
</style>
