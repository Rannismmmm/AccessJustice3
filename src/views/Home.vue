<template>
  <v-container fluid style="padding: 0px">
    <v-row wrap>
      <v-img
        :src="require('../assets/home/homeBack.jpeg')"
        align="center"
        justify="center"
        style="width: 100%; height: 80vh;"
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
      </v-img>
      <v-img
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
      </v-img>
    </v-row>
    <!--<v-row wrap>-->
      <!--<v-col-->
        <!--cols="12"-->
        <!--sm="6"-->
        <!--style="padding: 0px"-->
        <!--class="hidden-sm-and-down"-->
      <!--&gt;-->
        <!--<v-card flat style="width: 50vw; height: 600px;"-->
                <!--class="pa-lg-12 pa-md-2">-->
          <!--<v-img :src="require('../assets/home/homeRose.jpeg')"-->
                 <!--style="height: 500px;"-->
                 <!--class="white&#45;&#45;text">-->
          <!--</v-img>-->
        <!--</v-card>-->
      <!--</v-col>-->
      <!--<v-row wrap class="hidden-md-and-up pt-4" justify="center">-->
        <!--<v-card flat style="width: 100vw; height: 350px">-->
          <!--<v-img :src="require('../assets/home/homeRose.jpeg')"-->
                 <!--style="height: 400px;"-->
                 <!--class="white&#45;&#45;text">-->
          <!--</v-img>-->
        <!--</v-card>-->
      <!--</v-row>-->
      <!--<v-col-->
        <!--cols="12"-->
        <!--sm="6"-->
        <!--style="padding: 0px"-->
        <!--class="hidden-sm-and-down"-->
      <!--&gt;-->
        <!--<v-card flat-->
                <!--style="height: 600px; padding-left: 6vw; padding-right: 6vw">-->
          <!--<v-container fluid fill-height>-->
            <!--<v-layout column>-->
              <!--<v-row-->
                <!--align="end"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<h1 class="display-1 font-weight-thick mb-4">WHAT IS EMOTIONAL-->
                  <!--ABUSE?</h1>-->
              <!--</v-row>-->
              <!--<v-row-->
                <!--align="center"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<v-cols cols="8">-->
                  <!--<v-row justify="center">-->
                    <!--<h1 class="title mb-4">Emotional abuse can happen without-->
                      <!--physical violence. Although it does not hurt you-->
                      <!--physically, it can do harm to your mental health and have-->
                      <!--a more serious impact. Depression, fear, and anxiety-->
                      <!--often come with emotional abuse. There are some common-->
                      <!--behaviors you can check as the sign of an emotionally-->
                      <!--abusive relationship.</h1>-->
                  <!--</v-row>-->
                  <!--&lt;!&ndash;<v-row justify="center">&ndash;&gt;-->
                  <!--&lt;!&ndash;<h1 class="title mb-4">&ndash;&gt;-->
                  <!--&lt;!&ndash;Physically abusive relationships often include aspects of&ndash;&gt;-->
                  <!--&lt;!&ndash;emotional abuse.</h1>&ndash;&gt;-->
                  <!--&lt;!&ndash;</v-row>&ndash;&gt;-->
                <!--</v-cols>-->
              <!--</v-row>-->
              <!--<v-row-->
                <!--align="start"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<v-btn rounded outlined large-->
                       <!--@click="redirct({text: 'About Abuse', disabled: true, to: '/abuse'})">-->
                  <!--READ MORE-->
                <!--</v-btn>-->
              <!--</v-row>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-card>-->
      <!--</v-col>-->
      <!--<v-row wrap class="hidden-md-and-up" justify="center">-->
        <!--<v-card flat style="width: 100vw; height: 600px;"-->
                <!--class="pa-12">-->
          <!--<v-container fluid fill-height>-->
            <!--<v-layout column>-->
              <!--<v-row-->
                <!--align="end"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<h1 class="subtitle-1 font-weight-thick mb-4">WHAT IS EMOTIONAL-->
                  <!--ABUSE?</h1>-->
              <!--</v-row>-->
              <!--<v-row-->
                <!--align="center"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<v-cols cols="8">-->
                  <!--<v-row justify="center">-->
                    <!--<h1 class="body-2 mb-4">Emotional abuse can happen without-->
                      <!--physical violence. Although it does not hurt you-->
                      <!--physically, it can do harm to your mental health and have-->
                      <!--a more serious impact. Depression, fear, and anxiety-->
                      <!--often come with emotional abuse. There are some common-->
                      <!--behaviors you can check as the sign of an emotionally-->
                      <!--abusive relationship.</h1>-->
                  <!--</v-row>-->
                <!--</v-cols>-->
              <!--</v-row>-->
              <!--<v-row-->
                <!--align="start"-->
                <!--justify="center"-->
                <!--wrap-->
              <!--&gt;-->
                <!--<v-btn rounded outlined-->
                       <!--@click="redirct({text: 'About Abuse', disabled: true, to: '/abuse'})">-->
                  <!--READ-->
                  <!--MORE-->
                <!--</v-btn>-->
              <!--</v-row>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-card>-->
      <!--</v-row>-->
    <!--</v-row>-->
    <!--<v-row wrap class="pl-12 pr-12 pl-2 pr-2">-->
      <!--<v-img-->
        <!--:src="require('../assets/home/homebottom.jpg')"-->
        <!--height="400"-->
        <!--style="width: 100vw"-->
        <!--justify="center"-->
        <!--class="white&#45;&#45;text"-->
      <!--&gt;-->
        <!--<v-container fluid fill-height>-->
          <!--<v-layout column>-->
            <!--<v-row-->
              <!--align="end"-->
              <!--justify="center"-->
              <!--wrap-->
              <!--class="pb-8 hidden-sm-and-down"-->
            <!--&gt;-->
              <!--<h1 class="headline font-weight-thick mb-4">ARE YOU IN AN-->
                <!--EMOTIONALLY ABUSIVE RELATIONSHIP?</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
              <!--align="end"-->
              <!--justify="center"-->
              <!--wrap-->
              <!--class="pb-8 pl-12 pr-12 hidden-md-and-up"-->
            <!--&gt;-->
              <!--<h1 class="subtitle-1 font-weight-thick mb-4">ARE YOU IN AN-->
                <!--EMOTIONALLY ABUSIVE RELATIONSHIP?</h1>-->
            <!--</v-row>-->
            <!--<v-row-->
              <!--align="start"-->
              <!--justify="center"-->
              <!--wrap-->
            <!--&gt;-->
              <!--<v-btn class="hidden-sm-and-down" dark rounded outlined large-->
                     <!--@click="redirct({text: 'Self-Assessment', disabled: true, to: '/assessments/true'})">-->
                <!--FIND OUT NOW-->
              <!--</v-btn>-->
              <!--<v-btn class="hidden-md-and-up" dark rounded outlined-->
                     <!--@click="redirct({text: 'Self-Assessment', disabled: true, to: '/assessments/true'})">-->
                <!--FIND OUT NOW-->
              <!--</v-btn>-->
            <!--</v-row>-->
          <!--</v-layout>-->
        <!--</v-container>-->
      <!--</v-img>-->
    <!--</v-row>-->
    <v-row wrap class="pl-12 pr-12">
      <v-container fluid>
        <v-layout column>
          <v-row
            align="center"
            justify="center"
            wrap
            class="pt-12 pb-5"
          >
            <h4 class="display-2 mb-4" style="color: #1976D2">
              How It Works</h4>
          </v-row>
          <v-row
            align="center"
            justify="space-around"
            class="pl-10 pr-10"
            wrap>
            <v-flex xs12 sm6 md4 lg2 xl2 v-for="(card,i) in cards" :key="i">
              <v-card class="mx-auto mb-6" flat height="320" width="100%" :to="card.item.to" @click.native="redirct(card.item)">
                <v-container fluid fill-height class="ma-0 pa-4">
                  <v-layout column class="pl-3 pr-3">
                    <v-row xs12 justify="center" align="start">
                      <v-img :src="card.icon" max-height="110px"
                             contain></v-img>
                    </v-row>
                    <v-row xs12 justify="center" align="start" class="pb-4">
                      <span class="title text-center"
                            style="color: #1976D2">{{card.title}}</span>
                    </v-row>
                    <v-row xs12 justify="center" class="text-center">
                      <span class="subtitle-1">{{card.content}}</span>
                    </v-row>
                    <v-row xs12 class="pb-2 pt-5" justify="center" align="end">
                      <v-btn rounded color="primary" width="115"
                             @click="redirct(card.item)">
                        MORE
                      </v-btn>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-row>
        </v-layout>
      </v-container>
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
        sheet: false,

        cards: [
          {
            icon: require('../assets/home/icons/question.jpeg'),
            title: 'About Abuse',
            content: 'What is emotional abuse? Understand emotional abuse',
            item: {
              text: 'About Abuse',
              disabled: false,
              to: '/abuse'
            }
          },
          {
            icon: require('../assets/home/icons/doc.jpeg'),
            title: 'Self-Assessment',
            content: 'Find out, are you in an emotionally abusive relationship?',
            item: {
              text: 'Self-Assessment',
              disabled: false,
              to: '/assessments/true'
            }
          },
          {
            icon: require('../assets/home/icons/hands.png'),
            title: 'Find Help',
            content: 'Check out our range of support services available for free.',
            item: {
              text: 'Find Help',
              disabled: false,
              to: '/support'
            }
          },
          {
            icon: require('../assets/home/icons/table.jpeg'),
            title: 'Safety Plan',
            content: 'Create a safety plan to prepare yourself for emergency situations.',
            item: {
              text: 'Safety Plan',
              disabled: false,
              to: '/safetyplan'
            }
          },
          {
            icon: require('../assets/home/icons/house.jpeg'),
            title: 'Care Shelters',
            content: 'Need a place to stay? Search the nearest care shelters.',
            item: {
              text: 'Care Shelters',
              disabled: false,
              to: '/sheltermap'
            }
          }
        ]
      }
    },

    mounted () {
      this.sheet = true
    }
    ,

    methods: {
      redirct (item) {
        this.$router.push(item.to)
        this.$store.commit('switchView', {redirectionItem: item})
      }
    }
  }
</script>

<style scoped>
</style>
