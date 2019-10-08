<template>
  <support-template
    :main-title="title"
    :paragraph="paragraph"
    :positive-cards="cards"
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
        paragraph: 'There are some Legal Support Services are available in  Melbourne. \n' +
          '\n' +
          'Call 000 for emergent support if you need help immediately.',
        cards: [
          {
            title: 'VICTORIA LEGAL AID',
            content: "Victoria Legal Aid provides services to help people who is suffering " +
              "from social and economical disadvantage people. The service mainly targets people " +
              "in the state of Victoria, Australia and it offers different kinds of information and " +
              "advices and law.",
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
            content: '1800RESPECT provides support services about sexual assault, domestic or family violence ' +
              'which include information, referral, and counselling. If you need more help, please contact 1800RESPECT.',
            color: 'grey lighten-2',
            tele: '1800 737 732'
          }
        ]
      }
    },

    methods: {
      navigateToView(item) {
        this.$router.push(item.path)
        this.$store.commit('switchView', {
          text: item.title,
          disabled: false,
          to: item.path
        }, {
          text: 'Find Help',
          disabled: true,
          to: '/support'
        })
      }
    }
  }


</script>

<style scoped>

</style>
