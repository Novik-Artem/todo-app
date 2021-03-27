import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "@/components/Todos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Todos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
