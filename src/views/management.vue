<template>
  <v-container fluid>
    <v-parallax height="1000"
                :src="require('../assets/darkBackground.jpg')">
      <v-container fluid>
        <v-flex row align-center justify-center>
          <h1>More charts are comming</h1>
        </v-flex>
        <v-flex row fill-height align-center>
          <pie-chart :data="data"></pie-chart>
        </v-flex>
      </v-container>
    </v-parallax>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'management',
    data () {
      return {
        data: {
          'Age 18 ~ 24': 11.7,
          'Age 25 ~ 34': 7,
          'Age 35 ~ 44': 4.1,
          'Age 45 ~ 54': 4,
          'Age 55 ~ 64': 2.6,
          'Age 65 ~ ': 1.2
        }
      }
    }

  }
</script>

<style scoped>

</style>
