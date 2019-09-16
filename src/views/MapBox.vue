<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 250px; padding-bottom: 20px"
      >
        <MglMap
          :mapboxGl="mapbox-gl"
          :accessToken="accessToken"
          :mapStyle.sync="mapStyle"
          :center="center"
          :zoom="11"
          @load="onMapLoad"
          style="height: 650px; width: 900px"
        >
          <!--@load="onMapLoad"-->
          <MglAttributionControl/>
          <MglNavigationControl position="top-right"/>
          <MglGeolocateControl position="top-right"/>
          <MglScaleControl position="bottom-right"/>
          <MglMarker v-for="(shelter,i) in shelterMarkers" :key="i"
                     :coordinates="shelter.coords">
            <MglPopup>
              <v-card flat>
                <div>{{shelter.name}}</div>
                <div>{{shelter.address}}</div>
              </v-card>
            </MglPopup>
          </MglMarker>
        </MglMap>
      </v-row>
      <h1>{{result}}</h1>
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
        // back up: AIzaSyCHXxvk8k_7YZ-RK9GRXvrOpuhsw8DPc1M
        center: [145.0482345, -37.8789473],
        markers: [
          // {coords: [144.025451, -36.958992]},
          // {coords: [143.025432, -37.958572]}
        ],
        shelterMarkers: [],
        result: ''
      }
    },


    methods: {
      async onMapLoad (event) {
        // Here we cathing 'load' map event
        this.map = event.map
        let tempUrl = this.makeUrlonLocation(this.center)
        axios.get(tempUrl)
          .then(resp => {
            resp.result.forEach((item) => {
              this.shelterMarkers.push(
                {
                  coords: item.geometry.location,
                  address: item.formatted_address,
                  name: item.name
                }
              )
            })
          })
          .catch(error => {
            this.result = error
          })
        this.result = tempUrl
        // const asyncActions = event.component.actions
        //
        // const newParams = await asyncActions.flyTo({
        //   center: [145.0482345, -37.8789473],
        //   zoom: 12,
        //   speed: 1
        // })
        /* => {
                center: [30, 30],
                zoom: 9,
                bearing: 9,
                pitch: 7
              }
        */
      },

      makeUrlonLocation ([lat, long]) {
        let url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=women&location='
          + long.toString() + ',' + lat.toString() + 'radius=20000fields=photos,formatted_address,name&key='
          + this.googlePlacesAPI

        return url
      }
    },

    mounted () {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = null
      // results

    }
  }
</script>

<style scoped>

</style>
