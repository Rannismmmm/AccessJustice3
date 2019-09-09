<template>
  <v-container fluid fill-height style="padding: 0px">
    <v-row
      align="center"
      justify="space-between"
      wrap
      class="hidden-sm-and-down"
    >
      <v-col
        cols="12"
        sm="5"
        style="padding-left: 0px"
      >
        <v-card flat style="width: 55vw; height: 400px;">
          <v-container fluid fill-height>
            <v-layout column>
              <v-row
                align="end"
                justify="start"
                wrap
              >
                <h1 class="title font-weight-thick mb-4">{{title}}</h1>
              </v-row>
              <v-row
                align="start"
                justify="start"
                wrap
              >
                <h1 class="body-2 mb-4">{{content}}</h1>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        style="padding: 0px"
      >
        <v-card flat style="width: 50vw; height: 400px;">
          <v-img :src="img"
                 style="height: 400px;">
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="start"
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
              <h1 class="title font-weight-thick mb-4">{{title}}</h1>
            </v-row>
            <v-row
              align="start"
              justify="start"
              wrap
            >
              <h1 class="body-2 mb-4">{{content}}</h1>
            </v-row>
          </v-layout>
        </v-container>
      </v-card>
      <v-card flat style="width: 90vw; height: 250px;">
        <v-img :src="img"
               style="height: 400px;">
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AbuseLine',
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
      }
    }
  }
</script>

<style scoped>

</style>
