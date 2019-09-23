<template>
  <v-container fluid>
    <v-parallax class="hidden-sm-and-down" height="900"
                :src="require('../assets/darkBackground.jpg')">
      <v-container fluid>
        <v-flex row align-center justify-center>
          <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </v-flex>
      </v-container>
    </v-parallax>
  </v-container>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'

  export default {
    name: 'GoogleMap',

    data(){
      return {
        markers: [
          {
            position: {lat:10, lng:10},
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
