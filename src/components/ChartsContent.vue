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
        <v-card width="60vw" flat>
          <distress-chart></distress-chart>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="3"
        value="tab-3"
      >
        <v-card flat>
          <v-btn @click="makeDataByAge(18, 24)">change</v-btn>
          <v-card-text>{{ data }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import AmCharts2 from './amCharts2'
  import ViolenceChart from './ViolenceChart'
  import axios from 'axios'
  import DistressChart from './DistressChart'


  export default {
    name: 'ChartsContent',
    components: {DistressChart, ViolenceChart, AmCharts2},
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        data: []
      }
    },

    methods: {
      makeDataByAge (ageStart, ageEnd) {
        let subData = []
        this.data.forEach(item => {
          if (item.ageStart === ageStart && item.ageEnd === ageEnd) {
            let objectLow = {level: ' Low distress level'}
            item[' Low distress level'].forEach(record => {
              objectLow[record.year] = record.percentage
            })
            subData.push(objectLow)

            let objectModerate = {level: ' Moderate distress level'}
            item[' Moderate distress level'].forEach(record => {
              objectModerate[record.year] = record.percentage
            })
            subData.push(objectModerate)

            let objectHigh = {level: ' High distress level'}
            item[' High distress level'].forEach(record => {
              objectHigh[record.year] = record.percentage
            })
            subData.push(objectHigh)

            let objectVHigh = {level: ' Very high distress level'}
            item[' Very high distress level'].forEach(record => {
              objectVHigh[record.year] = record.percentage
            })
            subData.push(objectVHigh)
          }
        })
        this.data = subData
      }
    },

    mounted () {
      axios.get('https://cors-anywhere.herokuapp.com/http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/distress/findAll')
        .then(response => {
          response.data.forEach((item) => {
            let ageStart = item.ageStart
            let ageEnd = item.ageEnd
            let ageDetails = null
            this.data.forEach(object => {
              if (object.ageStart === ageStart && object.ageEnd === ageEnd) {
                ageDetails = object
              }
            })
            if (ageDetails) {
              let l = item.distress
              if (ageDetails[l]) {
                ageDetails[l].push({
                  year: item.year,
                  percentage: item.percentage
                })
              } else {
                ageDetails[l] = []
                ageDetails[l].push({
                  year: item.year,
                  percentage: item.percentage
                })
              }
            } else {
              let l = item.distress
              let obj = {
                ageStart: item.ageStart,
                ageEnd: item.ageEnd
              }
              obj[l] = []
              obj[l].push({
                year: item.year,
                percentage: item.percentage
              })
              this.data.push(obj)
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
