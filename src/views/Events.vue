<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column style="padding-top: 220px;">
      <v-row class="hidden-sm-and-down" justify="center" style=" padding-left: 10vw; padding-right: 10vw">
        <events-content></events-content>
      </v-row>
      <v-row class="hidden-md-and-up" justify="center" style=" padding-left: 2vw; padding-right: 2vw">
         <events-content></events-content>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import EventsContent from '../components/EventsContent'
  export default {
    name: 'Events',
    components: {EventsContent}
  }
</script>

<style scoped>

</style>
