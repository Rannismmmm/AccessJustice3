<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        Added Courses
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(card, index) in cards" :key="index" xs12 sm12 md4>
        <v-card>
          <v-img src="http://source.unsplash.com/Q1p7bh3SHj8"
                 height="500px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">{{card.id}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{card.title}}</h3>
              <div style="height: 200px">{{card.description}}
              </div>
            </div>
          </v-card-title>
          <v-card-actions v-if="['mycourses'].includes($router.name)">
            <v-btn outline block color="blue" @click="showRecipes('vegan')">
              Select This Course
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HomePlans',

    data () {
      return {
        cards: []
      }
    },

    methods:{
      addCpurse(){
        axios
        .get('http://118.138.74.5:8090/RevisionHero/webresources/entity.course')
        .then(response => (
          this.cards = response
        ))
        .catch(() => {
          this.cards = []
        })
      }
    },

    mounted () {
      axios
        .get('http://118.138.74.5:8090/RevisionHero/webresources/entity.course')
        .then(response => (
          this.cards = response.data
        ))
        .catch(() => {
          this.cards = []
        })
    }
  }
</script>

<style scoped>

</style>