<template>
  <v-container fluid>
    <v-container fluid style="padding: 0px"
                 class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 20px"
          class="hidden-sm-and-down text--primary"
        >
          <h4 class="display-1 mb-4" style="color: #1976D2">UNDERSTAND
            EMOTIONAL ABUSE</h4>
        </v-row>
      </v-layout>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
      <v-row
        align="end"
        justify="center"
        wrap
        style="padding-top: 200px;"
        class="pl-3"
      >
        <h4 style="color: #1976D2" class="headline mb-4">UNDERSTAND EMOTIONAL ABUSE</h4>
      </v-row>
    </v-container>
    <!--<v-row>-->
    <!--<abuse-slides></abuse-slides>-->
    <!--</v-row>-->
    <v-row justify="center">
      <v-flex justify="center" v-for="(line,i) in lines" :key="i">
        <abuse-line
          :title="line.title"
          :content="line.content"
          :img="line.img"
          :points="line.points"
        ></abuse-line>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  import AbuseLine from '../components/AbuseLine'
  import AbuseSlides from '../components/AbuseSlides'

  export default {
    name: 'Abuse',
    components: {AbuseSlides, AbuseLine},

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
              'Substance abuse or alcohol',
              'Unemployment',
              'Mentally-ill partner',
            ],
            img: require('../assets/abuse/abusepie.jpeg')
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
            img: require('../assets/abuse/abusebar.jpeg')
          }
          // {
          //   title: 'STATISTICS',
          //   content: 'It is through the immense generosity of the San Francisco residents that we are able to offer our emergency services at all hours of the day. Every contribution goes toward helping victims receive the support they need to move on from their challenging situations. If you’re interested in helping out with our Volunteering program, please reach out.'
          // }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
