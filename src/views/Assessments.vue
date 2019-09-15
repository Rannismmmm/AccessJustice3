<template>
  <v-container fluid style="padding: 0px">
    <v-img
      :src="require('../assets/assessments/ass.jpeg')"
      style="padding-top: 200px; height: 90vh; width: 90vw">
      <v-container fluid fill-height>
        <v-layout column>
          <v-row align="center" justify="center">
            <v-container justify-center align-center>
              <v-dialog v-model="questionVisible" scrollable max-width="1200">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark @click="openQuizs">Take a look
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title><span
                    class="headline">{{title}}</span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card v-if="onLoading" height="200px">
                    <v-container fluid fill-height>
                      <v-layout column>
                        <v-row justify="center" align="center">
                          <v-progress-circular
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                        </v-row>
                      </v-layout>
                    </v-container>
                  </v-card>
                  <v-stepper v-else non-linear v-model="current">
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
                          <v-row style="width: auto; padding: 0px; margin: 0px"
                                 justify="space-between">
                            <v-btn icon @click="goPrevious"
                                   :disabled="i === 0">
                              <v-icon large>mdi-chevron-left</v-icon>
                            </v-btn>

                            <v-btn icon @click="goNext"
                                   :disabled="i === (questions.length - 1)">
                              <v-icon large>mdi-chevron-right</v-icon>
                            </v-btn>
                          </v-row>
                        </v-card>
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>
                  <v-card-actions>
                    <v-row justify="space-between" class="pl-8 pr-8">
                      <v-btn text @click="closeQuiz">Cancel</v-btn>
                      <!--<v-btn :disabled="subDisable" color="primary" @click="pushAnswers">-->
                      <!--Submit-->
                      <!--</v-btn>-->
                      <v-btn color="primary" to="/asresults">
                        Submit
                      </v-btn>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-container>
          </v-row>
        </v-layout>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
  import Quizs from './Quizs'
  import axios from 'axios'

  export default {
    name: 'Assessments',
    components: {Quizs},
    data () {
      return {
        buttonUnable: true,
        questions: [
          // {title: '1', ques: 'Question1'},
          // {title: '2', ques: 'Question2'},
          // {title: '3', ques: 'Question3'},
          // {title: '4', ques: 'Question4'},
          // {title: '5', ques: 'Question5'}
        ],
        firstEmpty: 0,
        current: 1,
        answers: [],
        subDisable: true,
        scores: [],
        totalScore: 0,
        subAns: '',
        resp: '',
        questionVisible: false,
        onLoading: false,
        title: 'a quick quiz'
      }
    },

    props: {
      visible: {
        type: Boolean,
        default: false
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
      },

      requestQuestion () {
        this.onLoading = true
        axios.get('http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/assessment/findAll',
          {crossdomain: true})
          .then(response => {
            response.forEach((item) => {
              this.question.push(item.question)
            })
            this.onLoading = false
          })
          .catch(error => {
            this.onLoading = false
            this.title = error
            //do whatever with response
          })
      },

      openQuizs () {
        this.questionVisible = true
        this.requestQuestion()
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
      if (this.$route.params.questionVisible == 'true')
        this.questionVisible = true
      this.fillEmptyAnswers()
    }
  }
</script>

<style scoped>

</style>
