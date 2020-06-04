<template>
  <div class="welcome">
    <Header :strings="strings"/>
    <!--suppress HtmlDeprecatedTag -->
    <Content :strings="strings" :cache="cache.welcome"/>
    <Footer/>
  </div>

</template>

<script>
  import Header from "./components/Header";
  import Content from "./components/Content";
  import Footer from "./components/Footer";

  export default {
    name: 'Welcome',
    props: {
      strings: {
        type: Object,
        required: true
      },

      cache: {
        type: Object,
        required: true
      }
    },
    components: {
      Header,
      Content,
      Footer
    },

    created() {
      if (!this.cache.welcome) {
        this.cache.welcome = {self: {}};
      }
    },

    beforeDestroy() {

    },

    methods: {

    }
  }
</script>

<style scoped>
  .welcome {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    height: 100%;
    overflow: hidden;
  }
</style>