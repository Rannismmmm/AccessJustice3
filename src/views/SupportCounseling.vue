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
        paragraph: 'These are the Support & Counseling services available in  Melbourne. ',
        cardWidth: '350px',
        cards: [
          {
            title: 'PSYCH CENTRAL',
            content: 'Psych Central is the Internet’s largest and oldest independent mental health online resource. ' +
              'Since 1995, our award-winning website has been run by mental health professionals offering reliable, ' +
              'trusted information and over 250 support groups to individuals struggling with a problem in their lives. ' +
              'They are today’s modern voice for mental health information, emotional support, and advocacy.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://psychcentral.com/'
          },
          {
            title: 'RELATIONSHIPS AUSTRALIA',
            content: 'Relationships Australia provides relationship support services for individuals, ' +
              'families and communities in Australia which include family violence prevention, family ' +
              'dispute resolution, counselling services and ... If you need more help, please Call',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://www.relationships.org.au/'
          }
          ,
          {
            title: 'HEADSPACE',
            content: 'Headspace provides free online and telephone support and counselling to young people ' +
              '12 - 25 and their families and friends. If you’re based in Australia and going through a tough time, ' +
              'eheadspace can help. You can talk 1-on-1 with an eheadspace clinician via an online chat, ' +
              'email or over the phone. You can also join group chats which cover a variety of helpful topics and are a ' +
              'great way to learn from other people’s experiences.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://headspace.org.au/'
          }
        ]
      }
    }
  }


</script>

<style scoped>

</style>
