import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/assessments/:questionVisible',
      name: 'assessments',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Assessments.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Signin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/management',
      name: 'management',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/management.vue')
    },
    {
      path: '/maps',
      name: 'maps',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/MapBox.vue')
    },
    {
      path: '/statics',
      name: 'statics',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Statics.vue')
    },
    {
      path: '/amcharts',
      name: 'amcharts',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AmCharts.vue')
    },
    {
      path: '/mainslides',
      name: 'mainslides',
      component: () =>
        import(/* webpackChunkName: "about" */ './components/MainSlides.vue')
    },
    {
      path: '/slide',
      name: 'slide',
      component: () =>
        import(/* webpackChunkName: "about" */ './components/Slide.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/abuse',
      name: 'abuse',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Abuse.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Support.vue')
    },
    {
      path: '/legalsupport',
      name: 'legalsupport',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/LegalSupport.vue')
    },
    {
      path: '/sheltermap',
      name: 'sheltermap',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/ShelterMap.vue')
    },
    {
      path: '/supportcounseling',
      name: 'supportcounseling',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/SupportCounseling.vue')
    },
    {
      path: '/selfcare',
      name: 'selfcare',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/SelfCare.vue')
    },
    {
      path: '/asresults',
      name: 'asresults',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AsResults.vue')
    }
  ]
})
