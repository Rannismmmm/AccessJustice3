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
          <v-card-title style="background-color: #1976D2" justify="start">
            <h1 class="title mb-4 hidden-sm-and-down" style="color: white">
              How to save my Safety Plan</h1>
            <h1 class="subtitle-1 mb-4 hidden-md-and-up" style="color: white">
              How to save my Safety Plan</h1>
          </v-card-title>
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-layout column>
                <v-row justify="space-around" wrap class="hidden-sm-and-down">
                  <v-checkbox color="black" v-model="selected"
                              @click="downloadBlank"
                              label="Download generic safety plan"
                              value="download"></v-checkbox>
                  <v-checkbox color="primary" v-model="selected"
                              label="Create customised plan and download"
                              value="fill"></v-checkbox>
                </v-row>
                <v-row justify="start" wrap class="hidden-md-and-up">
                  <v-checkbox color="black" v-model="selected"
                              label="Download generic safety plan"
                              value="download"></v-checkbox>
                  <v-checkbox color="primary" v-model="selected"
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
        <v-container fluid class="pa-0 ma-0">
          <v-layout column>
            <v-row justify="center" wrap>
              <v-card flat width="100%">
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    Contacts</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Contacts</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid class="pa-0">
                    <v-layout column>
                      <v-row justify="space-around" wrap class="pt-4 pb-2">
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader>1. Name:</v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              label="Name"
                              clearable
                              outlined
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader>Phone:</v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              label="Phone"
                              clearable
                              outlined
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader>Address:</v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            label="Address"
                            clearable
                            outlined
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader>Notes:</v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            label="Notes"
                            clearable
                            outlined
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-divider></v-divider>
                      <v-row justify="space-around" wrap class="pt-4 pb-2">
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader>2. Name:</v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              label="Name"
                              clearable
                              outlined
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6 lg6 xl6 row>
                          <v-flex xs4 sm4 md3 lg3 xl2>
                            <v-subheader>Phone:</v-subheader>
                          </v-flex>
                          <v-flex xs8 sm8 md9 lg9 xl10>
                            <v-text-field
                              label="Phone"
                              clearable
                              outlined
                            ></v-text-field>
                          </v-flex>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader>Address:</v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            label="Address"
                            clearable
                            outlined
                          ></v-text-field>
                        </v-flex>
                      </v-row>
                      <v-row justify="space-between">
                        <v-flex xs4 sm4 md3 lg2 xl1>
                          <v-subheader>Notes:</v-subheader>
                        </v-flex>
                        <v-flex xs8 sm8 md9 lg10 xl11>
                          <v-text-field
                            label="Notes"
                            clearable
                            outlined
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
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    Checklists</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Checklists</h1>
                </v-card-title>
                <v-card-text>
                  <v-container fluid class="pa-0">
                    <v-layout column>
                      <v-row justify="space-between" wrap class="pt-4 pb-2">
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="ID"
                                      value="id"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Passport"
                                      value="passport"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Birthday Certificate"
                                      value="birthday"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Bankcards"
                                      value="bankcards"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Driver License"
                                      value="license"></v-checkbox>
                        </v-flex>
                        <v-flex xs6 sm6 md4 lg4 xl4>
                          <v-checkbox color="primary"
                                      label="Cash"
                                      value="cash"></v-checkbox>
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
                            label="Other Docs"
                            clearable
                            outlined
                            :filled="!otherDocs"
                            :disabled="otherDocs !== true"
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
                            label="Children's Docs"
                            clearable
                            outlined
                            :filled="!childrenDocs"
                            :disabled="childrenDocs !== true"
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
                            label="Medications"
                            clearable
                            outlined
                            :filled="!medications"
                            :disabled="medications !== true"
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
                            label="Pets and other things"
                            clearable
                            outlined
                            :filled="!petsthings"
                            :disabled="petsthings !== true"
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
                <v-card-title style="background-color: #1976D2"
                              justify="start">
                  <h1 class="title mb-4 hidden-sm-and-down"
                      style="color: white">
                    Notes</h1>
                  <h1 class="subtitle-1 mb-4 hidden-md-and-up"
                      style="color: white">
                    Notes</h1>
                </v-card-title>
                <v-card-text class="pt-8">
                  <v-textarea
                    outlined
                    label="Other notes"
                    clearable
                    height="200px"
                  ></v-textarea>
                </v-card-text>
              </v-card>
            </v-row>
            <v-row wrap justify="space-around">
              <v-btn rounded outlined color="black" min-width="150px"
                     @click="cancel">
                Cancel
              </v-btn>
              <v-btn rounded outlined color="black" min-width="150px"
                     @click="">
                Finish
              </v-btn>
            </v-row>
          </v-layout>
        </v-container>
      </v-row>
      <v-row v-if="selected == 'download'" justify="center" wrap>
        <h1 class="title mb-4 hidden-sm-and-down" style="color: midnightblue">
          Please find the file in the download list</h1>
        <h1 class="subtitle-1 mb-4 hidden-md-and-up"
            style="color: midnightblue">
          Please find the file in the download list</h1>
      </v-row>
      <v-row v-if="!selected" justify="center" wrap>
        <h1 class="title mb-4 hidden-sm-and-down" style="color: midnightblue">
          Please choose a way to fill out your safety plan</h1>
        <h1 class="subtitle-1 mb-4 hidden-md-and-up"
            style="color: midnightblue">
          Please choose a way to fill out your safety plan</h1>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'SafetyFormContent',

    data () {
      return {
        selected: null,
        otherDocs: false,
        childrenDocs: false,
        medications: false,
        petsthings: false

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
      }
    }
  }
</script>

<style scoped>

</style>
