import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return {
        selector: savedPosition,
        behavior: 'smooth',
      }
    } else {
      return { 
        x: 0, 
        y: 0,
        behavior: 'smooth',
      };
    }
  }
});

export default router;
