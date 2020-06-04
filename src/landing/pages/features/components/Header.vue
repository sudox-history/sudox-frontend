<template>
  <div class="header" ref="header">
    <div class="tag">{{strings.headerTag}}</div>
    <div class="hint">{{strings.headerHint}}</div>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import timeout from '../../../utils/timeout';

  const BETWEEN_OPACITY_AND_MOVEMENT_TIMEOUT = 1000;

  export default {
    name: 'Header',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.startComponent();
    },
    methods: {
      async startComponent() {
        await Promise.all([
          this.animateOpacity(),
          this.animateScale()
        ]);

        await timeout(BETWEEN_OPACITY_AND_MOVEMENT_TIMEOUT);
        this.animatePosition();
      },

      animateOpacity() {
        return gsap.to(this.$refs.header,
          {duration: 0.2, opacity: 1});
      },

      animateScale() {
        return gsap.to(this.$refs.header,
          {duration: 0.3, ease: 'back.in', scale: 1});
      },

      animatePosition() {
        return gsap.to(this.$refs.header,
          {duration: 0.6, ease: 'power4.out', top: '20%'});
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
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