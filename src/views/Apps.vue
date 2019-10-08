<template>
  <support-template
    :main-title="mainTitle"
    :paragraph="paragraph"
    :card-height="cardHeight"
    :positive-cards="cards"
    :icon-width="iconWidth"
    :page-before="{title: 'Articles', path: '/articles'}"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  export default {
    name: 'Apps',
    components: {SupportTemplate},

    data(){
      return {
        mainTitle: 'Apps',
        paragraph: 'These are the apps available for you.',
        cardHeight: "420px",
        iconWidth: '89px',
        cards: [
          {
            icon: require('../assets/icons/CALM HARM.jpg'),
            title: 'CALM HARM',
            content: "Calm Harm provides tasks to help you resist or manage the urge to self-harm. " +
              "You can make it private by setting a password, and personalise the app if you so wish. " +
              "You will be able to track your progress and notice change.",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/gb/app/calm-harm/id961611581',
            android: 'https://play.google.com/store/apps/details?id=uk.org.stem4.calmharm&hl=en_GB'
          },
          {
            icon: require('../assets/icons/CALM.png'),
            title: 'CALM',
            content: "Our blog is dedicated to adventures in mindfulness, the power of a good night's sleep, " +
              "and cultivating a healthier and happier life. We hope you enjoy your visit!",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/calm-com/id571800810',
            android: 'https://play.google.com/store/apps/details?id=com.calm.android'
          },
          {
            icon: require('../assets/icons/Breakup shakeup.png'),
            title: 'BREAKUP SHAKEUP',
            content: "The app aims to help young people overcome those moments of despair by planning activities " +
              "with friends and relatives, rethinking their negative thoughts, and learning new strategies for " +
              "coping with the difficult times.",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/au/app/breakup-shakeup/id1017200579',
            android: 'https://play.google.com/store/apps/details?id=com.rxbreakup&hl=en'
          },
          {
            icon: require('../assets/icons/HABIT BULL.png'),
            title: 'HABITBULL',
            content: "HabitBull helps you organize your life. Easily keep track of all your habits, routines and " +
              "repeated to-dos. Smash Through Your Goals; Fully Customizable; Cut Bad Habits From Your Life; Add " +
              "Some Positive Habits",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/bj/app/habitbull-habit-tracker/id1041482672',
            android: 'https://play.google.com/store/apps/details?id=com.oristats.habitbull'
          },
          {
            icon: require('../assets/icons/7CUPS.jpg'),
            title: '7CUPS',
            content: "180 professional therapists; Over 300,000 trained listeners; Helped over 25 million people. " +
              "No matter who you are or what you’re going through, this is a place where you’ll be heard and cared for. ",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/7cupsoftea/id921814681?utm_source=7cupsfooter',
            android: 'https://play.google.com/store/apps/details?id=com.sevencupsoftea.app&utm_source=7cupsfooter'
          },
          {
            icon: require('../assets/icons/HAPPYIFY.png'),
            title: 'HAPPIFY',
            content: "Overcome stress and negative thoughts. Build resilience.Happify is the single destination " +
              "for effective, evidence-based solutions for better mental health and wellbeing in the 21st century.",
            color: 'grey lighten-2',
            ios: 'https://apps.apple.com/us/app/happify/id730601963',
            android: 'https://play.google.com/store/apps/details?id=com.happify.happifyinc&hl=en'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
