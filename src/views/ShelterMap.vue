<template>
  <v-container fluid>
    <v-row style="padding-top: 250px;">
      <v-col cols="12">
        <v-row justify="center" align="center">
          <map-box></map-box>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MapBox from './MapBox'

  export default {
    components: {
      MapBox
    },
    name: 'ShelterMap',

    data () {
      return {}
    },

    created () {
    }
  }
</script>

<style scoped>

</style>
