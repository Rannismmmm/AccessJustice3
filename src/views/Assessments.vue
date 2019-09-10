<template>
  <v-container fluid style="padding: 0px">
    <v-img height="800"
           :src="require('../assets/darkBackground.jpg')">
      <v-container fluid fill-height>
        <v-layout column>
          <v-row align="center" justify="center">
            <quizs></quizs>
          </v-row>
        </v-layout>
      </v-container>
    </v-img>
    <!--<v-img class="hidden-md-and-up" height="500"-->
    <!--:src="require('../assets/darkBackground.jpg')">-->
    <!--<v-container fluid>-->
    <!--<v-flex row align-center justify-center>-->
    <!--<quizs></quizs>-->
    <!--</v-flex>-->
    <!--</v-container>-->
    <!--</v-img>-->
  </v-container>
</template>

<script>
  import Quizs from './Quizs'

  export default {
    name: 'Assessments',
    components: {Quizs}
  }
</script>

<style scoped>

</style>
