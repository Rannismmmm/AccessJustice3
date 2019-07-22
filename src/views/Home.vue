<template>
  <span>
    <home-plans></home-plans>
  </span>
</template>

<script>
  import HomeHero from './HomeHero'
  import HomeDetails from './HomeDetails'
  import HomePlans from './HomePlans'

  export default {
    components: {
      HomePlans,
      HomeDetails,
      HomeHero
    }
  }
</script>
