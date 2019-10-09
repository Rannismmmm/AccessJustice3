<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-bottom: 20px"
      >
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          Events</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">
          Events</h4>
      </v-row>
      <v-row
        align="start"
        justify="center"
        wrap
        style="padding-left: 2vw; padding-right: 2vw"
      >
        <h1 class="body-1 mb-4 hidden-sm-and-down">Following are the events
          available in Melbourne.</h1>
        <h1 class="body-2 mb-4 hidden-md-and-up">Following are the events available
          in Melbourne.</h1>
      </v-row>
      <v-row
        justify="center"
        wrap
        style="padding-left: 2vw; padding-right: 2vw"
      >
        <v-flex align="end" xs4 sm4 md3 lg3 xl2>
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <v-row wrap align="center" justify="end" class="pr-12 mb-4">
                <h1 class="title mb-4 hidden-sm-and-down">Find events  </h1>
                <h1 class="subtitle-1 mb-4 hidden-md-and-up">Find events </h1>
              </v-row>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex justify="start" xs5 sm4 md3 lg3 xl2>
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
      <v-row v-if="data.length === 0 && !loading" wrap justify="center">
        <h1 class="headline mb-4 hidden-sm-and-down">Sorry, we can't find any
          events during this period</h1>
        <h1 class="subtitle-1 mb-4 hidden-md-and-up">Sorry, we can't find any
          events during this period</h1>
      </v-row>
      <!--<v-row wrap>-->
      <!--<span>{{ad}}</span>-->
      <!--</v-row>-->
    </v-layout>
  </v-container>
</template>

<script>
  import EventCard from './EventCard'
  import axios from 'axios'

  export default {
    name: 'EventsContent',
    components: {EventCard},

    data () {
      return {
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
        nameCollection: []

      }
    },

    methods: {
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

      // isExisting(collection, name) {
      //   collection.forEach(item => {
      //     if (item == name)
      //       return true
      //   })
      //   return false
      // }
    },

    mounted () {
      this.selectedPeriod = 'next_week'
      this.fetchEventData()
    }
  }
</script>

<style scoped>

</style>
