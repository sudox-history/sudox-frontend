<template>
  <div @wheel="onWheel" id="app">
    <Welcome
      :strings="strings.welcome"
      :cache="cache"
      v-if="page === 0"/>

    <Features
      :strings="strings.features"
      :cache="cache"
      v-if="page === 1"/>
  </div>
</template>

<script>
  import Welcome from "./welcome/Welcome";
  import Features from "./features/Features";
  import Strings from "../strings";
  import timeout from "../utils/timeout";
  import gsap from "gsap";

  const DEFAULT_LANG = 'en';
  const PAGE_TIMEOUT = 200;

  export default {
    name: 'App',
    components: {
      Features,
      Welcome,
    },

    data() {
      return {
        locale: localStorage.getItem('language'),
        strings: Strings[this.locale ? this.locale : DEFAULT_LANG],

        cache: {},

        page: 0,
        lastPage: 1,
        pageLocked: false
      }
    },

    created() {
      console.log(this.cache);
    },

    methods: {
      async onWheel(e) {
        if (!this.pageLocked) {
          this.pageLocked = true;
          await timeout(PAGE_TIMEOUT);

          if (e.deltaY > 0 && this.page < this.lastPage) {
            this.page += 1;
          } else if (e.deltaY < 0 && this.page > 0) {
            this.page -= 1;
          }

          this.pageLocked = false;
        }
      }
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
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
  }
</style>