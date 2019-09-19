<template>
  <support-template
    :main-title="title"
    :paragraph="paragraph"
    :positive-cards="cards"
    :card-width="cardWidth"
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
            title: 'KIDS HELPLINE',
            content: 'Kids Helpline is Australia’s only free, private and confidential 24/7 phone and online counselling ' +
              'service for young people aged 5 to 25. Since 1991, Australia’s kids and young people have been turning to ' +
              'our professional, specialised counsellors. It’s about practical help and emotional support at the critical ' +
              'moment they need someone to listen.',
            color: 'grey lighten-2',
            linkWord: 'Here',
            path: 'https://www.kidshelp.com.au/young-adults'
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
