<template>
  <div @wheel="onWheel" id="app">
    <Welcome
      :cache="cache.welcome"
      :strings="strings.welcome"
      ref="0"
      v-if="page === 0"/>

    <Features
      :cache="cache"
      :strings="strings.features"
      ref="1"
      v-if="page === 1"/>
  </div>
</template>

<script>
  import Welcome from './welcome/Welcome';
  import Features from './features/Features';
  import Strings from '../strings';
  import timeout from '../utils/timeout';
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

        cache: {
          welcome: {},
          features: {}
        },

        page: 0,
        lastPage: 1,
        pageLocked: false
      }
    },

    methods: {
      async onWheel(e) {
        if (!this.pageLocked) {
          this.pageLocked = true;
          await timeout(PAGE_TIMEOUT);

          if (e.deltaY > 0 && this.page < this.lastPage) {
            await this.$refs[this.page].startCloseAnimation()
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
    overflow: hidden;
    font-family: 'Montserrat', sans-serif;
  }
</style>