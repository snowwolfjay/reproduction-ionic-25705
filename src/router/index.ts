import { createRouter, createWebHistory } from "@ionic/vue-router";
import { createMemoryHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/sub",
    component: () => import("../views/Sub1Page.vue"),
  },
  {
    path: "/sub/sub",
    component: () => import("../views/Sub2Page.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;
