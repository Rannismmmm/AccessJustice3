<template>
  <v-container justify-center align-center>
    <v-dialog v-model="questionVisible" scrollable max-width="1200">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Take a look</v-btn>
      </template>
      <v-card>
        <v-card-title><span
          class="headline">A quick quiz{{subAns}}</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-stepper non-linear v-model="current">
          <v-stepper-header>
            <template v-for="(item, i) in questions">
              <v-stepper-step :key="i"
                              :complete="isComplete(i)"
                              :step="i + 1">
                {{item.title}}
              </v-stepper-step>

              <v-divider
                v-if="i !== (questions.length - 1)"
                :key="i"
              ></v-divider>
            </template>

          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content v-for="(item, i) in questions"
                               :key="i" :step="i + 1">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              >
                <template>
                  <v-container fluid fill-height>
                    <v-layout column>
                      <v-row wrap>
                        <v-card width="100vw">
                          <h3>{{item.ques}}</h3>
                        </v-card>
                      </v-row>
                      <v-row wrap>
                        <v-radio-group row v-model="answers[i]"
                                       @change="nextQues">
                          <v-radio label="Yes" value="1"></v-radio>
                          <v-spacer></v-spacer>
                          <v-radio label="No" value="0"></v-radio>
                        </v-radio-group>
                      </v-row>
                    </v-layout>
                  </v-container>
                </template>
              </v-card>
              <v-row style="width: auto; padding: 0px; margin: 0px" justify="space-between">
                <v-btn icon @click="goPrevious">
                  <v-icon large>mdi-chevron-left</v-icon>
                </v-btn>

                <v-btn icon @click="goNext">
                  <v-icon large>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <v-card-actions>
          <v-row justify="space-between" class="pl-8 pr-8">
            <v-btn text @click="closeQuiz">Cancel</v-btn>
            <v-btn :disabled="subDisable" color="primary" @click="pushAnswers">
              Submit
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

  import Question from '../components/Question'
  import QuizsWindow from '../components/QuizsWindow'
  import axios from 'axios'

  export default {
    name: 'Quizs',
    components: {QuizsWindow, Question},
    data () {
      return {
        questionVisible: false,
        buttonUnable: true,
        questions: [
          {title: 'Title1', ques: 'Question1'},
          {title: 'Title2', ques: 'Question2'},
          {title: 'Title3', ques: 'Question3'},
          {title: 'Title4', ques: 'Question4'},
          {title: 'Title5', ques: 'Question5'}
        ],
        firstEmpty: 0,
        current: 1,
        answers: [],
        subDisable: true,
        scores: [],
        totalScore: 0,
        subAns: '',
        resp: ''
      }
    },

    methods: {
      // fillAnswer(i){
      //   this.answers.i =
      // }
      closeQuiz () {
        this.questionVisible = false
        this.fillEmptyAnswers()
        this.subDisable = true
      },
      nextQues () {
        this.firstEmpty = this.answers.indexOf(-1)
        if (this.firstEmpty !== -1)
          this.current = this.firstEmpty + 1
      },

      fillEmptyAnswers () {
        this.answers = []
        this.questions.forEach(() => {
          this.answers.push(-1)
        })
      },

      isComplete (i) {
        return parseInt(this.answers[i]) !== -1
      },

      goNext () {
        this.current += 1
      },

      goPrevious () {
        this.current -= 1
      },

      async pushAnswers () {
        let sub = 'http://118.139.16.225:8080/JusticeLeague/webresources/entities.assessment/'
        this.answers.forEach((item) => {
          // sub += item
          sub += item
        })
        try {
          let resp = await axios.get(sub)
          this.subAns = resp
        } catch (e) {
          this.resp = []
        }
      }

    },


    watch: {
      answers (val) {
        this.nextQues()
        if (this.firstEmpty === -1)
          this.subDisable = false
      }
    }
    ,

    mounted () {
      this.fillEmptyAnswers()
    }
  }

</script>

<style scoped>

</style>
