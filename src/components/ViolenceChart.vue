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
      <v-row justify="space-between">
        <v-btn icon @click=""
               disabled>
          <v-icon large>mdi-chevron-left</v-icon>
        </v-btn>

        <v-flex xs12 sm5 md3 lg3 xl3>
          <v-autocomplete
            :items="suburbs"
            filled
            full-width
            clearable
            color="primary"
            label="Type and select suburb"
            item-text="suburb"
            item-value="suburb"
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
        <v-btn icon @click="goNext">
          <v-icon large>mdi-chevron-right</v-icon>
        </v-btn>
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
        suburb: 'Melbourne',
        data: [],
        chart: null,
        categoryAxis: null,
        valueAxis: null,
        series: null
      }
    },

    methods: {
      goNext(){
        this.$emit("goNext")
      },

      makeChart (data) {
        this.suburb = data.suburb
        this.chart.data = data.data

        if (!this.categoryAxis) {
          this.categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis())
          this.categoryAxis.dataFields.category = 'year'
          this.categoryAxis.title.text = 'Year'
          this.categoryAxis.renderer.grid.template.location = 0
          this.categoryAxis.renderer.minGridDistance = 30
          this.categoryAxis.renderer.labels.template.fill = am4core.color('#1976D2')
          this.categoryAxis.title.fontWeight = 'bold'
          this.categoryAxis.title.fill = am4core.color('#1976D2')
        }

        if (!this.valueAxis) {
          this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis())
          this.valueAxis.renderer.labels.template.fill = am4core.color('#1976D2')
          this.valueAxis.title.text = 'Number of recorded family violence'
          this.valueAxis.title.fontWeight = 'bold'
          this.valueAxis.title.fill = am4core.color('#1976D2')
        }

        if (this.series)
          this.chart.series.removeIndex(0)
        this.series = this.chart.series.push(new am4charts.ColumnSeries())
        this.series.dataFields.valueY = 'count'
        this.series.dataFields.categoryX = 'year'
        this.series.name = 'Count'
        this.series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
        this.series.columns.template.fillOpacity = .8

        let columnTemplate = this.series.columns.template
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
      am4core.useTheme(am4themes_animated)
      this.chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
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
    }
  }
</script>

<style scoped>
  .hello {
    width: 100%;
    height: 500px;
  }
</style>
