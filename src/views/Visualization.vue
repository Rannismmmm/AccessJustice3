<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row class="hidden-sm-and-down" justify="center"
             style="padding-left: 20vw; padding-right: 20vw; padding-top: 190px">
        <charts-content></charts-content>
      </v-row>
      <v-row class="hidden-md-and-up" justify="center"
             style=" padding-left: 2vw; padding-right: 2vw; padding-top: 100px">
        <charts-content></charts-content>
      </v-row>
      <v-row>
        <footer-navigation
          :page-before="pageBefore"
          :page-after="pageAfter"
          ></footer-navigation>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import ChartsContent from '../components/ChartsContent'
  import FooterNavigation from '../components/FooterNavigation'

  export default {
    name: 'visualization',
    components: {FooterNavigation, ChartsContent},
    data () {
      return {
        pr: '4',
        pageBefore: {
          title: 'About Abuse',
          path: '/abuse'
        },
        pageAfter: {
          title: 'Self-Assessment',
          path: '/assessments/false'
        }
      }
    }
  }
</script>

<style scoped>

</style>
