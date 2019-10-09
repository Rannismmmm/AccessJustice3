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
        <v-col cols="12" sm="8" md="4" justify-start>
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
              sm="4"
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
              sm="8"
            >
              <v-tabs
                background-color="transparent"
                grow
                right
                optional
                v-model="tab"
              >
                <v-tab v-for="(item,index) in items"
                       :key="index"
                       :href="item.to"
                       @click="redirct(item)">
                  <div style="color: black">{{item.title}}</div>
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
            center-active
            v-model="tab"
          >
            <v-tab style="margin: 0" v-for="(item,index) in items"
                   :key="index"
                   :href="item.to"
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
      <v-container fluid fill-height class="pa-0 ma-0">
        <v-layout column>
          <v-content>
            <v-row align="start">
              <v-fade-transition mode="out-in">
                <router-view></router-view>
              </v-fade-transition>
            </v-row>
            <v-row align="end">
              <v-footer
                width="100%"
                class="pa-0 mt-6 hidden-sm-and-down"
              >
                <v-card
                  flat
                  tile
                  width="100%"
                  color="transparent"
                  class="white--text"
                >
                  <v-img :src="require('../assets/home/homeBack.jpeg')"
                         gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
                         height="300px">
                    <v-container fluid fill-height class="ma-0 pa-0">
                      <v-layout column>
                        <v-row>
                          <v-card-text
                            class="pt-0 white--text pb-0">
                            <v-container fluid>
                              <v-layout column
                                        style="margin-left: 8vw; margin-right: 8vw">
                                <v-row wrap justify="start">
                                  <h1
                                    class="subtitle-1 font-weight-medium pb-2 pt-4">
                                    AJust team acknowledges the Traditional Owners
                                    of
                                    the land
                                    on
                                    which the i target audience resides,
                                    the
                                    Wurundjeri
                                    People. We pay respects to their Elders,
                                    past
                                    and
                                    present,
                                    and the Aboriginal Elders of other
                                    communities
                                    who
                                    may
                                    be
                                    visiting this website today.
                                  </h1>
                                </v-row>
                                <v-row wrap justify="start" align="end">
                                  <h1 class="subtitle-1 font-weight-medium">
                                    Justicely aims to identify and provide
                                    support
                                    to
                                    young
                                    women of Melbourne facing emotional abuse
                                    by
                                    their
                                    partners.
                                  </h1>
                                </v-row>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                          <v-divider></v-divider>

                          <v-card-text class="white--text pt-0 pb-0">
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw">
                              <!--<router-link to="/support"-->
                              <!--@click.native="redirct(items[3])"-->
                              <!--class="white&#45;&#45;text"-->
                              <!--style="background-color: #1976D2;">-->
                              <!--<h1 class="title font-weight-regular">-->
                              <!--Find-->
                              <!--Help-->
                              <!--</h1>-->
                              <!--</router-link>-->
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                                <router-link to="/legalsupport"
                                             @click.native="redirct(footerItems[0])"
                                             class="white--text">
                                  <!--style="background-color: #1976D2;"-->
                                  <h1 class="title font-weight-regular">
                                    Legal Support
                                  </h1>
                                </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/sheltermap"
                                           @click.native="redirct(footerItems[1])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Care Shelters
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/supportcounseling"
                                           @click.native="redirct(footerItems[2])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Support & Counselling
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/safetyplan"
                                           @click.native="redirct(footerItems[4])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Safety plan
                                </h1>
                              </router-link>
                              </v-flex>
                            </v-row>
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw; margin-top: 4px">
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/events"
                                           @click.native="redirct(footerItems[6])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Events
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/articles"
                                           @click.native="redirct(footerItems[7])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Articles
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/apps"
                                           @click.native="redirct(footerItems[8])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Apps
                                </h1>
                              </router-link>
                              </v-flex>
                              <!--<router-link to="/selfcare"-->
                              <!--@click.native="redirct(footerItems[3])"-->
                              <!--class="white&#45;&#45;text">-->
                              <!--<h1 class="title font-weight-regular">-->
                              <!--Self-Care-->
                              <!--</h1>-->
                              <!--</router-link>-->
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/visualization"
                                           @click.native="redirct(footerItems[5])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Statistics
                                </h1>
                              </router-link>
                              </v-flex>
                            </v-row>
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw; margin-top: 1vh">
                              <v-flex xs12 sm6 md4 lg4 xl4 flat color="primary"
                                      class="white--text">
                                <v-container fluid fill-height
                                             class="pa-0 ma-0">
                                  <v-layout column justify="center">
                                    <v-row wrap align="end">
                                      <h1 class="subtitle-1 font-weight-medium">
                                        © 2019 Justicely | All Rights Reserved
                                      </h1>
                                    </v-row>
                                  </v-layout>
                                </v-container>
                              </v-flex>
                              <v-flex xs12 sm6 md4 lg4 xl4 flat
                                      color="primary">
                                <v-container fluid fill-height
                                             class="pa-0 ma-0">
                                  <v-layout column>
                                    <v-row align="end" justify="end">
                                      <v-img class="mr-2" max-width="80px"
                                             contain
                                             :src="require('../assets/footer/flag1.jpeg')"></v-img>
                                      <v-img class="ml-2" max-width="80px"
                                             contain
                                             :src="require('../assets/footer/flag2.jpeg')"></v-img>
                                    </v-row>
                                  </v-layout>
                                </v-container>
                              </v-flex>
                            </v-row>
                          </v-card-text>
                        </v-row>
                      </v-layout>
                    </v-container>
                  </v-img>
                </v-card>
              </v-footer>
               <v-footer
                width="100%"
                class="pa-0 mt-6 hidden-md-and-up"
              >
                <v-card
                  flat
                  tile
                  width="100%"
                  color="transparent"
                  class="white--text"
                >
                  <v-img :src="require('../assets/home/homeBack.jpeg')"
                         gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
                         height="90vh">
                    <v-container fluid fill-height class="ma-0 pa-0">
                      <v-layout column>
                        <v-row>
                          <v-card-text
                            class="pt-0 white--text pb-0">
                            <v-container fluid>
                              <v-layout column
                                        style="margin-left: 8vw; margin-right: 8vw">
                                <v-row wrap justify="start">
                                  <h1
                                    class="subtitle-1 font-weight-medium pb-2 pt-4">
                                    AJust team acknowledges the Traditional Owners
                                    of
                                    the land
                                    on
                                    which the webisite target audience resides,
                                    the
                                    Wurundjeri
                                    People. We pay respects to their Elders,
                                    past
                                    and
                                    present,
                                    and the Aboriginal Elders of other
                                    communities
                                    who
                                    may
                                    be
                                    visiting this website today.
                                  </h1>
                                </v-row>
                                <v-row wrap justify="start" align="end">
                                  <h1 class="subtitle-1 font-weight-medium">
                                    Justicely aims to identify and provide
                                    support
                                    to
                                    young
                                    women of Melbourne facing emotional abuse
                                    by
                                    their
                                    partners.
                                  </h1>
                                </v-row>
                              </v-layout>
                            </v-container>
                          </v-card-text>
                          <v-divider></v-divider>

                          <v-card-text class="white--text pt-0 pb-0">
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw">
                              <!--<router-link to="/support"-->
                              <!--@click.native="redirct(items[3])"-->
                              <!--class="white&#45;&#45;text"-->
                              <!--style="background-color: #1976D2;">-->
                              <!--<h1 class="title font-weight-regular">-->
                              <!--Find-->
                              <!--Help-->
                              <!--</h1>-->
                              <!--</router-link>-->
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                                <router-link to="/legalsupport"
                                             @click.native="redirct(footerItems[0])"
                                             class="white--text">
                                  <!--style="background-color: #1976D2;"-->
                                  <h1 class="title font-weight-regular">
                                    Legal Support
                                  </h1>
                                </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/sheltermap"
                                           @click.native="redirct(footerItems[1])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Care Shelters
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/supportcounseling"
                                           @click.native="redirct(footerItems[2])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Support & Counselling
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/safetyplan"
                                           @click.native="redirct(footerItems[4])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Safety plan
                                </h1>
                              </router-link>
                              </v-flex>
                            </v-row>
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw; margin-top: 4px">
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/events"
                                           @click.native="redirct(footerItems[6])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Events
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/articles"
                                           @click.native="redirct(footerItems[7])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Articles
                                </h1>
                              </router-link>
                              </v-flex>
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/apps"
                                           @click.native="redirct(footerItems[8])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Apps
                                </h1>
                              </router-link>
                              </v-flex>
                              <!--<router-link to="/selfcare"-->
                              <!--@click.native="redirct(footerItems[3])"-->
                              <!--class="white&#45;&#45;text">-->
                              <!--<h1 class="title font-weight-regular">-->
                              <!--Self-Care-->
                              <!--</h1>-->
                              <!--</router-link>-->
                              <v-flex xs6 sm3 md3 lg3 xl3 justify="start">
                              <router-link to="/visualization"
                                           @click.native="redirct(footerItems[5])"
                                           class="white--text">
                                <h1 class="title font-weight-regular">
                                  Statistics
                                </h1>
                              </router-link>
                              </v-flex>
                            </v-row>
                            <v-row wrap justify="space-between"
                                   style="margin-left: 8vw; margin-right: 8vw; margin-top: 1vh">
                              <v-flex xs12 sm6 md4 lg4 xl4 flat color="primary"
                                      class="white--text">
                                <v-container fluid fill-height
                                             class="pa-0 ma-0">
                                  <v-layout column justify="center">
                                    <v-row wrap align="end">
                                      <h1 class="subtitle-1 font-weight-medium">
                                        © 2019 Justicely | All Rights Reserved
                                      </h1>
                                    </v-row>
                                  </v-layout>
                                </v-container>
                              </v-flex>
                              <v-flex xs12 sm6 md4 lg4 xl4 flat
                                      color="primary">
                                <v-container fluid fill-height
                                             class="pa-0 ma-0">
                                  <v-layout column>
                                    <v-row align="end" justify="end">
                                      <v-img class="mr-2" max-width="80px"
                                             contain
                                             :src="require('../assets/footer/flag1.jpeg')"></v-img>
                                      <v-img class="ml-2" max-width="80px"
                                             contain
                                             :src="require('../assets/footer/flag2.jpeg')"></v-img>
                                    </v-row>
                                  </v-layout>
                                </v-container>
                              </v-flex>
                            </v-row>
                          </v-card-text>
                        </v-row>
                      </v-layout>
                    </v-container>
                  </v-img>
                </v-card>
              </v-footer>
            </v-row>
          </v-content>
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
        tab: null,
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
            title: 'Statistics',
            path: '/visualization'
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
            path: '/safetyplan'
          },

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
          },
          {
            title: 'Safety Plan',
            path: '/safetyplan'
          },
          {
            title: 'Statics',
            path: '/visualization'
          },
          {
            title: 'Events',
            path: '/events'
          },
          {
            title: 'Articles',
            path: '/articles'
          },
          {
            title: 'Apps',
            path: '/apps'
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
        this.tab = item.path
        this.$store.commit('switchView', {redirectionItem: {
          text: item.title,
          disabled: false,
          to: item.path
        }})
      },

      backDirect (item) {
        this.$store.commit('spliceRests', item)
      }
    },

    computed: {
      breads () {
        return this.$store.state.breads
      },

      // tab () {
      //   let cumbs = []
      //   this.$store.state.breads.forEach(item => {
      //     cumbs.push(item.to)
      //   })
      //   let lastItem = cumbs[cumbs.length - 1]
      //   if (lastItem == '/')
      //     return this.items[0]
      //   if (lastItem == '/abuse')
      //     return this.items[1]
      // }
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
