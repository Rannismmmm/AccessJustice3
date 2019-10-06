<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    width="96vw"
  >
    <v-container fluid fill-height class="pa-0 ma-0">
      <v-layout column>
        <v-row justify="center">
          <v-img
            :src="img"
            max-width="374"
            height="230"
            position="left"
          ></v-img>
        </v-row>
        <v-row wrap style="padding-left: 1vw; padding-right: 1vw">
          <v-card-title>{{name}}</v-card-title>
          <v-card-text>
            <!--<div class="my-4 subtitle-1 black&#45;&#45;text">-->
            <!--$ • Italian, Cafe-->
            <!--</div>-->

            <div>{{summary}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <p class="subtitle-2 text--primary">Open on {{date}} during <span
              style="color: #1976D2">{{start}}</span> and <span
              style="color: #1976D2">{{end}}</span></p>
          </v-card-text>
        </v-row>
        <v-row align="end" class="pl-3">
          <v-card-actions v-if="url">
            <v-btn
              color="deep-purple accent-4"
              text
              @click="openNewTab(url)"
            >
              See Details
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'EventCard',

    props: {
      date: {
        type: String,
        default: 'unavailable'
      },
      start: {
        type: String,
        default: 'unavailable'
      },
      end: {
        type: String,
        default: 'unavailable'
      },
      name: {
        type: String,
        default: 'No name for this event'
      },
      summary: {
        type: String,
        default: 'No summary for this event'
      },
      url: {
        type: String,
        default: null
      },
      img: {
        type: String,
        default: require('../assets/events/eventBackup.jpg')
      }
    },

    methods: {
      openNewTab (url) {
        window.open(url)
      }
    }
  }
</script>

<style scoped>

</style>
