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
                              @click="downloadGeneric"
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
                              v-model="name1"
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
                              v-model="number1"
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
                            v-model="address1"
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
                            v-model="notes1"
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
                              v-model="name2"
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
                              v-model="number2"
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
                            v-model="address2"
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
                            label="Other Docs"
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
                            label="Children's Docs"
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
                            label="Medications"
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
                            label="Pets and other things"
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
                    v-model="notes"
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
                     @click="generatePDF">
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
      <v-snackbar
        v-model="snackbar"
        timeout="3000"
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
        this.text = "Your generic form has been downloaded"
        this.snackbar = true
        this.reset()
        this.generatePDF()
      },

      generatePDF () {
        let doc = new jspdf()

        let pdfName = 'Blank_form.pdf'
        if (this.name1)
          pdfName = 'Safety_plan.pdf'

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
        doc.setFillColor(0, 0, 0)
        doc.rect(20, 37.5, 90, 1, 'FD')
        let eCNA1 = 'Emergency Contact Name: '
        if (this.name1)
          eCNA1 += this.name1
        doc.setFontSize(12)
        doc.text(20, 45, eCNA1)
        let eCNU1 = 'Emergency Contact Number: '
        if (this.number1)
          eCNU1 += this.number1
        doc.setFontSize(12)
        doc.text(20, 52.25, eCNU1)
        let eCA1 = 'Emergency Contact Address: '
        if (this.address1)
          eCA1 += this.address1
        doc.setFontSize(12)
        doc.text(20, 59.5, eCA1)
        doc.setFontSize(14)
        // Second contact
        doc.text(20, 75, '2ND CONTACT DETAILS')
        doc.setDrawColor(0)
        doc.setFillColor(0, 0, 0)
        doc.rect(20, 77.5, 90, 1, 'FD')
        let eCNA2 = 'Emergency Contact Name: '
        if (this.name2)
          eCNA2 += this.name2
        doc.setFontSize(12)
        doc.text(20, 85, eCNA2)
        let eCNU2 = 'Emergency Contact Number: '
        if (this.number2)
          eCNU2 += this.number2
        doc.setFontSize(12)
        doc.text(20, 92.25, eCNU2)
        let eCA2 = 'Emergency Contact Address: '
        if (this.address2)
          eCA2 += this.address2
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
        doc.text(20, 135, 'DOCUMENTS THAT YOU HAVE READY (checkbox selected if items are present)')

        // ID
        if (this.id && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 142.25, '+ ID / Proof Of Age')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 142.25, '+ ID / Proof Of Age')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 138, 5, 5, 'FD')
        }

        if (this.license && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 149.5, '+ Drivers License')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 149.5, '+ Drivers License')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 145.25, 5, 5, 'FD')
        }

        if (this.passport && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 156.75, '+ Passport')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 156.75, '+ Passport')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 152.5, 5, 5, 'FD')
        }

        if (this.birth && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 164, '+ Birthday Certificate')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 164, '+ Birthday Certificate')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 159.75, 5, 5, 'FD')
        }

        if (this.bankCards && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 171.25, '+ Bankcard(s)')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 171.25, '+ Bankcard(s)')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 167, 5, 5, 'FD')
        }

        if (this.cash && this.selected == 'fill') {
          doc.setFontSize(12)
          doc.text(25, 178.5, '+ Cash')
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 178.5, '+ Cash')
          doc.setDrawColor(0)
          doc.setFillColor(225, 225, 225)
          doc.rect(90, 174.25, 5, 5, 'FD')
        }

        let docLine = '+ Other Documents: '
        if (this.oDocs) {
          docLine += this.oDocs
          doc.setFontSize(12)
          doc.text(25, 185.75, docLine)
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 185.75, docLine)
        }

        let cLine = '+ Childrens Document: '
        if (this.cDocs) {
          cLine += this.cDocs
          doc.setFontSize(12)
          doc.text(25, 193, cLine)
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 193, cLine)
        }

        let mLine = '+ Medications: '
        if (this.mDocs) {
          mLine += this.mDocs
          doc.setFontSize(12)
          doc.text(25, 200.25, mLine)
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 200.25, mLine)
        }

        let pLine = '+ Pets & Things: '
        if (this.pDocs) {
          pLine += this.pDocs
          doc.setFontSize(12)
          doc.text(25, 207.5, pLine)
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 207.5, pLine)
        }

        let notes = '+ Notes: '
        if (this.notes) {
          notes += this.notes
          doc.setFontSize(12)
          doc.text(25, 214.75, notes)
        } else if (this.selected != 'fill') {
          doc.setFontSize(12)
          doc.text(25, 214.75, notes)
        }

        // Call for help Title
        doc.setFontSize(16)
        doc.text(17, 240, 'CALL FOR HELP')
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 243, 180, 4, 'FD')

        doc.setFontSize(12)
        doc.text(20, 255, 'Emergency Number')
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 255, '000')
        doc.setFontSize(12)
        doc.text(20, 266.5, '1800RESPECT')
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 266.5, '1800 737 732')
        doc.setFontSize(8)
        doc.text(20, 270.25, '(24 hour national sexual assault, family and domestic violene counselling line)')
        doc.setFontSize(12)
        doc.text(20, 277.5, 'Womens Domestice Violence Crisis Service of Victoria')
        doc.setFontSize(12)
        //doc.setFontColor(255, 0, 0);
        doc.text(150, 277.5, '1800 015 885')
        doc.setFontSize(8)
        doc.text(20, 281, '(24 hour support services, safe accomodation, information and more)')

        doc.save(pdfName)
        // download the file
        //doc.save(pdfName + 'pdf')

        if (this.selected == 'fill') {
          this.reset()
          this.text = "Your filled form has been downloaded"
          this.snackbar = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
