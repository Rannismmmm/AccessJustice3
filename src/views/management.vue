<template>
  <div>
    <line-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart>
    <pie-chart :data="{'Blueberry': 44, 'Strawberry': 23}"></pie-chart>
    <bar-chart :data="{'Blueberry': 44, 'Strawberry': 23}"></bar-chart>
    <v-row>
      <v-card
        class="mx-auto"
        max-width="300"
        tile
      >
        <v-list dense>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'management',
    data () {
      return {
        expand: false,
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {
            text: 'Title',
            align: 'right',
            sortable: false,
            value: 'title'
          },
          {
            text: 'Semester',
            align: 'right',
            sortable: false,
            value: 'semester'
          }
        ],
        item: 1,
        items: [
          {text: 'Real-Time', icon: 'mdi-clock'},
          {text: 'Audience', icon: 'mdi-account'},
          {text: 'Conversions', icon: 'mdi-flag'}
        ],
        rows: []
      }
    },

  }
</script>

<style scoped>

</style>
