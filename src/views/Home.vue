<template>
  <v-container fluid style="padding: 0px">
    <v-parallax
      :src="require('../assets/parallax/hands.jpg')"
      height="2000"
    >
      <v-row
        align="center"
        justify="center"
      >
        <h1 class="display-2 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
  import MainSlides from '../components/MainSlides'

  export default {
    name: 'Home',
    components: {MainSlides},
    data () {
      return {
        sheet: false
      }
    },

    mounted () {
      this.sheet = true
    }
  }
</script>

<style scoped>
  .container {
    background-color: #424242;
  }
</style>
