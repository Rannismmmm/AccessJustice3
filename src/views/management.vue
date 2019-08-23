<template>
  <v-container grid-list-lg>
    <!--<line-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart>-->
    <!--<pie-chart :data="{'Blueberry': 44, 'Strawberry': 23}"></pie-chart>-->
    <!--<pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>-->
    <v-layout row>
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
      >
        <l-tile-layer :url="url" :attribution="attribution"/>
        <l-marker :lat-lng="withPopup">
          <l-popup>
            <div @click="innerClick">
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin
                nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-popup>
        </l-marker>
        <l-marker :lat-lng="withTooltip">
          <l-tooltip :options="{ permanent: true, interactive: true }">
            <div @click="innerClick">
              I am a tooltip
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin
                nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-tooltip>
        </l-marker>
      </l-map>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import { latLng } from 'leaflet'
  import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'

  export default {
    name: 'management',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip
    },
    data () {
      return {
        expand: false,
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {
            text: 'Title',
            align: 'right',
            sortable: false,
            value: 'title'
          },
          {
            text: 'Semester',
            align: 'right',
            sortable: false,
            value: 'semester'
          }

        ],

        rows: [],

        zoom: 13,
        center: latLng(47.41322, -1.219482),
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        withPopup: latLng(47.41322, -1.219482),
        withTooltip: latLng(47.41422, -1.250482),
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
        showParagraph: false,
        mapOptions: {
          zoomSnap: 0.5
        },
        showMap: true
      }
    },

    mounted () {
      axios
        .get('http://118.138.121.50:8090/RevisionHero2/webresources/entity.course')
        .then(response => (
          this.rows = response.data
        ))
        .catch(() => {
          this.rows = []
        })
    }
  }
</script>

<style scoped>

</style>
