<template>
  <div class="welcome">
    <Header :strings="strings"/>
    <!--suppress HtmlDeprecatedTag -->
    <Content :strings="strings" :cache="cache.content"/>
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
      console.log("Welcome component created");

      if (!this.cache.initialized) {
        this.cache.initialized = true;
        this.cache.content = {};
      }
    },

    mounted() {
      console.log("Welcome component mounted");
    },
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