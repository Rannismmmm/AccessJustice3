<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="700"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
      >
        <v-row
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
          ></Slide>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
          routWord: null
        },
        {
          background: require('../assets/fist.jpeg'),
          title: '1 in 3 woman being abused',
          content: '1 in 8 woman being emotionally abused',
          foot: null,
          rout: null,
          routWord: null
        },
        {
          background: require('../assets/hair.jpeg'),
          title: 'Portion',
          content: '18 ~ 34 are the most affected age group',
          foot: null,
          rout: null,
          routWord: null
        },
        {
          background: require('../assets/victoria.jpeg'),
          title: 'Victoria ranks 1st in Australia',
          content: 'And Melbourne rank 1st in Vic',
          foot: 'Don\'t believe me? see some charts ',
          rout: 'management',
          routWord: 'here'
        },
        {
          title: 'Wanna find more',
          content: null,
          foot: 'You can identify the problem by a quick quiz, see ',
          rout: 'quizs',
          routWord: 'our quiz'
        },
      ]
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
