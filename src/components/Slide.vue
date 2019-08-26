<template>
  <v-img :src="backSrc" style="height: 700px;width: auto">
    <v-container fluid fill-height>
      <v-layout justify-space-around column wrap>
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-3 font-weight-black">
            {{title}}</h1>
        </v-flex>
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-2 font-weight-bold">
            {{content}}</h1>
        </v-flex>
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-1 font-weight-bold">
            {{foot}}<router-link :to="rout">{{routWord}}</router-link></h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
  export default {
    name: 'Slide',

    data () {
      return {
        // backSrc: require('../assets/imageNotAvailable.png')
      }
    },

    props: {
      backSrc: {
        type: String,
        default: require('../assets/imageNotAvailable.png')
      },
      title: {
        type: String,
        default: 'Title'
      },
      content: {
        type: String,
        default: 'This is a lot of waste words just to fill out the line'
      },
      foot: {
        type: String,
        default: 'This is a lot of waste words just to fill out the line, if you wanna find more, '
      },
      rout: {
        type: String,
        default: 'home',
      },
      routWord: {
        type: String,
        default: null,
      }
    }
  }
</script>

<style scoped>

</style>
