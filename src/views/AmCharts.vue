<template>
  <!--<v-card-->
  <!--max-width="344"-->
  <!--class="mx-auto"-->
  <!--&gt;-->
  <!--<v-row-->
  <!--class="py-4 pl-4"-->
  <!--&gt;-->
  <!--<v-container class="pa-0">-->
  <!--<v-row>-->
  <!--<v-col>-->
  <!--<v-btn icon>-->
  <!--<v-icon>mdi-heart</v-icon>-->
  <!--</v-btn>-->
  <!--</v-col>-->
  <!--<v-col>-->
  <!--<v-btn icon>-->
  <!--<v-icon>mdi-bookmark</v-icon>-->
  <!--</v-btn>-->
  <!--</v-col>-->
  <!--<v-col>-->
  <!--<v-btn icon>-->
  <!--<v-icon>mdi-share-variant</v-icon>-->
  <!--</v-btn>-->
  <!--</v-col>-->
  <!--</v-row>-->
  <!--</v-container>-->
  <!--</v-row>-->
  <!--</v-card>-->
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
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
          {title: 'Click Me'},
          {title: 'Click Me'},
          {title: 'Click Me'},
          {title: 'Click Me 2'}
        ]
      }
    }

  }
</script>

<style scoped>

</style>
