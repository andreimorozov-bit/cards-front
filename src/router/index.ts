import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CardListPage from "../views/CardListPage.vue";
import CardDetailPage from "../views/CardDetailPage.vue";
import CardCreatePage from "../views/CardCreatePage.vue";
import ProductListPage from "../views/ProductListPage.vue";
import ProductCreatePage from "../views/ProductCreatePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cards",
    name: "CardList",
    component: CardListPage,
  },
  {
    path: "/cards/create",
    name: "CardCreate",
    component: CardCreatePage,
  },
  {
    path: "/cards/:id",
    name: "CardDetail",
    component: CardDetailPage,
    props: true,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductListPage,
  },
  {
    path: "/products/create",
    name: "ProductCreate",
    component: ProductCreatePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
