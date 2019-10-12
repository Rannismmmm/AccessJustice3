<template>
  <v-card flat>
    <v-tabs
      v-model="tab"
      grow
    >
      <v-tabs-slider></v-tabs-slider>
      <v-btn class="mt-3 pr-4" icon @click="goBack" :disabled="tab == '1'">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-tab href="#1">
        <span class="title font-weight-regular hidden-sm-and-down">Distress</span>
        <span class="subtitle-2 font-weight-regular hidden-md-and-up">Distress</span>
      </v-tab>

      <v-tab href="#2">
        <span class="title font-weight-regular hidden-sm-and-down">Violence</span>
        <span class="subtitle-2 font-weight-regular hidden-md-and-up">Violence</span>
      </v-tab>

      <v-tab href="#3">
        <span class="title font-weight-regular hidden-sm-and-down">Abuse</span>
        <span class="subtitle-2 font-weight-regular hidden-md-and-up">Abuse</span>
      </v-tab>
      <v-btn class="mt-3 pl-4" icon @click="goNext" :disabled="tab == '3'">
        <v-icon large>mdi-chevron-right</v-icon>
      </v-btn>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        key="1"
        value="1"
      >
        <v-container fluid class="ma-0 pa-0">
          <v-layout column>
            <v-row justify="center">
              <v-card class="hidden-sm-and-down" width="60vw" flat>
                <distress-chart></distress-chart>
              </v-card>
              <v-card class="hidden-md-and-up" width="90vw" flat>
                <distress-chart></distress-chart>
              </v-card>
            </v-row>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item
        key="2"
        value="2"
      >
        <v-container fluid class="ma-0 pa-0">
          <v-layout column>
            <v-row justify="center">
              <v-card class="hidden-sm-and-down" width="60vw" flat>
                <violence-chart></violence-chart>
              </v-card>
              <v-card class="hidden-md-and-up" width="90vw" flat>
                <violence-chart></violence-chart>
              </v-card>
            </v-row>
          </v-layout>
        </v-container>
      </v-tab-item>
      <v-tab-item
        key="3"
        value="3"
      >
        <v-container fluid class="ma-0 pa-0">
          <v-layout column>
            <v-row justify="center">
              <v-card class="hidden-sm-and-down" width="60vw" flat>
                <young-abuse></young-abuse>
              </v-card>
              <v-card class="hidden-md-and-up" width="90vw" flat>
                <young-abuse></young-abuse>
              </v-card>
            </v-row>
          </v-layout>
        </v-container>
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
        data: []
      }
    },

    props: {
      pr: {
        type: String,
        default: '3'
      }
    },

    methods: {
      goNext () {
        if (this.tab == '1') {
          this.tab = '2'
        } else {
          this.tab = '3'
        }
      },

      goBack () {
        if (this.tab == '3') {
          this.tab = '2'
        } else {
          this.tab = '1'
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
