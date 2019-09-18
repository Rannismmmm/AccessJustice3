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
        <v-list expand color="#1976D2" style="width: 80vw; padding: 0">
          <v-list-group
            :value="lg1"
          >
            <template v-slot:activator>
              <v-list-item-title><h1 class="subtitle-1 font-weight-bold mb-4"
                                     style="color: white">Legal Support</h1>
              </v-list-item-title>
            </template>
            <v-container fluid style="padding: 0; background-color: white">
              <v-layout column style="padding-top: 4vh">
                <v-row
                  align="end"
                  wrap
                  justify="space-around"
                >
                  <v-flex xs12 sm6 md4 lg4 xl3
                          v-for="(item,i) in legalCards" :key="i">
                    <v-card class="mx-auto mb-6" width="270px"
                            height="300px">
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
                                {{item.content}}</h1>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-sheet>
                    </v-card>
                  </v-flex>
                </v-row>
                <v-row v-if="isHigh" wrap>
                  <h1 class="subtitle-1 font-weight-bold mb-4 pl-6 pr-2"
                      style="color: #1976D2">Need a place to stay?</h1>
                  <v-btn color="primary" rounded outlined small to="/sheltermap">Click here</v-btn>
                </v-row>
              </v-layout>
            </v-container>
          </v-list-group>
          <v-list-group
            :value="lg2"
          >
            <template v-slot:activator>
              <v-list-item-title><h1 class="subtitle-1 font-weight-bold mb-4"
                                     style="color: white">Support &
                Counseling</h1></v-list-item-title>
            </template>
            <v-container fluid style="padding: 0; background-color: white">
              <v-layout column style="padding-top: 4vh">
                <v-row
                  align="end"
                  wrap
                  justify="space-around"
                >
                  <v-flex xs12 sm6 md4 lg4 xl3
                          v-for="(item,i) in counselCards" :key="i">
                    <v-card class="mx-auto mb-6" width="270px"
                            height="460px">
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
                                {{item.content}}</h1>
                            </v-col>
                            <v-col cols="12">
                              <h1 class="body-2 font-weight-bold"
                                  style="color: black">Click <a
                                class="font-italic" :href="item.path">{{item.linkWord}}</a>
                                to get help</h1>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-sheet>
                    </v-card>
                  </v-flex>
                </v-row>
              </v-layout>
            </v-container>
          </v-list-group>
        </v-list>
      </v-row>
      <v-row wrap style="padding-left: 9vw; padding-right: 9vw; padding-top: 2vh">
        <h1 class="subtitle-1 font-weight-bold mb-4 pl-6 pr-2"
            style="color: #1976D2">Want to see more options?</h1>
        <v-btn color="primary" rounded outlined small to="/support">Click here</v-btn>
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
            content: 'Find information and get access to free face-to-face legal advice.\n' +
              'Call 1300 792 387 for help.',
            color: 'grey lighten-2'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Support groups and counselling on relationships, and for abusive and abused partners.' +
              'To be connected to the nearest Relationships Australia, call 1300 364 277 (for the cost of a local call).',
            color: 'grey lighten-2'
          }
          ,
          {
            title: '1800RESPECT',
            content: '24 hour national sexual assault, family and domestic violence counselling line for' +
              'any Australian who has experienced, or is at risk of, family and domestic violence and/or sexual assault.' +
              'Call toll-free 1800 737 732.',
            color: 'grey lighten-2'
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
            title: 'PSYCH CENTRAL',
            content: 'eheadspace provides free online and telephone support and counselling to young people ' +
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
