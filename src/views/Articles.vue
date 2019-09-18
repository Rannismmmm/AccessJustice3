<template>
  <support-template
    :main-title="mainTitle"
    :paragraph="paragraph"
    :positive-cards="cards"
    :card-height="cardHeight"
    :icon-height="iconHeight"
  ></support-template>
</template>

<script>
  import SupportTemplate from '../components/SupportTemplate'
  export default {
    name: 'Articles',
    components: {SupportTemplate},

    data(){
      return {
        mainTitle: 'Articles',
        paragraph: 'These are the articles available for you.',
        cardHeight: '395px',
        iconHeight: '80px',
        cards: [
          {
            title: '11 Ways to Chill Out in 5 Minutes or Less',
            content: "You're on a beautiful, tropical beach, with yellow dunes and crystal-clear blue waters. " +
              "You can feel the sand in your toes and the wind in your hair … not doing it for you? Not surprising. " +
              "Different things relax different people, and even the calmest among us experience...",
            color: 'grey lighten-2',
            redirect: 'https://www.goodnet.org/articles/11-ways-to-chill-out-in-5-minutes-or-less',
            org: 'Goodnet.org.',
          },
          {
            title: 'How to be awesome at self-care',
            content: "Learning to look after yourself will build your self-confidence and help you give out positive vibes. " +
              "It’s not always easy to get into the habit of self-care, so here are a few ideas to get you started.",
            color: 'grey lighten-2',
            redirect: 'https://au.reachout.com/articles/how-to-be-awesome-at-self-care',
            org: 'ReachOut.com.'
          },
          {
            title: 'Living with Anxiety',
            content: "Anxiety can be challenging to live with but there are many effective ways to cope with it. Find the " +
              "combination that works for you. Of all existing psychological and mental maladies, anxiety disorders are " +
              "the most common...",
            color: 'grey lighten-2',
            redirect: 'https://www.psycom.net/living-with-anxiety/',
            org: 'Psycom.net.'
          },
          {
            title: 'Self-help for depression',
            content: "Self-help strategies for depression can be really effective for improving mood. Find out more about " +
              "how to help yourself with depression through self-help strategies that you can use to manage the symptoms " +
              "of depression, and what to do if you’re still finding it difficult.",
            color: 'grey lighten-2',
            redirect: 'https://au.reachout.com/articles/self-help-for-depression',
            org: 'ReachOut.com.'
          },
          {
            title: 'Therapy for Anxiety Disorders',
            content: "Whether you’re suffering from panic attacks, obsessive thoughts, unrelenting worries, or an incapacitating " +
              "phobia, it’s important to know that you don’t have to live with anxiety and fear. Treatment can help, and for many " +
              "anxiety problems, therapy is often the most...",
            color: 'grey lighten-2',
            redirect: 'https://www.helpguide.org/articles/anxiety/therapy-for-anxiety-disorders.htm',
            org: 'HelpGuide.org.'
          },
          {
            title: 'Depression Treatment',
            content: "When you’re depressed, it can feel like you’ll never get out from under a dark shadow. However, even " +
              "the most severe depression is treatable. So, if your depression is keeping you from living the life you want " +
              "to, don’t hesitate to seek help...many different treatment options available.",
            color: 'grey lighten-2',
            redirect: 'https://www.helpguide.org/articles/depression/depression-treatment.htm',
            org: 'HelpGuide.org.'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
