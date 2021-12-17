<template>
  <div class="pagination">
    <button
      :class="{
        'btn-page': currentPage !== 1,
        'btn-page-active': currentPage === 1,
      }"
      @click="setPage(1)"
    >
      1
    </button>
    <button v-if="currentPage >= 5 && totalPages > 7" class="btn-dots">
      ...
    </button>
    <button
      v-if="totalPages > 2 && totalPages < 8"
      :class="{
        'btn-page': currentPage !== 2,
        'btn-page-active': currentPage === 2,
      }"
      @click="setPage(2)"
    >
      2
    </button>
    <button
      v-if="totalPages > 3 && totalPages < 8"
      :class="{
        'btn-page': currentPage !== 3,
        'btn-page-active': currentPage === 3,
      }"
      @click="setPage(3)"
    >
      3
    </button>
    <button
      v-if="totalPages > 4 && totalPages < 8"
      :class="{
        'btn-page': currentPage !== 4,
        'btn-page-active': currentPage === 4,
      }"
      @click="setPage(4)"
    >
      4
    </button>
    <button
      v-if="totalPages > 5 && totalPages < 8"
      :class="{
        'btn-page': currentPage !== 5,
        'btn-page-active': currentPage === 5,
      }"
      @click="setPage(5)"
    >
      5
    </button>
    <button
      v-if="totalPages > 6 && totalPages < 8"
      :class="{
        'btn-page': currentPage !== 6,
        'btn-page-active': currentPage === 6,
      }"
      @click="setPage(6)"
    >
      6
    </button>
    <button
      v-if="totalPages > 7 && currentPage > 3"
      class="btn-page"
      @click="setPage(currentPage - 2)"
    >
      {{ currentPage - 2 }}
    </button>
    <button
      v-if="totalPages > 7 && currentPage > 2"
      class="btn-page"
      @click="setPage(currentPage - 1)"
    >
      {{ currentPage - 1 }}
    </button>
    <button
      v-if="totalPages > 7 && currentPage > 1 && currentPage < totalPages"
      class="btn-page-active"
    >
      {{ currentPage }}
    </button>
    <button
      v-if="totalPages > 7 && currentPage + 1 < totalPages"
      class="btn-page"
      @click="setPage(currentPage + 1)"
    >
      {{ currentPage + 1 }}
    </button>
    <button
      v-if="totalPages > 7 && currentPage + 2 < totalPages"
      class="btn-page"
      @click="setPage(currentPage + 2)"
    >
      {{ currentPage + 2 }}
    </button>

    <button
      v-if="currentPage < totalPages - 3 && totalPages > 7"
      class="btn-dots"
    >
      ...
    </button>
    <button
      :class="{
        'btn-page': currentPage !== totalPages,
        'btn-page-active': currentPage === totalPages,
      }"
      @click="setPage(totalPages)"
    >
      {{ totalPages }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    offset: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const hz = "lol";
    const currentPage = computed(() => {
      return (props.offset + props.limit) / props.limit;
    });
    const totalPages = computed(() => {
      return Math.ceil(props.count / props.limit);
    });
    const setPage = (newPage: number) => {
      context.emit("set-page", newPage);
    };
    return {
      hz,
      currentPage,
      totalPages,
      setPage,
    };
  },
});
</script>

<style scoped>
.pagination {
  margin: 1rem;
  display: flex;
  justify-content: center;
}
</style>
