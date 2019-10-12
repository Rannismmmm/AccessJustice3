<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="end"
        justify="center"
        wrap
        style="padding-top: 200px; padding-bottom: 20px">
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">These are our
          recommendations for you.</h4>
        <h4 class="title mb-4 hidden-md-and-up pl-4 pr-4 text-center" style="color: #1976D2">These are our
          recommendations for you.</h4>
      </v-row>
      <v-row
        align="start"
        justify="center"
        style="padding-left: 8vw; padding-right: 8vw;"
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout column>
            <v-row v-if="isHigh" justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    Legal support</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Legal support</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid
                               style="padding: 0; background-color: white">
                    <v-layout column style="padding-top: 4vh">
                      <v-row
                        align="end"
                        wrap
                        justify="space-around"
                      >
                        <v-flex xs12 sm6 md4 lg4 xl3
                                v-for="(item,i) in legalCards" :key="i">
                          <v-card class="mx-auto mb-6" width="270px"
                                  height="350px">
                            <v-sheet :color="item.color" height="100%"
                                     width="auto">
                              <v-container fill-height fluid
                                           class="pa-9">
                                <v-layout column>
                                  <v-row justify="center">
                                    <h1
                                      class="title font-weight-thick mb-2"
                                      style="color: #1976D2">
                                      {{item.title}}</h1>
                                  </v-row>
                                  <v-row cols="12">
                                    <h1 class="body-2" style="color: black">
                                      {{item.content}}
                                    </h1>
                                  </v-row>
                                  <v-row justify="start" align="end">
                                    <p style="color: black"
                                       class="font-weight-bold">
                                      Call <span
                                      class="font-italic font-weight-bold"
                                      style="color: #1976D2">{{item.tele}}</span>
                                    </p>
                                  </v-row>
                                </v-layout>
                              </v-container>
                            </v-sheet>
                          </v-card>
                        </v-flex>
                      </v-row>
                      <v-row v-if="isHigh" justify="center" wrap class="pt-4">
                        <h1 class="headline font-weight-bold mb-4 pl-6 pr-2"
                            style="color: #1976D2">Need a place to stay?</h1>
                        <v-btn color="primary" rounded
                               to="/sheltermap">Click here
                        </v-btn>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row v-if="!isHigh" justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    Support & Counseling</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Support & Counseling</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid>
                    <v-layout column>
                      <v-row wrap>
                        <v-flex xs12 sm6 md4 lg4 xl3
                                v-for="(item,i) in counselCards" :key="i">
                          <v-card class="mx-auto mb-6" width="350px"
                                  height="350px">
                            <v-sheet :color="item.color" height="100%"
                                     width="auto">
                              <v-container fill-height fluid
                                           class="pa-9 pb-0">
                                <v-layout column>
                                  <v-row justify="center">
                                    <h1
                                      class="title font-weight-thick mb-2"
                                      style="color: #1976D2">
                                      {{item.title}}</h1>
                                  </v-row>
                                  <v-row wrap align="start">
                                    <h1 class="body-2" style="color: black">
                                      {{item.content}}
                                    </h1>
                                  </v-row>
                                  <v-row justify="start" align="end">
                                    <a class="title pb-4"
                                      @click="openNewTab(item.path)"
                                      to="">Visit website</a>
                                  </v-row>
                                </v-layout>
                              </v-container>
                            </v-sheet>
                          </v-card>
                        </v-flex>
                      </v-row>
                      <v-row justify="center" wrap class="pt-4">
                        <h1 class="headline font-weight-bold mb-4 pl-6 pr-2"
                            style="color: #1976D2">Need a safety plan?</h1>
                        <v-btn color="primary" rounded
                               to="/safetyplan">Click here
                        </v-btn>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    See more options</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    See more options</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid class="pa-0 ma-0">
                    <v-layout column>
                      <v-row wrap class="pt-7 pl-12"
                             justify="start">
                        <h1 class="title font-weight-bold mb-4 pl-6 pr-2"
                            style="color: black">Check out our range of support
                          services available for free.</h1>
                        <v-btn color="primary" rounded to="/support">Click
                          here
                        </v-btn>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-row>
          </v-layout>
        </v-container>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  import LegalSupport from './LegalSupport'

  export default {
    name: 'AsResultsHigh',
    components: {},
    data () {
      return {
        legalCards: [
          {
            title: 'VICTORIA LEGAL AID',
            content: 'Victoria Legal Aid provides services to help people who is suffering ' +
              'from social and economical disadvantage people. The service mainly targets people ' +
              'in the state of Victoria, Australia and it offers different kinds of information and ' +
              'advices and law.',
            color: 'grey lighten-2',
            tele: '1300 792 387'
          },
          {
            title: 'LIFELINE',
            content: 'Lifeline provides crisis support to anyone across Australia experiencing any sort ' +
              'of personal crisis. It\'s free and working 24-hour which inludes call service, face-to-face, ' +
              'and online assistance.',
            color: 'grey lighten-2',
            tele: '13 11 14'
          }
          ,
          {
            title: '1800RESPECT',
            content: '1800RESPECT provides support services about sexual assault, domestic or family violence ' +
              'which include information, referral, and counselling. If you need more help, please contact 1800RESPECT.',
            color: 'grey lighten-2',
            tele: '1800 737 732'
          }
        ],
        counselCards: [
          {
            title: 'PSYCH CENTRAL',
            content: 'Psych Central is the Internet’s largest and oldest independent mental health online resource. ' +
              'Since 1995, our award-winning website has been run by mental health professionals offering reliable, ' +
              'trusted information and over 250 support groups to individuals struggling with a problem in their lives. ' +
              'They are today’s modern voice for mental health information, emotional support, and advocacy.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://psychcentral.com/'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Relationships Australia provides relationship support services for individuals, ' +
              'families and communities in Australia which include family violence prevention, family ' +
              'dispute resolution, counselling services and ... If you need more help, please Call',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://www.relationships.org.au/'
          }
          ,
          {
            title: 'HEADSPACE',
            content: 'Headspace provides free online and telephone support and counselling to young people ' +
              '12 - 25 and their families and friends. If you’re based in Australia and going through a tough time, ' +
              'eheadspace can help. You can talk 1-on-1 with an eheadspace clinician via an online chat, ' +
              'email or over the phone. You can also join group chats which cover a variety of helpful topics and are a ' +
              'great way to learn from other people’s experiences.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://headspace.org.au/'
          }
        ],
        isHigh: false,
        lg1: true,
        lg2: false
      }
    },

    methods: {
      openNewTab (url) {
        window.open(url)
      }
    },

    watch: {},

    mounted () {
      if (this.$route.params.level == 'high') {
        this.isHigh = true
      }
    }
  }
</script>

<style scoped>
  .theme--dark.v-expansion-panels .v-expansion-panel {
    background-color: white;
  }
</style>
