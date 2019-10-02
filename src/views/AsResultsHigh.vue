<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="end"
        justify="center"
        wrap
        style="padding-top: 250px; padding-bottom: 20px">
        <h4 class="display-1 mb-4" style="color: #1976D2">These are our
          recommendations for you.</h4>
      </v-row>
      <v-row
        align="start"
        justify="center"
        style="padding-left: 8vw; padding-right: 8vw;"
      >
        <v-container fluid class="pa-0 ma-0">
          <v-layout column>
            <v-row justify="center" wrap>
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
                              <v-container fill-height fluid align-start
                                           class="pa-9">
                                <v-row no-gutters justify="center">
                                  <v-col cols="12">
                                    <v-container fluid>
                                      <v-layout column>
                                        <v-row justify="center">
                                          <h1
                                            class="title font-weight-thick mb-2"
                                            style="color: #1976D2">
                                            {{item.title}}</h1>
                                        </v-row>
                                      </v-layout>
                                    </v-container>
                                  </v-col>
                                  <v-col cols="12">
                                    <h1 class="body-2" style="color: black">
                                      {{item.content}} <a
                                      class="body-2 font-italic">{{item.tele}}</a>
                                    </h1>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-sheet>
                          </v-card>
                        </v-flex>
                      </v-row>
                      <v-row v-if="isHigh" justify="center" wrap>
                        <h1 class="title font-weight-bold mb-4 pl-6 pr-2"
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
                      <v-row wrap
                             style="padding-left: 9vw; padding-right: 9vw; padding-top: 2vh"
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
                  <!--<v-container fluid style="padding: 0; background-color: white">-->
                  <!--<v-layout column style="padding-top: 4vh">-->
                  <!--<v-row-->
                  <!--align="end"-->
                  <!--wrap-->
                  <!--justify="space-around"-->
                  <!--&gt;-->
                  <!--<v-flex xs12 sm6 md4 lg4 xl3-->
                  <!--v-for="(item,i) in counselCards" :key="i">-->
                  <!--<v-card class="mx-auto mb-6" width="270px"-->
                  <!--height="460px">-->
                  <!--<v-sheet :color="item.color" height="100%"-->
                  <!--width="auto">-->
                  <!--<v-container fill-height fluid align-start-->
                  <!--class="pa-9">-->
                  <!--<v-row no-gutters justify="center">-->
                  <!--<v-col cols="12">-->
                  <!--<v-container fluid>-->
                  <!--<v-layout column>-->
                  <!--<v-row justify="center">-->
                  <!--<h1-->
                  <!--class="title font-weight-thick mb-2"-->
                  <!--style="color: #1976D2">-->
                  <!--{{item.title}}</h1>-->
                  <!--</v-row>-->
                  <!--</v-layout>-->
                  <!--</v-container>-->
                  <!--</v-col>-->
                  <!--<v-col cols="12">-->
                  <!--<h1 class="body-2" style="color: black">-->
                  <!--{{item.content}}</h1>-->
                  <!--</v-col>-->
                  <!--<v-col cols="12">-->
                  <!--<h1 class="body-2 font-weight-bold"-->
                  <!--style="color: black">Click <a-->
                  <!--class="font-italic" :href="item.path">{{item.linkWord}}</a>-->
                  <!--to get help</h1>-->
                  <!--</v-col>-->
                  <!--</v-row>-->
                  <!--</v-container>-->
                  <!--</v-sheet>-->
                  <!--</v-card>-->
                  <!--</v-flex>-->
                  <!--</v-row>-->
                  <!--</v-layout>-->
                  <!--</v-container>-->
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
              'advices and law. Call ',
            color: 'grey lighten-2',
            tele: '1300 792 387'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Relationships Australia provides relationship support services for individuals, ' +
              'families and communities in Australia which include family violence prevention, family ' +
              'dispute resolution, counselling services and ... If you need more help, please Call',
            color: 'grey lighten-2',
            tele: '1300 364 277'
          }
          ,
          {
            title: '1800RESPECT',
            content: '1800RESPECT provides support services about sexual assault, domestic or family violence ' +
              'which include information, referral, and counselling. If you need more help, please Call ',
            color: 'grey lighten-2',
            tele: '1800737732'
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
            title: 'KIDS HELPLINE',
            content: 'Kids Helpline is Australia’s only free, private and confidential 24/7 phone and online counselling ' +
              'service for young people aged 5 to 25. Since 1991, Australia’s kids and young people have been turning to ' +
              'our professional, specialised counsellors. It’s about practical help and emotional support at the critical ' +
              'moment they need someone to listen.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://www.kidshelp.com.au/young-adults'
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
