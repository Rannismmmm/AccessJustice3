<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column style="padding-top: 220px;">
      <v-row class="hidden-sm-and-down" justify="center" style=" padding-left: 20vw; padding-right: 20vw">
        <charts-content></charts-content>
      </v-row>
      <v-row class="hidden-md-and-up" justify="center" style=" padding-left: 2vw; padding-right: 2vw">
        <charts-content></charts-content>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import ChartsContent from '../components/ChartsContent'
  export default {
    name: 'visualization',
    components: {ChartsContent},
    data () {
      return {pr: "4"}
    }
  }
</script>

<style scoped>

</style>
