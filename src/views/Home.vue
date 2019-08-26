<template>
  <v-container style="margin: 0px;padding: 0px" fluid>
    <v-layout column>
      <!--<v-flex xs3 sm3 md2 lg1 x1 style="padding: 0px" outlined tile>-->
        <!--<v-sheet color="blue-grey darken-2" height="120" dark outlined tile>-->
          <!--<v-container fluid>-->
            <!--<v-layout row wrap justify-space-between>-->
              <!--<v-flex xs3 sm2 md1 lg1 xl1>-->
                <!--<v-img :src="require('../assets/logo.jpg')" ></v-img>-->
              <!--</v-flex>-->
              <!--<v-flex xs7 sm6 md5 lg4 xl2>-->
                <!--<div align="end"><h2 class="display-1 font-weight-bold">Justice League</h2></div>-->
                <!--<div align="end"><h2 class="headline font-weight-bold">Iteration 1 some other comments</h2></div>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-sheet>-->
      <!--</v-flex>-->
      <v-flex xs12 sm12 md12 lg12 x12 style="padding: 0px" outlined tile>
        <main-slides
          class="align-end"
          fill-height
        ></main-slides>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MainSlides from '../components/MainSlides'

  export default {
    name: 'Home',
    components: {MainSlides},
    data(){
      return {
        sheet: false,
      }
    },

    mounted(){
      this.sheet = true
    }
  }
</script>

<style scoped>

</style>
