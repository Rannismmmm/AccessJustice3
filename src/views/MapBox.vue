<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
      >
        <v-btn @click="getSuburbInfo(3000)">change location</v-btn>
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
            <v-list style="max-height: 650px" class="overflow-y-auto">
              <v-list-item-group v-model="item" color="red">
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
            style="height: 650px; width: 100%"
          >
            <!--@load="onMapLoad"-->
            <div style="width: 200px; padding-left: 10px" position="top-left">
              <v-autocomplete
                label="Postcode"
                background-color="white"
                height="6vh"
                :items="components"
              ></v-autocomplete>
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
      <h4>{{result}}</h4>
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
        postcodes: []
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

      searchResults (querryCenter) {
        this.shelterMarkers = []
        let tempUrl = this.makeUrlonLocation(this.formatCoords(querryCenter))
        axios.get(tempUrl)
          .then(resp => {
            resp.data.results.forEach((item) => {
              if (item.position) {
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
      },

      getSuburbInfo (postcode) {
        let postUrl = 'https://cors-anywhere.herokuapp.com/' + 'http://v0.postcodeapi.com.au/suburbs/' + postcode.toString() + '.json'
        axios.get(postUrl)
          .then(resp => {
            // resp.data.results.forEach((item) => {
            //   if (item.position) {
            //     this.shelterMarkers.push(
            //       {
            //         coords: this.formatCoords(item.position),
            //         address: item.vicinity,
            //         name: item.title,
            //         color: '#80CBC4',
            //         showPop: false
            //       }
            //     )
            //   }
            // })
            this.result = resp
          })
          .catch(error => {
            this.result = error
          })
      }
    },


    created () {
      this.mapbox = this.$refs.map
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
