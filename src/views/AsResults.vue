<template>
  <v-container fluid>
    <v-row style="padding-top: 250px;">
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-card
            class="mx-auto"
            width="800"
            flat
          >
            <v-list class="pa-0" color="primary" dark>
              <v-list-group dark>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-title>Legal Support
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item class="pa-0">
                  <v-list-tile>
                    <v-card flat light>
                      <support-template
                        :main-title="title"
                        :paragraph="paragraph"
                        :positive-cards="cards"
                      ></support-template>
                    </v-card>
                  </v-list-tile>
                </v-list-item>
              </v-list-group>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-title>Shelter
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item class="pa-0">
                  <v-list-tile>
                    <v-card flat light>
                      <support-template
                        :main-title="title"
                        :paragraph="paragraph"
                        :positive-cards="cards"
                      ></support-template>
                    </v-card>
                  </v-list-tile>
                </v-list-item>
              </v-list-group>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-title>Support & Counseling
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item class="pa-0">
                  <v-list-tile>
                    <v-card flat light>
                      <support-template
                        :main-title="title"
                        :paragraph="paragraph"
                        :positive-cards="cards"
                      ></support-template>
                    </v-card>
                  </v-list-tile>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'

  export default {
    name: 'AsResults',
    components: {SupportTemplate},
    data () {
      return {
        title: 'Support & Counseling',
        paragraph: 'These are the Support & Counseling services available in  Melbourne. ',
        cards: [
          {
            title: 'VICTORIA LEGAL AID',
            content: 'Find information and get access to free face-to-face legal advice.\n' +
              'Call 1300 792 387 for help.',
            color: 'grey lighten-2'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Support groups and counselling on relationships, and for abusive and abused partners.' +
              'To be connected to the nearest Relationships Australia, call 1300 364 277 (for the cost of a local call).',
            color: 'grey lighten-2'
          }
          ,
          {
            title: '1800RESPECT',
            content: '24 hour national sexual assault, family and domestic violence counselling line for' +
              'any Australian who has experienced, or is at risk of, family and domestic violence and/or sexual assault.' +
              'Call toll-free 1800 737 732.',
            color: 'grey lighten-2'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
