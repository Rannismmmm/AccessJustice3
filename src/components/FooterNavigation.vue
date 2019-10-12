<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout column>
      <v-row justify="space-between"
             style="padding-left: 10vw; padding-right: 10vw">
        <v-card flat @click="navigateToView(pageBefore)">
          <v-container fluid>
            <v-layout column>
              <v-row class="hidden-sm-and-down">
                <v-icon color="primary" class="pr-3">mdi-arrow-left-thick
                </v-icon>
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageBefore.title}}</span>
              </v-row>
              <v-row class="hidden-md-and-up">
                <v-icon small color="primary" class="pr-3">mdi-arrow-left-thick
                </v-icon>
                <span class="subtitle-1 font-weight-bold" style="color: #1976D2">{{pageBefore.title}}</span>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat @click="navigateToView(pageAfter)">
          <v-container fluid>
            <v-layout column>
              <v-row class="hidden-sm-and-down">
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageAfter.title}}</span>
                <v-icon color="primary" class="pl-3">mdi-arrow-right-thick
                </v-icon>
              </v-row>
              <v-row class="hidden-md-and-up">
                <span class="subtitle-1 font-weight-bold" style="color: #1976D2">{{pageAfter.title}}</span>
                <v-icon small color="primary" class="pl-3">mdi-arrow-right-thick
                </v-icon>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'FooterNavigation',

    props: {
      pageBefore: {
        type: Object,
        default: () => {}
      },
      pageAfter: {
        type: Object,
        default: () => {}
      },
      basePage: {
        type: Object,
        default: () => {}
      }
    },

    methods: {
      navigateToView (item) {
        if (this.basePage) {
          this.$router.push(item.path)
          this.$store.commit('switchView', {
            redirectionItem: {
              text: item.title,
              disabled: false,
              to: item.path
            }, otherBaseView: this.basePage
          })
        } else {
          this.$router.push(item.path)
          this.$store.commit('switchView', {
            redirectionItem: {
              text: item.title,
              disabled: false,
              to: item.path
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
