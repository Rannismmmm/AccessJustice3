<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row justify="center" class="pt-5 pb-3" wrap>
        <p class="title mb-4" style="color: black">Percentage of woman
          experience abused from very young age
        </p>
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
    name: 'YoungAbuse',

    data () {
      return {
        chart: null,
        data: []
      }
    },

    mounted () {
      am4core.useTheme(am4themes_animated)
      let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
      this.data = [{'id': 1, 'percentage': 2.1, 'year': 2005}, {
        'id': 2,
        'percentage': 4.5,
        'year': 2012
      }, {'id': 3, 'percentage': 23.0, 'year': 2016}]
      chart.data = this.data

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
      valueAxis.title.text = 'percentage of affected woman'
      valueAxis.title.fontWeight = 'bold'
      valueAxis.min = 0;
      valueAxis.title.fill = am4core.color('#1976D2')

      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = 'percentage'
      series.dataFields.categoryX = 'year'
      series.name = 'Percentage'
      series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]'
      series.columns.template.fillOpacity = .8

      let series2 = chart.series.push(new am4charts.LineSeries())
      series2.stroke = am4core.color('#039BE5')
      series2.dataFields.valueY = 'percentage'
      series2.dataFields.categoryX = 'year'
      series2.name = 'Percentage'
      series2.strokeWidth = 3
      let bullets2 = series2.bullets.push(new am4charts.CircleBullet())
      bullets2.fill = am4core.color('#039BE5')
      series2.visible = false

      let columnTemplate = this.series.columns.template
      columnTemplate.strokeWidth = 1
      columnTemplate.strokeOpacity = 1
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
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
