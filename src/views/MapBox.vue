<template>
  <MglMap
    :mapboxGl="mapbox-gl"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="center"
    :zoom="10"
  >
    <MglAttributionControl/>
    <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right"/>
    <MglScaleControl/>
  </MglMap>
</template>

<script>
  import Mapbox from 'mapbox-gl'
  import {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  } from 'vue-mapbox'

  export default {
    components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl
    },
    name: 'MapBox',

    data () {
      return {
        accessToken: 'pk.eyJ1IjoidHlhbjAwMTYiLCJhIjoiY2psNGN0Z2gzMDZ4ZDNybmx6a3h0bWMzbSJ9.SbjTVR9BAQUGP0my5YqG2A',
        mapStyle: 'mapbox://styles/mapbox/dark-v10',
        center: [144.96332, -37.814],
      }
    },

    created () {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = Mapbox
    }
    // methods: {
    // async onMapLoad(event) {
    //   // Here we cathing 'load' map event
    //   const asyncActions = event.component.actions
    //
    //   const newParams = await asyncActions.flyTo({
    //     center: [144.96332, -37.814],
    //     zoom: 12,
    //     speed: 1
    //   })
    //   /* => {
    //           center: [30, 30],
    //           zoom: 9,
    //           bearing: 9,
    //           pitch: 7
    //         }
    //   */
    // }
  // }
  }
</script>

<style scoped>

</style>
