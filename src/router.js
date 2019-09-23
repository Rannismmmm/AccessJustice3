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
      path: "/assessments",
      name: "assessments",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Assessments.vue")
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
    },
    {
      path: "/maps",
      name: "maps",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/MapBox.vue")
    },
    {
      path: "/statics",
      name: "statics",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Statics.vue")
    },
    {
      path: "/help",
      name: "help",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Help.vue")
    },
    {
      path: "/amcharts",
      name: "amcharts",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AmCharts.vue")
    },
    {
      path: "/mainslides",
      name: "mainslides",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/MainSlides.vue")
    },
    {
      path: "/slide",
      name: "slide",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Slide.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/hh",
      name: "hh",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/HomeHero.vue")
    },
    {
      path: "/googlemap",
      name: "googlemap",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/GoogleMap.vue")
    }
  ]
});
