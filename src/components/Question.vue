<template>
  <v-container justify="start">
    <v-card row>
      <div><h3>{{question}}</h3></div>
    </v-card>
    <v-radio-group v-model="scores" row>
      <v-radio label="Yes" value="1"></v-radio>
      <v-radio label="No" value="0"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    name: 'Question',

    props: {
      question: {
        type: String,
        default: 'Question'
      }
    }
  }
</script>

<style scoped>

</style>