<template>
  <div class="cardlist">
    <div class="filters">
      <CardListFilter @on-filter="setCardFilter" />
    </div>
    <div class="content">
      <CardListTable
        @card-show-detail="detailHandler"
        @set-ordering="setOrdering"
        :cardList="state.cardList"
        :orderedBy="state.cardFilter.ordering"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { getCardList } from "../api/cards";
import { CardInterface, CardFilterInterface } from "../types";
import { formatDate } from "../common/formatDate";
import { useRouter } from "vue-router";
import CardListFilter from "@/components/CardListFilter.vue";
import CardListTable from "./CardListTable.vue";

export default defineComponent({
  name: "CardList",
  components: {
    CardListFilter,
    CardListTable,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      cardList: [] as CardInterface[],
      cardFilter: {
        series: "",
        number: "",
        min_credit: "",
        max_credit: "",
        ordering: "number",
        status__in: "ACTIVE,INACTIVE,EXPIRED",
      },
    });

    onMounted(async () => {
      await getCards();
    });
    const getCards = async (): Promise<void> => {
      const data = await getCardList(state.cardFilter);
      const formattedData = data.map((item) => {
        return {
          ...item,
          created: formatDate(item.created),
          expiration_date: formatDate(item.expiration_date),
        };
      });
      state.cardList = formattedData;
    };
    const setCardFilter = (cardFilter: CardFilterInterface): void => {
      (state.cardFilter = cardFilter), getCards();
    };
    const setOrdering = (orderBy: string) => {
      if (state.cardFilter.ordering === orderBy) {
        state.cardFilter.ordering = "-" + orderBy;
        getCards();
        return;
      }
      state.cardFilter.ordering = orderBy;
      getCards();
    };
    const detailHandler = (id: string): void => {
      router.push(`/cards/${id}/`);
    };
    return {
      state,
      detailHandler,
      setCardFilter,
      setOrdering,
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
