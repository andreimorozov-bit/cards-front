<template>
  <div>
    <table>
      <tr>
        <th class="header-series">
          <span class="table-header" @click="setOrderingHandler('series')"
            >Series
            <TriangleUpSmall v-if="orderedBy == 'series'" /><TriangleDownSmall
              v-if="orderedBy == '-series'"
          /></span>
        </th>
        <th class="header-number">
          <span class="table-header" @click="setOrderingHandler('number')"
            >Number
            <TriangleUpSmall v-if="orderedBy == 'number'" /><TriangleDownSmall
              v-if="orderedBy == '-number'"
          /></span>
        </th>
        <th class="header-credit">
          <span class="table-header" @click="setOrderingHandler('credit')"
            >Credit
            <TriangleUpSmall v-if="orderedBy == 'credit'" /><TriangleDownSmall
              v-if="orderedBy == '-credit'"
          /></span>
        </th>
        <th class="header-created">
          <span class="table-header" @click="setOrderingHandler('created')"
            >Created
            <TriangleUpSmall v-if="orderedBy == 'created'" /><TriangleDownSmall
              v-if="orderedBy == '-created'"
          /></span>
        </th>
        <th class="header-expires">
          <span
            class="table-header"
            @click="setOrderingHandler('expiration_date')"
            >Expires
            <TriangleUpSmall
              v-if="orderedBy == 'expiration_date'" /><TriangleDownSmall
              v-if="orderedBy == '-expiration_date'"
          /></span>
        </th>
        <th class="header-status">
          <span class="table-header" @click="setOrderingHandler('status')"
            >Status
            <TriangleUpSmall v-if="orderedBy == 'status'" /><TriangleDownSmall
              v-if="orderedBy == '-status'"
          /></span>
        </th>
        <th></th>
      </tr>
      <tr class="card-item" v-for="item in cardList" :key="item.id">
        <td>{{ item.series }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.credit }}</td>
        <td>{{ formatDate(item.created) }}</td>
        <td>{{ formatDate(item.expiration_date) }}</td>
        <td>{{ item.status }}</td>
        <td>
          <button class="btn-small" @click="cardDetailHandler(item.id)">
            Detail
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardInterface } from "../types";
import { formatDate } from "@/common/formatDate";
import TriangleUpSmall from "@/components/svg/TriangleUpSmall.vue";
import TriangleDownSmall from "@/components/svg/TriangleDownSmall.vue";

export default defineComponent({
  components: {
    TriangleUpSmall,
    TriangleDownSmall,
  },
  props: {
    cardList: {
      type: Object as PropType<CardInterface[]>,
    },
    orderedBy: {
      type: String,
    },
  },
  setup(props, context) {
    const hz = 2;
    const cardDetailHandler = (id: string): void => {
      context.emit("card-show-detail", id);
    };
    const setOrderingHandler = (orderBy: string) => {
      context.emit("set-ordering", orderBy);
    };
    return {
      hz,
      cardDetailHandler,
      setOrderingHandler,
      formatDate,
    };
  },
});
</script>

<style scoped>
.card-item:hover {
  background-color: #afa;
}
.table-header {
  cursor: pointer;
}
.header-series {
  min-width: 5rem;
}
.header-number {
  min-width: 5rem;
}
.header-credit {
  min-width: 5rem;
}
.header-created {
  min-width: 5rem;
}
.header-expires {
  min-width: 5rem;
}
.header-status {
  min-width: 5rem;
}
</style>
