<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="primary"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">

      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
  import AmCharts from 'amcharts3'
  import AmSerial from 'amcharts3/amcharts/serial'

  export default {
    name: 'AmCharts',
    components: {AmCharts},
    data () {
      return {
        item: 1,
        items: [
          {
            title: 'Quizs',
            path: '/quizs'
          },
          {
            title: 'amCharts',
            path: '/amcharts'
          },
          {
            title: 'MainSlides',
            path: '/mainslides'
          },
          {
            title: 'Slide',
            path: '/slide'
          }
        ]
      }
    }

  }
</script>

<style scoped>
  .v-toolbar__content {
    background-color: red;
  }
</style>
