<template>
  <v-container fluid v-if="appear">
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 190px; margin-left: 8vw; margin-right: 8vw"
        class="text-center pb-10 hidden-sm-and-down">
        <h4 class="display-1 mb-4" style="color: #1976D2">
          What is safety plan and Why do I need it?</h4>
      </v-row>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 100px; margin-left: 9vw; margin-right: 9vw"
        class="text-center pb-10 hidden-md-and-up">
        <h4 class="headline mb-4" style="color: #1976D2">What
          is safety plan and Why do I need it?</h4>
      </v-row>
      <v-row wrap justify="center" align="center"
             style="margin-left: 8vw; margin-right: 8vw">
        <!--<v-flex xs12 sm6 md5 lg5 xl4 flat justify="center">-->
        <v-card flat height="270" width="430">
          <v-contaner fluid>
            <v-layout column>
              <v-row>
                <v-img :src="require('../assets/safetyplan/anihilator.jpeg')"
                       max-height="270" contain></v-img>
              </v-row>
            </v-layout>
          </v-contaner>
        </v-card>
        <!--</v-flex>-->
        <!--<v-flex xs12 sm6 md5 lg4 xl4 flat>-->
        <v-card flat class="pl-12 hidden-sm-and-down" width="430" height="295">
          <v-container fluid class="ma-0 pa-0">
            <v-layout column>
              <v-row wrap class="text-justify">
                <h1 class="title mb-4">
                  {{paragraph}}
                </h1>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat class="hidden-md-and-up text-justify" width="430">
          <v-container fluid class="ma-0 pa-0">
            <v-layout column>
              <v-row wrap>
                <h1 class="body-1 mb-4">
                  {{paragraph}}
                </h1>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <!--</v-flex>-->
      </v-row>
      <v-row wrap
             style="margin-left: 8vw; margin-right: 8vw; padding-top: 3.5vh">
        <v-container fluid justify="center">
          <v-layout column>
            <!--<v-row wrap justify="center">-->
            <!--<h1 class="title mb-4 hidden-sm-and-down">-->
            <!--Always good to be prepared. Start your Safety plan now!-->
            <!--</h1>-->
            <!--<h1 class="body-1 mb-4 hidden-md-and-up">-->
            <!--Always good to be prepared. Start your Safety plan now!-->
            <!--</h1>-->
            <!--</v-row>-->
            <v-row wrap justify="center">
              <v-btn color="primary" rounded @click="redirct(safetyForm)">
                Create my plan
                now!
              </v-btn>
            </v-row>
            <v-row wrap justify="center">
              <!--<v-btn color="primary" rounded @click="generatePDF">-->
              <!--Generate PDF-->
              <!--</v-btn>-->
            </v-row>
          </v-layout>
        </v-container>
      </v-row>
      <v-row>
        <footer-navigation
          :page-before="pageBefore"
          :page-after="pageAfter"
          ></footer-navigation>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  import jsPDF from 'jspdf'
  import FooterNavigation from '../components/FooterNavigation'

  export default {
    name: 'SafetyPlan',
    components: {FooterNavigation},
    data () {
      return {
        paragraph: 'Staying safe is the priority if you are facing domestic violence or in an ' +
          'emotionally abusive relationship. The safety plan is a process to look at your situation ' +
          'and check what you need to help you and your other family members(children or pets) to ' +
          'stay safe.' +
          'It is about taking control of your own life and safety, and you will have a ' +
          'plan to escape if the violent incident happens.',

        safetyForm: {
          title: 'Safety Form',
          path: '/safetyform'
        },

        appear: false,

        pageBefore: {
          title: 'Find Help',
          path: '/support'
        },
        pageAfter: {
          title: 'Home',
          path: '/'
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
      },

      generatePDF (contant1) {
        let pdfName = 'test1'
        var doc = new jsPDF()

        // Title
        if (contant1) {
          let contant1Str = 'EMERGENCY CONTACT(S)' + contant1
          doc.setFontSize(13)
          doc.text(17, 17, contant1Str)
        }

        // Filled red square
        doc.setDrawColor(0)
        doc.setFillColor(19, 8, 180)
        doc.rect(17, 20, 180, 4, 'FD')

        // First contact
        doc.setFontSize(13)
        doc.text(20, 34, 'Emergency Contact Name: ')


        // download the file
        doc.save(pdfName + '.pdf')
      },

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
