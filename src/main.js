// import Vue from "vue";
// import App from "./App.vue";
// import routers from "./router";
// import store from "./store";
// import Vue2Editor from "vue2-editor";

// Vue.use(Vue2Editor);
// Vue.config.productionTip = false;

// const app = new Vue({
//   // routers,
//   data: {
//     currentRoute: window.location.pathname,
//   },
//   ViewComponent () {
//     const matchingView = routers[this.currentRoute];
//     return matchingView ? matchingView : require('./views/404.vue');
//   },
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";

/** Firebase connection */
import firebase from "firebase/app";
import "firebase/auth";
// import db from "../firebase/firebaseInit";
/** Firebase connection */

Vue.use(Vue2Editor);
Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})


