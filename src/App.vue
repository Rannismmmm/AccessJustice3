<template>
  <v-app>
  <!--v-if="verified"-->
    <app-navigation ></app-navigation>
    <!--<v-dialog :value="show" persistent max-width="600px">-->
      <!--<v-card>-->
        <!--<v-card-title>-->
          <!--<span class="headline">Please Enter the PIN</span>-->
        <!--</v-card-title>-->
        <!--<v-card-text>-->
          <!--<v-container>-->
            <!--<v-row>-->
              <!--<v-col cols="12" sm="6" md="4">-->
                <!--<v-text-field label="Password" type="password"-->
                              <!--required :error="wrongPin" :error-messages="errorMassage" clearable-->
                              <!--v-model="pin"></v-text-field>-->
              <!--</v-col>-->
            <!--</v-row>-->
          <!--</v-container>-->
        <!--</v-card-text>-->
        <!--<v-card-actions>-->
          <!--<div class="flex-grow-1"></div>-->
          <!--<v-btn color="blue darken-1" text @click="verify(pin)">Verify-->
          <!--</v-btn>-->
        <!--</v-card-actions>-->
      <!--</v-card>-->
    <!--</v-dialog>-->
  </v-app>
</template>

<script>
  import AppNavigation from './components/AppNavigation'

  export default {
    name: 'App',
    components: {
      AppNavigation
    },
    data () {
      return {
        //
        show: true,
        verified: false,
        pin: '',
        wrongPin: false,
        errorMassage: ''
      }
    },

    methods: {
      verify (input) {
        if (input == 'letmein!') {
          this.verified = true
          this.show = false
        } else {
          this.wrongPin = true
          this.errorMassage = 'wrong password!'
        }
      }
    },

    watch: {
      pin(val) {
        this.wrongPin = false
        this.errorMassage = ''
      }
    }
  }
</script>
