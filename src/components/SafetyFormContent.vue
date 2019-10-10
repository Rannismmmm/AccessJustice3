<template>
  <v-container fluid>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        class="text-center pb-5">
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          My Safety Plan</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">My
          Safety Plan</h4>
      </v-row>
      <v-row justify="center" wrap>
        <v-card flat width="100%">
          <v-card-title
            style="background-color: #1976D2; height: 50px; padding: 0"
            justify="start">
            <v-container fluid fill-height>
              <v-layout column>
                <v-row wrap justify="start" align="center" class="pl-4">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    How to save my Safety Plan</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    How to save my Safety Plan</h1>
                </v-row>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-layout column>
                <v-row justify="space-around" wrap class="hidden-sm-and-down">
                  <v-checkbox color="black" v-model="selected"
                              @click="downloadGeneric"
                              label="Download generic safety plan"
                              value="download"></v-checkbox>
                  <v-checkbox color="black" v-model="selected"
                              label="Create customised plan and download"
                              value="fill"></v-checkbox>
                </v-row>
                <v-row justify="start" wrap class="hidden-md-and-up">
                  <v-checkbox color="black" v-model="selected"
                              label="Download generic safety plan"
                              value="download"></v-checkbox>
                  <v-checkbox color="black" v-model="selected"
                              label="Create customised plan and download"
                              value="fill"></v-checkbox>
                </v-row>
                <v-row wrap no-gutters justify="start">
                  <p class="hidden-sm-and-down"
                     style="color: red; font-size: 11px">
                    Note: <span class="hidden-sm-and-down"
                                style="color: black">
                    Selecting the customised version of safety plan will
                    require some personal information that will be generated
                    with the PDF. None of the information will be saved to our
                    systems and will be disregarded at the point of generating
                    the safety plan document. If you do not wish to fill out
                    your personal information, please exit this option and
                    download the generic PDF.</span></p>
                  <p class="mb-4 hidden-md-and-up"
                     style="color: red; font-size: 11px">
                    Note: <span class="mb-4 hidden-md-and-up"
                                style="color: black">
                    Selecting the customised version of safety plan will
                    require some personal information that will be generated
                    with the PDF. None of the information will be saved to our
                    systems and will be disregarded at the point of generating
                    the safety plan document. If you do not wish to fill out
                    your personal information, please exit this option and
                    download the generic PDF.</span></p>
                </v-row>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row v-if="selected == 'fill'">
        <v-container fluid class="ma-0">
          <v-layout column>
            <v-row justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title
                  style="background-color: #1976D2; height: 50px; padding: 0"
                  justify="start">
                  <v-container fluid fill-height>
                    <v-layout column>
                      <v-row wrap justify="start" align="center" class="pl-4">
                        <h1 class="title mb-4 hidden-sm-and-down"
                            style="color: white">
                          Contacts</h1>
                        <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                            style="color: white">
                          Contacts</h1>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-container fluid class="pa-0">
                    <v-layout column>
                      <v-row justify="space-around" wrap class="pt-4 pb-2">
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader style="color: black">1. Name:
                            </v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              clearable
                              outlined
                              v-model="name1"
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader style="color: black">Phone:
                            </v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              clearable
                              outlined
                              v-model="number1"
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader style="color: black">Address:
                          </v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            clearable
                            outlined
                            v-model="address1"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader style="color: black">Notes:
                          </v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            clearable
                            outlined
                            v-model="notes1"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-divider></v-divider>
                      <v-row justify="space-around" wrap class="pt-4 pb-2">
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader style="color: black">2. Name:
                            </v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              clearable
                              outlined
                              v-model="name2"
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader style="color: black">Phone:
                            </v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              clearable
                              outlined
                              v-model="number2"
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader style="color: black">Address:
                          </v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            clearable
                            outlined
                            v-model="address2"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader style="color: black"
                          >Notes:
                          </v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            clearable
                            outlined
                            v-model="notes2"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title
                  style="background-color: #1976D2; height: 50px; padding: 0"
                  justify="start">
                  <v-container fluid fill-height>
                    <v-layout column>
                      <v-row wrap justify="start" align="center" class="pl-4">
                        <h1 class="title mb-4 hidden-sm-and-down"
                            style="color: white">
                          Checklists</h1>
                        <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                            style="color: white">
                          Checklists</h1>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-container fluid class="pa-0">
                    <v-layout column>
                      <v-row justify="space-between" wrap class="pt-4 pb-2">
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="ID"
                                      value="id"
                                      v-model="id"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Passport"
                                      value="passport"
                                      v-model="passport"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Birthday Certificate"
                                      value="birthday"
                                      v-model="birth"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Bankcards"
                                      value="bankcards"
                                      v-model="bankCards"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Driver License"
                                      value="license"
                                      v-model="license"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Cash"
                                      value="cash"
                                      v-model="cash"></v-checkbox>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl2>
                          <v-checkbox v-model="otherDocs"
                                      color="primary"
                                      label="Other Documents"></v-checkbox>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl10>
                          <v-text-field
                            clearable
                            outlined
                            :filled="!otherDocs"
                            :disabled="otherDocs !== true"
                            v-model="oDocs"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl2>
                          <v-checkbox color="primary"
                                      label="Children' Documents"
                                      v-model="childrenDocs"></v-checkbox>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl10>
                          <v-text-field
                            clearable
                            outlined
                            :filled="!childrenDocs"
                            :disabled="childrenDocs !== true"
                            v-model="cDocs"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl2>
                          <v-checkbox color="primary"
                                      label="Medications"
                                      v-model="medications"></v-checkbox>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl10>
                          <v-text-field
                            clearable
                            outlined
                            :filled="!medications"
                            :disabled="medications !== true"
                            v-model="mDocs"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl2>
                          <v-checkbox color="primary"
                                      label="Pets & Things"
                                      v-model="petsthings"></v-checkbox>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl10>
                          <v-text-field
                            clearable
                            outlined
                            :filled="!petsthings"
                            :disabled="petsthings !== true"
                            v-model="pDocs"
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title
                  style="background-color: #1976D2; height: 50px; padding: 0"
                  justify="start">
                  <v-container fluid fill-height>
                    <v-layout column>
                      <v-row wrap justify="start" align="center" class="pl-4">
                        <h1 class="title mb-4 hidden-sm-and-down"
                            style="color: white">
                          Notes</h1>
                        <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                            style="color: white">
                          Notes</h1>
                      </v-row>
                    </v-layout>
                  </v-container>
                </v-card-title>
                <v-card-text class="pt-8">
                  <v-textarea
                    outlined
                    clearable
                    height="200px"
                    v-model="notes"
                  ></v-textarea>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row wrap justify="space-around">
              <v-btn rounded color="primary" min-width="150px"
                     @click="cancel">
                Cancel
              </v-btn>
              <v-btn rounded color="primary" min-width="150px"
                     @click="generatePDF">
                Finish
              </v-btn>
            </v-row>
          </v-layout>
        </v-container>
      </v-row>
      <!--<v-row v-if="selected == 'download'" justify="center" wrap>-->
      <!--<h1 class="title mb-4 hidden-sm-and-down" style="color: midnightblue">-->
      <!--Please find the file in the download list</h1>-->
      <!--<h1 class="subtitle-1 mb-4 hidden-md-and-up"-->
      <!--style="color: midnightblue">-->
      <!--Please find the file in the download list</h1>-->
      <!--</v-row>-->
      <!--<v-row v-if="!selected" justify="center" wrap>-->
      <!--<h1 class="title mb-4 hidden-sm-and-down" style="color: midnightblue">-->
      <!--Please choose a way to fill out your safety plan</h1>-->
      <!--<h1 class="subtitle-1 mb-4 hidden-md-and-up"-->
      <!--style="color: midnightblue">-->
      <!--Please choose a way to fill out your safety plan</h1>-->
      <!--</v-row>-->
      <v-snackbar
        v-model="snackbar"
        timeout="4000"
      >
        {{ text }}
        <v-btn
          color="blue"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import jspdf from 'jspdf'

  export default {
    name: 'SafetyFormContent',

    data () {
      return {
        selected: null,
        otherDocs: false,
        childrenDocs: false,
        medications: false,
        petsthings: false,
        name1: null,
        number1: null,
        address1: null,
        name2: null,
        number2: null,
        address2: null,
        notes1: null,
        notes2: null,
        id: false,
        passport: false,
        bankCards: false,
        birth: false,
        cash: false,
        license: false,
        oDocs: null,
        cDocs: null,
        mDocs: null,
        pDocs: null,
        notes: null,
        text: null,
        snackbar: false
      }
    },

    methods: {
      cancel () {
        this.$router.push('/safetyplan')
        this.$store.commit('switchView', {
          text: 'Safety Plan',
          disabled: false,
          to: '/safetyplan'
        })
      },

      downloadBlank () {
        axios.get('https://cors-anywhere.herokuapp.com/http://justicelyapi-env.kx6wv7pwgw.ap-south-1.elasticbeanstalk.com/webresources/general/generatePDF/%20Shelly/123456789/10%20laundry%20place%20Point%20West%203092/Joe%20Blogs/987654321/1%20City%20road%20Melbourne%203000/1/1/1/1/1/1/1/1/1/1/Testing%20this/Testing%20this%201/Testing%20this%202/Testing%20this%203/Testing%20these%20notes')
          .then(resp => {
            window.open(resp)
          })
          .catch(error => {
            alert(error)
          })
      },

      reset () {
        this.selected = null,
          this.otherDocs = false,
          this.childrenDocs = false,
          this.medications = false,
          this.petsthings = false,
          this.name1 = null,
          this.number1 = null,
          this.address1 = null,
          this.name2 = null,
          this.number2 = null,
          this.address2 = null,
          this.notes1 = null,
          this.notes2 = null,
          this.id = false,
          this.passport = false,
          this.bankCards = false,
          this.birth = false,
          this.cash = false,
          this.license = false,
          this.oDocs = null,
          this.cDocs = null,
          this.mDocs = null,
          this.pDocs = null,
          this.notes = null
      },

      downloadGeneric () {
        this.text = 'Your generic form has been downloaded'
        this.snackbar = true
        this.reset()
        this.generatePDF()
      },

      generatePDF () {
        let doc = new jspdf()

        var imgChk = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4REQRXhpZgAATU0AKgAAAAgACAE7AAIAAAAOAAAIegMBAAUAAAABAAAIiAMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAASdFESAAQAAAABAAASdIdpAAQAAAABAAAIkOocAAcAAAgMAAAAbgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNvbnRpIFJhbWV0c2UAAAGGoAAAsY8ABZADAAIAAAAUAAAQ3pAEAAIAAAAUAAAQ8pKRAAIAAAADMDAAAJKSAAIAAAADMDAAAOocAAcAAAgMAAAI0gAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMTk6MTA6MDkgMTY6NTU6NTAAMjAxOToxMDowOSAxNjo1NTo1MAAAAP/hCZxodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj48eG1wOkNyZWF0ZURhdGU+MjAxOS0xMC0wOVQxNjo1NTo1MDwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwACAQECAQECAgICAgICAgMFAwMDAwMGBAQDBQcGBwcHBgcHCAkLCQgICggHBwoNCgoLDAwMDAcJDg8NDA4LDAwM/9sAQwECAgIDAwMGAwMGDAgHCAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgATQBXAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV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'

        var imgNoChk = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RD0RXhpZgAATU0AKgAAAAgABAE7AAIAAAAOAAAISodpAAQAAAABAAAIWJydAAEAAAAcAAAQ0OocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFNvbnRpIFJhbWV0c2UAAAWQAwACAAAAFAAAEKaQBAACAAAAFAAAELqSkQACAAAAAzg0AACSkgACAAAAAzg0AADqHAAHAAAIDAAACJoAAAAAHOoAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDE5OjEwOjA5IDE2OjU2OjIxADIwMTk6MTA6MDkgMTY6NTY6MjEAAABTAG8AbgB0AGkAIABSAGEAbQBlAHQAcwBlAAAA/+ELIGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iLz48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+PHhtcDpDcmVhdGVEYXRlPjIwMTktMTAtMDlUMTY6NTY6MjEuODQxPC94bXA6Q3JlYXRlRGF0ZT48L3JkZjpEZXNjcmlwdGlvbj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPlNvbnRpIFJhbWV0c2U8L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNr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'

        let pdfName = 'Blank_form.pdf'
        if (this.name1) pdfName = 'Safety_plan.pdf'

        // Contacts Title
        doc.setFontSize(16)
        doc.text(17, 17, 'EMERGENCY CONTACT(S)')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 20, 180, 4, 'FD')

        // First contact
        doc.setFontSize(14)
        doc.text(20, 35, '1ST CONTACT DETAILS')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(20, 37.5, 90, 1, 'FD')
        let eCNA1 = 'Contact Name: '
        if (this.name1) eCNA1 += this.name1
        doc.setFontSize(12)
        doc.text(20, 45, eCNA1)
        let eCNU1 = 'Contact Number: '
        if (this.number1) eCNU1 += this.number1
        doc.setFontSize(12)
        doc.text(20, 52.25, eCNU1)
        let eCA1 = 'Contact Address: '
        if (this.address1) eCA1 += this.address1
        doc.setFontSize(12)
        doc.text(20, 59.5, eCA1)
        doc.setFontSize(14)
        // Second contact
        doc.text(20, 75, '2ND CONTACT DETAILS')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(20, 77.5, 90, 1, 'FD')
        let eCNA2 = 'Contact Name: '
        if (this.name2) eCNA2 += this.name2
        doc.setFontSize(12)
        doc.text(20, 85, eCNA2)
        let eCNU2 = 'Contact Number: '
        if (this.number2) eCNU2 += this.number2
        doc.setFontSize(12)
        doc.text(20, 92.25, eCNU2)
        let eCA2 = 'Contact Address: '
        if (this.address2) eCA2 += this.address2
        doc.setFontSize(12)
        doc.text(20, 99.5, eCA2)

        // Documents Title
        doc.setFontSize(16)
        doc.text(17, 120, 'EMERGENCY DOCUMENTS(S)')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 123, 180, 4, 'FD')

        // Document provided section
        doc.setFontSize(14)
        doc.text(18, 135, 'DOCUMENTS THAT YOU HAVE READY (checkbox selected if items are present)'
        )

        // ID
        doc.setFontSize(12)
        doc.text(25, 142.25, '+ ID / Proof Of Age')
        if (this.id && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 138, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 138, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 149.5, '+ Drivers License')
        if (this.license && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 145.25, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 145.25, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 156.75, '+ Passport')
        if (this.passport && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 152.5, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 152.5, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 164, '+ Birthday Certificate')
        if (this.birth && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 159.75, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 159.75, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 171.25, '+ Bankcard(s)')
        if (this.bankCards && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 167, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 167, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 178.5, '+ Cash')
        if (this.cash && this.selected == 'fill') {
          doc.addImage(imgChk, 'JPEG', 80, 174.25, 5, 5)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 174.25, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 185.75, '+ Other Documents: ')
        if (this.oDocs) {
          doc.addImage(imgChk, 'JPEG', 80, 181.5, 5, 5)
          doc.text(90, 185.75, this.oDocs)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 181.5, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 193, '+ Childrens Document: ')
        if (this.cDocs) {
          doc.addImage(imgChk, 'JPEG', 80, 188.75, 5, 5)
          doc.text(90, 193, this.cDocs)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 188.75, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 200.25, '+ Medications: ')
        if (this.mDocs) {
          mLine += this.mDocs
          doc.addImage(imgChk, 'JPEG', 80, 196, 5, 5)
          doc.text(90, 200.25, this.mDocs)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 196, 5, 5)
        }

        doc.setFontSize(12)
        doc.text(25, 207.5, '+ Pets & Things: ')
        if (this.pDocs) {
          doc.addImage(imgChk, 'JPEG', 80, 203.25, 5, 5)
          doc.text(90, 207.5, this.pDocs)
        } else if (this.selected != 'fill') {
          doc.addImage(imgNoChk, 'JPEG', 80, 203.25, 5, 5)
        }

        // Notes Title
        doc.setFontSize(16)
        doc.text(17, 218.5, 'NOTES')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 220, 180, 4, 'FD')

        doc.setFontSize(12)
        if (this.notes) {
          doc.text(17, 229, this.notes)
        } else if (this.selected != 'fill') {
          doc.text(17, 229, 'No Notes')
        }

        // Call for help Title
        doc.setFontSize(16)
        doc.text(17, 250, 'CALL FOR HELP')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 253, 180, 4, 'FD')

        doc.setFontSize(12)
        doc.text(20, 262, 'Emergency Number')
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 262, '000')
        doc.setFontSize(12)
        doc.text(20, 271.5, '1800RESPECT')
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 271.5, '1800 737 732')
        doc.setFontSize(8)
        doc.text(20, 275.25,
          '(24 hour national sexual assault, family and domestic violene counselling line)'
        )
        doc.setFontSize(12)
        doc.text(20, 282.5, 'Womens Domestice Violence Crisis Service of Victoria'
        )
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 282.5, '1800 015 885')
        doc.setFontSize(8)
        doc.text(20, 286, '(24 hour support services, safe accomodation, information and more)'
        )
        doc.save(pdfName)
        // download the file
        //doc.save(pdfName + 'pdf')

        if (this.selected == 'fill') {
          this.reset()
          this.text = 'Your filled form has been downloaded'
          this.snackbar = true
        }
      }
      // generatePDF () {
      //   let doc = new jspdf()
      //
      //   let pdfName = 'Blank_form.pdf'
      //   if (this.name1)
      //     pdfName = 'Safety_plan.pdf'
      //
      //   // Contacts Title
      //   doc.setFontSize(16)
      //   doc.text(17, 17, 'EMERGENCY CONTACT(S)')
      //   doc.setDrawColor(0)
      //   doc.setFillColor(19, 8, 180)
      //   doc.rect(17, 20, 180, 4, 'FD')
      //
      //   // First contact
      //   doc.setFontSize(14)
      //   doc.text(20, 35, '1ST CONTACT DETAILS')
      //   doc.setDrawColor(0)
      //   doc.setFillColor(0, 0, 0)
      //   doc.rect(20, 37.5, 90, 1, 'FD')
      //   let eCNA1 = 'Emergency Contact Name: '
      //   if (this.name1)
      //     eCNA1 += this.name1
      //   doc.setFontSize(12)
      //   doc.text(20, 45, eCNA1)
      //   let eCNU1 = 'Emergency Contact Number: '
      //   if (this.number1)
      //     eCNU1 += this.number1
      //   doc.setFontSize(12)
      //   doc.text(20, 52.25, eCNU1)
      //   let eCA1 = 'Emergency Contact Address: '
      //   if (this.address1)
      //     eCA1 += this.address1
      //   doc.setFontSize(12)
      //   doc.text(20, 59.5, eCA1)
      //   doc.setFontSize(14)
      //   // Second contact
      //   doc.text(20, 75, '2ND CONTACT DETAILS')
      //   doc.setDrawColor(0)
      //   doc.setFillColor(0, 0, 0)
      //   doc.rect(20, 77.5, 90, 1, 'FD')
      //   let eCNA2 = 'Emergency Contact Name: '
      //   if (this.name2)
      //     eCNA2 += this.name2
      //   doc.setFontSize(12)
      //   doc.text(20, 85, eCNA2)
      //   let eCNU2 = 'Emergency Contact Number: '
      //   if (this.number2)
      //     eCNU2 += this.number2
      //   doc.setFontSize(12)
      //   doc.text(20, 92.25, eCNU2)
      //   let eCA2 = 'Emergency Contact Address: '
      //   if (this.address2)
      //     eCA2 += this.address2
      //   doc.setFontSize(12)
      //   doc.text(20, 99.5, eCA2)
      //
      //   // Documents Title
      //   doc.setFontSize(16)
      //   doc.text(17, 120, 'EMERGENCY DOCUMENTS(S)')
      //   doc.setDrawColor(0)
      //   doc.setFillColor(19, 8, 180)
      //   doc.rect(17, 123, 180, 4, 'FD')
      //
      //   // Document provided section
      //   doc.setFontSize(14)
      //   doc.text(20, 135, 'DOCUMENTS THAT YOU HAVE READY (checkbox selected if items are present)')
      //
      //   // ID
      //   if (this.id && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 142.25, '+ ID / Proof Of Age')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 142.25, '+ ID / Proof Of Age')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 138, 5, 5, 'FD')
      //   }
      //
      //   if (this.license && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 149.5, '+ Drivers License')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 149.5, '+ Drivers License')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 145.25, 5, 5, 'FD')
      //   }
      //
      //   if (this.passport && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 156.75, '+ Passport')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 156.75, '+ Passport')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 152.5, 5, 5, 'FD')
      //   }
      //
      //   if (this.birth && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 164, '+ Birthday Certificate')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 164, '+ Birthday Certificate')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 159.75, 5, 5, 'FD')
      //   }
      //
      //   if (this.bankCards && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 171.25, '+ Bankcard(s)')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 171.25, '+ Bankcard(s)')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 167, 5, 5, 'FD')
      //   }
      //
      //   if (this.cash && this.selected == 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 178.5, '+ Cash')
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 178.5, '+ Cash')
      //     doc.setDrawColor(0)
      //     doc.setFillColor(225, 225, 225)
      //     doc.rect(90, 174.25, 5, 5, 'FD')
      //   }
      //
      //   let docLine = '+ Other Documents: '
      //   if (this.oDocs) {
      //     docLine += this.oDocs
      //     doc.setFontSize(12)
      //     doc.text(25, 185.75, docLine)
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 185.75, docLine)
      //   }
      //
      //   let cLine = '+ Childrens Document: '
      //   if (this.cDocs) {
      //     cLine += this.cDocs
      //     doc.setFontSize(12)
      //     doc.text(25, 193, cLine)
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 193, cLine)
      //   }
      //
      //   let mLine = '+ Medications: '
      //   if (this.mDocs) {
      //     mLine += this.mDocs
      //     doc.setFontSize(12)
      //     doc.text(25, 200.25, mLine)
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 200.25, mLine)
      //   }
      //
      //   let pLine = '+ Pets & Things: '
      //   if (this.pDocs) {
      //     pLine += this.pDocs
      //     doc.setFontSize(12)
      //     doc.text(25, 207.5, pLine)
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 207.5, pLine)
      //   }
      //
      //   let notes = '+ Notes: '
      //   if (this.notes) {
      //     notes += this.notes
      //     doc.setFontSize(12)
      //     doc.text(25, 214.75, notes)
      //   } else if (this.selected != 'fill') {
      //     doc.setFontSize(12)
      //     doc.text(25, 214.75, notes)
      //   }
      //
      //   // Call for help Title
      //   doc.setFontSize(16)
      //   doc.text(17, 240, 'CALL FOR HELP')
      //   doc.setDrawColor(0)
      //   doc.setFillColor(19, 8, 180)
      //   doc.rect(17, 243, 180, 4, 'FD')
      //
      //   doc.setFontSize(12)
      //   doc.text(20, 255, 'Emergency Number')
      //   doc.setFontSize(12)
      //   //doc.setFontColor(255, 0, 0);
      //   doc.text(150, 255, '000')
      //   doc.setFontSize(12)
      //   doc.text(20, 266.5, '1800RESPECT')
      //   doc.setFontSize(12)
      //   //doc.setFontColor(255, 0, 0);
      //   doc.text(150, 266.5, '1800 737 732')
      //   doc.setFontSize(8)
      //   doc.text(20, 270.25, '(24 hour national sexual assault, family and domestic violene counselling line)')
      //   doc.setFontSize(12)
      //   doc.text(20, 277.5, 'Womens Domestice Violence Crisis Service of Victoria')
      //   doc.setFontSize(12)
      //   //doc.setFontColor(255, 0, 0);
      //   doc.text(150, 277.5, '1800 015 885')
      //   doc.setFontSize(8)
      //   doc.text(20, 281, '(24 hour support services, safe accomodation, information and more)')
      //
      //   doc.save(pdfName)
      //   // download the file
      //   //doc.save(pdfName + 'pdf')
      //
      //   if (this.selected == 'fill') {
      //     this.reset()
      //     this.text = 'Your filled form has been downloaded'
      //     this.snackbar = true
      //   }
      // }
    }
  }
</script>

<style scoped>

</style>
