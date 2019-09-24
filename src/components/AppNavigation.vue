<template>
  <v-card class="overflow-hidden pa-ma-0" style="height: 100vh; width: 100vw">
    <v-app-bar
      absolute="false"
      prominent
      color="#FFFFFF"
      light
      dense
      class="hidden-sm-and-down"
      hide-on-scroll
      scroll-threshold="50"
      scroll-target="#scrolling-techniques-3"
    >
      <v-container fluid fill-height align-end style="padding: 0">
        <v-col cols="12" sm="8" md="6" justify-start>
          <v-row justify="start">
            <v-card flat style="width: 215px" to="/">
              <v-img max-height="60" contain
                     :src="require('../assets/Logo.jpeg')"></v-img>
            </v-card>
          </v-row>
          <v-divider></v-divider>
        </v-col>
      </v-container>
      <template v-slot:extension>
        <v-container fluid fill-height>
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="6"
            >
              <v-breadcrumbs :items="breads" large>
                <template v-slot:item="props">
                  <v-breadcrumbs-item
                    :disabled="props.item.disabled"
                    :to="props.item.to"
                    @click="backDirect(props.item)"
                  >
                    {{ props.item.text }}
                  </v-breadcrumbs-item>
                </template>
              </v-breadcrumbs>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-tabs
                background-color="transparent"
                right
                optional
                grow
                mobile-break-point
              >
                <v-tab v-for="(item,index) in items"
                       :key="index"
                       @click="redirct(item)">
                  {{item.title}}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
    <v-app-bar
      absolute="false"
      prominent
      color="#FFFFFF"
      light
      class="hidden-md-and-up"
      dense
      hide-on-scroll
      scroll-threshold="50"
      scroll-target="#scrolling-techniques-3"
    >
      <v-container fluid fill-height align-end style="padding: 0">
        <v-col cols="12" sm="8" md="6" justify-center>
          <v-row justify="center">
            <v-card flat style="width: 215px" to="/">
              <v-img max-height="60" contain
                     :src="require('../assets/Logo.jpeg')"></v-img>
            </v-card>
          </v-row>
          <v-divider></v-divider>
        </v-col>
      </v-container>
      <template v-slot:extension>
        <v-container fluid fill-height>
          <v-tabs
            background-color="transparent"
            grow
            optional
            hide-slider
          >
            <v-tab style="margin: 0" v-for="(item,index) in items"
                   :key="index"
                   :to="item.path">
              {{item.title}}
            </v-tab>
          </v-tabs>
        </v-container>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100vh"
      light
    >
      <v-content>
        <v-container style="height: max-content; padding: 0px" fluid light>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>
    </v-sheet>
  </v-card>
</template>

<script>
  import DropdownMenu from './DropdownMenu'
  import * as easings from 'vuetify/es5/services/goto/easing-patterns'

  export default {
    name: 'AppNavigation',
    components: {DropdownMenu},
    data () {
      return {
        appTitle: 'Justice League',
        drawer: false,
        location: 'home',
        items: [
          {
            title: 'Home',
            path: '/'
          },
          {
            title: 'About Abuse',
            path: '/abuse'
          },
          {
            title: 'Self-Assessment',
            path: '/assessments/false'
          },
          {
            title: 'Find Help',
            path: '/support'
          }
        ],
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        offSet: 0
      }
    },
    methods: {
      reverseMenu () {
        this.drawer = !this.drawer
      },

      // scrollToTop (){
      //   this.$vuetify.goTo('#scrolling-techniques-3', {
      //     duration: 0,
      //     offset: 1000,
      //     easing: this.easing
      //   })
      // },

      redirct (item) {
        this.$router.push(item.path)
        this.$store.commit('switchView', {
          text: item.title,
          disabled: true,
          to: item.path
        })
      },

      backDirect(item) {
        this.$store.commit('spliceRests', item)
      }
    },

    computed: {
      breads () {
        return this.$store.state.breads
      }
    }
  }
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  .v-toolbar__content, .v-toolbar__extension {
    height: 100px;
  }

  .page {
    position: fixed;
    width: inherit;
  }
</style>
