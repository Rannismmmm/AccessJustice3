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
        <h1 class="body-1 mb-4 hidden-sm-and-down">These are the events
          available in Melbourne.</h1>
        <h1 class="body-2 mb-4 hidden-md-and-up">These are the events available
          in Melbourne.</h1>
      </v-row>
      <v-row
        justify="center"
        wrap
        style="padding-left: 2vw; padding-right: 2vw"
      >
        <v-flex align="center" xs4 sm4 md3 lg3 xl2>
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <v-row wrap align="center" justify="center">
                <h1 class="title mb-4 hidden-sm-and-down">Find events in </h1>
                <h1 class="subtitle-1 mb-4 hidden-md-and-up">Find events
                  in </h1>
              </v-row>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex justify="start" xs5 sm4 md3 lg3 xl1>
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <v-row wrap align="center" justify="start">
                <v-overflow-btn
                  class="my-2"
                  :items="periods"
                  label="Age Group"
                  dense
                  flat
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
            text: 'This week',
            value: 'next_week'
          }, {
            text: 'This weekend',
            value: 'this_weekend'
          }, {
            text: 'Next month',
            value: 'next_month'
          }, {
            text: 'This month',
            value: 'this_month'
          },
          {
            text: 'Tomorrow',
            value: 'tomorrow'
          }, {
            text: 'Today',
            value: 'today'
          }],
        selectedPeriod: null,
        loading: false,
        ad: []

      }
    },

    methods: {
      fetchEventData () {
        this.loading = true
        this.data = []
        axios.get('https://www.eventbriteapi.com/v3/events/search/?q=abuse+women&location.address=Melbourne&' +
          'location.within=20km&location.latitude=-37.814&location.longitude=144.96332&start_date.keyword=' + this.selectedPeriod +
          '&token=AALBGSQBEDEA24BUV7QP')
          .then(response => {
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
                    this.data.push(obj)
                    // this.ad.push(resp.data.address.localized_address_display)
                  })
                  .catch(error => {
                    this.data = error
                  })
              }
            })
            this.loading = false
          })
          .catch(error => {
            this.data = error
          })
      }
    },

    mounted () {
      this.selectedPeriod = 'this_month'
      this.fetchEventData()
    }
  }
</script>

<style scoped>

</style>
