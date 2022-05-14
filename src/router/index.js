import Vue from "vue";
import VueRouter from "vue-router";
import AddCategoryView from "../views/AddCategoryView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
  {
    path: "/add-category",
    name: "add-category",
    component: AddCategoryView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
