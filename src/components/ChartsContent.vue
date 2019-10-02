<template>
  <v-card flat>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Violence
      </v-tab>

      <v-tab href="#tab-2">
        Distress
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        key="1"
        value="tab-1"
      >
        <v-card width="60vw" flat>
          <violence-chart></violence-chart>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="2"
        value="tab-2"
      >
        <v-card flat>
          <v-card-text>{{ data }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="3"
        value="tab-3"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import AmCharts2 from './amCharts2'
  import ViolenceChart from './ViolenceChart'
  import axios from 'axios'


  export default {
    name: 'ChartsContent',
    components: {ViolenceChart, AmCharts2},
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        data: []
      }
    },

    mounted () {
      axios.get('https://cors-anywhere.herokuapp.com/http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/violence/findAll')
        .then(response => {
          response.data.forEach((item) => {
            let suburbName = item.suburb
            let suburbDetails = null
            this.data.forEach(object => {
              if (object.suburb == suburbName) {
                suburbDetails = object
              }
            })
            if (suburbDetails) {
              suburbDetails.data.push({
                year: item.year,
                count: item.count
              })
            } else {
              this.data.push({
                suburb: item.suburb,
                data: []
              })
            }
          })
        })
        .catch(error => {
          this.data = error
        })
    }
  }
</script>

<style scoped>

</style>
