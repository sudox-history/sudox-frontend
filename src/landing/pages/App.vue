<template>
  <div @wheel="onWheel" id="app">
    <Welcome :strings="strings.welcome" :cache="cache" ref="0" v-if="page === 0"/>
    <Features :strings="strings.features" ref="1" v-if="page === 1"/>
  </div>
</template>

<script>
  import Welcome from "./welcome/Welcome";
  import Features from "./features/Features";
  import Strings from "../strings";
  import timeout from "../utils/timeout";
  import gsap from "gsap";

  const DEFAULT_LANG = 'en';
  const PAGE_TIMEOUT = 400;

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
      console.log("App component created");
    },

    mounted() {
      console.log("App component mounted");
    },

    methods: {
      async onWheel(e) {
        if (!this.pageLocked) {
          this.pageLocked = true;
          await timeout(PAGE_TIMEOUT);

          if (e.deltaY > 0 && this.page < this.lastPage) {
            await gsap.to(this.$refs[this.page].$el, {duration: 0.2, opacity: 0});
            this.page += 1;
          } else if (e.deltaY < 0 && this.page > 0) {
            await gsap.to(this.$refs[this.page].$el, {duration: 0.2, opacity: 0});
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