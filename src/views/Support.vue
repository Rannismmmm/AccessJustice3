<template>
  <v-container>
    <v-container fluid style="padding-left: 17vw;padding-right: 17vw" class="hidden-sm-and-down">
      <v-layout column>
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 10px"
        >
          <h4 class="display-1 mb-4">OUR SUPPORT SERVICES</h4>
        </v-row>
        <v-row
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <h1 class="body-2 mb-4">These services are available for all trauma
            victims in our community. Whatever your needs are, we are here to
            help you anonymously. Need to find local shelter <v-btn text small color="primary">Find Shelter</v-btn></h1>
        </v-row>
        <!--<v-row-->
        <!--align="end"-->
        <!--justify="space-between"-->
        <!--wrap-->
        <!--style="padding-top: 80px"-->
        <!--&gt;-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--<v-card flat style="width: 270px; height: 400px;">-->
        <!--<v-img :src="require('../assets/candel.jpeg')"-->
        <!--style="height: 400px;">-->
        <!--</v-img>-->
        <!--</v-card>-->
        <!--</v-row>-->
      </v-layout>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
        <v-row
          align="center"
          justify="center"
          wrap
          style="padding-top: 250px; padding-bottom: 10px"
        >
          <h4 class="headline mb-4">OUR SUPPORT SERVICES</h4>
        </v-row>
        <v-row
          align="start"
          justify="center"
          wrap
          style="padding-left: 5vw; padding-right: 5vw"
        >
          <h1 class="body-2 mb-4">These services are available for all trauma
            victims in our community. Whatever your needs are, we are here to
            help you anonymously. Need to find local shelter <v-btn text small color="primary">Find Shelter</v-btn></h1>
        </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'Support'
  }
</script>

<style scoped>

</style>
