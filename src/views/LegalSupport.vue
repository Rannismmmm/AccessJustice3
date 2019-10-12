<template>
  <support-template
    :main-title="title"
    :paragraph="paragraph"
    :positive-cards="cards"
    :page-before="{title: 'Find Help', path: '/support'}"
    :page-after="{title: 'Care Shelters', path: '/sheltermap'}"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'

  export default {
    name: 'LegalSupport',
    components: {SupportTemplate},

    data () {
      return {
        title: 'Legal Support',
        paragraph: 'Following are the Legal Support Services are available in  Melbourne. \n' +
          '\n' +
          'Please call 000 for emergency support.',
        cards: [
          {
            title: 'VICTORIA LEGAL AID',
            content: "Victoria Legal Aid provides services to help people who are suffering " +
              "from social and economical disadvantage. This service provides various types of " +
              "legal support to the people of Victoria",
            color: 'grey lighten-2',
            tele: '1300 792 387'
          },
          {
            title: 'LIFELINE',
            content: 'Lifeline provides crisis support to anyone across Australia experiencing any sort ' +
              'of personal crisis. It\'s free and working 24-hour which inludes call service, face-to-face, ' +
              'and online assistance.',
            color: 'grey lighten-2',
            tele: '13 11 14'
          }
          ,
          {
            title: '1800RESPECT',
            content: '1800RESPECT provides support services on sexual assault, domestic or family violence. ' +
              'It offers information, legal advice and counselling services.',
            color: 'grey lighten-2',
            tele: '1800 737 732'
          }
        ]
      }
    },
  }


</script>

<style scoped>

</style>
