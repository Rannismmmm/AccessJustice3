<template>
  <v-container fluid style="padding: 0px">
    <v-row wrap>
      <v-parallax
        :src="require('../assets/home/homeBack.jpeg')"
        align="center"
        justify="center"
        style="width: 101vw; height: 80vh;"
        class="hidden-sm-and-down"
      >
        <v-container fluid fill-height style="padding-top: 20vh">
          <v-layout column>
            <v-row
              align="end"
              justify="center"
              wrap
            >
              <h1 class="display-3 font-weight-condensed mb-4"
                  style="color: white">
                JUSTICELY</h1>
            </v-row>
            <v-row
              align="start"
              justify="center"
              wrap
            >
              <v-cols cols="8">
                <v-row justify="center">
                  <h4 class="headline mb-4" style="color: white">The aim of
                    Justicely is to improve
                    the
                    life of emotional</h4>
                </v-row>
                <v-row justify="center">
                  <h4 class="headline mb-4" style="color: white">abused women
                    in Melbourne
                    because</h4>
                </v-row>
                <v-row justify="center">
                  <h4 class="headline mb-4" style="color: white">YOU DESERVE A
                    BETTER
                    LIFE.</h4>
                </v-row>
              </v-cols>
            </v-row>
          </v-layout>
        </v-container>
      </v-parallax>
      <v-parallax
        :src="require('../assets/home/homeBack.jpeg')"
        height="700"
        justify="center"
        align="center"
        style="width: 103vw"
        class="hidden-md-and-up pt-12"
      >
        <v-container fluid fill-height>
          <v-layout column>
            <v-row
              align="end"
              justify="center"
              wrap
            >
              <h1 class="display-2 font-weight-thin mb-4 hidden-md-and-up"
                  style="color: white">
                JUSTICELY</h1>
            </v-row>
            <v-row
              align="start"
              justify="center"
              wrap
            >
              <v-cols cols="8">
                <v-row justify="center">
                  <h4 class="subtitle-1 mb-4" style="color: white">The aim of
                    Justicely is to improve
                    the
                    life of</h4>
                </v-row>
                <v-row justify="center">
                  <h4 class="subtitle-1 mb-4" style="color: white">emotional
                    abused women in
                    Melbourne
                    because</h4>
                </v-row>
                <v-row justify="center">
                  <h4 class="subtitle-1 mb-4" style="color: white">YOU DESERVE
                    A BETTER
                    LIFE.</h4>
                </v-row>
              </v-cols>
            </v-row>
          </v-layout>
        </v-container>
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
          <v-img :src="require('../assets/home/homeRose.jpeg')"
                 style="height: 500px;"
                 class="white--text">
            <!--<v-container fluid fill-height>-->
            <!--<v-layout column>-->
            <!--<v-row-->
            <!--align="end"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="headline font-weight-thick mb-4">1 in 8 woman in-->
            <!--Australia face Emotional Abuse</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
            <!--align="center"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="headline font-weight-thick mb-4">Woman between-->
            <!--18-24 suffer the most from it</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
            <!--align="start"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="headline font-weight-thick mb-4">Melbourne ranks-->
            <!--1st-->
            <!--in Emotional Abuse in Australia</h1>-->
            <!--</v-row>-->
            <!--</v-layout>-->
            <!--</v-container>-->
          </v-img>
        </v-card>
      </v-col>
      <v-row wrap class="hidden-md-and-up pt-4" justify="center">
        <v-card flat style="width: 100vw; height: 350px">
          <v-img :src="require('../assets/home/homeRose.jpeg')"
                 style="height: 400px;"
                 class="white--text">
            <!--<v-container fluid fill-height class="pa-12">-->
            <!--<v-layout column>-->
            <!--<v-row-->
            <!--align="end"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="subtitle-1 font-weight-thick mb-4">1 in 8 woman in-->
            <!--Australia face Emotional Abuse</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
            <!--align="center"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="subtitle-1 font-weight-thick mb-4">Woman between-->
            <!--18-24 suffer the most from it</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
            <!--align="start"-->
            <!--justify="center"-->
            <!--wrap-->
            <!--&gt;-->
            <!--<h1 class="subtitle-1 font-weight-thick mb-4">Melbourne ranks-->
            <!--1st-->
            <!--in Emotional Abuse in Australia</h1>-->
            <!--</v-row>-->
            <!--</v-layout>-->
            <!--</v-container>-->
          </v-img>
        </v-card>
      </v-row>
      <v-col
        cols="12"
        sm="6"
        style="padding: 0px"
        class="hidden-sm-and-down"
      >
        <v-card flat
                style="height: 600px; padding-left: 6vw; padding-right: 6vw">
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
                    <h1 class="title mb-4">Emotional abuse can happen without
                      physical violence. Although it does not hurt you
                      physically, it can do harm to your mental health and have
                      a more serious impact. Depression, fear, and anxiety
                      often come with emotional abuse. There are some common
                      behaviors you can check as the sign of an emotionally
                      abusive relationship.</h1>
                  </v-row>
                  <!--<v-row justify="center">-->
                  <!--<h1 class="title mb-4">-->
                  <!--Physically abusive relationships often include aspects of-->
                  <!--emotional abuse.</h1>-->
                  <!--</v-row>-->
                </v-cols>
              </v-row>
              <v-row
                align="start"
                justify="center"
                wrap
              >
                <v-btn rounded outlined large @click="redirct({text: 'About Abuse', disabled: true, to: '/abuse'})">
                  READ MORE
                </v-btn>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
      <v-row wrap class="hidden-md-and-up" justify="center">
        <v-card flat style="width: 100vw; height: 600px;"
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
                    <h1 class="body-2 mb-4">Emotional abuse can happen without
                      physical violence. Although it does not hurt you
                      physically, it can do harm to your mental health and have
                      a more serious impact. Depression, fear, and anxiety
                      often come with emotional abuse. There are some common
                      behaviors you can check as the sign of an emotionally
                      abusive relationship.</h1>
                  </v-row>
                </v-cols>
              </v-row>
              <v-row
                align="start"
                justify="center"
                wrap
              >
                <v-btn rounded outlined @click="redirct({text: 'About Abuse', disabled: true, to: '/abuse'})">READ
                  MORE
                </v-btn>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-row>
    </v-row>
    <v-row wrap class="pl-12 pr-12 pl-2 pr-2">
      <v-img
        :src="require('../assets/home/homebottom.jpg')"
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
              <v-btn class="hidden-sm-and-down" dark rounded outlined large
                     @click="redirct({text: 'Self-Assessment', disabled: true, to: '/assessments/true'})">FIND OUT NOW
              </v-btn>
              <v-btn class="hidden-md-and-up" dark rounded outlined
                     @click="redirct('/assessments/true')">FIND OUT NOW
              </v-btn>
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
      redirct (item) {
        this.$router.push(item.to)
        this.$store.commit('switchView', item)
      }
    }
  }
</script>

<style scoped>
</style>
