<template>
  <span>
      <v-navigation-drawer app v-model="drawer" class="blue darken-1" dark
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
  <v-toolbar app color="blue darken-1" dark>
            <v-toolbar-side-icon class="hidden-md-and-up"
                                 @click="reverseMenu"></v-toolbar-side-icon>
            <v-btn flat class="hidden-sm-and-down"
                   @click="reverseMenu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <router-link to="/" style="color: white; text-decoration: none">
                          <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" to="/signin">SIGN IN</v-btn>
            <v-btn color="blue lighten-3"
                   class="hidden-sm-and-down" to="/register">JOIN</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
  export default {
    name: 'AppNavigation',
    data () {
      return {
        appTitle: 'Revision Hero',
        drawer: false,
        items: [
          {
            title: 'My Courses',
            path: '/mycourses'
          },
          {
            title: 'Course Management',
            path: '/management'
          },
          {
            title: 'Settings',
            path: '/settings'
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