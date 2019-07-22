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
          <v-card-actions v-if="['mycourses'].includes($route.name)">
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
  export default {
    name: 'mycourses',

    data () {
      return {
        cards: [
          {
            id: 'FIT5046',
            title: 'Mobile and Distributed Computing Systems',
            description: 'This unit provides a high level coverage of mobile and distributed computing. ' +
              'It will focus on the underlying concepts and standards of mobile computing and current technologies for mobile and distributed systems. ' +
              'It will discuss cellular networks, wireless networks and their standards and technologies, context-aware computing, location-awareness, wireless sensor networks, internet mobility,' +
              ' web services and service-oriented technology, cloud computing and current research trends and case studies.'
          },
          {
            id: 'FIT5047',
            title: 'Intelligent System',
            description: 'This unit introduces the main problems and approaches to designing intelligent software systems including automated search methods, ' +
              'knowledge representation and reasoning, planning, reasoning under uncertainty, machine learning paradigms, and evolutionary algorithms.'
          },
          {
            id: 'FIT5136',
            title: 'Software Engineering',
            description: 'This unit provides an introduction to the discipline of software engineering at the postgraduate level. ' +
              'The emphasis is upon a broad coverage of various aspects of software engineering. ' +
              'We assume the students will at this stage have adequate programming skills and are able to put theories to practice. ' +
              'The notion of a software system as a model or approximation of a desired system is introduced, ' +
              'and used as a way of describing such things as the software life cycle and its various models, programming by contract, design and testing issues, ' +
              'maintenance, reuse, complexity, divide and conquer strategies, metrics and measurement, project management and software legacy.'
          },
          {
            id: 'FIT5148',
            title: 'Big Data Management and Processing',
            description: 'Data engineering is about developing the software (and hardware) infrastructure to support data science. This unit introduces software tools and techniques for data engineering, but not hardware'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>