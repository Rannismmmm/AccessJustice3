<template>
  <v-container fluid style="padding: 0px" v-if="appear">
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
                    life of emotionally</h4>
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
        height="400"
        justify="center"
        align="center"
        style="width: 100vw"
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
                    life of </h4>
                </v-row>
                <v-row justify="center">
                  <h4 class="subtitle-1 mb-4" style="color: white">emotionally
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
    <v-row wrap class="pl-12 pr-12">
      <v-container fluid>
        <v-layout column>
          <v-row
            align="center"
            justify="center"
            wrap
            class="pt-12 pb-5"
          >
            <h4 class="display-2 mb-4 hidden-sm-and-down" style="color: #1976D2">
              How It Works</h4>
            <h4 class="display-1 mb-4 hidden-md-and-up" style="color: #1976D2">
              How It Works</h4>
          </v-row>
          <v-row
            align="center"
            justify="space-around"
            class="pl-10 pr-10"
            wrap>
            <v-flex xs6 sm6 md4 lg2 xl2 v-for="(card,i) in cards" :key="i">
              <v-card class="mx-auto mb-6" flat height="370" width="100%" :to="card.item.to" @click.native="redirct(card.item)">
                <v-container fluid fill-height class="ma-0 pa-4">
                  <v-layout column class="pl-3 pr-3">
                    <v-row xs12 justify="center" align="start">
                      <v-img :src="card.icon" max-height="110px"
                             contain></v-img>
                    </v-row>
                    <v-row xs12 justify="center" align="start" style="height: 80px">
                      <v-container fluid fill-height class="ma-0 pa-0">
                        <v-layout column>
                          <v-row align="center" justify="center">
                            <span class="title text-center hidden-sm-and-down"
                            style="color: #1976D2">{{card.title}}</span>
                            <span class="subtitle-1 text-center hidden-md-and-up"
                            style="color: #1976D2">{{card.title}}</span>
                          </v-row>
                        </v-layout>
                      </v-container>
                    </v-row>
                    <v-row xs12 justify="center" align="end" class="text-center">
                      <span class="subtitle-1 hidden-sm-and-down">{{card.content}}</span>
                      <span class="subtitle-2 hidden-md-and-up">{{card.content}}</span>
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
            content: 'What is emotional abuse? Understand emotional abuse.',
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
            content: 'Check out our range of available support services.',
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
            title: 'Shelters & Organizations',
            content: 'Search the nearest shelters and organizations.',
            item: {
              text: 'Shelters & Organizations',
              disabled: false,
              to: '/sheltermap'
            }
          }
        ],
        appear: false
      }
    },

    mounted () {
      setTimeout(() => {
        this.appear = true
        }, 20)
    },

    methods: {
      redirct (item) {
        this.$router.push(item.to)
        this.$store.commit('switchView', {redirectionItem: item})
      },

    }
  }
</script>

<style scoped>
</style>
