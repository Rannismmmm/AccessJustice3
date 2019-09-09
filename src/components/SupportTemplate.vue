<template>
  <v-container>
    <v-container fluid
                 class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 20px"
        >
          <h4 class="display-1 mb-4" style="color: #1976D2">{{mainTitle}}</h4>
        </v-row>
        <v-row
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <h1 class="body-2 mb-4">{{paragraph}}
            <v-btn v-if="paragraphBtn" text small color="primary">{{paragraphBtn}}</v-btn>
          </h1>
        </v-row>
        <!--<v-row-->
        <!--align="end"-->
        <!--justify="space-between"-->
        <!--wrap-->
        <!--style="padding-top: 80px"-->
        <!--&gt;-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--</v-row>-->
      </v-layout>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 200px; padding-bottom: 10px"
      >
        <h4 class="headline mb-4" style="color: #1976D2">{{mainTitle}}</h4>
      </v-row>
      <!--<v-row-->
      <!--align="start"-->
      <!--justify="center"-->
      <!--wrap-->
      <!--style="padding-left: 5vw; padding-right: 5vw"-->
      <!--&gt;-->
      <!--<h1 class="body-2 mb-4">These services are available for all trauma-->
      <!--victims in our community. Whatever your needs are, we are here to-->
      <!--help you anonymously. Need to find local shelter-->
      <!--<v-btn text small color="primary">Find Shelter</v-btn>-->
      <!--</h1>-->
      <!--</v-row>-->
    </v-container>
    <v-row wrap>
      <v-flex xs12 sm12 md3 v-for="(card,i) in cards" :key="i">
        <v-card class="mx-auto mb-6" height="350px" width="280px">
          <v-container fluid fill-height class="pa-0 ma-0">
            <v-layout column>
              <!--<v-img src="http://source.unsplash.com/6S27S6pZ6o0"-->
              <!--height="500px">-->
              <v-sheet :color="card.color" height="300px" width="auto">
                <v-container fill-height fluid>
                  <v-layout column>
                    <v-row xs12 align="center" justify="center">
                        <span
                          class="headline white--text">{{card.title}}</span>
                    </v-row>
                  </v-layout>
                </v-container>
              </v-sheet>
              <!--</v-img>-->
              <v-card-text>
                <div>
                  <h2 class="subtitle-1">{{card.comment}}
                  </h2>
                </div>
              </v-card-text>
              <v-row align="end" class="ml-0 mr-0">
                <v-card-actions style="width: 100%">
                  <v-btn block outlined color="primary"
                         @click="showRecipes('paleo')">
                    More
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SupportTemplate',

    props: {
      mainTitle: {
        type: String,
        default: 'Title'
      },

      paragraph: {
        type: String,
        default: 'These services are available for all trauma\n' +
          '            victims in our community. Whatever your needs are, we are here to\n' +
          '            help you anonymously. Need to find local shelter'
      },

      paragraphBtn: {
        type: String,
        default: null
      },


    }
  }
</script>

<style scoped>

</style>
