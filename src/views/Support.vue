<template>
  <v-container fluid style="padding-left: 17vw;padding-right: 17vw">
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
        style="padding-left: 10vw; padding-right: 10vw"
      >
        <h1 class="body-2 mb-4">We offer a variety of services and community
          support to help protect victims during crisis. These services are
          available for all trauma victims in our community. Whatever your
          needs are, we are here to help you anonymously. Each year, we are
          able to provide additional services thanks to generous donations from
          people who care.</h1>
      </v-row>
      <v-row
        align="end"
        justify="space-between"
        wrap
        style="padding-top: 80px"
      >
        <v-card flat style="width: 270px; height: 400px;">
          <v-img :src="require('../assets/candel.jpeg')"
                 style="height: 400px;">
          </v-img>
        </v-card>
        <v-card flat style="width: 270px; height: 400px;">
          <v-img :src="require('../assets/candel.jpeg')"
                 style="height: 400px;">
          </v-img>
        </v-card>
        <v-card flat style="width: 270px; height: 400px;">
          <v-img :src="require('../assets/candel.jpeg')"
                 style="height: 400px;">
          </v-img>
        </v-card>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Support'
  }
</script>

<style scoped>

</style>
