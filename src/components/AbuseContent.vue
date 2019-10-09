<template>
  <v-container fluid fill-height>
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 200px; padding-bottom: 20px"
        class="text-center">
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          WHAT IS EMOTIONAL
          ABUSE?</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">WHAT
          IS EMOTIONAL
          ABUSE?</h4>
      </v-row>
      <v-row
        align="start"
        justify="start"
        wrap>
        <h1 class="body-1 mb-4 font-weight-medium hidden-sm-and-down">
          Emotional abuse can happen without physical violence. Although it
          does not hurt you physically, it can do harm to your mental health
          and have serious impact. Depression, fear, and anxiety often
          come with emotional abuse. There are some common behaviors you can
          check as the sign of an emotionally abusive relationship.
        </h1>
        <h1 class="body-2 mb-4 font-weight-medium hidden-md-and-up">
          Emotional abuse can happen without physical violence. Although it
          does not hurt you physically, it can do harm to your mental health
          and have serious impact. Depression, fear, and anxiety often
          come with emotional abuse. There are some common behaviors you can
          check as the sign of an emotionally abusive relationship.
        </h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
        wrap>
        <v-img :src="cycle" max-height="55vh" contain>

        </v-img>
      </v-row>
      <v-row
        align="center"
        justify="center"
        wrap
        class="text-center pt-12 pb-10">
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          Understand Emotional Abuse</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">
          Understand Emotional Abuse</h4>
      </v-row>
      <v-row
        justify="center"
        wrap
        v-for="(section, i) in sections"
        :key="i"
      >
        <abuse-paragraph
          :title="section.title"
          :paragraph="section.paragraph"
          :points="section.points"
        ></abuse-paragraph>
      </v-row>
      <v-row justify="center" class="pt-5 pb-5">
        <!--<h1 class="title mb-4 hidden-sm-and-down" style="color: #1976D2">-->
          <!--Interested in the relevant data visualization or facts?-->
        <!--</h1>-->
        <!--<h1 class="body-1 mb-4 hidden-md-and-up" style="color: #1976D2">-->
          <!--Interested in the relevant data visualization or facts?-->
        <!--</h1>-->
        <h4 class="display-1 mb-4 hidden-sm-and-down" style="color: #1976D2">
          Are you in an emotionally abusive relationship?</h4>
        <h4 class="headline mb-4 hidden-md-and-up" style="color: #1976D2">
          Are you in an emotionally abusive relationship?</h4>
      </v-row>
      <v-row justify="center">
        <!--<h1 class="title mb-4 hidden-sm-and-down" style="color: #1976D2">-->
          <!--Are you in an emotionally abusive relationship?-->
        <!--</h1>-->
        <!--<h1 class="body-1 mb-4 hidden-md-and-up" style="color: #1976D2">-->
          <!--Are you in an emotionally abusive relationship?-->
        <!--</h1>-->
        <!--<v-btn rounded outlined color="black" min-width="231px"-->
               <!--@click="toAssessment">-->
          <!--Check my relationship-->
        <!--</v-btn>-->
        <v-btn rounded color="primary"
               @click="toAssessment">
          Find out more
        </v-btn>
      </v-row>
      <!--<v-row justify="start">-->
        <!--<v-btn rounded color="primary" min-width="231px"-->
               <!--@click="toCharts">-->
          <!--Start-->
        <!--</v-btn>-->
      <!--</v-row>-->
    </v-layout>
  </v-container>
</template>

<script>
  import AbuseParagraph from './AbuseParagraph'

  export default {
    name: 'AbuseContent',
    components: {AbuseParagraph},
    data () {
      return {
        cycle: require('../assets/abuse/lifecycle.jpeg'),
        sections: [
          {
            title: 'Signs',
            paragraph: 'The most common behaviors of Emotional Abuse are:',
            points: [
              'Shouting or verbally abusing you to intimidate, humiliate or criticize you in front of others.',
              'Controlled you from contacting family, friends or the community.',
              'Threatening to or destroying your property and then blaming you for it.',
              'Lying to your children to turn them against you, threatening to harm or taking them away from you.'
            ]
          },
          {
            title: 'Causes',
            paragraph: 'Emotional abuse can affect a person physically and mentally. It may cause:',
            points: [
              'Gender Inequality',
              'Substance abuse or alcohol',
              'Unemployment',
              'Mentally-ill partner'
            ]
          },
          {
            title: 'Impact',
            paragraph: 'Emotional abuse is mainly due to:',
            points: [
              'Depression',
              'Anxiety',
              'Fear',
              'Shame',
              'Insomnia',
              'Loneliness',
              'Substance Abuse'
            ]
          }
        ]
      }
    },

    methods: {
      toAssessment () {
        this.$router.push('/assessments/true')
        this.$store.commit('switchView', {redirectionItem: {
          text: 'Self-Assessment',
          disabled: false,
          to: '/assessments/true'
        }})
      },

      toCharts () {
        this.$router.push('/visualization')
        this.$store.commit('addView', {
          text: 'Statistics',
          disabled: false,
          to: '/visualization'
        })
      }
    }
  }
</script>

<style scoped>

</style>
