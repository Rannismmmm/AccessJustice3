<template>
  <v-container fluid v-if="appear">
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        class="hidden-sm-and-down"
        style="padding-top: 200px; padding-bottom: 20px"
      >
        <h4 class="display-1 mb-4" style="color: #1976D2">Shelters & Organizations</h4>
      </v-row>
      <v-row
        align="center"
        justify="center"
        wrap
        class="hidden-md-and-up"
        style="padding-top: 100px; padding-bottom: 20px"
      >
        <h4 class="headline mb-4" style="color: #1976D2">Shelters & Organizations</h4>
      </v-row>
      <v-row
        align="start"
        justify="center"
        class="hidden-sm-and-down text-center"
        wrap
        style="padding-left: 5vw; padding-right: 5vw"
      >
        <h1 class="body-2 mb-4">Enter the post code to find a home shelter or supoorted organization near
          you.
        </h1>
      </v-row>
      <v-row
        align="start"
        justify="center"
        wrap
        class="hidden-md-and-up text-center"
        style="padding-left: 9vw; padding-right: 9vw"
      >
        <h1 class="body-2 mb-4">Enter the post code to find a home shelter or supoorted organization near
          you.
        </h1>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row justify="center" align="center">
            <map-box></map-box>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <footer-navigation
          :page-before="pageBefore"
          :page-after="pageAfter"
          :base-page="{text: 'Find Help', disabled: false,to: '/support'}"
          ></footer-navigation>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import MapBox from './MapBox'
  import FooterNavigation from '../components/FooterNavigation'

  export default {
    components: {
      FooterNavigation,
      MapBox
    },
    name: 'ShelterMap',

    data () {
      return {
        pageBefore: {
          title: 'Legal Support',
          path: '/legalsupport'
        },
        pageAfter: {
          title: 'Support & Counselling',
          path: '/supportcounseling'
        },
        appear: false
      }
    },

    mounted () {
      setTimeout(() => {
        this.appear = true
        }, 20)
    }
  }
</script>

<style scoped>

</style>
