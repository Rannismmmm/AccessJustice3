<template>
  <v-container justify="center">
    <v-dialog v-model="questionVisible" scrollable max-width="1000">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Take a look</v-btn>
      </template>
      <v-card>
        <v-card-title><span
          class="headline">A quiuck quiz</span></v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 600px;">
          <v-flex v-for="(question, index) in questions" :key="index">
            <template>
              <v-container justify="start">
                <v-card row>
                  <div><h3>{{question}}</h3></div>
                </v-card>
                <v-radio-group>
                  <v-radio label="Yes" value="1"></v-radio>
                  <v-radio label="No" value="0"></v-radio>
                </v-radio-group>
              </v-container>
            </template>
          </v-flex>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-flex class="text-xs-right">
            <v-btn color="blue darken-1" class="white--text"
                   @click="questionVisible = false">Close
            </v-btn>
            <v-btn color="blue darken-1" class="white--text"
                   @click="questionVisible = false">Save
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

  import Question from '../components/Question'

  export default {
    name: 'Quizs',
    components: {Question},
    data () {
      return {
        questionVisible: false,

        questions: [
          'Question1',
          'Question2',
          'Question3',
          'Question4',
          'Question5'
        ],

        scores:[],

        totalScore: 0
      }
    }
  }
</script>

<style scoped>

</style>