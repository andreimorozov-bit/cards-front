<template>
  <div>Card List Page</div>
  <CardList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "@/components/CardList.vue";

export default defineComponent({
  name: "CardListPage",
  components: {
    CardList,
  },
});
</script>
