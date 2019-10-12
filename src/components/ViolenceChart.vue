<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row justify="center" class="pt-5 pb-3" wrap>
        <p class="title mb-4" style="color: black">Number of reported family
          incidents from 2013 - 2017 in
          <span class="title" style="color: #1976D2">
            {{suburb}}
          </span></p>
      </v-row>
      <v-row justify="center">
        <!--<v-btn icon @click=""-->
               <!--disabled>-->
          <!--<v-icon large>mdi-chevron-left</v-icon>-->
        <!--</v-btn>-->
        <p class="title mr-4 mt-3" style="color: black">
          Select a council
        </p>
        <v-flex xs12 sm5 md3 lg3 xl3>
          <v-autocomplete
            :items="suburbs"
            :loading="loading"
            full-width
            clearable
            solo
            color="primary"
            label="Type and select suburb"
            item-text="suburb"
            item-value="suburb"
            v-model="suburb"
          >
            <template v-slot:item="i">
              <v-list-item-content
                @click="makeChart(data[suburbs.indexOf(i.item)])">
                <!--@keyup.enter.native=""-->
                <v-list-item-title
                  v-text="i.item"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-flex>
        <!--<v-btn icon @click="goNext">-->
          <!--<v-icon large>mdi-chevron-right</v-icon>-->
        <!--</v-btn>-->
      </v-row>
      <v-row v-if="loading" justify="center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>
      <v-row justify="center" class="pt-3">
        <div class="hello" ref="chartdiv"></div>
      </v-row>
      <v-row justify="center">
        <p class="ma-0 hidden-sm-and-down">
          Source: Family Violence Database, LEAP 2019</p>
        <p class="mb-2 hidden-md-and-up"
           style="font-size: 10px">Source: Family Violence Database, LEAP 2019</p>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import * as am4core from '@amcharts/amcharts4/core'
  import * as am4charts from '@amcharts/amcharts4/charts'
  import am4themes_animated from '@amcharts/amcharts4/themes/material'
  import axios from 'axios'

  export default {
    name: 'ViolenceChart',

    data () {
      return {
        suburbs: [],
        suburb: 'Melbourne',
        data: [],
        categoryAxis: null,
        valueAxis: null,
        series: null,
        loading: false
      }
    },

    methods: {
      goNext(){
        this.$emit("goNext")
      },

      makeChart (data) {
        am4core.useTheme(am4themes_animated)
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
        this.suburb = data.suburb
        chart.data = data.data
        chart.numberFormatter.numberFormat = "####";

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        categoryAxis.dataFields.category = 'year'
        categoryAxis.title.text = 'Year'
        categoryAxis.renderer.grid.template.location = 0
        categoryAxis.renderer.minGridDistance = 30
        categoryAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        categoryAxis.title.fontWeight = 'bold'
        categoryAxis.title.fill = am4core.color('#1976D2')

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        valueAxis.title.text = 'Number of recorded family violence'
        valueAxis.min = 0;
        valueAxis.title.fontWeight = 'bold'
        valueAxis.title.fill = am4core.color('#1976D2')

        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = 'count'
        series.dataFields.categoryX = 'year'
        series.name = 'Count'
        series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
        series.columns.template.fillOpacity = .8

        let columnTemplate = series.columns.template
        columnTemplate.strokeWidth = 1
        columnTemplate.strokeOpacity = 1

        this.loading = false
      }

    },

    mounted () {
      this.loading = true
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
                data: [{
                  year: item.year,
                  count: item.count
                }]
              })
              this.suburbs.push(item.suburb)
            }
          })
          this.makeChart(this.data[6])
        })
        .catch(error => {
          this.suburb = error
        })
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
      }
    },
  }
</script>

<style scoped>
  .hello {
    width: 100%;
    height: 50vh;
  }
</style>
