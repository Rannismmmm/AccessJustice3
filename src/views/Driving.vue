<template>
  <v-parallax height="2000"
              src="https://besthqwallpapers.com/img/original/71481/4k-dark-material-design-gray-and-black-android-lollipop.jpg">
    <v-container>
      <v-row>
        <h1>Drink-driving penalties</h1>
        <br/>
        <br/>
      </v-row>
      <v-row>
        <h2>Tougher penalties are here</h2>
        <br/>
      </v-row>
      <v-row>
        <h3>If you get caught drink driving you’ll:</h3>
        <ul id="penalties">
          <li v-for="v in penalties">
            {{v}}
          </li>
        </ul>
        <br/>
      </v-row>
      <v-row>
        <h2>Victorian licence holders caught drink-driving interstate</h2>
        <br/>
        From 31 January 2018, if you hold a Victorian licence and get caught
        drink driving interstate, the same rules apply as if you’d be caught
        here.
        <br/>
        This means that your Victorian licence will get cancelled and you'll
        have conditions like driving with zero blood alcohol added to your
        licence. You'll also need to have an alcohol interlock installed to any
        vehicle you drive.
        <br/>
        For more information, contact Driver Relicensing Services on 1300 723
        790 or
        <br/>
        <router-link to="alcoholinterlocks@roads.vic.gov.au">
          alcoholinterlocks@roads.vic.gov.au
        </router-link>
        <br/>
        <br/>
        <v-row>
          <h2>Penalties for drink-drivers</h2>
          <br/>
          Those caught driving with a Blood or Breath Alcohol Concentration
          (BAC) over the legal limit face heavy fines, loss of licence and, for
          the most serious offenders, possible imprisonment.
          <br/>
          The penalties for drink-driving differ depending on:
          <ul id="dependings">
            <li v-for="v in dependings">
              {{v}}
            </li>
          </ul>
        </v-row>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
  export default {
    name: 'Driving',

    data () {
      return {
        penalties: [
          'lose your licence',
          'need to complete a compulsory Behaviour Change Program and',
          'have to get an alcohol interlock installed.'
        ],
        dependings: [
          'the type of offence you committed',
          'when you committed the offence',
          'your age at the time of the offence',
          'the licence or permit you held',
          'if it wasn\'t your first offence.'
        ]
      }
    }
  }
</script>

<style scoped>

</style>