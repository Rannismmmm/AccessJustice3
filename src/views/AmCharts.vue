<template>
  <v-container fluid>
    <v-parallax class="hidden-sm-and-down" height="1100"
                :src="require('../assets/darkBackground.jpg')">
      <v-container fluid>
        <vflex row align-center justify-center>
          <am-charts2></am-charts2>
        </vflex>
        <v-flex row align-center justify-center>
          <h2>Effects of abuse</h2>
        </v-flex>
        <v-flex row align-center justify-center>
          <div class="hello" ref="chartdiv"></div>
        </v-flex>
      </v-container>
    </v-parallax>
  </v-container>
</template>

<script>
  import * as am4core from '@amcharts/amcharts4/core'
  import * as am4charts from '@amcharts/amcharts4/charts'
  import AmCharts2 from '../components/amCharts2'

  export default {
    name: 'AmCharts',
    components: {AmCharts2},
    data () {
      return {
        effectChartData: [
          {
            'year': 'Experienced anxiety or fear due to emotional abuse',
            'income': 71.6,
            'expenses': 58.8
          }, {
            'year': 'Experienced only anxiety due to emotional abuse',
            'income': 26.9,
            'expenses': 39.9
          }, {
            'year': 'Experienced only fear due to emotional abuse',
            'income': 5.3,
            'expenses': 4.1
          }, {
            'year': 'Experienced anxiety and fear due to emotional abuse',
            'income': 39.5,
            'expenses': 15.3
          }, {
            'year': 'Did not experience anxiety or fear due to emotional abuse',
            'income': 28.2,
            'expenses': 41
          }
        ]
      }
    },

    mounted () {

      let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
      chart.data = this.effectChartData

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'year'
      categoryAxis.numberFormatter.numberFormat = '#'
      categoryAxis.renderer.inversed = true
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.renderer.cellStartLocation = 0.1
      categoryAxis.renderer.cellEndLocation = 0.9

      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.opposite = true

      this.createSeries('income', 'Current Partner', chart)
      this.createSeries('expenses', 'Previous Partner', chart)

      chart.legend = new am4charts.Legend();
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
      }
    },

    methods: {
      createSeries (field, name, chart) {
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueX = field
        series.dataFields.categoryY = 'year'
        series.name = name
        series.columns.template.tooltipText = '{name}: [bold]{valueX}[/]'
        series.columns.template.height = am4core.percent(100)
        series.sequencedInterpolation = true

        let valueLabel = series.bullets.push(new am4charts.LabelBullet())
        valueLabel.label.text = '{valueX}'
        valueLabel.label.horizontalCenter = 'left'
        valueLabel.label.dx = 10
        valueLabel.label.hideOversized = false
        valueLabel.label.truncate = false

        let categoryLabel = series.bullets.push(new am4charts.LabelBullet())
        categoryLabel.label.text = '{name}'
        categoryLabel.label.horizontalCenter = 'right'
        categoryLabel.label.dx = -10
        categoryLabel.label.fill = am4core.color('#fff')
        categoryLabel.label.hideOversized = false
        categoryLabel.label.truncate = false
      }
    }

  }
</script>

<style scoped>
  .hello {
    width: 80%;
    height: 400px;
  }
</style>
