<template>
  <support-template
    :main-title="title"
    :paragraph="paragraph"
    :positive-cards="cards"
    :card-width="cardWidth"
    :page-before="{title: 'Care Shelters', path: '/sheltermap'}"
    :page-after="{title: 'Events', path: '/events'}"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'

  export default {
    name: 'SupportCounseling',
    components: {SupportTemplate},

    data () {
      return {
        title: 'Support & Counseling',
        paragraph: 'Following are the Support & Counseling services available in  Melbourne.',
        cardWidth: '350px',
        cards: [
          {
            title: 'PSYCH CENTRAL',
            content: 'Psych Central is the Internet’s largest and oldest independent mental health online resource. ' +
              'Since 1995 our award-winning website has been run by mental health professionals offering reliable, ' +
              'trusted information and over 250 support groups to individuals struggling with a problem in their lives. ' +
              'They are today’s modern voice for mental health information, emotional support, and advocacy.',
            color: 'grey lighten-2',
            linkWord: 'Visit website',
            path: 'https://psychcentral.com/'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Relationships Australia provides relationship support services for individuals, ' +
              'families and communities in Australia which include family violence prevention, family ' +
              'dispute resolution and counselling services.',
            color: 'grey lighten-2',
            linkWord: 'Visit website',
            path: 'https://www.relationships.org.au/'
          }
          ,
          {
            title: 'HEADSPACE',
            content: 'Headspace provides free online and telephone support and counselling to young people aged between ' +
              '12 and 25. In Australia, you can get help from professional people and talk to them over phone or email' +
              'confidentially. They provide group chats to connect with other people who have gone through similar ' +
              'situation and recovered from it.',
            color: 'grey lighten-2',
            linkWord: 'Visit website',
            path: 'https://headspace.org.au/'
          }
        ]
      }
    }
  }


</script>

<style scoped>

</style>
