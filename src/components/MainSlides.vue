<template>
  <v-container fliud>
    <v-layout row fill-height>
      <!--<v-flex row>-->
        <!--<template>-->
          <!--<v-tabs-->
            <!--fixed-tabs-->
            <!--dark-->
            <!--v-model="tab"-->
          <!--&gt;-->
            <!--<v-tab v-for="(slide,index) in slides"-->
                   <!--:key="index">-->
              <!--{{slide.name}}-->
            <!--</v-tab>-->
          <!--</v-tabs>-->
        <!--</template>-->
      <!--</v-flex>-->
      <v-flex row fill-height>
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          height="max-content"
          width="max-content"
        >
          <v-carousel-item
            style="height: max-content"
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              style="height: max-content"
            >
              <v-row
                style="height: max-content"
                class="fill-height"
                align="start"
                justify="start"
              >
                <Slide :back-src="slide.background"
                       :title="slide.title"
                       :content="slide.content"
                       :foot="slide.foot"
                       :rout="slide.rout"
                       :rout-word="slide.routWord"
                       :name="slide.name"
                       :chart-data="slide.chartData"
                       :table-data="slide.tableData"
                       :headers="slide.headers"
                ></Slide>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Slide from './Slide'

  export default {
    name: 'MainSlides',
    components: {Slide},
    data: () => ({
      slides: [
        {
          background: require('../assets/candel.jpeg'),
          title: null,
          content: 'You deserve a better life',
          foot: null,
          rout: null,
          routWord: null,
          name: 'Theme'
        },
        {
          background: require('../assets/fist.jpeg'),
          title: '1 in 3 woman being abused',
          content: '1 in 8 are emotionally abused',
          foot: 'See our ',
          rout: 'amcharts',
          routWord: 'charts',
          name: 'Portion'
        },
        {
          background: require('../assets/hair.jpeg'),
          title: 'Age 18 ~ 34 suffered the most',
          content: null,
          foot: 'Wanna see some statics?',
          rout: 'management',
          routWord: 'See our data',
          name: 'Age',
          chartData:
            {'Age 18 ~ 24': 11.7,
              'Age 25 ~ 34': 7,
              'Age 35 ~ 44': 4.1,
              'Age 45 ~ 54': 4,
              'Age 55 ~ 64': 2.6,
              'Age 65 ~ ': 1.2
            },
          headers: ['Age', 'Sexual Violence', 'Physical Violence', 'Total Violence'],
          tableData: [
            ['18 to 24 years', '5.9', '7.4', '11.7'],
            ['25 to 34 years', '3.5', '4.8', '7'],
            ['35 to 44 years', '1.2', '3.6', '4.1'],
            ['45 to 54 years', '0.8', '3.5', '4'],
            ['55 to 64 years', '0.6', '2.2', '6.6'],
            ['65 years and over', '0.3', '1', '1.2'],
          ]
        },
        {
          background: require('../assets/map.png'),
          title: 'Victoria ranks 1st in Australia',
          content: 'And Melbourne rank 1st in Vic',
          foot: 'Try a quick assessment ',
          rout: 'assessments',
          routWord: 'here',
          name: 'Victoria'
        }

      ],
      tab: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },

      me1 () {
      }
    }
  }
</script>

<style scoped>
  .container {
    background-color: #424242;
  }
</style>
