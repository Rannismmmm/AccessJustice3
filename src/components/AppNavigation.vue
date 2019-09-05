<template>
  <v-card class="overflow-hidden pa-ma-0" style="height: 100vh; width: 100vw">
    <v-app-bar
      absolute="false"
      prominent
      color="#FFFFFF"
      light
      hide-on-scroll
      scroll-threshold="50"
      scroll-target="#scrolling-techniques-3"
    >
      <v-container fluid fill-height align-end>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" justify-center>
            <v-row justify="center">
              <v-toolbar-title>JUSTICLY</v-toolbar-title>
            </v-row>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-container>
      <template v-slot:extension>
        <v-container fluid fill-height>
          <v-tabs
            background-color="transparent"
            centered
            mobile-break-point
            class="hidden-sm-and-down"
          >
            <v-tab v-for="(item,index) in items"
                   :key="index"
                   @click="redirct(item.path)">
              {{item.title}}
            </v-tab>
          </v-tabs>
          <v-tabs
            background-color="transparent"
            mobile-break-point
            class="hidden-md-and-up"
          >
            <v-tab v-for="(item,index) in items"
                   :key="index"
                   @click="redirct(item.path)">
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
      <v-container style="height: max-content; padding: 0px" fluid light>
        <router-view></router-view>
      </v-container>
    </v-sheet>
  </v-card>
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
          {
            title: 'Home',
            path: '/'
          },
          {
            title: 'Abuse',
            path: '/abuse'
          },
          {
            title: 'Self-Assessment',
            path: '/assessments'
          },
          {
            title: 'Support',
            path: '/support'
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
  .v-toolbar__content, .v-toolbar__extension {
    height: 100px;
  }
</style>
