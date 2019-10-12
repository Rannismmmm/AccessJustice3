<template>
  <v-container fluid fill-height>
    <v-layout column>
      <v-row style="padding-left: 20vw; padding-right: 20vw"
             class="hidden-sm-and-down">
        <abuse-content></abuse-content>
      </v-row>
      <v-row style="padding-left: 8vw; padding-right: 8vw"
             class="hidden-md-and-up">
        <abuse-content></abuse-content>
      </v-row>
      <v-row justify="space-between"
             style="padding-left: 10vw; padding-right: 10vw">
        <v-card flat @click="navigateToView(pageBefore)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <v-icon color="primary" class="pr-3">mdi-arrow-left-thick
                </v-icon>
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageBefore.title}}</span>
              </v-row>
            </v-layout>
          </v-container>
        </v-card>
        <v-card flat @click="navigateToView(pageAfter)">
          <v-container fluid>
            <v-layout column>
              <v-row>
                <span class="headline font-weight-bold" style="color: #1976D2">{{pageAfter.title}}</span>
                <v-icon color="primary" class="pl-3">mdi-arrow-right-thick
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
  import AbuseLine from '../components/AbuseLine'
  import AbuseSlides from '../components/AbuseSlides'
  import AbuseContent from '../components/AbuseContent'

  export default {
    name: 'Abuse',
    components: {AbuseContent, AbuseSlides, AbuseLine},

    data () {
      return {
        lines: [
          {
            title: 'SIGNS',
            content: 'The most common behaviors of Emotional Abuse are:',
            points: ['Shouting or verbally abusing you to intimidate, humiliate or criticize you in front of others.',
              'Controlled you from contacting family, friends or the community.',
              'Threatening to or destroying your property and then blaming you for it.',
              'Lying to your children to turn them against you, threatening to harm or taking them away from you.'],
            img: require('../assets/abuse/lifecycle.jpeg')
          },
          {
            title: 'CAUSES',
            content: 'Emotional abuse is mainly due to:',
            points: [
              'Gender Inequality',
              'Substance or alcohol abuse',
              'Unemployment',
              'Mentally-ill partner'
            ],
            img: require('../assets/abuse/abuseSecond.png')
          },
          {
            title: 'IMPACT',
            content: 'Emotional abuse can affect a person physically and mentally. It may cause:',
            points: [
              'Depression',
              'Anxiety',
              'Fear',
              'Shame',
              'Insomnia',
              'Loneliness',
              'Substance Abuse'
            ],
            img: require('../assets/abuse/abuseThird.jpg')
          },
          // {
          //   title: 'STATISTICS',
          //   content: 'It is through the immense generosity of the San Francisco residents that we are able to offer our emergency services at all hours of the day. Every contribution goes toward helping victims receive the support they need to move on from their challenging situations. If you’re interested in helping out with our Volunteering program, please reach out.'
          // }
        ],
        pageBefore: {
          title: 'Home',
          path: '/'
        },
        pageAfter: {
          title: 'Self-Assessment',
          path: '/assessments/false'
        }
      }
    },

    methods: {
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
    }

  }
</script>

<style scoped>

</style>
