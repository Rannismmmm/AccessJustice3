<template>
  <v-container fliud fill-height>
    <v-layout column>
      <v-flex>
        <template>
          <v-tabs
            fixed-tabs
            dark
            v-model="tab"
          >
            <v-tab v-for="(slide,index) in slides"
                   :key="index">
              {{slide.name}}
            </v-tab>
          </v-tabs>
        </template>
      </v-flex>
      <v-flex>
        <v-carousel
          cycle
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          fluid
          height="auto"
          width="auto"
          v-model="tab"
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
          title: 'Woman abuse',
          content: 'You deserve a better life',
          foot: null,
          rout: null,
          routWord: null,
          name: 'Theme'
        },
        {
          background: require('../assets/fist.jpeg'),
          title: '1 in 3 woman being abused',
          content: '1 in 8 woman being emotionally abused',
          foot: null,
          rout: null,
          routWord: null,
          name: 'Portion'
        },
        {
          background: require('../assets/hair.jpeg'),
          title: 'Portion',
          content: '18 ~ 34 are the most affected age group',
          foot: null,
          rout: 'management',
          routWord: 'Learn more',
          name: 'Age',
          chartData:
            {'18 ~ 24': 11.7,
              '25 ~ 34': 7,
              '35 ~ 44': 4.1,
              '45 ~ 54': 4,
              '55 ~ 64': 2.6,
              '65 ~ ': 1.2
            }
        },
        {
          background: require('../assets/victoria.jpeg'),
          title: 'Victoria ranks 1st in Australia',
          content: 'And Melbourne rank 1st in Vic',
          foot: 'Don\'t believe me? see some charts ',
          rout: 'management',
          routWord: 'here',
          name: 'Victoria'
        },
        {
          title: 'Wanna find more',
          content: null,
          foot: 'You can identify the problem by a quick quiz, see ',
          rout: 'quizs',
          routWord: 'our quiz',
          name: 'More'
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

</style>
