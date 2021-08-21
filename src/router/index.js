import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import Maintenance from "../views/Maintenance.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ErrorPage from "../views/ErrorPage.vue";
import $Store from "../store";
// import $Route from "../router";

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
    path: "/error",
    name: "Error",
    component: ErrorPage,
    meta: {
      title: 'ErrorPage',
    },
    // beforeEnter: (to, from, next) => {
    //   if (window.location.pathname == '/Error') {
    //     if (to.path == '/Error') {
    //       next(false);
    //       return;
    //     }
    //   }
    //   next();
    // },
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
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register',
    },
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password',
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
  console.log(to.name);
  var isMaintenance = $Store.state.isMaintenance;

  if (to.name != 'Error') {
    if (!isMaintenance) {      
      if (to.name == 'Maintenance' || to.name == 'Error') {
        $Store.commit("setDisabledNavigation", true);
        return next({ name: "Error" });
      } else if (to.name != 'Maintenance') {
        if (to.name == 'Login' || to.name == 'Register' || to.name == 'ForgotPassword') {
          $Store.commit("setDisabledNavigation", true);
        } else if (to.name != 'Login' && to.name != 'Register' && to.name != 'ForgotPassword') {
          $Store.commit("setDisabledNavigation", false);
        }
      }
    }
    return next();
  } else {
    console.log();
    return next();
  }
});
export default router;
