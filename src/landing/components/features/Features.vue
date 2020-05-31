<template>
  <div class="features">
    <Header :strings="strings"/>
  </div>

</template>

<script>
  import Header from "../features/Header"

  export default {
    name: 'Features',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    components: {
      Header
    },
  }
</script>

<style scoped>

</style>