<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 220px; margin-left: 8vw; margin-right: 8vw"
        class="text-center pb-10">
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          What is safety plan and Why do I need it?</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">What
          is safety plan and Why do I need it?</h4>
      </v-row>
      <v-row wrap justify="center" align="center"
             style="margin-left: 8vw; margin-right: 8vw">
        <v-flex xs12 sm6 md5 lg5 xl4 flat justify="center">
          <v-card flat>
            <v-img :src="require('../assets/safetyplan/anihilator.jpeg')"
                   max-height="320px" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md5 lg4 xl3 flat>
          <h1 class="title mb-4 hidden-sm-and-down">
            {{paragraph}}
          </h1>
          <h1 class="body-1 mb-4 hidden-md-and-up">
            {{paragraph}}
          </h1>
        </v-flex>
      </v-row>
      <v-row wrap style="margin-left: 8vw; margin-right: 8vw">
        <v-container fluid justify="center">
          <v-layout column>
            <v-row wrap justify="center">
              <h1 class="title mb-4 hidden-sm-and-down">
                Always good to be prepared. Start your Safety plan now!
              </h1>
              <h1 class="body-1 mb-4 hidden-md-and-up">
                Always good to be prepared. Start your Safety plan now!
              </h1>
            </v-row>
            <v-row wrap justify="center">
              <v-btn color="primary" rounded @click="redirct(safetyForm)">Create my plan
                now!
              </v-btn>
            </v-row>
          </v-layout>
        </v-container>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'SafetyPlan',

    data () {
      return {
        paragraph: 'Staying safe is the priority if you are facing domestic violence or in an ' +
          'emotionally abusive relationship. The safety plan is a process to look at your situation ' +
          'and check what you need to help you and your other family members(children or pets) to ' +
          'stay safe. It is about taking control of your own life and safety, and you will have a ' +
          'plan to escape if the violent incident happens. The safety plan should include emergency ' +
          'contacts, ID, some important checklists, strategies to protect yourself...',

        safetyForm: {
          title: 'Safety Form',
          path: '/safetyform'
        }
      }
    },

    methods: {
      redirct (item) {
        this.$router.push(item.path)
        this.$store.commit('addView', {
          text: item.title,
          disabled: false,
          to: item.path
        })
      }
    }
  }
</script>

<style scoped>

</style>
