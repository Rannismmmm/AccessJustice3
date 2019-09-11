<template>
  <v-container fluid>
    <v-card
      flat
      class="mx-auto hidden-sm-and-down"
      width="85vw"
    >
      <v-slide-group
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="ma-4"
            height="400"
            width="600"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card>
      <v-card
        flat
        class="hidden-md-and-up"
        width="max-content"
      >
        <v-slide-group
          center-active
        >
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              class="ma-2"
              height="200"
              width="270"
              @click="toggle"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'AbuseSlides'
  }
</script>

<style scoped>

</style>
