<template>
  <div class="text-center">
    <v-menu offset-y>
      <v-btn
        flat
        dark
        slot="activator"
      >
        Menu
      </v-btn>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" @click="redirct(item.path)">
            <v-list-tile-content>
              {{item.title}}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: 'DropdownMenu',

    data () {
      return {
        items: [
          {
            title: 'Quizs',
            path: '/quizs'
          },
          {
            title: 'slide',
            path: '/slide'
          },
          {
            title: 'MainSlides',
            path: '/mainslides'
          }
        ]
      }
    },

    methods: {
      redirct (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>

</style>
