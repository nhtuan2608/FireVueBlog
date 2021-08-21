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
    meta: {
      title: 'Home',
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return {
  //       selector: savedPosition,
  //       behavior: 'smooth',
  //     }
  //   } else {
  //     return { 
  //       x: 0, 
  //       y: 0,
  //       behavior: 'smooth',
  //     };
  //   }
  // }
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlogs`;
  window.screenX = 0;
  window.screenY = 0;
  next();
});

export default router;
