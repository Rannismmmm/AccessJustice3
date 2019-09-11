<template>
  <v-container>
    <v-container fluid
                 class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 20px"
        >
          <h4 class="display-1 mb-4" style="color: #1976D2">{{mainTitle}}</h4>
        </v-row>
        <v-row
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
    <v-row v-if="activeCards" justify="space-around" wrap>
      <v-flex xs12 sm6 md4 lg3 xl3 v-for="(card,i) in activeCards" :key="i">
        <v-card class="mx-auto mb-6" height="350px" width="280px">
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <!--<v-img src="http://source.unsplash.com/6S27S6pZ6o0"-->
              <!--height="500px">-->
              <v-sheet :color="card.color" height="60%" width="auto">
                <v-container fill-height fluid>
                  <v-layout column>
                    <v-row xs12 align="center" justify="center">
                        <span
                          class="headline white--text">{{card.title}}</span>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-sheet>
              <!--</v-img>-->
              <v-card-text>
                <div>
                  <h2 class="subtitle-1">{{card.comment}}
                  </h2>
                </div>
              </v-card-text>
              <v-row align="end" class="ml-0 mr-0">
                <v-card-actions style="width: 100%">
                  <v-btn block outlined color="primary"
                         :to="card.path">
                    More
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
    <v-row
      v-if="positiveCards"
      align="end"
      wrap
      justify="space-around"
    >
      <v-flex xs12 sm12 md4 lg3 xl3 v-for="(item,i) in positiveCards" :key="i">
        <v-card class="mx-auto mb-6" style="width: 270px; height: 350px;">
          <v-sheet :color="item.color" height="100%" width="auto">
            <v-container fill-height fluid align-start class="pa-12">
              <v-row no-gutters>
                <v-col cols="12">
                  <h1 class="title font-weight-thick mb-2" style="color: #1976D2">{{item.title}}</h1>
                </v-col>
                <v-col cols="12">
                  <h1 class="body-2">{{item.content}}</h1>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
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
      }
    }
  }
</script>

<style scoped>

</style>
