<template>
  <v-container fluid style="padding-top: 150px">
    <v-layout column>
      <v-row justify="center" align="center">
        <v-card flat min-width="370" max-width="62vw">
          <v-img
            :src="require('../assets/assessments/ass.jpeg')"
            min-width="370" max-width="62vw"
            class="white--text">
            <v-container fluid fill-height>
              <v-layout column>
                <v-row
                  align="end"
                  justify="center"
                  wrap
                  class="pb-8 hidden-sm-and-down"
                >
                  <v-container fluid>
                    <v-layout column>
                      <v-row justify="center" class="text-center">
                        <h1
                          class="display-1 font-weight-thick mb-4 text-center">
                          ARE YOU IN
                          AN
                          EMOTIONALLY ABUSIVE</h1>
                      </v-row>
                        <v-row justify="center" class="text-center">
                          <h1
                            class="display-1 font-weight-thick mb-4 text-center">
                            RELATIONSHIP?
                          </h1>
                        </v-row>
                    </v-layout>
                  </v-container>
                </v-row>
                <v-row
                  align="end"
                  justify="center"
                  wrap
                  class="pb-8 hidden-md-and-up"
                >
                  <h1 class="subtitle-1 font-weight-thick mb-4 text-center">ARE
                    YOU IN AN
                    EMOTIONALLY ABUSIVE RELATIONSHIP?</h1>
                </v-row>
                <v-row align="start" justify="center">
                  <v-container fluid>
                    <v-layout column>
                      <v-row justify="center">
                        <v-dialog v-model="questionVisible" scrollable
                                  max-width="1000">
                          <template v-slot:activator="{ on }">
                            <v-btn class="hidden-sm-and-down" color="white"
                                   dark rounded outlined x-large
                                   @click="openQuizs">FIND OUT NOW
                            </v-btn>
                            <v-btn class="hidden-md-and-up" color="white" dark
                                   rounded outlined small
                                   @click="openQuizs">FIND OUT NOW
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title><span
                              class="headline">Self Assessment{{hasRequestedQuestions}}</span>
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
                                    {{i + 1}}
                                  </v-stepper-step>

                                  <v-divider
                                    v-if="i !== (questions.length - 1)"
                                    :key="i"
                                  ></v-divider>
                                </template>

                              </v-stepper-header>

                              <v-stepper-items>
                                <v-stepper-content
                                  v-for="(item, i) in questions"
                                  :key="i" :step="i + 1">
                                  <v-card
                                    class="mb-12"
                                    color="blue-grey lighten-5"
                                    height="200px"
                                  >
                                    <template>
                                      <v-container fluid fill-height
                                                   class="pt-0">
                                        <v-layout column>
                                          <v-row wrap>
                                            <v-card width="100vw">
                                              <h3
                                                class="title hidden-sm-and-down">
                                                {{item}}</h3>
                                              <h3
                                                class="body-1 hidden-md-and-up">
                                                {{item}}</h3>
                                            </v-card>
                                          </v-row>
                                          <v-row wrap>
                                            <v-radio-group column
                                                           v-model="answers[i]"
                                                           @change="nextQues">
                                              <v-radio value="1">
                                                <template v-slot:label>
                                                  <div><strong
                                                    class="success--black"
                                                    style="color: black">Yes</strong>
                                                  </div>
                                                </template>
                                              </v-radio>
                                              <v-spacer></v-spacer>
                                              <v-radio value="0">
                                                <template v-slot:label>
                                                  <div><strong
                                                    class="success--black"
                                                    style="color: black">No</strong>
                                                  </div>
                                                </template>
                                              </v-radio>
                                            </v-radio-group>
                                          </v-row>
                                        </v-layout>
                                      </v-container>
                                    </template>
                                    <v-row
                                      style="width: auto; padding: 0px; margin: 0px"
                                      justify="space-between"
                                      align="end">
                                      <v-btn icon @click="goPrevious"
                                             :disabled="i === 0">
                                        <v-icon large>mdi-chevron-left</v-icon>
                                      </v-btn>
                                      <p class="ma-0 hidden-sm-and-down">
                                        Source:
                                        ABS Personal Safety Survey,
                                        2016</p>
                                      <p class="mb-2 hidden-md-and-up"
                                         style="font-size: 10px">Source: ABS
                                        Personal Safety Survey,
                                        2016</p>
                                      <v-btn icon @click="goNext"
                                             :disabled="i === (questions.length - 1)">
                                        <v-icon large>mdi-chevron-right
                                        </v-icon>
                                      </v-btn>
                                    </v-row>
                                  </v-card>
                                </v-stepper-content>
                              </v-stepper-items>
                            </v-stepper>
                            <v-card-actions>
                              <v-row justify="center">
                                <v-btn width="100px" @click="closeQuiz">Cancel
                                </v-btn>
                                <v-btn width="100px" :loading="btnLoading"
                                       :disabled="subDisable" color="primary"
                                       @click="pushAnswers">
                                  Submit
                                </v-btn>
                                <!--<v-btn color="primary" to="/asresultshigh">-->
                                <!--Submit-->
                              </v-row>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-row>
              </v-layout>
            </v-container>
          </v-img>
        </v-card>
      </v-row>
      <v-row>
        <footer-navigation
          :page-after="pageAfter"
          :page-before="pageBefore"
          ></footer-navigation>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import Quizs from './Quizs'
  import axios from 'axios'
  import FooterNavigation from '../components/FooterNavigation'

  export default {
    name: 'Assessments',
    components: {FooterNavigation, Quizs},
    data () {
      return {
        buttonUnable: true,
        questions: [],
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
        title: 'Assessment',
        btnLoading: false,
        resultPath: null,
        pageBefore: {
          title: 'Statistics',
          path: '/visualization'
        },
        pageAfter: {
          title: 'Find Help',
          path: '/support'
        }
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
        this.subDisable = true
        this.current = 1
        this.questionVisible = false
        this.questions = []
        this.fillEmptyAnswers()
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
        this.subDisable = true
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

      pushAnswers () {
        this.btnLoading = true
        let subUrl = 'https://cors-anywhere.herokuapp.com/http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/assessment/findAbuseLevel/'
        this.answers.forEach((item) => {
          // sub += item
          subUrl += item
        })
        axios.get(subUrl)
          .then(response => {
            if (response.data === 1) {
              this.resultPath = '/asresultshigh/high'
              this.redirct('/asresultshigh/high')
            } else if (response.data === 2) {
              this.resultPath = '/asresultshigh/medium'
              this.redirct('/asresultshigh/medium')
            } else if (response.data == 'low' || response.data === 3) {
              this.resultPath = '/asresultslow'
              this.redirct('/asresultslow')
            }
            this.btnLoading = false
          })
          .catch(error => {
            this.title = error
          })
        this.fillEmptyAnswers()
      },

      redirct (path) {
        this.$router.push(path)
        this.$store.commit('addView', {
          text: 'Results',
          disabled: false,
          to: this.resultPath
        })
      },

      requestQuestion () {
        this.subDisable = true
        this.current = 1
        this.onLoading = true
        if (this.questions.length === 0) {
          axios.get('https://cors-anywhere.herokuapp.com/http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/assessment/findAll')
            .then(response => {
              response.data.forEach((item) => {
                this.questions.push(item.question)
              })
              if (this.questions.length > 5)
                this.questions.splice(5, (this.questions.length - 5))
              else
                this.fillEmptyAnswers()
              this.onLoading = false
            })
            .catch(error => {
              this.onLoading = false
              this.title = error
              //do whatever with response
            })
        }
      },

      openQuizs () {
        this.questionVisible = true
        if (this.questions.length === 0)
          this.requestQuestion()
      }

    },


    watch: {
      answers (val) {
        if (!this.answers.includes(-1))
          this.subDisable = false
      }


    },

    mounted () {
      if (this.$route.params.questionVisible == 'true') {
        this.openQuizs()
      }
      this.fillEmptyAnswers()
      // this.requestQuestion()
    }
  }
</script>

<style scoped>

</style>
