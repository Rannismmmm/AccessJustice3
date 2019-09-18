<template>
  <support-template
    :mainTitle="title"
    :active-cards="cards"
    :card-width="cardWidth"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  export default {
    name: 'Support',
    components: {SupportTemplate},
    data () {
      return {
        title: 'OUR SUPPORT SERVICES',
        cardWidth: '250px',
        cards: [
          {
            title: 'Legal Support',
            comment: 'Find the legal support here',
            color: 'grey',
            path: '/legalsupport'
          },
          {
            title: 'Care Shelters',
            comment: 'Find the nearby shelters here',
            color: 'indigo darken-4',
            path: '/sheltermap'
          },
          {
            title: 'Support & Counceling',
            comment: 'Support and counceling services',
            color: 'teal darken-3',
            path: '/supportcounseling'
          }
          ,
          {
            title: 'Self-Care',
            comment: 'Self care services',
            color: 'deep-purple darken-3',
            path: '/selfcare'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
