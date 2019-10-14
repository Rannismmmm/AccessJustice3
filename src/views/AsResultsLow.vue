<template>
  <v-container fluid v-if="appear">
    <v-layout column>
      <v-row
        align="end"
        justify="center"
        wrap
        class="hidden-sm-and-down text-center"
        style="padding-top: 250px; padding-bottom: 20px">
        <h4 class="display-1 mb-4" style="color: #1976D2">These are our
          recommendations for you.</h4>
      </v-row>
      <v-row
        align="end"
        justify="center"
        wrap
        class="hidden-md-and-up text-center pl-3 pr-3"
        style="padding-top: 100px">
        <h4 class="headline mb-4" style="color: #1976D2">These are our
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
                    Events</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Events</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid>
                    <v-layout column>
                      <v-row
                        justify="center"
                        wrap
                        style="padding-left: 2vw; padding-right: 2vw"
                      >
                        <v-flex align="end" xs5 sm4 md3 lg3 xl2>
                          <v-container fluid fill-height class="pa-0 ma-0">
                            <v-layout column>
                              <v-row wrap align="center" justify="end"
                                     class="pr-12 mb-4">
                                <h1 class="title mb-4 hidden-sm-and-down" style="color: black">Find
                                  events  </h1>
                                <h1 class="subtitle-1 mb-4 hidden-md-and-up" style="color: black">
                                  Find events </h1>
                              </v-row>
                            </v-layout>
                          </v-container>
                        </v-flex>
                        <v-flex justify="start" xs7 sm6 md3 lg3 xl2>
                          <v-container fluid fill-height class="pa-0 ma-0">
                            <v-layout column>
                              <v-row wrap align="end" justify="start">
                                <v-overflow-btn
                                  class="my-2"
                                  :items="periods"
                                  solo
                                  v-model="selectedPeriod"
                                  @change="fetchEventData"
                                ></v-overflow-btn>
                              </v-row>
                            </v-layout>
                          </v-container>
                        </v-flex>
                      </v-row>
                      <v-row v-if="loading" justify="center">
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-row>
                      <v-row v-if="data.length !== 0" wrap>
                        <event-card
                          v-for="(card, i) in data"
                          :key="i"
                          :img="card.img"
                          :name="card.name"
                          :summary="card.summary"
                          :url="card.url"
                          :date="card.date"
                          :start="card.start"
                          :end="card.end"
                          :address="card.address"
                        ></event-card>
                      </v-row>
                      <v-row v-if="data.length === 0 && !loading" wrap
                             justify="center">
                        <h1 class="headline mb-4 hidden-sm-and-down">Sorry, we
                          can't find any
                          events during this period</h1>
                        <h1 class="subtitle-1 mb-4 hidden-md-and-up">Sorry, we
                          can't find any
                          events during this period</h1>
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
                    Apps</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Apps</h1>
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
                        <v-flex xs12 sm6 md4 lg4 xl4
                                v-for="(item,i) in appsCards" :key="i">
                          <v-card class="mx-auto mb-6" width="270px"
                                  height="460px">
                            <v-sheet :color="item.color" height="100%"
                                     width="auto">
                              <v-container fill-height fluid
                                           class="pa-9">
                                <v-layout column>
                                  <v-row no-gutters justify="center">
                                    <v-col cols="12">
                                      <v-container
                                        style="padding: 0; margin: 0"
                                        fluid>
                                        <v-layout column>
                                          <v-row justify="center">
                                            <v-img max-width="80" contain
                                                   :src="item.icon"></v-img>
                                          </v-row>
                                        </v-layout>
                                      </v-container>
                                    </v-col>
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
                                  <v-row cols="12" align="end">
                                    <v-container fluid>
                                      <v-layout column>
                                        <v-row justify="space-around">
                                          <v-card v-if="item.ios" hover
                                                  @click="openNewTab(item.ios)">
                                            <v-img max-width="100px"
                                                   :src="require('../assets/icons/ios.jpeg')"></v-img>
                                          </v-card>
                                          <v-card v-if="item.android" hover
                                                  @click="openNewTab(item.android)">
                                            <v-img max-width="100px"
                                                   :src="require('../assets/icons/android.jpeg')"></v-img>
                                          </v-card>
                                        </v-row>
                                      </v-layout>
                                    </v-container>
                                  </v-row>
                                </v-layout>
                              </v-container>
                            </v-sheet>
                          </v-card>
                        </v-flex>
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
                    Articles</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Articles</h1>
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
                        <v-flex xs12 sm6 md4 lg4 xl4
                                v-for="(item,i) in articleCards" :key="i">
                          <v-card class="mx-auto mb-6" width="270px"
                                  height="600px">
                            <v-sheet :color="item.color" height="100%"
                                     width="auto">
                              <v-container fill-height fluid align-start
                                           class="pl-9 pr-9">
                                <v-layout column>
                                  <v-row cols="12">
                                    <v-img style="height: 200px"
                                           :src="item.icon"></v-img>
                                  </v-row>
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
                                    <v-col v-if="item.redirect"
                                           cols="12">
                                        <a class="title font-weight-bold"
                                          @click="openNewTab(item.redirect)">Visit website</a>
                                    </v-col>
                                  </v-row>
                                </v-layout>
                              </v-container>
                            </v-sheet>
                          </v-card>
                        </v-flex>
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
                                       class="pt-7 pl-12 hidden-sm-and-down"
                                       justify="start">
                                  <h1
                                    class="title font-weight-bold mb-4 pl-6 pr-2"
                                    style="color: black">Check out our range of
                                    support
                                    services available for free.</h1>
                                  <v-btn color="primary" rounded @click="redirct({title: 'Find Help', path: '/support'})">
                                    Click
                                    here
                                  </v-btn>
                                </v-row>
                                <v-row wrap
                                       class="ma-4 hidden-md-and-up text-center"
                                       justify="center">
                                  <h1
                                    class="subtitle-1 font-weight-bold mb-4 pl-6 pr-2"
                                    style="color: black">Check out our range of
                                    support
                                    services available for free.</h1>
                                  <v-btn small color="primary" rounded @click="redirct({title: 'Find Help', path: '/support'})">
                                    Click
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
  import axios from 'axios'
  import EventCard from '../components/EventCard'

  export default {
    name: 'AsResultsLow',
    components: {EventCard},
    data () {
      return {
        lg1: true,
        lg2: false,
        appsCards: [
          {
            icon: require('../assets/icons/CALM HARM.jpg'),
            title: 'CALM HARM',
            content: 'Calm Harm provides tasks to help you resist or manage the urge to self-harm. ' +
              'You can make it private by setting a password, and personalise the app if you so wish. ' +
              'You will be able to track your progress and notice change.',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/gb/app/calm-harm/id961611581',
            android: 'https://play.google.com/store/apps/details?id=uk.org.stem4.calmharm&hl=en_GB'
          },
          {
            icon: require('../assets/icons/CALM.png'),
            title: 'CALM',
            content: 'Our blog is dedicated to adventures in mindfulness, the power of a good night\'s sleep, ' +
              'and cultivating a healthier and happier life. We hope you enjoy your visit!',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/calm-com/id571800810',
            android: 'https://play.google.com/store/apps/details?id=com.calm.android'
          },
          {
            icon: require('../assets/icons/Breakup shakeup.png'),
            title: 'BREAKUP SHAKEUP',
            content: 'The app aims to help young people overcome those moments of despair by planning activities ' +
              'with friends and relatives, rethinking their negative thoughts, and learning new strategies for ' +
              'coping with the difficult times.',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/au/app/breakup-shakeup/id1017200579',
            android: 'https://play.google.com/store/apps/details?id=com.rxbreakup&hl=en'
          },
          {
            icon: require('../assets/icons/HABIT BULL.png'),
            title: 'HABITBULL',
            content: 'HabitBull helps you organize your life. Easily keep track of all your habits, routines and ' +
              'repeated to-dos. Smash Through Your Goals; Fully Customizable; Cut Bad Habits From Your Life; Add ' +
              'Some Positive Habits',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/bj/app/habitbull-habit-tracker/id1041482672',
            android: 'https://play.google.com/store/apps/details?id=com.oristats.habitbull'
          },
          {
            icon: require('../assets/icons/7CUPS.jpg'),
            title: '7CUPS',
            content: '180 professional therapists; Over 300,000 trained listeners; Helped over 25 million people. ' +
              'No matter who you are or what you’re going through, this is a place where you’ll be heard and cared for. ',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/7cupsoftea/id921814681?utm_source=7cupsfooter',
            android: 'https://play.google.com/store/apps/details?id=com.sevencupsoftea.app&utm_source=7cupsfooter'
          },
          {
            icon: require('../assets/icons/HAPPYIFY.png'),
            title: 'HAPPIFY',
            content: 'Overcome stress and negative thoughts. Build resilience.Happify is the single destination ' +
              'for effective, evidence-based solutions for better mental health and wellbeing in the 21st century.',
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/happify/id730601963',
            android: 'https://play.google.com/store/apps/details?id=com.happify.happifyinc&hl=en'
          }
        ],
        articleCards: [
          {
            title: '11 Ways to Chill Out in 5 Minutes or Less',
            content: 'You\'re on a beautiful, tropical beach, with yellow dunes and crystal-clear blue waters. ' +
              'You can feel the sand in your toes and the wind in your hair … not doing it for you? Not surprising. ' +
              'Different things relax different people, and even the calmest among us experience...',
            color: 'grey lighten-2',
            redirect: 'https://www.goodnet.org/articles/11-ways-to-chill-out-in-5-minutes-or-less',
            org: 'Goodnet.org.',
            icon: require('../assets/Articles/trees.jpg')
          },
          {
            title: 'How to be awesome at self-care',
            content: 'Learning to look after yourself will build your self-confidence and help you give out positive vibes. ' +
              'It’s not always easy to get into the habit of self-care, so here are a few ideas to get you started.',
            color: 'grey lighten-2',
            redirect: 'https://au.reachout.com/articles/how-to-be-awesome-at-self-care',
            org: 'ReachOut.com.',
            icon: require('../assets/Articles/shelf.jpg')
          },
          {
            title: 'Living with Anxiety',
            content: 'Anxiety can be challenging to live with but there are many effective ways to cope with it. Find the ' +
              'combination that works for you. Of all existing psychological and mental maladies, anxiety disorders are ' +
              'the most common...',
            color: 'grey lighten-2',
            redirect: 'https://www.psycom.net/living-with-anxiety/',
            org: 'Psycom.net.',
            icon: require('../assets/Articles/shore.jpg')
          },
          {
            title: 'Self-help for depression',
            content: 'Self-help strategies for depression can be really effective for improving mood. Find out more about ' +
              'how to help yourself with depression through self-help strategies that you can use to manage the symptoms ' +
              'of depression, and what to do if you’re still finding it difficult.',
            color: 'grey lighten-2',
            redirect: 'https://au.reachout.com/articles/self-help-for-depression',
            org: 'ReachOut.com.',
            icon: require('../assets/Articles/self_help.jpg')
          },
          {
            title: 'Therapy for Anxiety Disorders',
            content: 'Whether you’re suffering from panic attacks, obsessive thoughts, unrelenting worries, or an incapacitating ' +
              'phobia, it’s important to know that you don’t have to live with anxiety and fear. Treatment can help, and for many ' +
              'anxiety problems, therapy is often the most...',
            color: 'grey lighten-2',
            redirect: 'https://www.helpguide.org/articles/anxiety/therapy-for-anxiety-disorders.htm',
            org: 'HelpGuide.org.',
            icon: require('../assets/Articles/hands.jpg')
          },
          {
            title: 'Depression Treatment',
            content: 'When you’re depressed, it can feel like you’ll never get out from under a dark shadow. However, even ' +
              'the most severe depression is treatable. So, if your depression is keeping you from living the life you want ' +
              'to, don’t hesitate to seek help...many different treatment options available.',
            color: 'grey lighten-2',
            redirect: 'https://www.helpguide.org/articles/depression/depression-treatment.htm',
            org: 'HelpGuide.org.',
            icon: require('../assets/Articles/baloons.jpg')
          }
        ],
        data: [],
        periods: [
          {
            text: 'Today',
            value: 'today'
          },
          {
            text: 'Tomorrow',
            value: 'tomorrow'
          }, {
            text: 'This weekend',
            value: 'this_weekend'
          },
          {
            text: 'Next week',
            value: 'next_week'
          },
          {
            text: 'This month',
            value: 'this_month'
          },
          {
            text: 'Next month',
            value: 'next_month'
          }],
        selectedPeriod: null,
        loading: false,
        appear: false
      }
    },

    methods: {

      redirct (card) {
        this.$router.push(card.path)
        this.$store.commit('switchView', { redirectionItem: {
          text: card.title,
          disabled: false,
          to: card.path
        }})
      },

      fetchEventData () {
        this.loading = true
        this.data = []
        axios.get('https://www.eventbriteapi.com/v3/events/search/?q=women%20abuse,health+women&location.address=Melbourne&' +
          'location.within=100km&location.latitude=-37.814&location.longitude=144.96332&start_date.keyword=' + this.selectedPeriod +
          '&token=AALBGSQBEDEA24BUV7QP')
          .then(response => {
            if (response.data.events.length > 0) {
              response.data.events.forEach(item => {
                if (item.venue_id) {
                  let obj = {
                    name: item.name.text,
                    url: item.url,
                    date: item.start.local.slice(0, item.start.local.indexOf('T')),
                    start: item.start.local.slice((item.start.local.indexOf('T') + 1), -3),
                    end: item.end.local.slice((item.end.local.indexOf('T') + 1), -3),
                    is_free: item.is_free,
                    summary: item.summary
                  }
                  let addressUrl = 'https://www.eventbriteapi.com/v3/venues/' + item.venue_id + '/?token=AALBGSQBEDEA24BUV7QP'
                  axios.get(addressUrl)
                    .then(resp => {
                      obj.address = resp.data.address.localized_address_display
                      if (item.logo)
                        obj.img = item.logo.original.url
                      if (obj.is_free === true) {
                        this.data.push(obj)
                        // this.nameCollection.push(obj.name)
                        // this.nameCollection.push(this.isExisting(nameCollection, obj.name))
                      }
                      this.loading = false
                    })
                    .catch(error => {
                      this.data = error
                    })
                }
              })
            } else {
              this.loading = false
            }
          })
          .catch(error => {
            this.data = error
          })
      },

      openNewTab (url) {
        window.open(url)
      }
    },

    mounted () {
      setTimeout(() => {
        this.appear = true
      }, 20)
      this.selectedPeriod = 'this_weekend'
      this.fetchEventData()
    }
  }
</script>

<style scoped>

</style>
