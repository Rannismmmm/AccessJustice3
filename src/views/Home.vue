<template>
  <v-container grid-list-lg style="margin: 0px;padding: 0px" fluid>
    <v-layout column wrap>
      <v-flex xs6 sm6 md6 lg6 x6 style="padding: 0px">
        <v-sheet color="blue-grey darken-2" height="120" dark tile>
          <v-container fluid>
            <v-layout row wrap justify-space-between>
              <v-flex xs6 sm4 md3 lg1 xl1>
                <v-img :src="require('../assets/logo.jpg')" contain></v-img>
              </v-flex>
              <v-flex xs6 sm4 md3 lg3 xl1>
                <div align="end"><h2 class="display-1 font-weight-bold">Justice League</h2></div>
                <div align="end"><h2 class="headline font-weight-bold">Iteration 1 some other comments</h2></div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-sheet>
      </v-flex>
      <v-flex xs6 sm6 md6 lg6 x6 style="padding: 0px">
        <main-slides
          class="align-end"
        ></main-slides>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MainSlides from '../components/MainSlides'

  export default {
    name: 'Home',
    components: {MainSlides}
  }
</script>

<style scoped>

</style>
