import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import Maintenance from "../views/Maintenance.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Home,
    meta: {
      title: 'HomePage',
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: 'HomePage',
    },
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: {
      title: 'Articles',
    },
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance,
    meta: {
      title: 'Maintenance',
    },
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
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlogs`;
  next();
});

export default router;
