<template>
  <v-container fluid fill-height style="padding: 0px">
    <v-row
      align="center"
      wrap
      justify="space-around"
      class="hidden-sm-and-down"
      style="padding-left: 12vw; padding-right: 12vw"
    >
        <v-card flat style="height: 410px; width: 26vw">
          <v-container fluid fill-height>
            <v-layout column>
              <v-row
                align="end"
                justify="start"
                wrap
              >
                <h1 class="title font-weight-thick mb-4"
                    style="color: #1976D2">{{title}}</h1>
              </v-row>
              <v-row
                align="center"
                justify="start"
                wrap
              >
                <h1 class="body-1 mb-4">{{content}}</h1>
              </v-row>
              <v-row
                align="start"
                justify="start"
                wrap
              >
                <ul>
                  <li class="body-1 mb-4" v-for="(point, i) in points"
                      :key="i">
                    {{point}}
                  </li>
                </ul>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat style="width: 33vw; height: auto;" justify="start">
          <v-img contain :src="img"
                 style="height: 400px;">
          </v-img>
        </v-card>
    </v-row>
    <v-row
      align="center"
      justify="center"
      wrap
      class="hidden-md-and-up"
    >
      <v-card flat style="width: 90vw; height: 250px;">
        <v-container fluid fill-height>
          <v-layout column>
            <v-row
              align="end"
              justify="start"
              wrap
            >
              <h1 class="title font-weight-thick mb-4" style="color: #1976D2">
                {{title}}</h1>
            </v-row>
            <v-row
              align="center"
              justify="start"
              wrap
            >
              <h1 class="body-2 mb-4">{{content}}</h1>
            </v-row>
            <v-row
              align="start"
              justify="start"
              wrap
            >
              <ul>
                <li class="body-2 mb-4" v-for="(point, i) in points" :key="i">
                  {{point}}
                </li>
              </ul>
            </v-row>
          </v-layout>
        </v-container>
      </v-card>
      <v-card flat style="width: 90vw; height: auto">
        <v-img contain :src="img"
               style="height: 400px;">
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AbuseLine',

    data () {
      return {
        // points: [
        //   '1', '1', '1', '1', '1'
        // ]
      }
    },

    props: {
      title: {
        type: String,
        default: 'SIGNS'
      },
      content: {
        type: String,
        default: 'Would you like to participate in our Sponsorship program? Get involved and see your name on one of our upcoming events. We rely heavily on any extra support we can get, so if you or your company has the capacity to give, your generous contribution has the power to change the life of an individual or family in need.'
      },
      img: {
        type: String,
        default: require('../assets/candel.jpeg')
      },
      points: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
