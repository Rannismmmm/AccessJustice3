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
        <v-col cols="12" sm="8" md="5" justify-start>
          <v-row justify="start">
            <v-card flat style="width: 215px" @click="redirct(items[0])">
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
              sm="5"
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
              sm="7"
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
      height="100vh"
      light
    >
      <v-container fluid fill-height>
        <v-layout column style="height: 100%">
          <v-row>
            <v-content>
              <v-container style="height: max-content; padding: 0px" fluid
                           light>
                <v-fade-transition mode="out-in">
                  <router-view></router-view>
                </v-fade-transition>
              </v-container>
            </v-content>
          </v-row>
          <v-row class="pt-6" align="end">
            <v-footer
              padless
            >
              <v-card
                flat
                tile
                color="primary"
                class="primary white--text"
              >
                <v-card-text
                  class="pt-0 white--text">
                  <v-container fluid>
                    <v-layout column
                              style="margin-left: 8vw; margin-right: 8vw">
                      <v-row wrap justify="start">
                        <h1 class="subtitle-1 font-weight-medium">
                          AJust acknowledges the Traditional Owners of the land
                          on
                          which the webiste target audience resides, the
                          Wurundjeri
                          People. We pay respects to their Elders, past and
                          present,
                          and the Aboriginal Elders of other communities who
                          may
                          be
                          visiting this webssite today.
                        </h1>
                      </v-row>
                      <v-row wrap justify="start">
                        <h1 class="subtitle-1 font-weight-medium">
                          Justicely aims to identify and provide support to the
                          young
                          women of Melbourne facing emotional abuse by their
                          partners.
                        </h1>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text class="white--text">
                  <v-row wrap justify="space-between"
                         style="margin-left: 8vw; margin-right: 8vw">
                    <v-card xs12 sm6 md4 lg3 xl3 flat class="white--text">
                      <v-container fluid fill-height class="pa-0 ma-0">
                        <v-layout column>
                          <router-link to="/support"
                                       @click.native="redirct(items[3])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Find
                              Help
                            </h1>
                          </router-link>
                          <router-link to="/legalsupport"
                                       @click.native="redirct(footerItems[0])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Legal Support
                            </h1>
                          </router-link>
                          <router-link to="/sheltermap"
                                       @click.native="redirct(footerItems[1])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Care Shelters
                            </h1>
                          </router-link>
                          <router-link to="/supportcounseling"
                                       @click.native="redirct(footerItems[2])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Support & Counselling
                            </h1>
                          </router-link>
                          <router-link to="/selfcare"
                                       @click.native="redirct(footerItems[3])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Self-Care
                            </h1>
                          </router-link>
                        </v-layout>
                      </v-container>
                    </v-card>
                    <v-card xs12 sm6 md4 lg3 xl3 flat color="primary"
                            class="white--text">
                      <v-container fluid fill-height class="pa-0 ma-0">
                        <v-layout column justify="center">
                          <v-row wrap align="end">
                            <h1 class="title font-weight-medium">
                              (c) 2019 Justicely | All Rights Reserved
                            </h1>
                          </v-row>
                        </v-layout>
                      </v-container>
                    </v-card>
                    <v-card xs12 sm6 md4 lg3 xl3 flat class="white--text">
                      <v-container fluid fill-height class="pa-0 ma-0">
                        <v-layout column>
                          <router-link to="/support"
                                       @click.native="redirct(items[3])"
                                       class="white--text"
                                       style="background-color: #1976D2;">
                            <h1 class="title font-weight-medium">
                              Find
                              Help
                            </h1>
                          </router-link>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-footer>
          </v-row>
        </v-layout>
      </v-container>
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
          },
          {
            title: 'Safety Plan',
            path: '/'
          }
        ],
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        offSet: 0,
        footerItems: [
          {
            title: 'Legal Support',
            path: '/legalsupport'
          },
          {
            title: 'Care Shelters',
            path: '/sheltermap'
          },
          {
            title: 'Support & Counselling',
            path: '/supportcounseling'
          },
          {
            title: 'Self-Care',
            path: '/selfcare'
          }
        ]
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
          disabled: false,
          to: item.path
        })
      },

      backDirect (item) {
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
