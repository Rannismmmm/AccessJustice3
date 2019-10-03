<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row justify="center" class="pt-5 pb-3" wrap>
        <p class="title mb-4" style="color: black">
          Psychological stress of woman between
          <span class="title" style="color: #1976D2">
          {{selectedAge.ageStart}}
          </span> and
          <span class="title" style="color: #1976D2">
          {{selectedAge.ageEnd}}
          </span>
          <!--<span class="title" style="color: #1976D2">-->
          <!--{{suburb}}-->
          <!--</span>-->
        </p>
      </v-row>
      <v-row>
        <!--<v-btn @click="removeSeries(0)">rm</v-btn>-->
        <v-overflow-btn
          class="my-2"
          :items="ages"
          label="Suburb"
          dense
          flat
          v-model="selectedAge"
          @change="makeChart(makeDataByAge(selectedAge.ageStart, selectedAge.ageEnd))"
        ></v-overflow-btn>
        <!--<p class="title mb-4" style="color: black">-->
          <!--{{selectedAge}}-->
        <!--</p>-->
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
    name: 'DistressChart',

    data () {
      return {
        data: [],
        chart: null,
        ages: [],
        selectedAge: {
          ageStart: 18,
          ageEnd: 24
        }
      }
    },

    methods: {

      makeChart (data) {

        am4core.useTheme(am4themes_animated)
        this.chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
        this.chart.data = data

        let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis())
        categoryAxis.dataFields.category = 'level'
        categoryAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        // categoryAxis.title.text = 'Year'
        // categoryAxis.title.fontWeight = 'bold'
        // categoryAxis.title.fill = am4core.color('#1976D2')

// Create value axis
        let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.renderer.minLabelPosition = 0.01
        valueAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        valueAxis.title.text = 'Distress percentage (%)'
        valueAxis.title.fill = am4core.color('#1976D2')

// Create series
        let series1 = this.chart.series.push(new am4charts.LineSeries())
        series1.dataFields.valueY = '2007'
        series1.dataFields.categoryX = 'level'
        series1.name = '2007'
        series1.strokeWidth = 3
        series1.bullets.push(new am4charts.CircleBullet())
        series1.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
        series1.legendSettings.valueText = '{valueY}'
        series1.visible = false

        let series2 = this.chart.series.push(new am4charts.LineSeries())
        series2.stroke = am4core.color('#039BE5')
        series2.dataFields.valueY = '2014'
        series2.dataFields.categoryX = 'level'
        series2.name = '2014'
        series2.strokeWidth = 3
        let bullets2 = series2.bullets.push(new am4charts.CircleBullet())
        bullets2.fill = am4core.color('#039BE5')
        series2.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
        series2.tooltip.getFillFromObject = false
        series2.tooltip.background.fill = am4core.color('#039BE5')
        series2.legendSettings.valueText = '{valueY}'
        series2.visible = false

        let series3 = this.chart.series.push(new am4charts.LineSeries())
        series3.dataFields.valueY = '2017'
        series3.dataFields.categoryX = 'level'
        series3.name = '2017'
        series3.strokeWidth = 3
        series3.bullets.push(new am4charts.CircleBullet())
        series3.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
        series3.legendSettings.valueText = '{valueY}'
        series3.visible = false

        this.chart.cursor = new am4charts.XYCursor()
        this.chart.cursor.behavior = 'zoomY'

        this.chart.legend = new am4charts.Legend()
        this.chart.legend.labels.template.fill = am4core.color('#1976D2')
      },

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
        return subData
      },

      removeSeries (n) {
        this.chart.series.removeIndex(n)
      },

      addSeries (ageStart, ageEnd, year, color) {
        let series2 = this.chart.series.push(new am4charts.LineSeries())
        series2.stroke = am4core.color(color)
        series2.dataFields.valueY = 'percentage'
        series2.dataFields.categoryX = 'level'
        series2.name = year
        series2.strokeWidth = 3
        let bullets2 = series2.bullets.push(new am4charts.CircleBullet())
        bullets2.fill = am4core.color(color)
        series2.tooltipText = 'Percentage recorded in {name} in {categoryX}: {valueY}'
        series2.tooltip.getFillFromObject = false
        series2.tooltip.background.fill = am4core.color(color)
        series2.legendSettings.valueText = '{valueY}'
        series2.visible = false
      }
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
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
              this.ages.push({
                text: item.ageStart.toString() + ' ~ ' + item.ageEnd.toString(),
                value: {
                  ageStart: item.ageStart,
                  ageEnd: item.ageEnd
                }
              })
            }
          })
          this.makeChart(this.makeDataByAge(18, 24))
        })
        .catch(error => {
          this.data = error
        })
    }
  }
</script>

<style scoped>
  .hello {
    /*background-color: black;*/
    width: 100%;
    height: 600px;
  }
</style>
