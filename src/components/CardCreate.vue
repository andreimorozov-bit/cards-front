<template>
  <div class="card-create-wrapper">
    <form class="card-create-form">
      <div>
        <label for="series">Series</label>
        <input
          type="text"
          name="series"
          id="series"
          autocomplete="off"
          v-model="state.cardInput.series"
        />
      </div>
      <div>
        <label for="credit">Credit</label>
        <input
          type="text"
          name="credit"
          id="credit"
          autocomplete="off"
          v-model="state.cardInput.credit"
        />
      </div>
      <div>
        <label for="expiration_months">Expiration</label>
        <select
          name="expiration_months"
          id="expiration_months"
          v-model="state.cardInput.expiration_months"
        >
          <option value="1">1 month</option>
          <option value="6">6 months</option>
          <option value="12">12 months</option>
        </select>
      </div>
      <div>
        <label for="quantity">Quantity</label>
        <input
          name="quantity"
          id="quantity"
          autocomplete="off"
          v-model="value"
        />
      </div>
      <span>{{ errorMessage }}</span>
      <div class="buttons-row">
        <button @click.prevent="createCardsHandler" class="btn-small">
          Create Cards
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { createCards } from "../api/cards";
import { useRouter } from "vue-router";
import { useField } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      cardInput: {
        series: 1,
        credit: 10000,
        expiration_months: 6,
        quantity: 1,
      },
    });

    const { value, errorMessage } = useField(
      "cardQuantity",
      yup.string().required().max(3)
    );

    const createCardsHandler = async () => {
      await createCards(state.cardInput);
      router.replace("/cards");
    };
    return {
      state,
      value,
      errorMessage,
      createCardsHandler,
    };
  },
});
</script>

<style scoped>
.card-create-wrapper {
  margin: 1rem auto;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-create-form {
  padding: 1rem;
  background-color: #cde;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #777;
}
label {
  font-family: "Roboto";
  display: block;
  text-align: left;
  margin: 0 0.5rem;
}
input {
  font-family: "Roboto";
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  border: 1px solid #999;
  outline: none;
}
input:focus {
  border: 1px solid #77f;
}
select {
  font-family: "Roboto";
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  border: 1px solid #999;
  outline: none;
}
select:focus {
  border: 1px solid #77f;
}
.buttons-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
