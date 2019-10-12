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
      <v-row justify="space-between"
             style="padding-left: 10vw; padding-right: 10vw">
        <v-card flat @click="navigateToView(pageBefore)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <v-icon color="primary" class="pr-3">mdi-arrow-left-thick
                </v-icon>
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageBefore.title}}</span>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat @click="navigateToView(pageAfter)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageAfter.title}}</span>
                <v-icon color="primary" class="pl-3">mdi-arrow-right-thick
                </v-icon>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
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
        ],
        pageBefore: {
          title: 'Self-Assessment',
          path: '/assessments/false'
        },
        pageAfter: {
          title: 'Safety Plan',
          path: '/safetyplan'
        },
      }
    },

    methods: {
      navigateToView (item) {
        this.$router.push(item.path)
        this.$store.commit('switchView', {
          redirectionItem: {
            text: item.title,
            disabled: false,
            to: item.path
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
