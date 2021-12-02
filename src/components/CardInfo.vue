<template>
  <div class="card-info">
    <div class="card-description">
      <div>
        <span class="card-info-key">Series:</span> {{ state.cardItem.series }}
      </div>
      <div>
        <span class="card-info-key">Number:</span> {{ state.cardItem.number }}
      </div>
      <div>
        <span class="card-info-key">Credit:</span> {{ state.cardItem.credit }}
      </div>
      <div>
        <span class="card-info-key">Created:</span>
        {{ formatDate(state.cardItem.created) }}
      </div>
      <div>
        <span class="card-info-key">Expires:</span>
        {{ formatDate(state.cardItem.expiration_date) }}
      </div>
      <div>
        <span class="card-info-key">Status:</span> {{ state.cardItem.status }}
      </div>
    </div>

    <div class="card-actions">
      <button
        @click="setStatusHandler(state.cardItem.id, 'ACTIVE')"
        v-if="state.cardItem.status === 'INACTIVE'"
        class="btn-small"
      >
        Activate
      </button>
      <button
        @click="setStatusHandler(state.cardItem.id, 'INACTIVE')"
        v-if="state.cardItem.status === 'ACTIVE'"
        class="btn-small"
      >
        Deactivate
      </button>
      <button
        @click="deleteCardHandler(state.cardItem.id)"
        class="btn-small btn-danger"
      >
        Delete Card
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { CardInterface } from "../types";
import { formatDate } from "../common/formatDate";
import { getCard, deleteCard, setCardStatus } from "../api/cards";
import { useRouter } from "vue-router";

export default defineComponent({
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
    });

    onMounted(async () => {
      await getCardItem();
    });

    const getCardItem = async (): Promise<void> => {
      state.cardItem = await getCard(props.id);
      return;
    };
    const deleteCardHandler = async (id: string): Promise<void> => {
      await deleteCard(id);
      router.replace("/cards");
      return;
    };
    const setStatusHandler = async (
      id: string,
      status: string
    ): Promise<void> => {
      state.cardItem = await setCardStatus(id, status);
      return;
    };
    return {
      state,
      formatDate,
      deleteCardHandler,
      setStatusHandler,
    };
  },
});
</script>

<style scoped>
.card-info {
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #777;
  background-color: #cff;
}
.card-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.card-actions button {
  margin-bottom: 0.5rem;
}
.card-info-key {
  font-weight: 500;
}
</style>
