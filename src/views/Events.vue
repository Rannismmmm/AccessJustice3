<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row class="hidden-sm-and-down" justify="center" style=" padding-left: 10vw; padding-right: 10vw; padding-top: 220px">
        <events-content></events-content>
      </v-row>
      <v-row class="hidden-md-and-up" justify="center" style=" padding-left: 2vw; padding-right: 2vw; padding-top: 100px">
         <events-content></events-content>
      </v-row>
      <v-row>
        <footer-navigation
          :page-after="pageAfter"
          :page-before="pageBefore"
          :base-page="{text: 'Find Help', disabled: false,to: '/support'}"
          ></footer-navigation>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import EventsContent from '../components/EventsContent'
  import FooterNavigation from '../components/FooterNavigation'
  export default {
    name: 'Events',
    components: {FooterNavigation, EventsContent},

    data() {
      return {
        pageBefore: {
          title: 'Support & Counselling',
          path: '/supportcounseling'
        },
        pageAfter: {
          title: 'Articles',
          path: '/articles'
        }
      }
    },

  }
</script>

<style scoped>

</style>
