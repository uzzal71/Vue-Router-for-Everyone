import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrazilView from "../views/BrazilView.vue";
import HawaiiView from "../views/HawaiiView.vue";

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
    component: BrazilView,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: HawaiiView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
