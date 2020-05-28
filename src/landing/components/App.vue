<template>
  <div class="app">
    <Header :strings="strings[language].welcome"/>
    <Content :strings="strings[language].welcome"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './welcome/Header';
  import Footer from './welcome/Footer';
  import Content from './welcome/Content';
  import Pictures from "./welcome/Pictures";

  import Strings from "../strings"

  export default {
    name: 'App',

    data() {
      return {
        language: '',
        strings: Strings
      }
    },

    components: {
      Header,
      Content,
      Pictures,
      Footer
    },

    created() {
      const DEFAULT_LANG = 'en';

      let language = localStorage.getItem('language');
      this.language = language ? language : DEFAULT_LANG;
    }
  }
</script>

<style>
  body {
    margin: 0;
    overflow-x: hidden;
  }

  .app {
    display: flex;
    position: absolute;
    flex-direction: column;

    justify-content: space-between;
    padding: 0 5% 0 5%;

    width: 90%;
    height: 100%;
    overflow: hidden;

    font-family: 'Montserrat', sans-serif;
  }
</style>
