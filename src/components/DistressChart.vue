<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row justify="center" class="pt-5 text-center" wrap>
        <p class="title hidden-sm-and-down" style="color: black">
          Psychological stress of woman between
          <span class="title" style="color: #1976D2">
          {{selectedAge.ageStart}}
          </span> and
          <span class="title" style="color: #1976D2">
          {{selectedAge.ageEnd}}
          </span>
          years old
        </p>
        <p class="subtitle-1 hidden-md-and-up pl-3 pr-3"
           style="color: black">
          Psychological stress of woman between
          <span class="subtitle-1" style="color: #1976D2">
          {{selectedAge.ageStart}}
          </span> and
          <span class="subtitle-1" style="color: #1976D2">
          {{selectedAge.ageEnd}}
          </span>
        </p>
      </v-row>
      <v-row justify="center">
        <p class="title mr-4 mt-2 hidden-sm-and-down" style="color: black">
          Year
        </p>
        <p class="subtitle-1 mr-4 mt-2 hidden-md-and-up" style="color: black">
          Year
        </p>
        <v-flex align="center" xs9 sm7 md5 lg4 xl3>
          <v-combobox
            class="mt-0"
            v-model="years"
            :items="yearSelections"
            chips
            solo
            :disabled="loading"
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
        <p class="title pl-8 mr-4 mt-2 hidden-sm-and-down" style="color: black">
          Age group
        </p>
        <p class="subtitle-1 mr-4 mt-2 hidden-md-and-up" style="color: black">
          Age group
        </p>
        <v-flex align="center" xs7 sm5 md3 lg3 xl2>
          <v-overflow-btn
            class="mb-0"
            :items="ages"
            label="Age Group"
            :disabled="loading"
            solo
            v-model="selectedAge"
            @change="makeChart(makeDataByAge(selectedAge.ageStart, selectedAge.ageEnd))"
          ></v-overflow-btn>
        </v-flex>
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
          Source: ABS National Health Survey, 2018</p>
        <p class="mb-2 hidden-md-and-up"
           style="font-size: 10px">Source: ABS National Health Survey, 2018</p>
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
        loading: false
      }
    },

    props: {
      pr: {
        type: String,
        default: '1'
      }
    },

    methods: {

      goNext () {
        this.$emit('goNext')
      },

      goBack () {
        this.$emit('goBack')
      },

      makeChart (data) {
        am4core.useTheme(am4themes_animated)
        let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
        chart.cursor = new am4charts.XYCursor()
        chart.cursor.behavior = 'zoomY'

        chart.legend = new am4charts.Legend()
        chart.legend.labels.template.fill = am4core.color('#1976D2')
        chart.data = data

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        categoryAxis.dataFields.category = 'level'
        categoryAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        // categoryAxis.title.text = 'Year'
        // categoryAxis.title.fontWeight = 'bold'
        // categoryAxis.title.fill = am4core.color('#1976D2')

// Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.min = 0
        valueAxis.renderer.minLabelPosition = 0.01
        valueAxis.renderer.labels.template.fill = am4core.color('#1976D2')
        valueAxis.title.text = 'Percentage of affected women'
        valueAxis.title.fontWeight = 'bold'
        valueAxis.title.fill = am4core.color('#1976D2')

// Create series

        if (this.years.includes(2007)) {
          let series1 = chart.series.push(new am4charts.LineSeries())
          series1.stroke = am4core.color('#00897B')
          series1.dataFields.valueY = '2007'
          series1.dataFields.categoryX = 'level'
          series1.name = '2007'
          series1.strokeWidth = 3
          let bullets1 = series1.bullets.push(new am4charts.CircleBullet())
          bullets1.fill = am4core.color('#00897B')
          series1.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
          series1.tooltip.getFillFromObject = false
          series1.tooltip.background.fill = am4core.color('#00897B')
          series1.legendSettings.valueText = '{valueY}'
          series1.visible = false
        }

        if (this.years.includes(2014)) {
          let series2 = chart.series.push(new am4charts.LineSeries())
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
        }

        if (this.years.includes(2017)) {
          let series3 = chart.series.push(new am4charts.LineSeries())
          series3.stroke = am4core.color('#E53935')
          series3.dataFields.valueY = '2017'
          series3.dataFields.categoryX = 'level'
          series3.name = '2017'
          series3.strokeWidth = 3
          let bullets3 = series3.bullets.push(new am4charts.CircleBullet())
          bullets3.fill = am4core.color('#E53935')
          series3.tooltipText = 'Distress percentage in {name} in {categoryX}: {valueY} %'
          series3.tooltip.getFillFromObject = false
          series3.tooltip.background.fill = am4core.color('#E53935')
          series3.legendSettings.valueText = '{valueY}'
          series3.visible = false
        }

        this.loading = false
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
      },

      updateWithNochanges (original) {
        if (JSON.stringify(this.years) == JSON.stringify(original))
          this.makeChart(this.makeDataByAge(this.selectedAge.ageStart, this.selectedAge.ageEnd))
      }

    },

    watch: {
      years (val) {
        let original = []
        this.years.forEach(item => {
          original.push(item)
        })
        setTimeout(() => {
          this.updateWithNochanges(original)
        }, 1200)
      }
    },


    mounted () {
      this.loading = true
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
        })
        .catch(error => {
          this.data = error
        })
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart = null
      }
    }
  }
</script>

<style scoped>
  .hello {
    /*background-color: black;*/
    width: 100%;
    height: 50vh;
  }
</style>
