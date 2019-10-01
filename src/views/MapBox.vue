<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
      >
        <!--<v-btn @click="">change location</v-btn>-->
      </v-row>
      <v-row
        no-gutters
        justify="center"
        style="padding-left: 8vw; padding-right: 8vw"
      >
        <v-col cols="12"
               sm="3" class="pr-4">
          <v-card
            class="mx-auto"
            width="100%"
            tile
          >
            <v-card-title class="pa-0">
              <v-card color="blue-grey lighten-5" width="100%">
                <v-container fluid class="mt-0 mb-0 pt-0 pb-0">
                  <v-layout column>
                    <v-row class="pt-0 mt-0 pl-4">
                      <h4 class="subtitle-1">Shelters nearby:</h4>
                    </v-row>
                    <v-row class="pt-0 mt-0 pl-4">
                      <h4 class="subtitle-2 font-weight-bold"
                          style="color: #1976D2">{{location}}</h4>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-card>
            </v-card-title>
            <v-list style="max-height: 597px" class="overflow-y-auto">
              <v-list-item v-if="onLoading">
                <v-container fluid>
                  <v-layout column>
                    <v-row justify="center">
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-list-item>
              <v-list-item-group v-else v-model="item" color="red">
                <v-list-item
                  v-for="(item, i) in shelterMarkers"
                  :key="i"
                  @click="selectShelter(i)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.address"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider
                  v-if="index + 1 < shelterMarkers.length"
                  :key="index"
                ></v-divider>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12"
               sm="9">
          <MglMap
            ref="map"
            :mapboxGl="mapbox"
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
            @load="onMapLoad"
            :center="center"
            :zoom="zoom"
            clearable
            style="height: 650px; width: 100%"
          >
            <!--@load="onMapLoad"-->
            <div style="width: 285px; padding-left: 10px; padding-top: 10px"
                 position="top-left">
              <v-autocomplete
                :items="postcodes"
                filled
                full-width
                background-color="white"
                color="primary"
                label="Type and select your postcode"
                hint="Type and select your postcode"
                item-text="postcode"
                item-value="postcode"
              >
                <template v-slot:item="data">
                  <v-list-item-content
                    @click="searchResults(data.item.center, data.item.suburbName, data.item.stateCode)">
                    <!--@keyup.enter.native=""-->
                    <v-list-item-title
                      v-text="data.item.postcode"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="`${data.item.suburbName}, ${data.item.stateCode}`"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </div>
            <MglAttributionControl/>
            <MglNavigationControl position="top-right"/>
            <MglGeolocateControl position="top-right"/>
            <MglScaleControl position="bottom-right"/>
            <MglMarker v-for="(shelter,i) in shelterMarkers"
                       :key="shelter.color"
                       :coordinates="shelter.coords"
                       :color="shelter.color">
              <MglPopup :showed="shelter.color == 'red'">
                <v-card flat>
                  <div>{{shelter.name}}</div>
                  <div>{{shelter.address}}</div>
                </v-card>
              </MglPopup>
            </MglMarker>
          </MglMap>
        </v-col>
      </v-row>
      <v-dialog
        :value="noResult"
        max-width="320"
      >
        <v-card>
          <v-card-title class="headline">No shelters found here
          </v-card-title>

          <v-card-text>
            Sorry, we can't any shelters here
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-btn
              color="primary"
              text
              @click="noResult = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--<h4>{{res}}</h4>-->
    </v-layout>
  </v-container>
</template>

