<template>
  <v-container fluid>
    <v-layout column>
      <v-row justify="start">
        <h1 class="title mb-4 hidden-sm-and-down" style="color: #1976D2">
          {{title}}</h1>
        <h1 class="subtitle-1 mb-4 hidden-md-and-up" style="color: #1976D2">
          {{title}}</h1>
      </v-row>
      <v-row
        justify="start"
        wrap>
        <h1 class="body-1 mb-4 hidden-sm-and-down">
          {{paragraph}}
        </h1>
        <h1 class="body-2 mb-4 hidden-md-and-up">
          {{paragraph}}
        </h1>
      </v-row>
      <v-row
        justify="start"
        wrap
      class="pl-6">
        <ul class="hidden-sm-and-down">
          <li class="body-1 mb-4" v-for="(point, i) in points"
              :key="i">
            {{point}}
          </li>
        </ul>
        <ul class="hidden-md-and-up">
          <li class="body-2 mb-4" v-for="(point, i) in points"
              :key="i">
            {{point}}
          </li>
        </ul>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'AbuseParagraph',

    props: {
      title: {
        type: String,
        default: 'title'
      },
      paragraph: {
        type: String,
        default: 'paragraph'
      },
      points: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
