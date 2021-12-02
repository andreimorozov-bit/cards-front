<template>
  <div class="card-list-filters">
    <form class="card-list-form">
      <div>
        <label for="series">Series</label>
        <input
          id="series"
          name="series"
          autocomplete="off"
          v-model="state.filterInput.series"
        />
      </div>
      <div>
        <label for="number">Number</label>
        <input
          id="number"
          name="number"
          autocomplete="off"
          v-model="state.filterInput.number"
        />
      </div>
      <div>
        <label for="min-credit">Min credit</label>
        <input
          id="min-credit"
          name="min-credit"
          autocomplete="off"
          v-model="state.filterInput.min_credit"
        />
      </div>
      <div>
        <label for="max-credit">Max credit</label>
        <input
          id="max-credit"
          name="max-credit"
          autocomplete="off"
          v-model="state.filterInput.max_credit"
        />
      </div>
      <div>
        <div class="filter-row">
          <input type="checkbox" id="active" v-model="state.status.active" />
          <label for="active">Active</label>
        </div>
        <div class="filter-row">
          <input
            type="checkbox"
            id="inactive"
            v-model="state.status.inactive"
          />
          <label for="inactive">Inactive</label>
        </div>
        <div class="filter-row">
          <input type="checkbox" id="expired" v-model="state.status.expired" />
          <label for="expired">Expired</label>
        </div>
      </div>
      <div class="buttons-row">
        <button class="btn-small" @click.prevent="searchHandler">Search</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup(_, context) {
    const state = reactive({
      filterInput: {
        series: "",
        number: "",
        min_credit: "",
        max_credit: "",
        status__in: "",
        ordering: "number",
      },
      status: {
        active: true,
        inactive: true,
        expired: true,
      },
    });
    const searchHandler = () => {
      // state.filterInput.status__in = state.filterInput.status.reduce(
      //   (prevValue: string, currValue: string) => {
      //     return prevValue + "," + currValue.toUpperCase();
      //   }
      // );

      state.filterInput.status__in = "";
      let key: keyof typeof state.status;
      for (key in state.status) {
        if (state.status[key]) {
          if (state.filterInput.status__in === "") {
            state.filterInput.status__in = key.toString().toUpperCase();
          } else {
            state.filterInput.status__in += "," + key.toString().toUpperCase();
          }
        }
      }

      context.emit("on-filter", state.filterInput);
    };
    return {
      state,
      searchHandler,
    };
  },
});
</script>

<style scoped>
.card-list-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
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
.filter-row {
  display: flex;
  flex-direction: row;
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
