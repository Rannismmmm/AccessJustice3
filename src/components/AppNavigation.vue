<template>
  <span>
    <!--<v-navigation-drawer width="200px" app v-model="drawer"-->
                         <!--class="blue-grey darken-3 hidden-md-and-up"-->
                         <!--disable-resize-watcher dark>-->
    <!--<v-list>-->
    <!--<template>-->
      <!--<v-list-item-group>-->
        <!--<v-list-item-->
              <!--v-for="(item, i) in items"-->
              <!--:key="i"-->
            <!--&gt;-->
              <!--<v-list-item-content>-->
                <!--<v-list-item-title @click="redirct(item.path)" v-text="item.title"></v-list-item-title>-->
              <!--</v-list-item-content>-->
            <!--</v-list-item>-->
      <!--<v-divider :key="`divider-${index}`"></v-divider>-->
        <!--</v-list-item-group>-->
    <!--</template>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-toolbar app color="blue-grey darken-3"-->
    <!--class="hidden-sm-and-down gradient"-->
    <!--height="90" dark>-->
    <!--<v-btn class="ma-2" icon to="/">-->
    <!--<v-icon x-large light>home</v-icon>-->
    <!--</v-btn>-->
    <!--<v-spacer class="hidden-sm-and-down"></v-spacer>-->
    <!--<v-img :src="require('../assets/logo.jpeg')" max-height="90"-->
    <!--max-width="70"></v-img>-->
    <!--<v-spacer class="hidden-sm-and-down"></v-spacer>-->
    <!--<v-btn flat class="hidden-sm-and-down">HELP</v-btn>-->
    <!--&lt;!&ndash;<dropdown-menu></dropdown-menu>&ndash;&gt;-->
    <!--</v-toolbar>-->
    <v-card>
    <v-app-bar
      flat
      absolute
      color="#37474F"
      dark
      fixed
      scroll-target="#scrolling-techniques-8"
    >
      <v-btn icon @click="redirct('/')" class="hidden-sm-and-down">
        <v-icon large >home</v-icon>
      </v-btn>
      <v-btn icon @click="redirct('/')" class="hidden-md-and-up">
        <v-icon >home</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-img :src="require('../assets/logo.png')"  class="hidden-sm-and-down" max-height="90"
             max-width="300"></v-img>
      <v-img :src="require('../assets/logo.png')"  class="hidden-md-and-up" max-height="90"
             max-width="200"></v-img>
      <v-spacer></v-spacer>

      <v-btn icon class="hidden-sm-and-down" @click="redirct('/help')">
        <v-icon large >help</v-icon>
      </v-btn>
      <v-btn icon class="hidden-md-and-up" @click="redirct('/help')">
        <v-icon >help</v-icon>
      </v-btn>


      <template v-slot:extension>
        <v-tabs
          fixed-tabs
          dark
          v-model="location"
        >
          <v-tab v-for="(item,index) in items"
                 :key="index"
                 @click="redirct(item.path)">
            {{item.title}}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="auto"
        color="#424242"
      >
      <v-container style="height: auto;" fluid><v-content transitio="slide-y-transition">
      <router-view></router-view>
        </v-content></v-container>
    </v-sheet>
  </v-card>
    <!--below is for mobile-->
    <!--<v-toolbar app color="blue-grey darken-3"-->
               <!--class="hidden-md-and-up"-->
               <!--dark>-->
      <!--<v-toolbar-side-icon-->
        <!--@click="reverseMenu"></v-toolbar-side-icon>-->
      <!--<v-btn flat-->
             <!--@click="reverseMenu">Menu</v-btn>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-toolbar-title>{{appTitle}}</v-toolbar-title>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn class="ma-2" icon to="/">-->
        <!--<v-icon light>home</v-icon>-->
      <!--</v-btn>-->
    <!--</v-toolbar>-->
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
        location: 'home',
        items: [
          // {
          //   title: 'ChartKick',
          //   path: '/management'
          // },
          {
            title: 'Home',
            path: '/'
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
            title: 'Quizs',
            path: '/assessments'
          },
          {
            title: 'Statics',
            path: '/statics'
          },
          {
            title: 'About us',
            path: '/About'
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
