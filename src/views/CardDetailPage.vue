<template>
  <div>Card Detail Page {{ id }}</div>
  <CardDetail :id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardDetail from "../components/CardDetail.vue";

export default defineComponent({
  components: {
    CardDetail,
  },
  props: {
    id: String,
  },
  setup(props) {
    const hz = "lol";
    console.log(props);
    return {
      hz,
    };
  },
});
</script>
