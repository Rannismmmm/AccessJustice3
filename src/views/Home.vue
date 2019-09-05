<template>
  <v-container fluid style="padding: 0px">
    <v-row wrap>
      <v-parallax
        :src="require('../assets/darkBackground.jpg')"
        height="1000"
        justify="center"
        style="width: 105vw"
        class="hidden-sm-and-down"
      >
        <v-row
          align="end"
          justify="center"
          wrap
        >
          <h1 class="display-4 font-weight-thin mb-4">JUSTICLY</h1>
        </v-row>
        <v-row
          align="start"
          justify="center"
          wrap
        >
          <v-cols cols="8">
            <v-row justify="center">
              <h4 class="display-1 mb-4">The aim of Justicly is to improve
                the
                life of emotional</h4>
            </v-row>
            <v-row justify="center">
              <h4 class="display-1 mb-4">abused women in Melbourne
                because</h4>
            </v-row>
            <v-row justify="center">
              <h4 class="display-1 mb-4">YOU DESERVE A BETTER
                LIFE.</h4>
            </v-row>
          </v-cols>
        </v-row>
      </v-parallax>
      <v-parallax
        :src="require('../assets/darkBackground.jpg')"
        height="700"
        justify="center"
        style="width: 105vw"
        class="hidden-md-and-up pt-12"
      >
        <v-row
          align="end"
          justify="center"
          wrap
        >
          <h1 class="display-2 font-weight-thin mb-4 hidden-md-and-up">JUSTICLY</h1>
        </v-row>
        <v-row
          align="start"
          justify="center"
          wrap
        >
          <v-cols cols="8">
            <v-row justify="center">
              <h4 class="subtitle-1 mb-4">The aim of Justicly is to improve
                the
                life of</h4>
            </v-row>
            <v-row justify="center">
              <h4 class="subtitle-1 mb-4">emotional abused women in Melbourne
                because</h4>
            </v-row>
            <v-row justify="center">
              <h4 class="subtitle-1 mb-4">YOU DESERVE A BETTER
                LIFE.</h4>
            </v-row>
          </v-cols>
        </v-row>
      </v-parallax>
    </v-row>
    <v-row wrap>
      <v-col
        cols="12"
        sm="6"
        style="padding: 0px"
        class="hidden-sm-and-down"
      >
        <v-card flat style="width: 50vw; height: 600px;"
                class="pa-lg-12 pa-md-2">
          <v-img :src="require('../assets/candel.jpeg')"
                 style="height: 500px;"
                 class="white--text">
            <v-container fluid fill-height>
              <v-layout column>
                <v-row
                  align="end"
                  justify="center"
                  wrap
                >
                  <h1 class="headline font-weight-thick mb-4">1 in 8 woman in
                    Australia face Emotional Abuse</h1>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                  wrap
                >
                  <h1 class="headline font-weight-thick mb-4">Woman between
                    18-24 suffer the most from it</h1>
                </v-row>
                <v-row
                  align="start"
                  justify="center"
                  wrap
                >
                  <h1 class="headline font-weight-thick mb-4">Melbourne ranks
                    1st
                    in Emotional Abuse in Australia</h1>
                </v-row>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
      <v-row wrap class="hidden-md-and-up pt-4">
        <v-card flat style="width: 110vw; height: 350px">
          <v-img :src="require('../assets/candel.jpeg')"
                 style="height: 350px;"
                 class="white--text">
            <v-container fluid fill-height class="pa-12">
              <v-layout column>
                <v-row
                  align="end"
                  justify="center"
                  wrap
                >
                  <h1 class="subtitle-1 font-weight-thick mb-4">1 in 8 woman in
                    Australia face Emotional Abuse</h1>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                  wrap
                >
                  <h1 class="subtitle-1 font-weight-thick mb-4">Woman between
                    18-24 suffer the most from it</h1>
                </v-row>
                <v-row
                  align="start"
                  justify="center"
                  wrap
                >
                  <h1 class="subtitle-1 font-weight-thick mb-4">Melbourne ranks
                    1st
                    in Emotional Abuse in Australia</h1>
                </v-row>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>
      </v-row>
      <v-col
        cols="12"
        sm="6"
        style="padding: 0px"
        class="hidden-sm-and-down"
      >
        <v-card flat style="width: 50vw; height: 600px;">
          <v-container fluid fill-height>
            <v-layout column>
              <v-row
                align="end"
                justify="center"
                wrap
              >
                <h1 class="display-1 font-weight-thick mb-4">WHAT IS EMOTIONAL
                  ABUSE?</h1>
              </v-row>
              <v-row
                align="center"
                justify="center"
                wrap
              >
                <v-cols cols="8">
                  <v-row justify="center">
                    <h1 class="title mb-4">You can experience
                      abuse and violence without being physically hurt.
                      Emotional
                      abuse does not leave physical scars but it can have a big
                      impact on a person’s mental health and wellbeing. Someone
                      experiencing emotional abuse can feel anxious, depressed
                      and
                      even suicidal.</h1>
                  </v-row>
                  <v-row justify="center">
                    <h1 class="title mb-4">
                      control in the relationship. Physically abusive
                      relationships
                      often include aspects of emotional abuse</h1>
                  </v-row>
                </v-cols>
              </v-row>
              <v-row
                align="start"
                justify="center"
                wrap
              >
                <v-btn rounded outlined large @click="redirct('/assessments')">READ MORE</v-btn>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
      <v-row wrap class="hidden-md-and-up">
        <v-card flat style="width: 110vw; height: 600px;"
                class="pa-12">
          <v-container fluid fill-height>
            <v-layout column>
              <v-row
                align="end"
                justify="center"
                wrap
              >
                <h1 class="subtitle-1 font-weight-thick mb-4">WHAT IS EMOTIONAL
                  ABUSE?</h1>
              </v-row>
              <v-row
                align="center"
                justify="center"
                wrap
              >
                <v-cols cols="8">
                  <v-row justify="center">
                    <h1 class="body-2 mb-4">You can experience
                      abuse and violence without being physically hurt.
                      Emotional
                      abuse does not leave physical scars but it can have a big
                      impact on a person’s mental health and wellbeing. Someone
                      experiencing emotional abuse can feel anxious, depressed
                      and
                      even suicidal.</h1>
                  </v-row>
                  <v-row justify="center">
                    <h1 class="body-2 mb-4">
                      control in the relationship. Physically abusive
                      relationships
                      often include aspects of emotional abuse</h1>
                  </v-row>
                </v-cols>
              </v-row>
              <v-row
                align="start"
                justify="center"
                wrap
              >
                <v-btn rounded outlined @click="redirct('/assessments')">READ MORE</v-btn>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-row>
    </v-row>
    <v-row wrap class="pa-lg-12 pa-md-2">
      <v-img
        :src="require('../assets/darkBackground.jpg')"
        height="400"
        style="width: 100vw"
        justify="center"
        class="white--text"
      >
        <v-container fluid fill-height>
          <v-layout column>
            <v-row
              align="end"
              justify="center"
              wrap
              class="pb-8 hidden-sm-and-down"
            >
              <h1 class="headline font-weight-thick mb-4">ARE YOU IN AN
                EMOTIONALLY ABUSIVE RELATIONSHIP?</h1>
            </v-row>
            <v-row
              align="end"
              justify="center"
              wrap
              class="pb-8 pl-12 pr-12 hidden-lg-and-up"
            >
              <h1 class="subtitle-1 font-weight-thick mb-4">ARE YOU IN AN
                EMOTIONALLY ABUSIVE RELATIONSHIP?</h1>
            </v-row>
            <v-row
              align="start"
              justify="center"
              wrap
            >
              <v-btn class="hidden-sm-and-down" dark rounded outlined large @click="redirct('/assessments')">FIND OUT NOW</v-btn>
              <v-btn class="hidden-lg-and-up" dark rounded outlined @click="redirct('/assessments')">FIND OUT NOW</v-btn>
            </v-row>
          </v-layout>
        </v-container>
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
  import MainSlides from '../components/MainSlides'

  export default {
    name: 'Home',
    components: {MainSlides},
    data () {
      return {
        sheet: false
      }
    },

    mounted () {
      this.sheet = true
    },

    methods: {
      redirct (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
</style>
