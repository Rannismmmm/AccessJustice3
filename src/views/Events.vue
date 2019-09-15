<template>
  <v-container fluid
               class="hidden-sm-and-down">
    <v-layout column>
      <v-row
        align="center"
        justify="center"
        wrap
        style="padding-top: 250px; padding-bottom: 20px"
      >
        <h4 class="display-1 mb-4" style="color: #1976D2">Events</h4>
      </v-row>
      <v-row
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <h1 class="body-2 mb-4">These are the events available in  Melbourne.
          </h1>
        </v-row>
      <v-row
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <a href="https://www.eventbrite.com.au/d/australia--melbourne/free--events/women-abuse/?page=1" class="body-2 mb-4">
            https://www.eventbrite.com.au/d/australia--melbourne/free--events/women-abuse/?page=1
          </a>
        </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Events'
  }
</script>

<style scoped>

</style>
