<template>
  <div class="create-product">
    <form class="create-product-form" autocomplete="off">
      <div>
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          autocomplete="off"
          v-model="state.productInput.title"
        />
      </div>
      <div>
        <label for="price">Price</label>
        <input
          id="price"
          name="price"
          autocomplete="off"
          v-model="state.productInput.price"
        />
      </div>
      <div>
        <label for="inventory">Inventory</label>
        <input
          id="inventory"
          name="inventory"
          autocomplete="off"
          v-model="state.productInput.inventory"
        />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="10"
          autocomplete="off"
          v-model="state.productInput.description"
        />
      </div>
      <div class="buttons-row">
        <button @click.prevent="createHandler" class="btn-small">
          Create Product
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { createProduct } from "@/api/products";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      productInput: {
        title: "",
        description: "",
        price: null,
        inventory: null,
      },
    });

    const createHandler = async () => {
      console.log(state.productInput);
      await createProduct(state.productInput);
      router.replace("/products");
    };

    return {
      state,
      createHandler,
    };
  },
});
</script>

<style scoped>
.create-product {
  margin: 1rem auto;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.create-product-form {
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
  width: 30rem;
  font-family: "Roboto";
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  border: 1px solid #999;
  outline: none;
}
textarea {
  width: 30rem;
  font-family: "Roboto";
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
  border: 1px solid #999;
  outline: none;
  resize: none;
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
