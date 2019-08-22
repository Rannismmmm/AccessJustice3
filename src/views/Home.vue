<template >
  <v-container :style="style" grid-list-lg>
    <v-layout row>
      <!--<v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">-->
      <!--Added Courses-->
      <!--</v-flex>-->
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto"
                :flat="false"
                :outlined="false"
                :raised="false"
                :width="344"
                :height="310">
          <v-img height="200px" :src="card.path">
            <v-container fill-height fluid>
              <v-layout fill-height>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title style="margin">
            <h3>{{card.id}}</h3>
          </v-card-title>
            <v-card-actions>
              <v-btn outline block color="grey" @click="go(card.component)">
                Check this issue
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {


    name: 'Home',

    data () {
      return {
        cards: [
          {
            id: 'Assaults',
            title: 'Mobile and Distributed Computing Systems',
            path: 'https://sachtimes.com/en/wp-content/uploads/2017/11/crime.jpg',

            description: 'Assaults in public area'
          },
          {
            id: 'Driving',
            title: 'Intelligent System',
            component: '/driving',
            path: 'https://bloximages.newyork1.vip.townnews.com/wenatcheeworld.com/content/tncms/assets/v3/editorial/3/84/3841edf6-a985-11e9-817a-37a402b87ce3/5d30b28d1e0c3.image.jpg?resize=1200%2C819',
            description: 'Violation of the driving laws'
          },
          {
            id: 'Work Rights',
            title: 'Software Engineering',
            path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKQ4MYq19NimBPmyd4JTiAnF7HUxIa0K8Ym1ECrzhweBzIzF4uA',
            description: 'Getting unfairly treated in your working place'
          },
          {
            id: 'Intellectual Property',
            title: 'Big Data Management and Processing',
            path: 'http://www.thekokostory.com/wp-content/uploads/2017/05/Exampressure.jpg',
            description: 'Being wrongly treated in your study'
          },
          {
            id: 'Discrimination',
            title: 'Big Data Management and Processing',
            path: 'https://i-sight.com/wp-content/uploads/2017/12/iStock-641735302-640x300.jpg?x34719',
            description: 'Sexual, racial or other discriminations'
          },
          {
            id: 'House Rental',
            title: 'Big Data Management and Processing',
            path: 'https://indaily.com.au/wp-content/uploads/2019/04/Screen-Shot-2019-04-12-at-8.04.06-am-850x455.png',
            description: 'Being blackmailed or cheat by your landlord'
          }
        ],

        // style: 'background-color: #3b3b3b; margin: 0 auto;',
      }
    },

    methods: {
      go(path){
        this.$router.push(path)
      }
    }

    // async mounted(){
    //   try {
    //     let resp = await axios.get('http://118.138.121.50:8090/RevisionHero2/webresources/entity.course')
    //     this.cards = resp.data
    //   } catch (e) {
    //     this.cards = []
    //   }
    // }
  }
</script>

<style scoped>

</style>