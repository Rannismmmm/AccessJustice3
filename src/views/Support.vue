<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column>
      <v-row align="end">
        <support-template
          :mainTitle="title"
          :active-cards="cards"
          :card-width="cardWidth"
        ></support-template>
      </v-row>
      <v-row>
          <self-care></self-care>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  import SelfCare from './SelfCare'

  export default {
    name: 'Support',
    components: {SelfCare, SupportTemplate},
    data () {
      return {
        title: 'OUR SUPPORT SERVICES',
        cardWidth: '270px',
        cards: [
          {
            title: 'Legal Support',
            comment: 'Find the legal support here',
            color: 'blue-grey darken-1',
            path: '/legalsupport'
          },
          {
            title: 'Shelters & Organizations',
            comment: 'Find the nearby shelters here',
            color: 'indigo darken-4',
            path: '/sheltermap'
          },
          {
            title: 'Support & Counselling',
            comment: 'Support and counceling services',
            color: 'teal darken-3',
            path: '/supportcounseling'
          },
          // ,
          // {
          //   title: 'Self-Care',
          //   comment: 'Self care services',
          //   color: 'deep-purple darken-3',
          //   path: '/selfcare'
          // }
        ]
      }
    },

    methods: {}
  }
</script>

<style scoped>

</style>
