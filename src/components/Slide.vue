<template>
  <v-container style="margin: 0px;padding: 0px; border: 0px" fluid fill-height>
    <v-img :src="backSrc" class="hidden-sm-and-down"
           style="width: auto;height: auto;"
           gradient="to top right, rgba(10,80,50,.33), rgba(10,32,72,.7)">
      <v-container fluid fill-height style="padding-right: 0px">
        <v-layout justify-space-around column>
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h1 class="display-3 font-weight-black hidden-sm-and-down">
              {{title}}</h1>
            <h1 class="display-1 font-weight-black hidden-md-and-up">
              {{title}}</h1>
          </v-flex>
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h1 class="display-2 font-weight-bold hidden-sm-and-down">
              {{content}}</h1>
            <h1 class="headline font-weight-black hidden-md-and-up">
              {{content}}</h1>
          </v-flex>
          <!--<v-flex xs4 sm4 md4 lg4 xl4 row wrap>-->
          <!--<h1 class="display-1 font-weight-bold">-->
          <!--{{foot}}-->
          <!--<router-link :to="rout">{{routWord}}</router-link>-->
          <!--</h1>-->
          <!--</v-flex>-->
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h2 class="display-1 font-weight-bold hidden-sm-and-down">
              {{foot}}
              <v-tooltip v-if="chartData != null" top>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" light v-on="on"
                         @click="dialog = true">
                    {{routWord}}
                  </v-btn>
                </template>
                <span
                  style="color: transparent;margin: 0px;padding: 0px;width: auto">
              <v-card
                height="auto"
                width="500px"
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
            </h2>
            <h2 class="hidden-md-and-up">
              {{foot}}
              <router-link :to="rout">{{routWord}}</router-link>
            </h2>
          </v-flex>
        </v-layout>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500" class="hidden-sm-and-down">
            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                {{name}} Portion
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                <v-simple-table fixed-header height="300px">
                  <thead>
                  <tr>
                    <th class="text-left" v-for="(header,i) in headers" :key="i">{{header}}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(row,i) in tableData" :key="i">
                    <td v-for="(grid,j) in row" :key="j">{{ grid }}</td>
                  </tr>
                  </tbody>
                </v-simple-table>
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
    <v-img :src="backSrc" class="hidden-md-and-up"
           height="550"
           width="max-content"
           gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      <v-container fluid fill-height>
        <v-layout justify-space-around column>
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h1 class="headline font-weight-black hidden-md-and-up">
              {{title}}</h1>
          </v-flex>
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h1 class="title font-weight-black hidden-md-and-up">
              {{content}}</h1>
          </v-flex>
          <!--<v-flex xs4 sm4 md4 lg4 xl4 row wrap>-->
          <!--<h1 class="display-1 font-weight-bold">-->
          <!--{{foot}}-->
          <!--<router-link :to="rout">{{routWord}}</router-link>-->
          <!--</h1>-->
          <!--</v-flex>-->
          <v-flex xs4 sm4 md4 lg4 xl4 row wrap align-center justify-center>
            <h3 class="hidden-md-and-up">
              {{foot}}
              <router-link :to="rout">{{routWord}}</router-link>
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
  export default {
    name: 'Slide',

    data () {
      return {
        dialog: false,
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
      },
      headers: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      }

    }


  }
</script>

<style scoped>

</style>
