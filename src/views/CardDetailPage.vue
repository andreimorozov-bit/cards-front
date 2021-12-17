<template>
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
});
</script>
