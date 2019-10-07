<template>
  <support-template
    :main-title="title"
    :active-cards="cards"
    :no-space-title="noSpace"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  export default {
    name: 'SelfCare',
    components: {SupportTemplate},

    data() {
      return {
        title: 'Self-Care',
        cards: [
          {
            title: 'Events',
            comment: 'Find the nearby events here',
            color: 'green darken-1',
            path: '/events'
          },
          {
            title: 'Articles',
            comment: 'Some articles you might be interested',
            color: 'light-blue darken-1',
            path: '/articles'
          },
          {
            title: 'Apps',
            comment: 'Some apps you might be interested',
            color: 'deep-orange darken-4',
            path: '/apps'
          }
        ],
        noSpace: true
      }
    },

  }
</script>

<style scoped>

</style>
