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
        Age
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        key="1"
        value="tab-1"
      >
        <v-card width="60vw" flat>
          <violence-chart @goNext="goNext"></violence-chart>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="2"
        value="tab-2"
      >
        <v-card width="60vw" flat>
          <distress-chart @goBack="goBack"
                          @goNext="goNext"></distress-chart>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="3"
        value="tab-3"
      >
        <v-card width="60vw" flat>
          <young-abuse></young-abuse>
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
  import YoungAbuse from './YoungAbuse'


  export default {
    name: 'ChartsContent',
    components: {YoungAbuse, DistressChart, ViolenceChart, AmCharts2},
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        data: [],
      }
    },

    props: {
      pr: {
        type: String,
        default: "3"
      }
    },

    methods: {
      goNext () {
        if (this.tab == 'tab-1') {
          this.tab = 'tab-2'
        } else {
          this.tab = 'tab-3'
        }
      },

      goBack () {
        if (this.tab == 'tab-3') {
          this.tab = 'tab-2'
        } else {
          this.tab = 'tab-1'
        }
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
