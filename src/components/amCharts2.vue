<template>
  <v-container fluid>
    <v-flex row align-center justify-center>
      <h2>Frequency of abuse</h2>
    </v-flex>
    <v-flex row align-center justify-center>
      <div class="hello" ref="chartdiv"></div>
    </v-flex>
  </v-container>
</template>

<script>
  import * as am4core from '@amcharts/amcharts4/core'
  import * as am4charts from '@amcharts/amcharts4/charts'

  export default {
    name: 'amCharts2',
    data () {
      return {
        effectChartData: [
          {
            'year': 'Less than 12 \n months ago',
            // 'income': 5.3,
            'expenses': 4.9
          }, {
            'year': '1 to less than 2 \n years ago',
            // 'income': 1.1,
            'expenses': 2.9
          }, {
            'year': '2 to less than 3 \n years ago',
            // 'income': 0.8,
            'expenses': 2.8
          }, {
            'year': '3 to less than 5 \n years ago',
            // 'income': 0.6,
            'expenses': 3.7
          }, {
            'year': '5 to less than 10 \n years ago',
            // 'income': 1.1,
            'expenses': 10
          }, {
            'year': '10 to less than 20 \n years ago',
            // 'income': 0.8,
            'expenses': 12.6
          }, {
            'year': '20 years ago \n or more',
            // 'income': 0.7,
            'expenses': 14.6
          }
        ]
      }
    },

    mounted () {

      let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
      chart.data = this.effectChartData

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'year'
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.renderer.minGridDistance = 20
      categoryAxis.renderer.cellStartLocation = 0.1
      categoryAxis.renderer.cellEndLocation = 0.9

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.min = 0
      valueAxis.title.text = 'Number of occur'

      this.createSeries('income', 'Current Partner', chart)
      this.createSeries('expenses', 'Previous Partner', chart)

      chart.legend = new am4charts.Legend()
    },

    beforeDestroy () {
      if (this.chart) {
        this.chart.dispose()
      }
    },

    methods: {
      createSeries (field, name, chart) {
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = field
        series.dataFields.categoryX = 'year'
        series.name = name
        series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]'
        series.columns.template.width = am4core.percent(95)

        var bullet1 = series.bullets.push(new am4charts.LabelBullet())
        bullet1.interactionsEnabled = false
        bullet1.label.text = '{valueY.formatNumber(\'#.0\')}'
        bullet1.label.fill = am4core.color('#ffffff')
        bullet1.locationY = 0.5
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
