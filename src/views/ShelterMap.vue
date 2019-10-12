<template>
  <v-container fluid v-if="appear">
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 200px; padding-bottom: 20px"
      >
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">Shelters & Organizations</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">Shelters & Organizations</h4>
      </v-row>
      <v-row
        align="start"
        justify="center"
        wrap
        style="padding-left: 5vw; padding-right: 5vw"
      >
        <h1 class="body-2 mb-4">Enter the post code to find a home shelter or supoorted organization near
          you.
        </h1>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row justify="center" align="center">
            <map-box></map-box>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="space-between"
             style="padding-left: 10vw; padding-right: 10vw">
        <v-card flat @click="navigateToView(pageBefore)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                  <v-icon color="primary" class="pr-3">mdi-arrow-left-thick</v-icon>
                  <span class="headline font-weight-bold"
                        style="color: #1976D2">{{pageBefore.title}}</span>
                </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat @click="navigateToView(pageAfter)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <span class="headline font-weight-bold"
                        style="color: #1976D2">{{pageAfter.title}}</span>
                  <v-icon color="primary" class="pl-3">mdi-arrow-right-thick</v-icon>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import MapBox from './MapBox'

  export default {
    components: {
      MapBox
    },
    name: 'ShelterMap',

    data () {
      return {
        pageBefore: {
          title: 'Legal Support',
          path: '/legalsupport'
        },
        pageAfter: {
          title: 'Support & Counselling',
          path: '/supportcounseling'
        },
        appear: false
      }
    },

    methods: {
      navigateToView (item) {
        this.$router.push(item.path)
        this.$store.commit('switchView', {
          redirectionItem: {
            text: item.title,
            disabled: false,
            to: item.path
          }, otherBaseView: {
            text: 'Find Help',
            disabled: false,
            to: '/support'
          }
        })
      }
    },

    mounted () {
      setTimeout(() => {
        this.appear = true
        }, 20)
    }
  }
</script>

<style scoped>

</style>
