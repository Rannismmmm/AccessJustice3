<template>
  <span>
    <v-container fluid
                 class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          v-if="mainTitle"
          align="center"
          justify="center"
          wrap
          style="padding-top: 200px; padding-bottom: 20px"
        >
          <h4 class="display-1 mb-4" style="color: #1976D2">{{mainTitle}}</h4>
        </v-row>
        <v-row
          v-if="paragraph"
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <h1 class="body-2 mb-4">{{paragraph}}
            <v-btn v-if="paragraphBtn" text small color="primary">
              {{paragraphBtn}}
            </v-btn>
          </h1>
        </v-row>
      </v-layout>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 200px; padding-bottom: 10px"
      >
        <h4 class="headline mb-4" style="color: #1976D2">{{mainTitle}}</h4>
      </v-row>
    </v-container>
    <v-row v-if="activeCards" justify="center" wrap
           class="hidden-sm-and-down"
           style="margin-left: 8vw; margin-right: 8vw">
      <v-flex xs12 sm6 md4 lg3 xl3 v-for="(card,i) in activeCards" :key="i">
        <v-card class="mx-auto mb-6" height="350px" :width="cardWidth">
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <!--<v-img src="http://source.unsplash.com/6S27S6pZ6o0"-->
              <!--height="500px">-->
              <v-sheet :color="card.color" height="100%" width="auto">
                <v-container fill-height fluid>
                  <v-layout column>
                    <v-row xs12 align="center" justify="center">
                        <span
                          class="headline white--text">{{card.title}}</span>
                    </v-row>
                    <v-row align="center" justify="center" class="ml-0 mr-0">
                        <v-btn width="120px" rounded outlined color="white"
                         :to="card.path">
                        More
                        </v-btn>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-sheet>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
    <v-row v-if="activeCards" justify="space-around" wrap
           class="hidden-md-and-up">
      <v-flex xs12 sm6 md4 lg3 xl3 v-for="(card,i) in activeCards" :key="i"
              class="pt-3">
        <v-card class="mx-auto" height="350px" width="280px">
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <!--<v-img src="http://source.unsplash.com/6S27S6pZ6o0"-->
              <!--height="500px">-->
              <v-sheet :color="card.color" height="100%" width="auto">
                <v-container fill-height fluid>
                  <v-layout column>
                    <v-row xs12 align="end" justify="center">
                        <span
                          class="headline white--text">{{card.title}}</span>
                    </v-row>
                    <v-row align="center" justify="center" class="ml-0 mr-0">
                        <v-btn width="120px" rounded outlined color="white"
                         :to="card.path">
                        More
                        </v-btn>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-sheet>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
    <v-container fluid>
      <v-col cols="12">
      <v-row
        v-if="positiveCards"
        align="end"
        wrap
        justify="space-around"
      >
      <v-flex xs12 sm6 md4 lg4 xl3 v-for="(item,i) in positiveCards" :key="i">
        <v-card class="mx-auto mb-6" :height="cardHeight" :width="cardWidth">
          <v-sheet :color="item.color" height="100%" width="auto">
            <v-container fill-height fluid align-start class="pa-9">
              <v-row no-gutters justify="center">
                <v-col v-if="item.icon" cols="12">
                  <v-container style="padding: 0; margin: 0" fluid>
                    <v-layout column>
                      <v-row justify="center">
                        <v-img :max-width="iconHeight" contain :src="item.icon"></v-img>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-col>
                <v-col cols="12">
                  <v-container fluid>
                    <v-layout column>
                      <v-row justify="center">
                  <h1 class="title font-weight-thick mb-2"
                      style="color: #1976D2">{{item.title}}</h1>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-col>
                <v-col cols="12">
                  <h1 class="body-2">{{item.content}}</h1>
                </v-col>
                <v-col v-if="item.path" cols="12">
                  <h1 class="body-2 font-weight-bold">Click <a
                    class="font-italic" :href="item.path">{{item.linkWord}}</a> to get help</h1>
                </v-col>
                <v-col class="pa-1" v-if="item.redirect" cols="12">
                  <h1 class="body-2 font-weight-bold">I want to <a
                    class="font-italic" :href="item.redirect">Read More</a> from {{item.org}}</h1>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-card>
      </v-flex>
      </v-row>
      </v-col>
    </v-container>
  </span>
</template>

<script>
  export default {
    name: 'SupportTemplate',

    data () {
      return {
        // items: [
        //   {
        //     title: 'VICTORIA LEGAL AID',
        //     content: 'Find information and get access to free face-to-face legal advice.\n' +
        //       'Call 1300 792 387 for help.',
        //     color: 'grey lighten-2'
        //   },
        //   {
        //     title: 'VICTORIA LEGAL AID',
        //     content: 'Find information and get access to free face-to-face legal advice.\n' +
        //       'Call 1300 792 387 for help.',
        //     color: 'grey lighten-2'
        //   },
        //   {
        //     title: 'VICTORIA LEGAL AID',
        //     content: 'Find information and get access to free face-to-face legal advice.\n' +
        //       'Call 1300 792 387 for help.',
        //     color: 'grey lighten-2'
        //   }
        // ]
      }
    },

    props: {
      mainTitle: {
        type: String,
        default: 'Title'
      },

      paragraph: {
        type: String,
        default: null
      },

      paragraphBtn: {
        type: String,
        default: null
      },

      activeCards: {
        type: Array,
        default: () => []
      },

      positiveCards: {
        type: Array,
        default: () => []
      },

      cardWidth: {
        type: String,
        default: '270px'
      },

      cardHeight: {
        type: String,
        default: '350px'
      },

      iconHeight: {
        type: String,
        default: '80px'
      }
    }
  }
</script>

<style scoped>

</style>
