<template>
  <div id="app">
    <!--<Welcome style="display: none;" :strings="stringsChosen.welcome"/>-->
    <Features :strings="stringsChosen.features"/>
  </div>
</template>

<script>
  import Header from './welcome/Header';
  import Footer from './welcome/Footer';
  import Content from './welcome/Content';
  import Pictures from "./welcome/Pictures";

  import Strings from "../strings"
  import Welcome from "./welcome/Welcome";
  import Features from "./features/Features";

  export default {
    name: 'App',

    data() {
      return {
        strings: Strings,
        stringsChosen: null
      }
    },

    components: {
      Features,
      Welcome,
      Header,
      Content,
      Pictures,
      Footer
    },

    created() {
      const DEFAULT_LANG = 'en';

      let language = localStorage.getItem('language');
      this.stringsChosen = this.strings[language ? language : DEFAULT_LANG];
    }
  }
</script>

<style>
  body {
    margin: 0;
    overflow-x: hidden;
  }
</style>

<style scoped>
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>