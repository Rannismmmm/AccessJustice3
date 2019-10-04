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
        </p>
      </v-row>
      <v-row align="center" justify="space-between">
        <v-btn icon @click="goBack">
          <v-icon large>mdi-chevron-left</v-icon>
        </v-btn>
        <v-flex align="center" xs12 sm12 md5 lg4 xl3>
        <v-combobox
          v-model="years"
          :items="yearSelections"
          chips
          clearable
          label="Select years"
          multiple
        >
          <template v-slot:selection="{ attrs, item, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
            >
              <strong>{{ item }}</strong>&nbsp;
            </v-chip>
          </template>
        </v-combobox>
        </v-flex>
        <v-flex align="center" xs7 sm5 md3 lg3 xl2>
        <v-overflow-btn
          class="my-2"
          :items="ages"
          label="Age Group"
          dense
          flat
          v-model="selectedAge"
        ></v-overflow-btn>
        </v-flex>
        <v-btn
          align="center"
          color="primary"
          rounded
          :disabled="years.length === 0"
          @click="makeChart(makeDataByAge(selectedAge.ageStart, selectedAge.ageEnd))">
          Update
        </v-btn>
        <v-btn icon @click="goNext">
          <v-icon large>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
      <!--<v-row>-->
      <!--years: {{years}}, series: {{series}}, age: {{selectedAge}}-->
      <!--</v-row>-->
      <v-row justify="center" class="pt-3">
        <div class="hello" ref="chartdiv"></div>
      </v-row>
      <v-dialog
        :value="noResult"
        max-width="320"
      >
        <v-card>
          <v-card-title class="headline">No shelters found here
          </v-card-title>

          <v-card-text>
            Sorry, we can't any shelters here
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn
              color="primary"
              text
              @click="noResult = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        },
        years: [],
        yearSelections: [2007, 2014, 2017],
        categoryAxis: null,
        valueAxis: null,
        series: [],

      }
    },

    methods: {

      goNext(){
        this.$emit("goNext")
      },

      goBack(){
        this.$emit("goBack")
      },

      makeChart (data) {
        this.chart.data = data

        if (!this.categoryAxis) {
          this.categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis())
          this.categoryAxis.dataFields.category = 'level'
          this.categoryAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        }
        // categoryAxis.title.text = 'Year'
        // categoryAxis.title.fontWeight = 'bold'
        // categoryAxis.title.fill = am4core.color('#1976D2')

// Create value axis
        if (!this.valueAxis) {
          this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis())
          this.valueAxis.renderer.minLabelPosition = 0.01
          this.valueAxis.renderer.labels.template.fill = am4core.color('#1976D2')
          this.valueAxis.title.text = 'Distress percentage (%)'
          this.valueAxis.title.fill = am4core.color('#1976D2')
        }

// Create series

        this.series.forEach((item) => {
          this.chart.series.removeIndex(0)
        })

        this.series = []

        if (this.years.includes(2007)) {
          let series1 = this.chart.series.push(new am4charts.LineSeries())
          series1.dataFields.valueY = '2007'
          series1.dataFields.categoryX = 'level'
          series1.name = '2007'
          series1.strokeWidth = 3
          series1.bullets.push(new am4charts.CircleBullet())
          series1.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
          series1.legendSettings.valueText = '{valueY}'
          series1.visible = false
          this.series.push(2007)
        }

        if (this.years.includes(2014)) {
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
          this.series.push(2014)
        }

        if (this.years.includes(2017)) {
          let series3 = this.chart.series.push(new am4charts.LineSeries())
          series3.dataFields.valueY = '2017'
          series3.dataFields.categoryX = 'level'
          series3.name = '2017'
          series3.strokeWidth = 3
          series3.bullets.push(new am4charts.CircleBullet())
          series3.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
          series3.legendSettings.valueText = '{valueY}'
          series3.visible = false
          this.series.push(2017)
        }
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

    update () {
      if (this.years.length === 0) {

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
      this.chart.cursor = new am4charts.XYCursor()
      this.chart.cursor.behavior = 'zoomY'

      this.chart.legend = new am4charts.Legend()
      this.chart.legend.labels.template.fill = am4core.color('#1976D2')
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
          this.years = [2017]
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
