import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/quizs",
      name: "quizs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Quizs.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signin.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    },
    {
      path: "/driving",
      name: "Driving",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Driving.vue")
    },
    {
      path: "/management",
      name: "management",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/management.vue")
    }
  ]
});
