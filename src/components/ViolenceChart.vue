<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row justify="center" class="pt-5 pb-3" wrap>
        <p class="title mb-4" style="color: black">Number of recorded family
          violence from 2013 ~ 2017 in
          <span class="title" style="color: #1976D2">
            {{suburb}}
          </span></p>
      </v-row>
      <v-row justify="end">
        <v-flex xs12 sm5 md4 lg3 xl2>
          <v-overflow-btn
            class="my-2"
            :items="suburbs"
            label="Suburb"
            dense
            flat
            v-model="suburb"
            @change="makeChart(data[suburbs.indexOf(suburb)])"
          ></v-overflow-btn>
        </v-flex>
      </v-row>
      <v-row justify="center" class="pt-3">
        <div class="hello" ref="chartdiv"></div>
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
        suburb: '',
        data: []
      }
    },

    methods: {
      makeChart (data) {
        this.suburb = data.suburb
        am4core.useTheme(am4themes_animated)
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
        chart.data = data.data

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
        valueAxis.title.text = 'Number of records'
        valueAxis.title.fontWeight = 'bold'
        valueAxis.title.fill = am4core.color('#1976D2')

        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = 'count'
        series.dataFields.categoryX = 'year'
        series.name = 'Count'
        series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
        series.columns.template.fillOpacity = .8

        let columnTemplate = series.columns.template
        columnTemplate.strokeWidth = 2
        columnTemplate.strokeOpacity = 1
      }
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
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
              this.suburbs.push(item.suburb)
            }
          })
          this.makeChart(this.data[6])
        })
        .catch(error => {
          this.suburb = error
        })
    }
  }
</script>

<style scoped>
  .hello {
    width: 100%;
    height: 500px;
  }
</style>
