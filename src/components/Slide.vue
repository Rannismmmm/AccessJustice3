<template>
  <v-img :src="backSrc" style="width: 100%;height: 100%;">
    <v-container fluid fill-height>
      <v-layout justify-space-around column>
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-3 font-weight-black">
            {{title}}</h1>
        </v-flex>
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-2 font-weight-bold">
            {{content}}</h1>
        </v-flex>
        <!--<v-flex xs4 sm4 md4 lg4 xl4 row wrap>-->
        <!--<h1 class="display-1 font-weight-bold">-->
        <!--{{foot}}-->
        <!--<router-link :to="rout">{{routWord}}</router-link>-->
        <!--</h1>-->
        <!--</v-flex>-->
        <v-flex xs4 sm4 md4 lg4 xl4 row wrap>
          <h1 class="display-1 font-weight-bold">
            {{foot}}
            <v-tooltip v-if="chartData != null" top>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" light v-on="on" @click="dialog = true">
                  {{routWord}}
                </v-btn>
              </template>
              <span
                style="color: transparent;margin: 0px;padding: 0px;width: auto">
              <v-card
                height="auto"
                width="300px"
                color="white"
              >
                <div style="height: auto;width: auto;color: white">
                  <pie-chart
                    :data="chartData"></pie-chart>
                  </div>
              </v-card>
                </span>
            </v-tooltip>
            <router-link v-else :to="rout">{{routWord}}</router-link>
          </h1>
        </v-flex>
      </v-layout>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </v-img>
</template>

<script>
  export default {
    name: 'Slide',

    data () {
      return {
        dialog: false
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
        default: '/'
      },
      routWord: {
        type: String,
        default: 'more'
      },
      name: {
        type: String,
        default: 'Slide'
      },
      chartData: {
        type: Object,
        default: null
      }

    },


  }
</script>

<style scoped>

</style>
