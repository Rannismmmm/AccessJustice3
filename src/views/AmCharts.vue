<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-row
      class="py-4 pl-4"
    >
      <v-container class="pa-0">
        <v-row>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-card>
</template>

<script>
  import AmCharts from 'amcharts3'
  import AmSerial from 'amcharts3/amcharts/serial'

  export default {
    name: 'AmCharts',
    components: {AmCharts},
    data () {
      return {
        item: 1,
        items: [
          {text: 'Real-Time', icon: 'mdi-clock'},
          {text: 'Audience', icon: 'mdi-account'},
          {text: 'Conversions', icon: 'mdi-flag'}
        ]
      }
    }

  }
</script>

<style scoped>

</style>
