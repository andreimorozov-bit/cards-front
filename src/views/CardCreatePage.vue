<template>
  <div>Create Card Page</div>
  <CardCreate />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardCreate from "../components/CardCreate.vue";

export default defineComponent({
  components: {
    CardCreate,
  },
});
</script>
