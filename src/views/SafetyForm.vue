<template>
  <v-container fluid>
    <v-layout column style="padding-left: 18vw; padding-right: 18vw; padding-top: 220px" class="hidden-sm-and-down">
      <safety-form-content></safety-form-content>
    </v-layout>
    <v-layout column style="padding-left: 10vw; padding-right: 10vw; padding-top: 220px" class="hidden-md-and-up">
      <safety-form-content></safety-form-content>
    </v-layout>
  </v-container>
</template>

<script>
  import SafetyFormContent from '../components/SafetyFormContent'
  export default {
    name: 'SafetyForm',
    components: {SafetyFormContent}
  }
</script>

<style scoped>

</style>
