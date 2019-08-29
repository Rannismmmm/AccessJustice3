<template>
  <v-container fluid style="padding-top: 200px">
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
    name: 'SimplePieChart',
    data () {
      return {
        effectChartData: [{
          'country': 'Lithuania',
          'litres': 501.9
        }, {
          'country': 'Germany',
          'litres': 165.8
        }, {
          'country': 'Australia',
          'litres': 139.9
        }, {
          'country': 'Austria',
          'litres': 128.3
        }, {
          'country': 'UK',
          'litres': 99
        }, {
          'country': 'Belgium',
          'litres': 60
        }]
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {
        }
      }
    },
    mounted () {

      let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
      chart.data = this.effectChartData

      let pieSeries = chart.series.push(new am4charts.PieSeries())
      pieSeries.dataFields.value = 'litres'
      pieSeries.dataFields.category = 'country'

      chart.innerRadius = am4core.percent(30)

// Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color('#fff')
      pieSeries.slices.template.strokeWidth = 2
      pieSeries.slices.template.strokeOpacity = 1
      pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
        {
          'property': 'cursor',
          'value': 'pointer'
        }
      ]

      pieSeries.alignLabels = false
      pieSeries.labels.template.bent = true
      pieSeries.labels.template.radius = 3
      pieSeries.labels.template.padding(0, 0, 0, 0)

      pieSeries.ticks.template.disabled = true

// Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter)
      shadow.opacity = 0

// Create hover state
      let hoverState = pieSeries.slices.template.states.getKey('hover') // normally we have to create the hover state, in this case it already exists

// Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter)
      hoverShadow.opacity = 0.7
      hoverShadow.blur = 5

// Add a legend
      chart.legend = new am4charts.Legend()
    }
  }
</script>

<style scoped>
  .hello {
    width: 80%;
    height: 400px;
  }
</style>
