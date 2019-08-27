<template>
  <span>
    <v-navigation-drawer width="200px" app v-model="drawer"
                         class="blue-grey darken-3" dark
                         disable-resize-watcher>
    <v-list>
    <template v-for="(item, index) in items">
    <v-list-tile :key="index" @click="redirct(item.path)">
    <v-list-tile-content>
    {{item.title}}
    </v-list-tile-content>
    </v-list-tile>
    <v-divider :key="`divider-${index}`"></v-divider>
    </template>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue-grey darken-3"
               class="hidden-sm-and-down gradient"
               dark height="90">
      <v-btn class="ma-2" icon to="/">
        <v-icon x-large light>home</v-icon>
      </v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-img :src="require('../assets/logo.jpg')" max-height="70"
             max-width="70"></v-img>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down">HELP</v-btn>
      <dropdown-menu></dropdown-menu>
    </v-toolbar>

    <!--below is for mobile-->
    <v-toolbar app color="blue-grey darken-3"
               class="hidden-md-and-up gradient"
               dark>
      <v-toolbar-side-icon class="hidden-md-and-up"
                           @click="reverseMenu"></v-toolbar-side-icon>
      <v-btn flat class="hidden-sm-and-down"
             @click="reverseMenu">Menu</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" icon to="/">
        <v-icon light>home</v-icon>
      </v-btn>
    </v-toolbar>
  </span>
</template>

<script>
  import DropdownMenu from './DropdownMenu'

  export default {
    name: 'AppNavigation',
    components: {DropdownMenu},
    data () {
      return {
        appTitle: 'Justice League',
        drawer: false,
        items: [
          // {
          //   title: 'ChartKick',
          //   path: '/management'
          // },
          {
            title: 'Quizs',
            path: '/quizs'
          },
          // {
          //   title: 'MapBox',
          //   path: '/maps'
          // }
          // ,
          // {
          //   title: 'Main',
          //   path: '/maintemp'
          // },
          {
            title: 'amCharts',
            path: '/amcharts'
          },
          {
            title: 'MainSlides',
            path: '/mainslides'
          },
          {
            title: 'Slide',
            path: '/slide'
          }
        ]
      }
    },
    methods: {
      reverseMenu () {
        this.drawer = !this.drawer
      },

      redirct (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>

</style>
