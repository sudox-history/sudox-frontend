<template>
  <div ref="window" :style="{opacity: style.welcome.opacity, transform: style.welcome.transform}"
       class="welcome">

    <Header :strings="strings"/>
    <!--suppress HtmlDeprecatedTag -->
    <Content :cache="cache" :strings="strings"/>
    <Footer/>
  </div>

</template>

<script>
  import Header from './components/Header';
  import Content from './components/Content';
  import Footer from './components/Footer';

  import anime from 'animejs';
  import velocity from 'velocity-animate'
  import gsap from 'gsap';
  import timeout from "../../utils/timeout";

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

    data() {
      return {
        style: {
          welcome: {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      }
    },

    created() {
      if (!this.cache.self) {
        this.cache.self = {};
      }
    },

    mounted() {
      this.startComponent();
    },

    methods: {
      startComponent() {
        if (this.cache.self.animate) {
          this.startOpenAnimation();
        } else {
          this.cache.self.animate = true;
        }
      },

      async startOpenAnimation() {
        this.setupOpenAnimationStyles();

        let welcome = this.style.welcome;
        await Promise.all([
          gsap.to(welcome, {duration: 0.2, opacity: '1'}),
          gsap.to(welcome, {duration: 0.3, ease: 'power4.out', transform: 'scale(1)'}),
        ]);
      },

      setupOpenAnimationStyles() {
        let welcome = this.style.welcome;
        welcome.opacity = '0';
        welcome.transform = 'scale(1.5)';
      },

      async startCloseAnimation() {
        let welcome = this.$refs.window;

        // await anime({
        //   targets: welcome,
        //   scale: 1.5,
        //   duration: 300,
        //   easing: 'linear'
        // }).finished;

        console.log(velocity);
        let items = velocity(welcome, {scale: 1.5}, {duration: 10000, easing: 'ease-out'});
        await items[0].promise;
        await timeout(1000);

        // await Promise.all([
        //   gsap.to(welcome, {duration: 0.2, opacity: '0'}),
        //   gsap.to(welcome, {duration: 0.3, ease: 'power4.out', transform: 'scale(1.5)'}),
        // ]);
      }
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
  }
</style>