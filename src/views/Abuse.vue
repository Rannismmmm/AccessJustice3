<template>
  <v-container>
    <v-container fluid style="padding-left: 17vw;padding-right: 17vw"
                 class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 90px"
          class="hidden-sm-and-down"
        >
          <h4 class="display-1 mb-4">UNDERSTAND EMOTIONAL ABUSE</h4>
        </v-row>
        <v-flex v-for="(line,i) in lines" :key="i">
          <abuse-line
            :title="line.title"
            :content="line.content"
            :img="line.img"
          ></abuse-line>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
      <v-row
        align="end"
        justify="center"
        wrap
        style="padding-top: 200px;"
      >
        <h4 class="headline mb-4">UNDERSTAND EMOTIONAL ABUSE</h4>
      </v-row>
      <v-flex v-for="(line,i) in lines" :key="i">
        <abuse-line
          :title="line.title"
          :content="line.content"
          :img="line.img"
        ></abuse-line>
      </v-flex>
    </v-container>
  </v-container>
</template>

<script>
  import AbuseLine from '../components/AbuseLine'

  export default {
    name: 'Abuse',
    components: {AbuseLine},

    data () {
      return {
        lines: [
          {
            title: 'SIGNS',
            content: 'Would you like to participate in our Sponsorship program? Get involved and see your name on one of our upcoming events. We rely heavily on any extra support we can get, so if you or your company has the capacity to give, your generous contribution has the power to change the life of an individual or family in need.'
          },
          {
            title: 'IMPACT',
            content: 'Each and every person has the ability to make a difference in someone’s life at Justicly. We would greatly appreciate if you would consider a generous contribution. We are looking for engaged community members in our Donation program to make a difference. For more information about getting involved, get in touch today.'
          },
          {
            title: 'CAUSES',
            content: 'Each and every person has the ability to make a difference in someone’s life at Justicly. We would greatly appreciate if you would consider a generous contribution. We are looking for engaged community members in our Donation program to make a difference. For more information about getting involved, get in touch today.'
          },
          {
            title: 'STATISTICS',
            content: 'It is through the immense generosity of the San Francisco residents that we are able to offer our emergency services at all hours of the day. Every contribution goes toward helping victims receive the support they need to move on from their challenging situations. If you’re interested in helping out with our Volunteering program, please reach out.'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