<script>
  import Mapbox from 'mapbox-gl'
  import {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
    MglAttributionControl,
    MglScaleControl,
    MglPopup

  } from 'vue-mapbox'
  import axios from 'axios'

  export default {
    components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl,
      MglMarker,
      MglAttributionControl,
      MglScaleControl,
      MglPopup
    },
    name: 'MapBox',

    // woman related organizations nearby melbourne version 1
    //https://maps.googleapis.com/maps/api/place/textsearch/json?query=women&location=-36.958992,144.025451&radius=50000fields=photos,formatted_address,name&key=My_Key

    data () {
      return {
        accessToken: 'pk.eyJ1IjoidHlhbjAwMTYiLCJhIjoiY2psNGN0Z2gzMDZ4ZDNybmx6a3h0bWMzbSJ9.SbjTVR9BAQUGP0my5YqG2A',
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        googlePlacesAPI: 'AIzaSyDKcBTrnPjz9R4pEy65tz-O3aSCUglUIhk',
        herePlacesAPI: '1RhbvOS8Uw3z4a2SpUUa&app_code=d_a5qrFarJmTcK7d3YzW0g',
        center: [144.961068, -37.810682],
        markers: [
          // {coords: [144.025451, -36.958992]},
          // {coords: [143.025432, -37.958572]}
        ],
        shelterMarkers: [],
        result: '',
        mapbox: null,
        zoom: 12,
        lastMarker: -1,
        postcodes: [],
        noResult: false,
        onLoading: false,
        location: 'Melbourne, VIC',
        res: []
      }
    },


    methods: {
      onMapLoad () {
        this.searchResults([-37.810682, 144.961068])
      },

      formatCoords ([a, b]) {
        if (a < b)
          return [b, a]
        return [a, b]
      },

      btn () {
        this.searchResults([145.0482345, -37.8789473])
      },

      searchResults (querryCenter, suburbName, stateCode) {
        if (suburbName && stateCode)
          this.location = suburbName.toString() + ', ' + stateCode.toString()
        this.onLoading = true
        this.shelterMarkers = []
        let tempUrl = this.makeUrlonLocation(this.formatCoords(querryCenter))
        axios.get(tempUrl)
          .then(resp => {
            if (resp.data.results.length === 0) {
              this.noResult = true
            } else {
              resp.data.results.forEach((item) => {
                let phone = null
                let web = null
                let email = null
                if (item.position) {
                  if (item.href){
                    axios.get(item.href)
                      .then(resp => {
                        // if (resp.contacts.phone.length > 0)
                        //   phone = resp.contacts.phone[0].value
                        // if (resp.contacts.email.length > 0)
                        //   email = resp.contacts.email[0].value
                        // if (resp.contacts.website.length > 0)
                        //   web = resp.contacts.website[0].value
                        this.res.push(resp)
                      })
                  }
                  this.shelterMarkers.push(
                    {
                      coords: this.formatCoords(item.position),
                      address: item.vicinity,
                      name: item.title,
                      color: '#80CBC4',
                      showPop: false
                    }
                  )
                }
              })
            }
            this.onLoading = false
            this.jump(this.formatCoords(querryCenter))
          })
          .catch(error => {
            this.result = error
          })
      },

      jump (center, zoom) {
        this.center = center
        if (zoom)
          this.zoom = zoom
      },

      selectShelter (index) {
        this.shelterMarkers[index].color = 'red'
        if (!(this.lastMarker === -1)) {
          this.shelterMarkers[this.lastMarker].color = '#80CBC4'
        }
        this.lastMarker = index
      },

      makeUrlonLocation ([lat, long]) {
        // https://places.cit.api.here.com/places/v1/autosuggest?q=woman%27s+shelter&in=-37.810682%2C144.961068%3Br%3D5000&tf=plain&Accept-Language=en-GB%2Cen%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Czh-CN%3Bq%3D0.7%2Czh%3Bq%3D0.6&app_id=1RhbvOS8Uw3z4a2SpUUa&app_code=d_a5qrFarJmTcK7d3YzW0g        // 'https://cors-anywhere.herokuapp.com/'
        let url = 'https://places.cit.api.here.com/places/v1/autosuggest?q=woman%27s+shelter&in='
          + long.toString() + '%2C' + lat.toString() + '%3Br%3D4000&tf=plain&Accept-Language=en-GB%' +
          '2Cen%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Czh-CN%3Bq%3D0.7%2Czh%3Bq%3D0.6&app_id='
          + this.herePlacesAPI

        return url
      }

    },


    mounted () {
      this.onLoading = true
      this.mapbox = this.$refs.map
      axios.get('https://raw.githubusercontent.com/Elkfox/Australian-Postcode-Data/master/au_postcodes.json')
        .then(resp => {
          resp.data.forEach(item => {
            this.postcodes.push({
              postcode: item.postcode,
              suburbName: item.place_name,
              stateCode: item.state_code,
              center: [item.latitude, item.longitude]
            })
          })
          // this.result = this.postcodes
          this.onLoading = false
        })
        .catch(error => {
            this.result = error
          }
        )
    }

    // const asyncActions = event.component.actions
    //     const newParams = await asyncActions.flyTo({
    //       center: this.formatCoords(querryCenter),
    //       zoom: 13,
    //       speed: 1
    //     })
  }
</script>

<style scoped>

</style>
