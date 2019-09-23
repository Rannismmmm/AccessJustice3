<template>
  <v-container style="margin: 0px;padding: 0px; border: 0px" fluid fill-height>
    <v-layout column style="padding-top: 300px ">
      <v-row>
        <v-row style="color: white">{{data}}</v-row>
        <MglMap
          :mapboxGl="mapbox-gl"
          :accessToken="accessToken"
          :mapStyle.sync="mapStyle"
          style="height: 700px; width: 700px"

        >
          <MglGeocoderControl
            :accessToken="accessToken"
            :input.sync="defaultInput"
            @results="handleSearch"
            style="background-color: white"
          />
          <MglMarker :coordinates="coordinates" color="blue"/>
          <MglAttributionControl/>
          <MglNavigationControl position="top-right"/>
          <MglGeolocateControl position="top-right"/>
          <MglScaleControl/>
        </MglMap>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import Mapbox from 'mapbox-gl'
  import MglGeocoderControl from 'vue-mapbox-geocoder'
  import {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker
  } from 'vue-mapbox'

  export default {
    components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl,
      MglMarker,
      MglGeocoderControl
    },
    name: 'MapBox',

    data () {
      return {
        accessToken: 'pk.eyJ1IjoidHlhbjAwMTYiLCJhIjoiY2psNGN0Z2gzMDZ4ZDNybmx6a3h0bWMzbSJ9.SbjTVR9BAQUGP0my5YqG2A',
        mapStyle: 'mapbox://styles/mapbox/streets-v11',
        center: [144.96332, -37.814],
        coordinates: [-111.549668, 39.014],
        defaultInput: 'Bodhgaya',
        data: ''
      }
    },

    created () {
      // We need to set mapbox-gl library here in order to use it in template
      this.map = event.map
    },

    methods: {
      onMapLoad (event) {
        //   // Here we cathing 'load' map event
        //   this.map = event.map;
        //   const asyncActions = event.component.actions
        //
        //   const newParams = await asyncActions.flyTo({
        //     center: [30, 30],
        //     zoom: 9,
        //     speed: 7
        //   })
        //   /* => {
        //           center: [30, 30],
        //           zoom: 9,
        //           bearing: 9,
        //           pitch: 7
        //         }
        //   */
        // var geocoder = new MapboxGeocoderControl({accessToken: this.accessToken})
        // map.addControl(geocoder)
      },

      handleSearch (event) {
        this.data = event
      }
    }
  }
</script>

<style scoped>

</style>
