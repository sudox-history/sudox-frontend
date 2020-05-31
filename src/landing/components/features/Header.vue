<template>
  <div class="header" :style="{top: `${styleTop}%`}">
    <div class="tag">{{strings.headerTag}}</div>
    <div class="hint">{{strings.headerHint}}</div>
  </div>
</template>

<script>
  import gsap from "gsap";

  const START_TIMEOUT = 1000;

  export default {
    name: 'Header',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        styleTop: 50
      }
    },
    created() {
      setTimeout(this.startAnimation, START_TIMEOUT);
    },

    methods: {
      startAnimation() {
        gsap.to(this.$ref., {ease: 'circ.out', duration: 0.3, styleTop: 20});
      }
    }
  }
</script>

<style scoped>
  .header {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .tag {
    white-space: pre;
    color: #232323;
    font-size: 45px;
    font-weight: 600;
  }

  .hint {
    margin-top: 20px;
    white-space: pre;
    color: #808080;
    font-size: 25px;
    font-weight: 400;
  }
</style>