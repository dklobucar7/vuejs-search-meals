import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home, //We need to create this component
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
