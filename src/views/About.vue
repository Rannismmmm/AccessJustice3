<template>
  <v-container fluid>
    <v-parallax class="hidden-sm-and-down" height="900"
                :src="require('../assets/darkBackground.jpg')">
      <v-container fluid>
        <v-flex row align-center justify-center>
          <h1>This is our about page</h1>
        </v-flex>
      </v-container>
    </v-parallax>
    <v-parallax class="hidden-md-and-up" height="600"
                :src="require('../assets/darkBackground.jpg')">
      <v-container fluid>
        <v-flex row align-center justify-center>
          <h1>This is our about page</h1>
        </v-flex>
      </v-container>
    </v-parallax>
  </v-container>
</template>
