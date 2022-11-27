import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import("../views/BrazilView"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import("../views/PanamaView"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import("../views/HawaiiView"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("../views/JamaicaView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
