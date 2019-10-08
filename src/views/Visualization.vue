<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout column style="padding-top: 220px;">
      <v-row class="hidden-sm-and-down" justify="center"
             style=" padding-left: 20vw; padding-right: 20vw">
        <charts-content></charts-content>
      </v-row>
      <v-row class="hidden-md-and-up" justify="center"
             style=" padding-left: 2vw; padding-right: 2vw">
        <charts-content></charts-content>
      </v-row>
      <v-row justify="space-between"
             style="padding-left: 4vw; padding-right: 4vw">
        <v-card flat @click="navigateToView(pageBefore)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <v-icon color="primary">mdi-arrow-left-bold-circle</v-icon>
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
                <v-icon color="primary">mdi-arrow-right-bold-circle</v-icon>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import ChartsContent from '../components/ChartsContent'

  export default {
    name: 'visualization',
    components: {ChartsContent},
    data () {
      return {
        pr: '4',
        pageBefore: {
          title: 'About Abuse',
          path: '/abuse'
        },
        pageAfter: {
          title: 'Self-Assessment',
          path: '/assessments/false'
        }
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
