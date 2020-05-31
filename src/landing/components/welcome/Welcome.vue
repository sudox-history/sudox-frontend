<template>
  <div class="welcome">
    <Header :strings="strings"/>
    <!--suppress HtmlDeprecatedTag -->
    <Content :strings="strings"/>
    <Footer/>
  </div>

</template>

<script>
  import Header from "./Header";
  import Content from "./Content";
  import Footer from "./Footer";

  export default {
    name: 'Welcome',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    components: {
      Header,
      Content,
      Footer
    }
  }
</script>

<style scoped>
  .welcome {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    width: 90%;
    height: 100%;
    overflow: hidden;
  }
</style>