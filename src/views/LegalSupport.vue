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
    },
  }


</script>

<style scoped>

</style>
