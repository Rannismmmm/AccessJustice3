<template>
  <support-template
    :main-title="title"
    :paragraph="paragraph"
    :positive-cards="cards"
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
              "advices and law. Call ",
            color: 'grey lighten-2',
            tele: '1300 792 387'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Relationships Australia provides relationship support services for individuals, ' +
              'families and communities in Australia which include family violence prevention, family ' +
              'dispute resolution, counselling services and ... If you need more help, please Call',
            color: 'grey lighten-2',
            tele: '1300 364 277'
          }
          ,
          {
            title: '1800RESPECT',
            content: '1800RESPECT provides support services about sexual assault, domestic or family violence ' +
              'which include information, referral, and counselling. If you need more help, please Call ',
            color: 'grey lighten-2',
            tele: '1800737732'
          }
        ]
      }
    },
  }


</script>

<style scoped>

</style>
